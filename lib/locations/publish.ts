// Suburb page publish gate (PRD FR18, Epic 10). A suburb earns its own page only with
// three or more unique, verifiable facts; otherwise it is listed on its hub page.

export type SuburbFacts = {
  reviews: number; // real reviews naming the suburb, with source
  completedJobs: number; // completed bookings in the suburb
  namedCleaner: boolean; // a consenting, named cleaner covers it
  osmFeatures: number; // OpenStreetMap features with element IDs
  citedLocalData: boolean; // a cited housing/rental data point (e.g. ABS)
};

export function factCount(f: SuburbFacts): number {
  return [f.reviews >= 2, f.completedJobs >= 3, f.namedCleaner, f.osmFeatures >= 2, f.citedLocalData].filter(Boolean).length;
}

export function isPublishable(f: SuburbFacts): boolean {
  return factCount(f) >= 3;
}
