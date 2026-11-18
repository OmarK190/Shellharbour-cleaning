import { SITE, BUSINESS_RATING, BUSINESS_PROFILES, launchBlockers, isResolved, siteUrl } from "@/config/site";

test("brand facts", () => {
  expect(SITE.name).toBe("Shellharbour Cleaning");
  expect(SITE.abn).toBe("81 480 225 391");
  expect(SITE.hubs.map((h) => h.slug)).toEqual(["shellharbour", "kiama", "dapto", "wollongong"]);
  expect(SITE.hubs.map((h) => h.path)).toEqual([
    "/locations/shellharbour/",
    "/locations/kiama/",
    "/locations/dapto/",
    "/locations/wollongong/",
  ]);
  expect(SITE.hours.display).toBe("9:00 AM–9:00 PM, 7 days");
  expect(SITE.logo).toBe("/brand/logo.png");
  expect(SITE.description.length).toBeGreaterThan(40);
});

test("rating, profiles, founding date and founder start empty", () => {
  expect(BUSINESS_RATING).toBeNull();
  expect(BUSINESS_PROFILES).toEqual([]);
  expect(SITE.foundingDate).toBeNull();
  expect(SITE.founder).toBeNull();
});

test("phone and address are open launch blockers", () => {
  expect(isResolved(SITE.phone)).toBe(false);
  expect(isResolved(SITE.address)).toBe(false);
  expect(launchBlockers().map((b) => b.id)).toEqual(expect.arrayContaining(["LB1", "LB2", "LB3", "LB4", "LB5", "LB6", "LB7", "LB8"]));
});

test("siteUrl falls back to a non-routable staging host while domain is unresolved", () => {
  expect(siteUrl()).toBe("https://staging.shellharbourcleaning.invalid");
});

test("no CleanerAtDoor identifiers", () => {
  const s = JSON.stringify(SITE);
  for (const bad of ["Munno Para", "Cleaner at Door", "cleaneratdoor", "1300 381 988"]) expect(s).not.toContain(bad);
});
