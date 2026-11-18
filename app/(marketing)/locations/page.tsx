import Link from "next/link";
import { pageMeta } from "@/lib/seo/registry";
import { HUBS } from "@/content/locations";
import { PageShell, CtaBand } from "@/components/pages/Common";

export const metadata = pageMeta("/locations/");

export default function LocationsPage() {
  return (
    <PageShell
      pageType="company"
      crumbs={[{ name: "Areas we clean", path: "/locations/" }]}
      h1="Areas we clean in the Illawarra"
      intro="Shellharbour Cleaning serves four areas of the Illawarra in NSW: Shellharbour City, Kiama Municipality, the Dapto district and Wollongong. The same published prices apply everywhere, with no travel loading, so a clean in Gerringong costs the same as a clean in Thirroul."
    >
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {HUBS.map((h) => (
          <section key={h.slug} className="rounded-card bg-sea-glass p-6">
            <h2 className="text-2xl font-bold">
              <Link href={`/locations/${h.slug}/`} className="underline-offset-4 hover:underline">
                Cleaners in {h.name}
              </Link>
            </h2>
            <p className="mt-3">
              Suburbs include{" "}
              {h.suburbs.map((sub, i) => (
                <span key={sub}>
                  <Link href={`/locations/${h.slug}/`} className="text-escarpment underline underline-offset-2">
                    {sub}
                  </Link>
                  {i < h.suburbs.length - 1 ? ", " : "."}
                </span>
              ))}
            </p>
          </section>
        ))}
      </div>
      <CtaBand text="Not sure if we cover your street? Enter your suburb when you get a price and we will tell you straight away." />
    </PageShell>
  );
}
