import Link from "next/link";
import { HOME } from "@/content/home";
import { PRICE_FROM, END_OF_LEASE_MAX_CENTS, EXAMPLE_3BED_2BATH_REGULAR_CENTS, formatAud } from "@/lib/pricing/rates";

const PRICE_ROWS = [
  { label: "Regular clean, 2-hour minimum", value: formatAud(PRICE_FROM["regular-cleaning"]!) },
  { label: "3 bed, 2 bath regular clean", value: formatAud(EXAMPLE_3BED_2BATH_REGULAR_CENTS) },
  {
    label: "End of lease, by home size",
    value: `${formatAud(PRICE_FROM["end-of-lease-cleaning"]!)}–${formatAud(END_OF_LEASE_MAX_CENTS)}`,
  },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-sea-glass">
      {/* Escarpment-to-shore bands: decorative, built from tokens only. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(170deg,transparent_45%,var(--color-escarpment)_45%,var(--color-escarpment)_58%,var(--color-sand)_58%)] opacity-90"
      />
      <div className="relative mx-auto grid max-w-content gap-10 px-4 pb-24 pt-12 md:grid-cols-[1.2fr_1fr] md:pb-32 md:pt-20">
        <div>
          <h1 id="hero-title" className="text-4xl font-bold md:text-5xl">
            {HOME.h1}
          </h1>
          <p className="mt-5 max-w-prose text-lg">{HOME.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/book-now/"
              data-event="quote_started"
              className="rounded-control bg-coral px-6 py-3 text-lg font-semibold text-paper hover:brightness-95"
            >
              See my price
            </Link>
            <Link
              href="/services/"
              className="rounded-control border-2 border-deep-water px-6 py-3 text-lg font-semibold text-deep-water hover:bg-paper"
            >
              Browse services
            </Link>
          </div>
        </div>
        <aside aria-label="Published prices" className="self-start rounded-card bg-paper p-6 shadow-lift">
          <p className="font-display text-xl font-bold text-deep-water">Published prices, GST included</p>
          <dl className="mt-4 divide-y divide-sea-glass">
            {PRICE_ROWS.map((row) => (
              <div key={row.label} className="flex items-baseline justify-between gap-4 py-3">
                <dt>{row.label}</dt>
                <dd className="font-display text-2xl font-bold text-deep-water">{row.value}</dd>
              </div>
            ))}
          </dl>
          <Link href="/pricing/" className="mt-4 inline-block font-semibold text-escarpment underline underline-offset-4">
            Every price, by service
          </Link>
        </aside>
      </div>
    </section>
  );
}
