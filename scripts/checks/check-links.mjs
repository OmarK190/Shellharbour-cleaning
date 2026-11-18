import { dom, routeOf } from "./lib.mjs";

export function run(files, ctx) {
  const fails = [];
  const built = new Set(files.map((f) => f.path));
  const registered = new Set(ctx.pages.map((p) => p.path));
  const inbound = new Map();

  for (const { path, html } of files) {
    for (const a of dom(html).querySelectorAll("a[href]")) {
      const route = routeOf(a.getAttribute("href"));
      if (!route) continue;
      if (route !== path) inbound.set(route, (inbound.get(route) ?? 0) + 1);
      if (!built.has(route) && !registered.has(route) && ctx.production) {
        fails.push(`${path}: broken internal link ${route}`);
      }
    }
  }

  for (const p of ctx.pages) {
    if (!p.indexable || p.path === "/") continue;
    if (built.has(p.path) && !inbound.get(p.path)) fails.push(`orphan page ${p.path}: no internal links point to it`);
  }
  return fails;
}

/** Links to routes that are neither built nor registered (reported as warnings outside production). */
export function pending(files) {
  const built = new Set(files.map((f) => f.path));
  const out = new Set();
  for (const { html } of files) {
    for (const a of dom(html).querySelectorAll("a[href]")) {
      const route = routeOf(a.getAttribute("href"));
      if (route && !built.has(route)) out.add(route);
    }
  }
  return [...out].sort();
}
