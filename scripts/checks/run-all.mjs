// Runs every build-output check against .next/server/app/**/*.html.
// Usage: npm run build && npm run check   (tsx resolves the TS config and @/ aliases)
import fs from "node:fs";
import path from "node:path";
import { SITE, BUSINESS_RATING, isResolved } from "../../config/site.ts";
import { PAGES } from "../../lib/seo/registry.ts";
import * as content from "./check-content.mjs";
import * as links from "./check-links.mjs";
import * as schema from "./check-schema.mjs";
import * as images from "./check-images.mjs";
import * as duplicates from "./check-duplicates.mjs";

const APP_DIR = path.resolve(".next/server/app");
const SKIP = /(^|\/)(_not-found|_global-error)\.html$/;

function collect(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...collect(full));
    else if (entry.name.endsWith(".html")) out.push(full);
  }
  return out;
}

function routeFromFile(file) {
  const rel = path.relative(APP_DIR, file).split(path.sep).join("/");
  const clean = rel.replace(/\([^)]+\)\//g, "").replace(/\.html$/, "");
  return clean === "index" ? "/" : `/${clean.replace(/\/index$/, "")}/`;
}

async function loadImages() {
  try {
    const m = await import("../../content/images/manifest.ts");
    return m.IMAGES ?? [];
  } catch {
    return [];
  }
}

if (!fs.existsSync(APP_DIR)) {
  console.error("check: .next/server/app not found — run `npm run build` first.");
  process.exit(1);
}

const files = collect(APP_DIR)
  .filter((f) => !SKIP.test(f.split(path.sep).join("/")))
  .map((f) => ({ path: routeFromFile(f), html: fs.readFileSync(f, "utf8") }));

const ctx = {
  phoneE164: isResolved(SITE.phone) ? SITE.phone.e164 : null,
  ratingNull: BUSINESS_RATING === null,
  production: process.env.DEPLOY_ENV === "production",
  pages: PAGES,
  images: await loadImages(),
};

const checks = { content, links, schema, images, duplicates };
let failed = 0;
for (const [name, mod] of Object.entries(checks)) {
  const fails = mod.run(files, ctx);
  failed += fails.length;
  console.log(`${fails.length ? "FAIL" : "ok  "} check-${name} (${files.length} pages)`);
  for (const f of fails) console.log(`     ${f}`);
}

const pending = links.pending(files);
if (pending.length) {
  const level = ctx.production ? "FAIL" : "warn";
  console.log(`${level} links to pages not built yet (later epics): ${pending.join(", ")}`);
  if (ctx.production) failed += pending.length;
}

process.exit(failed ? 1 : 0);
