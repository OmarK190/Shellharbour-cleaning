import Link from "next/link";
import { pageMeta } from "@/lib/seo/registry";
import { POSTS } from "@/content/blog";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

export const metadata = pageMeta("/blog/");

export default function BlogIndexPage() {
  return (
    <main id="main" data-page-type="blog">
      <Breadcrumb
        items={[
          { name: "Home", path: "/" },
          { name: "Cleaning guides", path: "/blog/" },
        ]}
      />
      <div className="mx-auto max-w-content px-4 pb-20">
        <h1 className="text-4xl font-bold md:text-5xl">Cleaning guides and price advice for the Illawarra</h1>
        <p className="mt-4 max-w-prose text-lg">
          Shellharbour Cleaning publishes plain-English guides on cleaning prices, end of lease cleaning and NDIS cleaning for
          households in Wollongong, Shellharbour, Kiama and Dapto. Every price in these guides matches our published price list.
        </p>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {POSTS.map((p) => (
            <li key={p.slug} className="rounded-card border border-sea-glass p-6">
              <h2 className="text-2xl font-bold">
                <Link href={`/blog/${p.slug}/`} className="underline-offset-4 hover:underline">
                  {p.h1}
                </Link>
              </h2>
              <p className="mt-3">{p.tldr[0]}</p>
              <p className="mt-3 text-sm">Last updated {formatDate(p.updated)}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
