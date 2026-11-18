import { HOME } from "@/content/home";
import { PRICE_FROM, formatAud } from "@/lib/pricing/rates";

const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

const allText = () =>
  [
    HOME.h1,
    HOME.intro,
    ...HOME.trust,
    ...HOME.steps.flatMap((s) => [s.title, s.text]),
    ...HOME.rooms.flatMap((r) => [r.name, ...r.tasks]),
    HOME.notIncluded,
    ...HOME.services.flatMap((s) => [s.name, s.line]),
    ...HOME.areas.flatMap((a) => [a.name, a.text]),
    HOME.guarantee,
    ...HOME.faqs.flatMap((f) => [f.q, f.a]),
    HOME.finalCta,
  ].join(" ");

test("H1 names house cleaning and the four towns", () => {
  expect(HOME.h1).toMatch(/house cleaning/i);
  for (const t of ["Shellharbour", "Kiama", "Dapto", "Wollongong"]) expect(HOME.h1).toContain(t);
});

test("intro answers first: towns, price-from and guarantee in the first 100 words", () => {
  const first100 = HOME.intro.split(/\s+/).slice(0, 100).join(" ");
  for (const t of ["Shellharbour", "Kiama", "Dapto", "Wollongong", "$121"]) expect(first100).toContain(t);
  expect(first100).toMatch(/re-clean/i);
});

test("total copy length is 900–1,300 words with 6–8 FAQs", () => {
  const n = words(allText());
  expect(n).toBeGreaterThanOrEqual(900);
  expect(n).toBeLessThanOrEqual(1300);
  expect(HOME.faqs.length).toBeGreaterThanOrEqual(6);
  expect(HOME.faqs.length).toBeLessThanOrEqual(8);
});

test("service tiles link to service pages and use the price module", () => {
  const slugs = HOME.services.map((s) => s.slug);
  expect(slugs).toEqual([
    "end-of-lease-cleaning",
    "regular-cleaning",
    "deep-cleaning",
    "carpet-steam-cleaning",
    "ndis-cleaning-services",
    "airbnb-cleaning",
    "office-cleaning",
  ]);
  for (const s of HOME.services) {
    expect(s.href).toBe(`/services/${s.slug}/`);
    expect(s.fromCents).toBe(PRICE_FROM[s.slug] ?? null);
  }
});

test("prices quoted in copy match the price module", () => {
  const text = allText();
  expect(text).toContain(formatAud(PRICE_FROM["regular-cleaning"]!));
  expect(text).toContain("$60.50");
  expect(text).toContain("$211.75");
  expect(text).toContain("$190");
  expect(text).toContain("$410");
});

test("guarantee states the published terms", () => {
  for (const t of [/24 hours/, /photos/, /48 hours/, /re-clean/i, /15 days/]) expect(HOME.guarantee).toMatch(t);
});

test("trust strip has at most 4 items", () => {
  expect(HOME.trust.length).toBeLessThanOrEqual(4);
});

test("areas link all four hubs", () => {
  expect(HOME.areas.map((a) => a.href)).toEqual([
    "/locations/shellharbour/",
    "/locations/kiama/",
    "/locations/dapto/",
    "/locations/wollongong/",
  ]);
});

test("no reviews or cleaners at launch, and no unverified safety claims while LB8 is open", () => {
  expect(HOME.reviews).toEqual([]);
  expect(HOME.cleaners).toEqual([]);
  expect(allText()).not.toMatch(/police[- ]checked|insured/i);
});
