import { test, expect } from "@playwright/test";

test("price estimator updates with bedrooms, bathrooms and service", async ({ page }) => {
  await page.goto("/book-now/");
  const price = page.getByTestId("price");
  await expect(price).toHaveText("$151.25"); // 2 bed, 1 bath regular
  await page.getByRole("button", { name: "More bedrooms" }).click();
  await page.getByRole("button", { name: "More bathrooms" }).click();
  await expect(price).toHaveText("$211.75"); // 3 bed, 2 bath regular (published example)
  await page.getByText("Deep clean", { exact: true }).click();
  await expect(price).toHaveText("$317.63");
  await page.getByText("End of lease clean", { exact: true }).click();
  await expect(price).toHaveText("$190–$410");
});
