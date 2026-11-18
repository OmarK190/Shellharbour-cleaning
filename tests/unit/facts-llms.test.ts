import { factsList, FACTS_UPDATED } from "@/content/facts";
import { buildLlmsTxt } from "@/lib/seo/llms";
import { PAGES } from "@/lib/seo/registry";

test("facts list states only resolved facts and never placeholders", () => {
  const facts = factsList();
  const labels = facts.map((f) => f.label);
  expect(labels).toEqual(expect.arrayContaining(["Business name", "ABN", "What we do", "Service areas", "Hours", "Prices", "Guarantee", "Payment"]));
  expect(labels).not.toContain("Phone"); // LB4 open
  expect(labels).not.toContain("Address"); // LB3 open
  expect(labels).not.toContain("Founded"); // foundingDate null
  const text = JSON.stringify(facts);
  expect(text).not.toMatch(/LB\d|launch-blocker|undefined|null/);
  expect(text).toContain("81 480 225 391");
  expect(text).toContain("$121");
});

test("facts page is registered with a content date", () => {
  const entry = PAGES.find((p) => p.path === "/facts/");
  expect(entry?.pageType).toBe("facts");
  expect(entry?.updated).toBe(FACTS_UPDATED);
});

test("llms.txt names the brand, links key pages and lists blog posts", () => {
  const txt = buildLlmsTxt();
  expect(txt.startsWith("# Shellharbour Cleaning\n")).toBe(true);
  expect(txt).toMatch(/^> .+Shellharbour, Kiama, Dapto and Wollongong/m);
  for (const path of ["/facts/", "/blog/end-of-lease-cleaning-cost/", "/blog/does-ndis-cover-cleaning/"]) expect(txt).toContain(path);
  expect(txt).toContain("$60.50");
  expect(txt).not.toMatch(/undefined|LB\d/);
});
