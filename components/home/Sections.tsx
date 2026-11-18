import Link from "next/link";
import { HOME } from "@/content/home";
import { formatAud } from "@/lib/pricing/rates";

const SECTION = "mx-auto max-w-content px-4 py-14 md:py-20";
const H2 = "text-3xl font-bold md:text-4xl";

export function TrustStrip() {
  return (
    <section aria-label="How we work" className="border-y border-sea-glass bg-paper">
      <ul className="mx-auto grid max-w-content gap-3 px-4 py-5 sm:grid-cols-2 lg:grid-cols-4">
        {HOME.trust.map((item) => (
          <li key={item} className="flex items-start gap-2 font-semibold text-deep-water">
            <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-escarpment" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ServiceGrid() {
  return (
    <section aria-labelledby="services-title" className={SECTION}>
      <h2 id="services-title" className={H2}>
        What we clean, and what it costs
      </h2>
      <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {HOME.services.map((s, i) => (
          <li key={s.slug} className={i === 0 ? "lg:row-span-2" : undefined}>
            <Link
              href={s.href}
              className={`group flex h-full flex-col rounded-card border border-sea-glass p-6 transition-colors hover:border-escarpment ${
                i === 0 ? "bg-deep-water text-paper" : "bg-paper"
              }`}
            >
              <span className={`font-display text-2xl font-bold ${i === 0 ? "text-paper" : "text-deep-water"}`}>{s.name}</span>
              <span className={`mt-1 font-semibold ${i === 0 ? "text-sea-glass" : "text-escarpment"}`}>
                {s.fromCents === null ? "Quoted per site" : `From ${formatAud(s.fromCents)}${s.unit ? ` ${s.unit}` : ""}`}
              </span>
              <span className="mt-3">{s.line}</span>
              <span className={`mt-auto pt-4 font-semibold underline-offset-4 group-hover:underline ${i === 0 ? "text-paper" : "text-deep-water"}`}>
                {s.name} details
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section aria-labelledby="how-title" className="bg-sand">
      <div className={SECTION}>
        <h2 id="how-title" className={H2}>
          How booking works
        </h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-3">
          {HOME.steps.map((step, i) => (
            <li key={step.title} className="rounded-card bg-paper p-6">
              <span className="font-display text-4xl font-bold text-coral">{i + 1}</span>
              <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
              <p className="mt-2">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function WhatsIncluded() {
  return (
    <section aria-labelledby="included-title" className={SECTION}>
      <h2 id="included-title" className={H2}>
        What a regular clean includes
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {HOME.rooms.map((room) => (
          <div key={room.name} className="rounded-card border border-sea-glass p-6">
            <h3 className="text-xl font-bold">{room.name}</h3>
            <ul className="mt-3 space-y-2">
              {room.tasks.map((task) => (
                <li key={task} className="flex gap-2">
                  <span aria-hidden="true" className="font-bold text-escarpment">
                    ✓
                  </span>
                  {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-6 max-w-prose">{HOME.notIncluded}</p>
    </section>
  );
}

/** Renders nothing until real reviews with a source exist (PRD FR27). */
export function Reviews() {
  if (HOME.reviews.length === 0) return null;
  return (
    <section aria-labelledby="reviews-title" className={SECTION}>
      <h2 id="reviews-title" className={H2}>
        Recent reviews
      </h2>
      <ul className="mt-8 grid gap-4 md:grid-cols-3">
        {HOME.reviews.map((r) => (
          <li key={`${r.firstName}-${r.date}`} className="rounded-card border border-sea-glass p-6">
            <blockquote>{r.text}</blockquote>
            <p className="mt-3 font-semibold">
              {r.firstName}, {r.suburb} · {r.service}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function GuaranteeSummary() {
  return (
    <section aria-labelledby="guarantee-title" className="bg-deep-water text-paper">
      <div className={`${SECTION} grid gap-6 md:grid-cols-[1fr_1.4fr] md:items-center`}>
        <h2 id="guarantee-title" className={`${H2} text-paper`}>
          Our re-clean guarantee
        </h2>
        <div>
          <p>{HOME.guarantee}</p>
          <Link href="/guarantee/" className="mt-4 inline-block font-semibold text-sea-glass underline underline-offset-4">
            Read the full guarantee terms
          </Link>
        </div>
      </div>
    </section>
  );
}

export function AreasWeClean() {
  return (
    <section aria-labelledby="areas-title" className={SECTION}>
      <h2 id="areas-title" className={H2}>
        Areas we clean
      </h2>
      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {HOME.areas.map((area) => (
          <li key={area.href} className="rounded-card bg-sea-glass p-6">
            <Link href={area.href} className="font-display text-2xl font-bold text-deep-water underline-offset-4 hover:underline">
              Cleaners in {area.name}
            </Link>
            <p className="mt-2">{area.text}</p>
          </li>
        ))}
      </ul>
      <p className="mt-6">
        <Link href="/locations/" className="font-semibold text-escarpment underline underline-offset-4">
          Check your suburb
        </Link>
      </p>
    </section>
  );
}

/** Renders nothing until real, consenting team members with real photos exist (PRD FR30, FR51). */
export function Cleaners() {
  if (HOME.cleaners.length === 0) return null;
  return (
    <section aria-labelledby="cleaners-title" data-slot="team" className={SECTION}>
      <h2 id="cleaners-title" className={H2}>
        Your cleaners
      </h2>
    </section>
  );
}

export function Faq() {
  return (
    <section aria-labelledby="faq-title" className="bg-sand">
      <div className={SECTION}>
        <h2 id="faq-title" className={H2}>
          Questions before you book
        </h2>
        <div className="mt-8 max-w-prose divide-y divide-sea-glass rounded-card bg-paper">
          {HOME.faqs.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="cursor-pointer list-none font-semibold text-deep-water">
                <h3 className="inline text-lg">{f.q}</h3>
              </summary>
              <p className="mt-3">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className={`${SECTION} text-center`}>
      <h2 id="cta-title" className={H2}>
        Ready when you are
      </h2>
      <p className="mx-auto mt-3 max-w-prose text-lg">{HOME.finalCta}</p>
      <Link
        href="/book-now/"
        data-event="quote_started"
        className="mt-6 inline-block rounded-control bg-coral px-8 py-4 text-lg font-semibold text-paper hover:brightness-95"
      >
        See my price
      </Link>
    </section>
  );
}
