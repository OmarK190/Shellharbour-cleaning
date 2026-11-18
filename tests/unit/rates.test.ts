import { RATES, formatAud, PRICE_FROM, END_OF_LEASE_MAX_CENTS, EXAMPLE_3BED_2BATH_REGULAR_CENTS } from "@/lib/pricing/rates";

test("live published rates", () => {
  expect(RATES.regularHourlyCents).toBe(6050);
  expect(RATES.regularMinimumCents).toBe(12100);
  expect(RATES.minimumHours).toBe(2);
  expect(RATES.regularMinimumCents).toBe(RATES.regularHourlyCents * RATES.minimumHours);
});

test("published from-prices by service (live cleaneratdoor.com, GST incl; NDIS GST-free)", () => {
  expect(PRICE_FROM).toEqual({
    "regular-cleaning": 12100,
    "end-of-lease-cleaning": 19000,
    "deep-cleaning": 18150,
    "carpet-steam-cleaning": 5000,
    "ndis-cleaning-services": 5500,
    "airbnb-cleaning": 12100,
  });
  expect(END_OF_LEASE_MAX_CENTS).toBe(41000);
  expect(EXAMPLE_3BED_2BATH_REGULAR_CENTS).toBe(21175);
});

test("formatAud drops .00 and keeps cents otherwise", () => {
  expect(formatAud(12100)).toBe("$121");
  expect(formatAud(21175)).toBe("$211.75");
  expect(formatAud(6050)).toBe("$60.50");
});
