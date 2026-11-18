import { test, expect } from "@playwright/test";

// Crawls every internal page link reachable from the homepage and requires each to return 200.
test("every internal link resolves (no 404s)", async ({ request }) => {
  const seen = new Set<string>();
  const queue = ["/"];
  const broken: string[] = [];

  while (queue.length) {
    const path = queue.shift()!;
    if (seen.has(path)) continue;
    seen.add(path);
    const res = await request.get(path);
    if (res.status() !== 200) {
      broken.push(`${path} -> ${res.status()}`);
      continue;
    }
    if (!(res.headers()["content-type"] ?? "").includes("text/html")) continue;
    const html = await res.text();
    for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
      const href = m[1];
      if (href.startsWith("/_next/") || /\.[a-z0-9]+$/i.test(href)) continue;
      const route = href.endsWith("/") ? href : `${href}/`;
      if (!seen.has(route)) queue.push(route);
    }
  }

  expect(broken).toEqual([]);
  expect(seen.size).toBeGreaterThan(20);
});
