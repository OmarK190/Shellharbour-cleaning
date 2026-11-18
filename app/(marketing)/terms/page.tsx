import { pageMeta } from "@/lib/seo/registry";
import { SITE } from "@/config/site";
import { PageShell, Section } from "@/components/pages/Common";

export const metadata = pageMeta("/terms/");

export default function TermsPage() {
  return (
    <PageShell
      pageType="legal"
      crumbs={[{ name: "Terms of service", path: "/terms/" }]}
      h1="Terms of service"
      intro={`These terms apply to cleaning services booked with ${SITE.name} (ABN ${SITE.abn}) in Shellharbour, Kiama, Dapto and Wollongong. Nothing in these terms limits your rights under the Australian Consumer Law. Last updated 19 November 2026.`}
    >
      <Section title="Prices and payment">
        <p className="max-w-prose">
          Prices are published on our website and include GST, except NDIS cleaning, which is GST-free. You can pay when you book or after
          the clean by card, processed by Stripe. There is no call-out fee, booking fee or travel loading. Extra work is done only with your
          agreement, and your cleaner contacts you before going past the booked time.
        </p>
      </Section>
      <Section title="Changes and cancellations">
        <p className="max-w-prose">
          You can reschedule or cancel free of charge more than 24 hours before the booked start time. Cancellations within 24 hours of the
          start time incur a fee of 50% of the booking price. If we need to cancel, you pay nothing and we offer you the next available time.
        </p>
      </Section>
      <Section title="What a standard clean does not cover">
        <p className="max-w-prose">
          A standard clean does not include rubbish removal beyond your bins, pest control, repairs, gardening, or add-ons you did not book.
          We may decline work that is unsafe, such as cleaning at heights without safe access or handling hazardous materials.
        </p>
      </Section>
      <Section title="Re-clean guarantee and refunds">
        <p className="max-w-prose">
          If a checklist item was missed, tell us within 24 hours of the clean with photos. We reply within 48 hours and re-clean those areas
          at no cost. If you are still unhappy after the re-clean, we refund the clean in full within 15 days. There is no refund if a job
          finishes early.
        </p>
      </Section>
    </PageShell>
  );
}
