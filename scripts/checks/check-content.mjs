import { dom, bodyText, BANNED_PHRASES, FORBIDDEN_STRINGS, EMOJI } from "./lib.mjs";

export function run(files, ctx) {
  const fails = [];
  for (const { path, html } of files) {
    const root = dom(html);
    const text = bodyText(root);
    const lower = text.toLowerCase();

    if (EMOJI.test(text)) fails.push(`${path}: emoji in visible text`);
    for (const phrase of BANNED_PHRASES) {
      if (new RegExp(`\\b${phrase.replace(/'/g, "['’]")}\\b`, "i").test(lower)) fails.push(`${path}: banned phrase "${phrase}"`);
    }
    for (const s of FORBIDDEN_STRINGS) if (html.includes(s)) fails.push(`${path}: forbidden string "${s}"`);

    const h1s = root.querySelectorAll("h1").length;
    if (h1s !== 1) fails.push(`${path}: expected exactly one h1, found ${h1s}`);

    const title = root.querySelector("title")?.text.trim() ?? "";
    if (!title) fails.push(`${path}: missing title`);
    if (title.length > 60) fails.push(`${path}: title ${title.length} chars (max 60)`);
    const desc = root.querySelector('meta[name="description"]')?.getAttribute("content") ?? "";
    if (!desc) fails.push(`${path}: missing meta description`);
    if (desc.length > 155) fails.push(`${path}: meta description ${desc.length} chars (max 155)`);

    for (const a of root.querySelectorAll('a[href^="tel:"]')) {
      const num = a.getAttribute("href").slice(4);
      if (!ctx.phoneE164) fails.push(`${path}: tel link ${num} rendered while phone is unset (LB4)`);
      else if (num !== ctx.phoneE164) fails.push(`${path}: tel link ${num} differs from config ${ctx.phoneE164}`);
    }
  }
  return fails;
}
