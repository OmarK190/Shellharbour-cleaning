import { pageMeta } from "@/lib/seo/registry";
import { HOME } from "@/content/home";
import { PageShell, Section, FaqBlock, CtaBand } from "@/components/pages/Common";

export const metadata = pageMeta("/guarantee/");

export default function GuaranteePage() {
  return (
    <PageShell pageType="company" crumbs={[{ name: "Our guarantee", path: "/guarantee/" }]} h1="Our re-clean guarantee" intro={HOME.guarantee}>
      <Section title="How to claim">
        <ol className="max-w-prose list-decimal space-y-2 pl-5">
          <li>Within 24 hours of the clean, send us photos of the areas that were missed.</li>
          <li>We reply within 48 hours and book a time to come back.</li>
          <li>We re-clean those areas at no cost to you.</li>
          <li>If you are still unhappy after the re-clean, we refund the clean in full within 15 days.</li>
        </ol>
      </Section>
      <Section title="What the guarantee covers">
        <p className="max-w-prose">
          The Shellharbour Cleaning guarantee covers every item on the checklist for the service you booked, in every home we clean in
          Shellharbour, Kiama, Dapto and Wollongong. It does not cover work outside that checklist, such as add-ons you did not book,
          damage that existed before the clean, or marks that cleaning cannot remove, and we tell you before starting if we see any of those.
        </p>
      </Section>
      <Section title="End of lease cleans and property managers">
        <p className="max-w-prose">
          For end of lease cleans in the Illawarra, the 24-hour window starts from the clean, so book the clean a day or two before the
          final inspection. If the property manager flags a checklist item, forward their note and photos and Shellharbour Cleaning comes
          back to re-clean those areas before your bond is assessed.
        </p>
      </Section>
      <FaqBlock
        faqs={[
          { q: "How long do I have to report a problem?", a: "24 hours from the end of the clean, with photos of the areas." },
          { q: "How fast do you respond?", a: "Within 48 hours." },
          { q: "Do I pay for the re-clean?", a: "No. Re-cleaning missed checklist items is free." },
          { q: "When do I get a refund?", a: "If you are still unhappy after the re-clean, the clean is refunded in full within 15 days." },
        ]}
        title="Guarantee questions"
      />
      <CtaBand />
    </PageShell>
  );
}
