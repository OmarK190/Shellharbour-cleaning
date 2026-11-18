"use client";

import { useState } from "react";
import { MAX_BATHROOMS, MAX_BEDROOMS, PRICE_FROM, END_OF_LEASE_MAX_CENTS, regularCleanCents, deepCleanCents, formatAud } from "@/lib/pricing/rates";
import { track } from "@/lib/analytics/events";

type ServiceKey = "regular-cleaning" | "deep-cleaning" | "end-of-lease-cleaning";

const SERVICE_LABELS: Record<ServiceKey, string> = {
  "regular-cleaning": "Regular house clean",
  "deep-cleaning": "Deep clean",
  "end-of-lease-cleaning": "End of lease clean",
};

function priceFor(service: ServiceKey, beds: number, baths: number): string {
  if (service === "regular-cleaning") return formatAud(regularCleanCents(beds, baths));
  if (service === "deep-cleaning") return formatAud(deepCleanCents(beds, baths));
  return `${formatAud(PRICE_FROM["end-of-lease-cleaning"]!)}–${formatAud(END_OF_LEASE_MAX_CENTS)}`;
}

function Stepper({ label, value, min, max, onChange }: { label: string; value: number; min: number; max: number; onChange: (v: number) => void }) {
  const btn = "h-12 w-12 rounded-control border-2 border-deep-water text-xl font-bold text-deep-water disabled:opacity-40";
  return (
    <div>
      <span className="block font-semibold" id={`${label}-label`}>
        {label}
      </span>
      <div className="mt-2 flex items-center gap-3" role="group" aria-labelledby={`${label}-label`}>
        <button type="button" className={btn} onClick={() => onChange(value - 1)} disabled={value <= min} aria-label={`Fewer ${label.toLowerCase()}`}>
          −
        </button>
        <output className="w-8 text-center font-display text-2xl font-bold" aria-live="polite">
          {value}
        </output>
        <button type="button" className={btn} onClick={() => onChange(value + 1)} disabled={value >= max} aria-label={`More ${label.toLowerCase()}`}>
          +
        </button>
      </div>
    </div>
  );
}

export function PriceEstimator({ initialService = "regular-cleaning" }: { initialService?: string }) {
  const start: ServiceKey = (Object.keys(SERVICE_LABELS) as ServiceKey[]).includes(initialService as ServiceKey) ? (initialService as ServiceKey) : "regular-cleaning";
  const [service, setService] = useState<ServiceKey>(start);
  const [beds, setBeds] = useState(2);
  const [baths, setBaths] = useState(1);
  const [shown, setShown] = useState(false);

  const onChange = (fn: () => void) => {
    fn();
    if (!shown) {
      setShown(true);
      track("price_shown", { pageType: "pricing" });
    }
  };

  return (
    <div className="mt-8 max-w-xl rounded-card bg-paper p-6 shadow-lift">
      <fieldset>
        <legend className="font-semibold">Service</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {(Object.keys(SERVICE_LABELS) as ServiceKey[]).map((key) => (
            <label key={key} className={`cursor-pointer rounded-full border-2 px-4 py-2 font-semibold ${service === key ? "border-deep-water bg-deep-water text-paper" : "border-sea-glass text-deep-water"}`}>
              <input type="radio" name="service" value={key} checked={service === key} onChange={() => onChange(() => setService(key))} className="sr-only" />
              {SERVICE_LABELS[key]}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="mt-6 flex gap-8">
        <Stepper label="Bedrooms" value={beds} min={1} max={MAX_BEDROOMS} onChange={(v) => onChange(() => setBeds(v))} />
        <Stepper label="Bathrooms" value={baths} min={1} max={MAX_BATHROOMS} onChange={(v) => onChange(() => setBaths(v))} />
      </div>
      <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-escarpment">Your price, GST included</p>
      <p className="font-display text-5xl font-bold text-deep-water" aria-live="polite" data-testid="price">
        {priceFor(service, beds, baths)}
      </p>
      {service === "end-of-lease-cleaning" && <p className="mt-2 text-sm">Your exact end of lease price within this range is confirmed before you book.</p>}
    </div>
  );
}
