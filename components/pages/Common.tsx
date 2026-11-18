import Link from "next/link";
import { Breadcrumb, type Crumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/layout/JsonLd";
import { faqJsonLd } from "@/lib/seo/schema";

export function PageShell({
  crumbs,
  h1,
  intro,
  pageType,
  children,
}: {
  crumbs: Crumb[];
  h1: string;
  intro?: string;
  pageType: string;
  children: React.ReactNode;
}) {
  return (
    <main id="main" data-page-type={pageType}>
      <Breadcrumb items={[{ name: "Home", path: "/" }, ...crumbs]} />
      <div className="mx-auto max-w-content px-4 pb-20">
        <h1 className="max-w-prose text-4xl font-bold md:text-5xl">{h1}</h1>
        {intro && <p className="mt-5 max-w-prose text-lg">{intro}</p>}
        {children}
      </div>
    </main>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

/** Visible FAQ plus FAQPage JSON-LD (schema only when there are at least 4 questions). */
export function FaqBlock({ faqs, title = "Questions people ask" }: { faqs: { q: string; a: string }[]; title?: string }) {
  return (
    <Section title={title}>
      <div className="max-w-prose space-y-5">
        {faqs.map((f) => (
          <div key={f.q}>
            <h3 className="text-lg font-bold">{f.q}</h3>
            <p className="mt-1">{f.a}</p>
          </div>
        ))}
      </div>
      {faqs.length >= 4 && <JsonLd data={faqJsonLd(faqs)} />}
    </Section>
  );
}

export function CtaBand({ text = "See your price in three taps. No name or card needed until you choose a day." }: { text?: string }) {
  return (
    <section className="mt-16 rounded-card bg-deep-water p-8 text-paper">
      <p className="font-display text-2xl font-bold">Ready when you are</p>
      <p className="mt-2 max-w-prose">{text}</p>
      <Link
        href="/book-now/"
        data-event="quote_started"
        className="mt-5 inline-block rounded-control bg-coral px-6 py-3 font-semibold text-paper hover:brightness-95"
      >
        See my price
      </Link>
    </section>
  );
}

export function Ticks({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((t) => (
        <li key={t} className="flex gap-2">
          <span aria-hidden="true" className="font-bold text-escarpment">
            ✓
          </span>
          {t}
        </li>
      ))}
    </ul>
  );
}
