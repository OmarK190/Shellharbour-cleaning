import { isPublishable, factCount, type SuburbFacts } from "@/lib/locations/publish";

const base: SuburbFacts = { reviews: 0, completedJobs: 0, namedCleaner: false, osmFeatures: 0, citedLocalData: false };

test("no facts: not publishable", () => {
  expect(isPublishable(base)).toBe(false);
  expect(factCount(base)).toBe(0);
});

test("each fact type counts once at its threshold", () => {
  expect(factCount({ ...base, reviews: 1 })).toBe(0);
  expect(factCount({ ...base, reviews: 2 })).toBe(1);
  expect(factCount({ ...base, completedJobs: 2 })).toBe(0);
  expect(factCount({ ...base, completedJobs: 3 })).toBe(1);
  expect(factCount({ ...base, osmFeatures: 1 })).toBe(0);
  expect(factCount({ ...base, osmFeatures: 2 })).toBe(1);
});

test("three unique facts make a suburb publishable", () => {
  expect(isPublishable({ ...base, reviews: 2, completedJobs: 3 })).toBe(false);
  expect(isPublishable({ ...base, reviews: 2, completedJobs: 3, namedCleaner: true })).toBe(true);
  expect(isPublishable({ ...base, osmFeatures: 5, citedLocalData: true, namedCleaner: true })).toBe(true);
});
