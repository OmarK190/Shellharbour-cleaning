import Link from "next/link";
import { pageMeta } from "@/lib/seo/registry";
import { HOME } from "@/content/home";
import { PageShell, Section, CtaBand } from "@/components/pages/Common";

export const metadata = pageMeta("/reviews/");

export default function ReviewsPage() {
  const reviews = HOME.reviews;
  return (
    <PageShell
      pageType="company"
      crumbs={[{ name: "Reviews", path: "/reviews/" }]}
      h1="Shellharbour Cleaning reviews"
      intro="Shellharbour Cleaning publishes only real reviews from customers in Shellharbour, Kiama, Dapto and Wollongong, each with its source, and never writes or edits review text. Reviews appear here as customers leave them on our Google Business Profile."
    >
      {reviews.length === 0 ? (
        <Section title="We are new to the Illawarra">
          <p className="max-w-prose">
            Shellharbour Cleaning has only just started taking bookings, so there are no reviews to show yet. Rather than borrow reviews
            from elsewhere, we will add each new review here with the suburb and service it relates to. In the meantime, our{" "}
            <Link href="/guarantee/" className="text-escarpment underline underline-offset-2">
              re-clean guarantee
            </Link>{" "}
            and{" "}
            <Link href="/pricing/" className="text-escarpment underline underline-offset-2">
              published prices
            </Link>{" "}
            show exactly what you can expect.
          </p>
        </Section>
      ) : (
        <Section title="Recent reviews">
          <ul className="grid gap-4 md:grid-cols-2">
            {reviews.map((r) => (
              <li key={`${r.firstName}-${r.date}`} className="rounded-card border border-sea-glass p-5">
                <blockquote>{r.text}</blockquote>
                <p className="mt-2 font-semibold">
                  {r.firstName}, {r.suburb} · {r.service}
                </p>
              </li>
            ))}
          </ul>
        </Section>
      )}
      <CtaBand />
    </PageShell>
  );
}
