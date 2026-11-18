import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/seo/registry";
import { HUBS, getHub } from "@/content/locations";
import { getService } from "@/content/services";
import { SITE } from "@/config/site";
import { localBusinessJsonLd } from "@/lib/seo/schema";
import { RATES, EXAMPLE_3BED_2BATH_REGULAR_CENTS, formatAud } from "@/lib/pricing/rates";
import { JsonLd } from "@/components/layout/JsonLd";
import { PageShell, Section, FaqBlock, CtaBand } from "@/components/pages/Common";

export const dynamicParams = false;

export function generateStaticParams() {
  return HUBS.map((h) => ({ hub: h.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ hub: string }> }): Promise<Metadata> {
  const { hub } = await params;
  return pageMeta(`/locations/${hub}/`);
}

export default async function HubPage({ params }: { params: Promise<{ hub: string }> }) {
  const { hub } = await params;
  if (!HUBS.some((h) => h.slug === hub)) notFound();
  const h = getHub(hub);
  const others = HUBS.filter((x) => x.slug !== h.slug);
  const priceFaq = {
    q: `How much does a cleaner cost in ${h.name}?`,
    a: `Regular cleaning is ${formatAud(RATES.regularHourlyCents)} an hour with a ${formatAud(RATES.regularMinimumCents)} minimum, and a 3-bedroom, 2-bathroom home costs ${formatAud(EXAMPLE_3BED_2BATH_REGULAR_CENTS)} a visit. Prices in ${h.name} are the same as the rest of the Illawarra.`,
  };
  const hubSite = SITE.hubs.find((x) => x.slug === h.slug)!;

  return (
    <PageShell pageType="hub" crumbs={[{ name: "Areas we clean", path: "/locations/" }, { name: h.name, path: `/locations/${h.slug}/` }]} h1={h.h1} intro={h.intro}>
      <p className="mt-6">
        <Link href={`/book-now/?area=${h.slug}`} data-event="quote_started" data-hub={h.slug} className="rounded-control bg-coral px-6 py-3 font-semibold text-paper hover:brightness-95">
          See my price in {h.name}
        </Link>
      </p>

      <Section title={`Cleaning services in ${h.name}`}>
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {h.services.map((slug) => {
            const s = getService(slug);
            return (
              <li key={slug} className="rounded-card border border-sea-glass p-5">
                <Link href={`/services/${slug}/`} className="font-display text-xl font-bold text-deep-water underline-offset-4 hover:underline">
                  {s.name}
                </Link>
                <p className="mt-1 font-semibold text-escarpment">{s.price}</p>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section title={`Cleaning in ${h.name}`}>
        <p className="max-w-prose">{h.local}</p>
      </Section>

      <Section title={`Suburbs we cover in ${h.name}`}>
        <p className="max-w-prose">{h.suburbs.join(", ")}.</p>
      </Section>

      <FaqBlock faqs={[priceFaq, ...h.faqs]} title={`Questions about cleaning in ${h.name}`} />

      <Section title="Nearby areas">
        <ul className="flex flex-wrap gap-3">
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={`/locations/${o.slug}/`} className="inline-block rounded-full bg-sea-glass px-4 py-2 font-semibold text-deep-water hover:underline">
                Cleaners in {o.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
      <JsonLd data={{ ...localBusinessJsonLd([hubSite]), "@id": `${localBusinessJsonLd([hubSite])["@id"]}-${h.slug}` }} />
    </PageShell>
  );
}
