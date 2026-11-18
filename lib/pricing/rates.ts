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

export const MAX_BEDROOMS = 6;
export const MAX_BATHROOMS = 4;

function assertRooms(beds: number, baths: number) {
  if (!Number.isInteger(beds) || beds < 1 || beds > MAX_BEDROOMS) throw new RangeError(`Bedrooms must be 1–${MAX_BEDROOMS}; got ${beds}`);
  if (!Number.isInteger(baths) || baths < 1 || baths > MAX_BATHROOMS) throw new RangeError(`Bathrooms must be 1–${MAX_BATHROOMS}; got ${baths}`);
}

/**
 * Regular whole-home price: the 2-hour minimum plus half an hour for each bedroom and bathroom
 * beyond the first, at the published hourly rate. 1 bed 1 bath = $121; 3 bed 2 bath = $211.75.
 */
export function regularCleanCents(beds: number, baths: number): number {
  assertRooms(beds, baths);
  const halfHours = RATES.minimumHours * 2 + (beds - 1) + (baths - 1);
  return (halfHours * RATES.regularHourlyCents) / 2;
}

/** Deep clean: 1.5× the regular whole-home price (from $181.50). */
export function deepCleanCents(beds: number, baths: number): number {
  return Math.round(regularCleanCents(beds, baths) * 1.5);
}

/** "$121" for whole dollars, "$211.75" otherwise. GST-inclusive amounts. */
export function formatAud(cents: number): string {
  const dollars = cents / 100;
  return Number.isInteger(dollars) ? `$${dollars}` : `$${dollars.toFixed(2)}`;
}
