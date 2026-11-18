import { test, expect } from "@playwright/test";

// Runs against non-production builds only (local, preview, staging).
test("non-production responses are noindex and robots blocks everything", async ({ request }) => {
  const res = await request.get("/");
  expect(res.headers()["x-robots-tag"]).toContain("noindex");
  const robots = await (await request.get("/robots.txt")).text();
  expect(robots).toMatch(/Disallow: \/\s*$/m);
});

test("security headers are present", async ({ request }) => {
  const h = (await request.get("/")).headers();
  expect(h["strict-transport-security"]).toContain("max-age=");
  expect(h["x-content-type-options"]).toBe("nosniff");
  expect(h["referrer-policy"]).toBe("strict-origin-when-cross-origin");
});

test("health endpoint responds", async ({ request }) => {
  const res = await request.get("/api/health/");
  expect(res.status()).toBe(200);
  expect((await res.json()).status).toBe("ok");
});
