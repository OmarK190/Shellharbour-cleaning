import Link from "next/link";
import { pageMeta } from "@/lib/seo/registry";
import { SERVICES } from "@/content/services";
import { PageShell, CtaBand } from "@/components/pages/Common";

export const metadata = pageMeta("/services/");

const GROUPS = ["Home", "End of lease", "Carpet", "Specialist", "Commercial"] as const;

export default function ServicesPage() {
  return (
    <PageShell
      pageType="company"
      crumbs={[{ name: "Services", path: "/services/" }]}
      h1="Cleaning services in Shellharbour, Kiama, Dapto and Wollongong"
      intro="Shellharbour Cleaning offers regular, deep and end of lease cleaning, carpet steam cleaning, NDIS cleaning, Airbnb turnovers and office cleaning across the Illawarra. Every service has a published price that includes GST, except NDIS cleaning, which is GST-free, and every clean is covered by our free re-clean guarantee."
    >
      {GROUPS.map((group) => {
        const items = SERVICES.filter((s) => s.group === group);
        if (!items.length) return null;
        return (
          <section key={group} className="mt-12">
            <h2 className="text-2xl font-bold md:text-3xl">{group} cleaning</h2>
            <ul className="mt-5 grid gap-4 md:grid-cols-2">
              {items.map((s) => (
                <li key={s.slug} className="rounded-card border border-sea-glass p-6">
                  <Link href={`/services/${s.slug}/`} className="font-display text-2xl font-bold text-deep-water underline-offset-4 hover:underline">
                    {s.name}
                  </Link>
                  <p className="mt-1 font-semibold text-escarpment">{s.price}</p>
                  <p className="mt-2">{s.whoFor[0]}.</p>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
      <p className="mt-10">
        <Link href="/pricing/" className="font-semibold text-escarpment underline underline-offset-4">
          Compare every price on one page
        </Link>
      </p>
      <CtaBand />
    </PageShell>
  );
}
