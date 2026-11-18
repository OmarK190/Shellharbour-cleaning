import Link from "next/link";
import { pageMeta } from "@/lib/seo/registry";
import { SITE } from "@/config/site";
import { PageShell, Section, CtaBand } from "@/components/pages/Common";

export const metadata = pageMeta("/about/");

export default function AboutPage() {
  return (
    <PageShell
      pageType="company"
      crumbs={[{ name: "About", path: "/about/" }]}
      h1="About Shellharbour Cleaning"
      intro="Shellharbour Cleaning is a cleaning business for homes, rentals, holiday lets and small offices in Shellharbour, Kiama, Dapto and Wollongong. It was set up to make booking a cleaner in the Illawarra simple: every price is published, the checklist for each service is written down, and every clean is backed by a free re-clean guarantee."
    >
      <Section title="How we work">
        <ul className="max-w-prose list-disc space-y-2 pl-5">
          <li>Published prices that include GST, with no call-out fee or travel loading.</li>
          <li>A written checklist for every service, so you know what will be cleaned.</li>
          <li>Pay upfront or after the clean.</li>
          <li>A free re-clean if you report a missed area within 24 hours, and a full refund if you are still unhappy.</li>
        </ul>
      </Section>
      <Section title="Business details">
        <p className="max-w-prose">
          Shellharbour Cleaning trades under ABN {SITE.abn}. Bookings run {SITE.hours.display}. Every business fact we publish, including
          prices, areas and terms, is listed on our{" "}
          <Link href="/facts/" className="text-escarpment underline underline-offset-2">
            business facts page
          </Link>
          .
        </p>
      </Section>
      <CtaBand />
    </PageShell>
  );
}
