import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITY_SERVICES } from "@/content/cityServices";
import { getService } from "@/content/services";
import { getHub } from "@/content/locations";
import { SITE, siteUrl } from "@/config/site";
import { pageMeta } from "@/lib/seo/registry";
import { JsonLd } from "@/components/layout/JsonLd";
import { PageShell, Section, FaqBlock, CtaBand, Ticks } from "@/components/pages/Common";

export const dynamicParams = false;

export function generateStaticParams() {
  return CITY_SERVICES.map((c) => ({ slug: c.hub, service: c.service }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; service: string }> }): Promise<Metadata> {
  const { slug, service } = await params;
  return pageMeta(`/${slug}/${service}/`);
}

export default async function CityServicePage({ params }: { params: Promise<{ slug: string; service: string }> }) {
  const { slug, service } = await params;
  const combo = CITY_SERVICES.find((c) => c.hub === slug && c.service === service);
  if (!combo) notFound();
  const s = getService(service);
  const h = getHub(slug);
  const path = `/${slug}/${service}/`;
  const siblings = CITY_SERVICES.filter((c) => c.service === service && c.hub !== slug);

  return (
    <PageShell
      pageType="service-in-city"
      crumbs={[
        { name: "Areas we clean", path: "/locations/" },
        { name: h.name, path: `/locations/${h.slug}/` },
        { name: `${s.name} ${h.name}`, path },
      ]}
      h1={`${s.name} ${h.name}`}
      intro={`Shellharbour Cleaning provides ${s.name.toLowerCase()} in ${h.name} at the same published price as the rest of the Illawarra: ${s.price}. ${combo.local}`}
    >
      <p className="mt-6">
        <Link href={`/book-now/?service=${s.slug}&area=${h.slug}`} data-event="quote_started" data-hub={h.slug} className="rounded-control bg-coral px-6 py-3 font-semibold text-paper hover:brightness-95">
          See my price in {h.name}
        </Link>
      </p>
      <Section title={`What's included in ${s.name.toLowerCase()} in ${h.name}`}>
        <div className="grid gap-6 md:grid-cols-2">
          {s.includes.map((room) => (
            <div key={room.name} className="rounded-card border border-sea-glass p-5">
              <h3 className="text-xl font-bold">{room.name}</h3>
              <div className="mt-3">
                <Ticks items={room.tasks} />
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section title={`Suburbs covered in ${h.name}`}>
        <ul className="flex max-w-prose flex-wrap gap-x-3 gap-y-1">
          {h.suburbs.map((sub) => (
            <li key={sub}>{sub}</li>
          ))}
        </ul>
      </Section>
      <FaqBlock faqs={combo.faqs} title={`${s.name} in ${h.name}: questions`} />
      <Section title="Related pages">
        <ul className="flex flex-wrap gap-3">
          <li>
            <Link href={`/services/${s.slug}/`} className="inline-block rounded-full bg-sea-glass px-4 py-2 font-semibold text-deep-water hover:underline">
              {s.name} across the Illawarra
            </Link>
          </li>
          <li>
            <Link href={`/locations/${h.slug}/`} className="inline-block rounded-full bg-sea-glass px-4 py-2 font-semibold text-deep-water hover:underline">
              Cleaners in {h.name}
            </Link>
          </li>
          {siblings.map((c) => (
            <li key={c.hub}>
              <Link href={`/${c.hub}/${c.service}/`} className="inline-block rounded-full bg-sea-glass px-4 py-2 font-semibold text-deep-water hover:underline">
                {s.name} {getHub(c.hub).name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${s.name} ${h.name}`,
          serviceType: s.name,
          provider: { "@id": `${siteUrl()}/#organization` },
          areaServed: { "@type": "City", name: `${SITE.hubs.find((x) => x.slug === h.slug)!.name}, NSW` },
          url: `${siteUrl()}${path}`,
        }}
      />
    </PageShell>
  );
}
