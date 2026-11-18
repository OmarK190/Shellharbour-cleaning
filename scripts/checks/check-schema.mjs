import { dom } from "./lib.mjs";

const types = (node) => [].concat(node?.["@type"] ?? []);

function walk(node, visit) {
  if (Array.isArray(node)) return node.forEach((n) => walk(n, visit));
  if (node && typeof node === "object") {
    visit(node);
    if (node["@graph"]) walk(node["@graph"], visit);
  }
}

export function run(files, ctx) {
  const fails = [];
  for (const { path, html } of files) {
    for (const s of dom(html).querySelectorAll('script[type="application/ld+json"]')) {
      let data;
      try {
        data = JSON.parse(s.text);
      } catch (e) {
        fails.push(`${path}: JSON-LD failed to parse (${e.message})`);
        continue;
      }
      walk(data, (node) => {
        const t = types(node);
        if (t.includes("LocalBusiness")) {
          for (const k of ["name", "@id", "areaServed"]) if (!(k in node)) fails.push(`${path}: LocalBusiness missing ${k}`);
        }
        if (t.includes("FAQPage") && (node.mainEntity?.length ?? 0) < 4) {
          fails.push(`${path}: FAQPage has ${node.mainEntity?.length ?? 0} questions (min 4)`);
        }
        if ("aggregateRating" in node && ctx.ratingNull) fails.push(`${path}: aggregateRating emitted while BUSINESS_RATING is null`);
      });
    }
  }
  return fails;
}
