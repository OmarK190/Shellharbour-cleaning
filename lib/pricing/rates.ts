// Published rates reused from live cleaneratdoor.com (PRD FR20, LB6 pending owner confirmation).
// Epic 2 extends this module into the full quote() engine; every price on the site comes from here.

export const RATES = {
  regularHourlyCents: 6050,
  regularMinimumCents: 12100,
  minimumHours: 2,
} as const;

/** Published "from" prices by service slug, in cents. Office cleaning is quoted per site (absent). */
export const PRICE_FROM: Record<string, number | undefined> = {
  "regular-cleaning": 12100,
  "end-of-lease-cleaning": 19000,
  "deep-cleaning": 18150,
  "carpet-steam-cleaning": 5000, // per room
  "ndis-cleaning-services": 5500, // per hour, GST-free, self-managed plans
  "airbnb-cleaning": 12100,
};

/** Top of the published end of lease range ($190–$410 by bedrooms × bathrooms). */
export const END_OF_LEASE_MAX_CENTS = 41000;

/** Published worked example: a 3-bedroom, 2-bathroom regular clean. */
export const EXAMPLE_3BED_2BATH_REGULAR_CENTS = 21175;

/** "$121" for whole dollars, "$211.75" otherwise. GST-inclusive amounts. */
export function formatAud(cents: number): string {
  const dollars = cents / 100;
  return Number.isInteger(dollars) ? `$${dollars}` : `$${dollars.toFixed(2)}`;
}
