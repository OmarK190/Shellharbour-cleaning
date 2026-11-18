import { pageMeta } from "@/lib/seo/registry";
import { HOME } from "@/content/home";
import { PageShell, FaqBlock, CtaBand } from "@/components/pages/Common";

export const metadata = pageMeta("/faq/");

const SAFETY = [
  { q: "Do you bring cleaning products?", a: "Tell us in your booking notes if you want particular products used in your home, and we will use them." },
  { q: "Do I need to be home?", a: "No. Add access instructions, such as a lockbox or key location, to your booking notes." },
];

export default function FaqPage() {
  return (
    <PageShell
      pageType="company"
      crumbs={[{ name: "FAQ", path: "/faq/" }]}
      h1="Frequently asked questions"
      intro="Answers to the questions Shellharbour Cleaning customers in Shellharbour, Kiama, Dapto and Wollongong ask most about booking, pricing, payment, cancellations and the re-clean guarantee."
    >
      <FaqBlock faqs={HOME.faqs} title="Booking, pricing and payment" />
      <FaqBlock faqs={SAFETY} title="On the day" />
      <CtaBand />
    </PageShell>
  );
}
