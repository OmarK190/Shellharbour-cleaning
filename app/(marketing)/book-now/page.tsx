import Link from "next/link";
import { pageMeta } from "@/lib/seo/registry";
import { PageShell, Section } from "@/components/pages/Common";
import { PriceEstimator } from "@/components/pages/PriceEstimator";

export const metadata = pageMeta("/book-now/");

export default function BookNowPage() {
  return (
    <PageShell
      pageType="pricing"
      crumbs={[{ name: "See your price", path: "/book-now/" }]}
      h1="See your cleaning price"
      intro="Choose a service and the number of bedrooms and bathrooms to see your Shellharbour Cleaning price straight away, with GST included. Prices are the same in Shellharbour, Kiama, Dapto and Wollongong, and no name or card is needed to see them."
    >
      <PriceEstimator />
      <Section title="How booking works">
        <ol className="max-w-prose list-decimal space-y-2 pl-5">
          <li>See your price here, with GST included.</li>
          <li>Choose a day and time window that suits you.</li>
          <li>Pay upfront or after the clean. If anything is missed, send photos within 24 hours for a free re-clean.</li>
        </ol>
        <p className="mt-4 max-w-prose rounded-card bg-sand p-4">
          Online booking with live availability opens shortly. Until then, prices on this page are the prices you will pay, and the{" "}
          <Link href="/pricing/" className="text-escarpment underline underline-offset-2">
            full price list
          </Link>{" "}
          covers every service, including carpet steam cleaning, NDIS cleaning and Airbnb turnovers.
        </p>
      </Section>
    </PageShell>
  );
}
