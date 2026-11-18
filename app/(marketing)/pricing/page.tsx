import Link from "next/link";
import { pageMeta } from "@/lib/seo/registry";
import { SERVICES } from "@/content/services";
import { siteUrl } from "@/config/site";
import { RATES, PRICE_FROM, MAX_BEDROOMS, regularCleanCents, deepCleanCents, formatAud } from "@/lib/pricing/rates";
import { JsonLd } from "@/components/layout/JsonLd";
import { PageShell, Section, FaqBlock, CtaBand } from "@/components/pages/Common";

export const metadata = pageMeta("/pricing/");

const PRICES_CHECKED = "November 2026";
const BATHS = [1, 2, 3];

const offers = SERVICES.filter((s) => PRICE_FROM[s.slug] !== undefined).map((s) => ({
  "@type": "Offer",
  name: s.name,
  url: `${siteUrl()}/services/${s.slug}/`,
  priceCurrency: "AUD",
  priceSpecification: { "@type": "PriceSpecification", minPrice: PRICE_FROM[s.slug]! / 100, priceCurrency: "AUD", valueAddedTaxIncluded: s.slug !== "ndis-cleaning-services" },
}));

export default function PricingPage() {
  return (
    <PageShell
      pageType="pricing"
      crumbs={[{ name: "Pricing", path: "/pricing/" }]}
      h1="Cleaning prices in the Illawarra"
      intro={`Shellharbour Cleaning publishes every price. Regular cleaning is ${formatAud(RATES.regularHourlyCents)} an hour with a ${formatAud(RATES.regularMinimumCents)} minimum, deep cleaning starts at ${formatAud(PRICE_FROM["deep-cleaning"]!)}, end of lease cleaning is a fixed $190 to $410, and carpet steam cleaning starts at ${formatAud(PRICE_FROM["carpet-steam-cleaning"]!)} per room. All prices include GST except NDIS cleaning, which is GST-free.`}
    >
      <p className="mt-3 text-sm">
        <strong>Prices checked {PRICES_CHECKED}</strong>
      </p>

      <Section title="Prices by service">
        <div className="overflow-x-auto">
          <table className="w-full max-w-3xl border-collapse text-left">
            <caption className="mb-2 text-left font-semibold">Shellharbour Cleaning prices, GST included unless stated</caption>
            <thead>
              <tr>
                <th scope="col" className="border-b-2 border-deep-water p-2">Service</th>
                <th scope="col" className="border-b-2 border-deep-water p-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {SERVICES.map((s) => (
                <tr key={s.slug}>
                  <td className="border-b border-sea-glass p-2">
                    <Link href={`/services/${s.slug}/`} className="text-escarpment underline underline-offset-2">
                      {s.name}
                    </Link>
                  </td>
                  <td className="border-b border-sea-glass p-2">{s.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Regular and deep clean prices by home size">
        <div className="overflow-x-auto">
          <table className="w-full max-w-3xl border-collapse text-left">
            <caption className="mb-2 text-left font-semibold">Whole-home prices: regular clean / deep clean</caption>
            <thead>
              <tr>
                <th scope="col" className="border-b-2 border-deep-water p-2">Bedrooms</th>
                {BATHS.map((b) => (
                  <th key={b} scope="col" className="border-b-2 border-deep-water p-2">
                    {b} bathroom{b > 1 ? "s" : ""}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: MAX_BEDROOMS }, (_, i) => i + 1).map((beds) => (
                <tr key={beds}>
                  <th scope="row" className="border-b border-sea-glass p-2 font-semibold">
                    {beds}
                  </th>
                  {BATHS.map((baths) => (
                    <td key={baths} className="border-b border-sea-glass p-2">
                      {formatAud(regularCleanCents(beds, baths))} / {formatAud(deepCleanCents(beds, baths))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="What changes the price?">
        <p className="max-w-prose">
          Shellharbour Cleaning prices whole-home cleans by bedrooms and bathrooms: the 2-hour minimum covers a one-bedroom,
          one-bathroom home, and each extra bedroom or bathroom adds half an hour at the published hourly rate. Deep cleans are one and
          a half times the regular price. Add-ons such as inside the fridge, inside cupboards and interior windows are priced
          separately so you only pay for what you choose.
        </p>
      </Section>

      <Section title="The fine print">
        <ul className="max-w-prose list-disc space-y-2 pl-5">
          <li>Pay upfront or after the clean, by card through Stripe. Getting a price needs no card.</li>
          <li>Free changes more than 24 hours before the start time; a 50% fee applies to cancellations within 24 hours.</li>
          <li>No call-out fee, no booking fee and no travel loading anywhere in the four areas we serve.</li>
          <li>Weekly and fortnightly visits are charged at the same hourly rate; no frequency discount is published.</li>
          <li>
            A standard clean does not cover rubbish removal beyond your bins, pest control, repairs or gardening. See{" "}
            <Link href="/terms/" className="text-escarpment underline underline-offset-2">
              our terms
            </Link>
            .
          </li>
        </ul>
      </Section>

      <FaqBlock
        faqs={[
          { q: "How much does house cleaning cost in Wollongong and Shellharbour?", a: `Regular cleaning is ${formatAud(RATES.regularHourlyCents)} an hour with a ${formatAud(RATES.regularMinimumCents)} minimum. A 3-bedroom, 2-bathroom home is $211.75 a visit.` },
          { q: "What does an end of lease clean cost?", a: "A fixed $190 to $410, set by bedrooms and bathrooms, with carpet steam cleaning added per room." },
          { q: "Do prices include GST?", a: "Yes, except NDIS cleaning, which is GST-free. Each booking comes with a tax invoice." },
          { q: "Are there call-out or travel fees?", a: "No. There is no call-out fee, booking fee or travel loading in any area we serve." },
        ]}
        title="Pricing questions"
      />
      <CtaBand />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "OfferCatalog", name: "Shellharbour Cleaning prices", itemListElement: offers }} />
    </PageShell>
  );
}
