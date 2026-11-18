import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/seo/registry";
import { SERVICES, getService } from "@/content/services";
import { SITE } from "@/config/site";
import { siteUrl } from "@/config/site";
import { JsonLd } from "@/components/layout/JsonLd";
import { PageShell, Section, FaqBlock, CtaBand, Ticks } from "@/components/pages/Common";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return pageMeta(`/services/${slug}/`);
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!SERVICES.some((s) => s.slug === slug)) notFound();
  const s = getService(slug);
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.name,
    description: s.intro,
    provider: { "@id": `${siteUrl()}/#organization` },
    areaServed: SITE.hubs.map((h) => ({ "@type": "City", name: `${h.name}, NSW` })),
    url: `${siteUrl()}/services/${s.slug}/`,
  };

  return (
    <PageShell pageType="service" crumbs={[{ name: "Services", path: "/services/" }, { name: s.name, path: `/services/${s.slug}/` }]} h1={s.h1} intro={s.intro}>
      <p className="mt-6 inline-block rounded-card bg-sea-glass px-5 py-3 font-display text-xl font-bold text-deep-water">{s.price}</p>
      <p className="mt-6">
        <Link href={`/book-now/?service=${s.slug}`} data-event="quote_started" className="rounded-control bg-coral px-6 py-3 font-semibold text-paper hover:brightness-95">
          See my price
        </Link>
      </p>

      <Section title={`Who ${s.name.toLowerCase()} is for`}>
        <Ticks items={s.whoFor} />
      </Section>

      <Section title="What's included">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

      {s.addOns.length > 0 && (
        <Section title="Add-ons">
          <Ticks items={s.addOns} />
        </Section>
      )}

      <Section title="Areas we clean">
        <ul className="flex flex-wrap gap-3">
          {SITE.hubs.map((h) => (
            <li key={h.slug}>
              <Link href={h.path} className="inline-block rounded-full bg-sea-glass px-4 py-2 font-semibold text-deep-water hover:underline">
                {s.name} in {h.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <FaqBlock faqs={s.faqs} />
      <CtaBand />
      <JsonLd data={serviceLd} />
    </PageShell>
  );
}
