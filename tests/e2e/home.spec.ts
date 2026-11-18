import { test, expect } from "@playwright/test";

test("homepage structure", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toHaveCount(1);
  for (const hub of ["shellharbour", "kiama", "dapto", "wollongong"]) {
    await expect(page.locator(`main a[href="/locations/${hub}/"]`).first()).toBeVisible();
  }
  await expect(page.getByRole("heading", { name: /recent reviews/i })).toHaveCount(0);
  await expect(page.locator('[data-slot="team"]')).toHaveCount(0);
  const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join(" ");
  expect(ld).toContain('"FAQPage"');
  expect(ld).toContain('"HouseCleaning"');
  expect(ld).toContain('"Organization"');
});

test("FAQ answers are in the HTML without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.locator("details p").first()).toContainText(/\$60\.50/);
  await context.close();
});
