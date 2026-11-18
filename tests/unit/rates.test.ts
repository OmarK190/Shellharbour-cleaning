import { RATES, formatAud } from "@/lib/pricing/rates";

test("live published rates", () => {
  expect(RATES.regularHourlyCents).toBe(6050);
  expect(RATES.regularMinimumCents).toBe(12100);
  expect(RATES.minimumHours).toBe(2);
  expect(RATES.regularMinimumCents).toBe(RATES.regularHourlyCents * RATES.minimumHours);
});

test("formatAud drops .00 and keeps cents otherwise", () => {
  expect(formatAud(12100)).toBe("$121");
  expect(formatAud(21175)).toBe("$211.75");
  expect(formatAud(6050)).toBe("$60.50");
});
