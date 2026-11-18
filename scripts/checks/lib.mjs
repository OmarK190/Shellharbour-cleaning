// Shared helpers for build-output checks. Each check exports run(files, ctx) -> string[].
// files: { path: "/locations/kiama/", html: string }[]
// ctx:   { phoneE164: string|null, ratingNull: boolean, production: boolean,
//          pages: { path, pageType, indexable }[], images: { id, src, sourceType }[] }
import { parse } from "node-html-parser";

export const dom = (html) => parse(html, { comment: false, blockTextElements: { script: true, style: true } });

export const BANNED_PHRASES = [
  "unlock",
  "seamless",
  "elevate",
  "peace of mind",
  "in today's busy world",
  "we've got you covered",
  "look no further",
  "next level",
  "many customers",
  "many people prefer",
  "studies show",
];

export const FORBIDDEN_STRINGS = ["Munno Para", "Cleaner at Door", "cleaneratdoor"];

export const EMOJI = /[\u{1F300}-\u{1FAFF}]|[\u{2600}-\u{27BF}]\u{FE0F}|[\u{2728}\u{2705}\u{274C}\u{2B50}]/u;

/** Visible text of the <body>, excluding scripts and styles. */
export function bodyText(root) {
  const body = root.querySelector("body") ?? root;
  // structuredText separates block elements, so "<h1>A</h1><p>Unlock" reads "A Unlock".
  return body.structuredText.replace(/\s+/g, " ").trim();
}

/** Normalise an internal href to a route path with trailing slash, or null if not a page link. */
export function routeOf(href) {
  if (!href || /^(https?:|mailto:|tel:|sms:|#|javascript:)/i.test(href)) return null;
  const path = href.split(/[?#]/)[0];
  if (!path.startsWith("/")) return null;
  if (path.startsWith("/_next/") || /\.[a-z0-9]+$/i.test(path)) return null;
  return path.endsWith("/") ? path : `${path}/`;
}

export function words(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}
