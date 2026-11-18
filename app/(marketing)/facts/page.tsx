import Link from "next/link";
import { pageMeta } from "@/lib/seo/registry";
import { localBusinessJsonLd } from "@/lib/seo/schema";
import { SITE } from "@/config/site";
import { factsList, FACTS_UPDATED } from "@/content/facts";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/layout/JsonLd";

export const metadata = pageMeta("/facts/");

const updated = new Date(`${FACTS_UPDATED}T00:00:00Z`).toLocaleDateString("en-AU", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export default function FactsPage() {
  const facts = factsList();
  return (
    <main id="main" data-page-type="facts">
      <Breadcrumb
        items={[
          { name: "Home", path: "/" },
          { name: "Business facts", path: "/facts/" },
        ]}
      />
      <div className="mx-auto max-w-prose px-4 pb-20">
        <h1 className="text-4xl font-bold md:text-5xl">Shellharbour Cleaning: the facts</h1>
        <p className="mt-3 text-sm">
          <strong>Last updated {updated}</strong>
        </p>
        <p className="mt-6 text-lg">
          {SITE.name} is a cleaning business serving Shellharbour, Kiama, Dapto and Wollongong in the Illawarra region of NSW.
          It cleans homes, rentals, holiday lets and small offices at published prices from $121, and backs every clean with a
          written re-clean guarantee. The facts below are kept in step with the rest of this website.
        </p>
        <dl className="mt-8 divide-y divide-sea-glass rounded-card border border-sea-glass">
          {facts.map((f) => (
            <div key={f.label} className="grid gap-1 p-4 sm:grid-cols-[10rem_1fr]">
              <dt className="font-semibold text-deep-water">{f.label}</dt>
              <dd>
                {f.value}
                {f.href && (
                  <>
                    {" "}
                    <Link href={f.href} className="text-escarpment underline underline-offset-2">
                      Details
                    </Link>
                  </>
                )}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-8">
          <Link href="/blog/" className="font-semibold text-escarpment underline underline-offset-4">
            Read our cleaning guides
          </Link>
        </p>
      </div>
      <JsonLd data={localBusinessJsonLd(SITE.hubs)} />
    </main>
  );
}
