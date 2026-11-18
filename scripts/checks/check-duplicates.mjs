import { dom, words } from "./lib.mjs";

const MIN_WORDS = 25;

export function run(files, ctx) {
  const fails = [];
  const typeOf = new Map(ctx.pages.map((p) => [p.path, p.pageType]));
  const seen = new Map(); // `${pageType}::${text}` -> path

  for (const { path, html } of files) {
    const type = typeOf.get(path);
    if (!type || type === "home") continue;
    for (const p of dom(html).querySelectorAll("p")) {
      const text = p.text.replace(/\s+/g, " ").trim();
      if (words(text) < MIN_WORDS) continue;
      const key = `${type}::${text}`;
      if (seen.has(key) && seen.get(key) !== path) {
        fails.push(`duplicate ${MIN_WORDS}+ word paragraph on ${seen.get(key)} and ${path}: "${text.slice(0, 60)}…"`);
      } else seen.set(key, path);
    }
  }
  return fails;
}
