import { test, expect } from "@playwright/test";

test("blog post content, TL;DR and Article schema are present without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/blog/end-of-lease-cleaning-cost/");
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.getByText("TL;DR")).toBeVisible();
  await expect(page.getByText(/Last updated/).first()).toBeVisible();
  await expect(page.locator("article p").first()).toContainText("Shellharbour Cleaning");
  const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join(" ");
  expect(ld).toContain('"Article"');
  expect(ld).toContain('"dateModified"');
  expect(ld).toContain('"FAQPage"');
  await context.close();
});

test("blog index links every post and facts page lists the ABN", async ({ page }) => {
  await page.goto("/blog/");
  await expect(page.locator('main a[href^="/blog/"]')).toHaveCount(4);
  await page.goto("/facts/");
  await expect(page.locator("main dl").getByText("81 480 225 391")).toBeVisible();
});

test("llms.txt is served as plain text", async ({ request }) => {
  const res = await request.get("/llms.txt");
  expect(res.status()).toBe(200);
  expect(res.headers()["content-type"]).toContain("text/plain");
  expect(await res.text()).toContain("# Shellharbour Cleaning");
});
