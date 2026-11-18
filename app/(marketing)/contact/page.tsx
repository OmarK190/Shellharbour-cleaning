import Link from "next/link";
import { pageMeta } from "@/lib/seo/registry";
import { SITE, isResolved } from "@/config/site";
import { PageShell, Section, CtaBand } from "@/components/pages/Common";

export const metadata = pageMeta("/contact/");

export default function ContactPage() {
  const phone = isResolved(SITE.phone) ? SITE.phone : null;
  const email = isResolved(SITE.email) ? SITE.email : null;
  return (
    <PageShell
      pageType="company"
      crumbs={[{ name: "Contact", path: "/contact/" }]}
      h1="Contact Shellharbour Cleaning"
      intro={`Shellharbour Cleaning takes bookings ${SITE.hours.display} for homes and small offices in Shellharbour, Kiama, Dapto and Wollongong. The fastest way to a price is the price calculator, which shows your fixed price in three taps.`}
    >
      <Section title="How to reach us">
        <ul className="max-w-prose space-y-2">
          {phone && (
            <li>
              Phone: <a href={`tel:${phone.e164}`} data-event="call_click" className="text-escarpment underline">{phone.display}</a>
            </li>
          )}
          {email && (
            <li>
              Email: <a href={`mailto:${email}`} className="text-escarpment underline">{email}</a>
            </li>
          )}
          <li>
            Prices and booking:{" "}
            <Link href="/book-now/" className="text-escarpment underline">
              see your price
            </Link>
          </li>
          <li>Hours: {SITE.hours.display}</li>
          <li>ABN: {SITE.abn}</li>
        </ul>
        {!phone && <p className="mt-4 max-w-prose rounded-card bg-sand p-4">Our phone number and email address will be published here at launch.</p>}
      </Section>
      <Section title="Areas we serve">
        <ul className="flex flex-wrap gap-3">
          {SITE.hubs.map((h) => (
            <li key={h.slug}>
              <Link href={h.path} className="inline-block rounded-full bg-sea-glass px-4 py-2 font-semibold text-deep-water hover:underline">
                {h.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand />
    </PageShell>
  );
}
