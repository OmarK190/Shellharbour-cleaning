import { dom } from "./lib.mjs";

const REAL_ONLY_SLOTS = new Set(["team", "before-after", "gallery"]);

/** Resolve a rendered <img src> (including next/image optimiser URLs) to the original path. */
export function sourcePath(src) {
  if (!src) return "";
  const decoded = src.replace(/&amp;/g, "&");
  if (decoded.startsWith("/_next/image")) {
    const url = new URL(decoded, "http://x").searchParams.get("url");
    return url ? decodeURIComponent(url) : decoded;
  }
  return decoded.split("?")[0];
}

export function run(files, ctx) {
  const fails = [];
  const bySrc = new Map(ctx.images.map((i) => [i.src, i]));
  const usedOn = new Map();

  for (const { path, html } of files) {
    for (const img of dom(html).querySelectorAll("img")) {
      const src = sourcePath(img.getAttribute("src"));
      const alt = (img.getAttribute("alt") ?? "").trim();
      const decorative = img.getAttribute("aria-hidden") === "true";
      if (!alt && !decorative) fails.push(`${path}: image ${src} has no alt text`);

      const entry = bySrc.get(src);
      if (!entry) {
        fails.push(`${path}: image ${src} not in manifest`);
        continue;
      }
      if (!usedOn.has(src)) usedOn.set(src, new Set());
      usedOn.get(src).add(path);

      let el = img.parentNode;
      while (el && el.getAttribute) {
        const slot = el.getAttribute("data-slot");
        if (slot && REAL_ONLY_SLOTS.has(slot) && !entry.sourceType.startsWith("real-")) {
          fails.push(`${path}: ${entry.sourceType} image ${src} in "${slot}" slot (real photos only)`);
        }
        el = el.parentNode;
      }
    }
  }
  for (const [src, pages] of usedOn) {
    if (pages.size > 1) fails.push(`image ${src} used on more than one page: ${[...pages].join(", ")}`);
  }
  return fails;
}
