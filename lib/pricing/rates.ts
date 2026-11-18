// Published rates reused from live cleaneratdoor.com (PRD FR20, LB6 pending owner confirmation).
// Epic 2 extends this module into the full quote() engine; every price on the site comes from here.

export const RATES = {
  regularHourlyCents: 6050,
  regularMinimumCents: 12100,
  minimumHours: 2,
} as const;

/** "$121" for whole dollars, "$211.75" otherwise. GST-inclusive amounts. */
export function formatAud(cents: number): string {
  const dollars = cents / 100;
  return Number.isInteger(dollars) ? `$${dollars}` : `$${dollars.toFixed(2)}`;
}
