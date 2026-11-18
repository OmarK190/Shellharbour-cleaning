import { pageMeta } from "@/lib/seo/registry";
import { SITE } from "@/config/site";
import { PageShell, Section } from "@/components/pages/Common";

export const metadata = pageMeta("/privacy/");

export default function PrivacyPage() {
  return (
    <PageShell
      pageType="legal"
      crumbs={[{ name: "Privacy policy", path: "/privacy/" }]}
      h1="Privacy policy"
      intro={`This policy explains how ${SITE.name} (ABN ${SITE.abn}) collects, uses, stores and discloses personal information, in line with the Privacy Act 1988 (Cth) and the Australian Privacy Principles. Last updated 19 November 2026.`}
    >
      <Section title="What we collect">
        <p className="max-w-prose">
          When you ask for a price or book a clean we collect your name, mobile number, email address, the address to be cleaned, access
          notes and details of the clean. If you pay by card, payment is processed by Stripe and we do not store your full card number.
          If you accept analytics cookies, we collect anonymous information about how the website is used.
        </p>
      </Section>
      <Section title="How we use it">
        <p className="max-w-prose">
          We use your information to quote, schedule and carry out cleans, send booking confirmations and invoices, handle guarantee
          claims, and meet our tax and legal obligations. We send marketing messages only if you tick the separate marketing consent box,
          and you can opt out at any time.
        </p>
      </Section>
      <Section title="Who we share it with">
        <p className="max-w-prose">
          We share information only with the cleaner assigned to your booking and with service providers that help us run the business,
          such as payment, email, SMS and hosting providers. We do not sell personal information.
        </p>
      </Section>
      <Section title="Storage, access and complaints">
        <p className="max-w-prose">
          We store personal information securely and keep booking and invoice records for the period required by tax law. You can ask to
          see or correct the information we hold about you, or to delete your account. If you have a privacy complaint, contact us first;
          if you are not satisfied with our response, you can contact the Office of the Australian Information Commissioner.
        </p>
      </Section>
    </PageShell>
  );
}
