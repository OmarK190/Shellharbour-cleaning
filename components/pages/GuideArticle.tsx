import Link from "next/link";
import type { Guide } from "@/content/guides";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/layout/JsonLd";
import { articleJsonLd, faqJsonLd } from "@/lib/seo/schema";

const fmt = (iso: string) => new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export function GuideArticle({ g }: { g: Guide }) {
  const path = `/${g.slug}/`;
  return (
    <main id="main" data-page-type={g.pageType}>
      <Breadcrumb items={[{ name: "Home", path: "/" }, { name: g.h1, path }]} />
      <article className="mx-auto max-w-prose px-4 pb-20">
        <h1 className="text-4xl font-bold md:text-5xl">{g.h1}</h1>
        <p className="mt-3 text-sm">
          <strong>Last updated {fmt(g.updated)}</strong> · Shellharbour Cleaning
        </p>
        <p className="mt-6 text-lg font-semibold text-deep-water">{g.answer}</p>
        {g.tldr && (
          <aside aria-label="Summary" className="mt-6 rounded-card bg-sea-glass p-5">
            <p className="font-display text-lg font-bold text-deep-water">TL;DR</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {g.tldr.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </aside>
        )}
        {g.sections.map((s) => (
          <section key={s.heading} className="mt-10">
            <h2 className="text-2xl font-bold md:text-3xl">{s.heading}</h2>
            {s.paragraphs?.map((p) => (
              <p key={p.slice(0, 40)} className="mt-4">
                {p}
              </p>
            ))}
            {s.list && (
              <ul className="mt-4 space-y-2">
                {s.list.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="font-bold text-escarpment">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {s.table && (
              <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <caption className="mb-2 text-left font-semibold">{s.table.caption}</caption>
                  <thead>
                    <tr>
                      {s.table.head.map((h, i) => (
                        <th key={i} scope="col" className="border-b-2 border-deep-water p-2">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {s.table.rows.map((row) => (
                      <tr key={row.join("|")}>
                        {row.map((c, i) => (
                          <td key={i} className="border-b border-sea-glass p-2 align-top">
                            {c}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        ))}
        <aside aria-label="When to call a pro" className="mt-10 rounded-card bg-deep-water p-6 text-paper">
          <p className="font-display text-xl font-bold">When to call a pro</p>
          <p className="mt-2">{g.callAPro.text}</p>
          <Link href={g.callAPro.href} className="mt-4 inline-block font-semibold text-sea-glass underline underline-offset-4">
            {g.callAPro.label}
          </Link>
        </aside>
        <section className="mt-10">
          <h2 className="text-2xl font-bold md:text-3xl">Frequently asked questions</h2>
          {g.faqs.map((f) => (
            <div key={f.q} className="mt-5">
              <h3 className="text-lg font-bold">{f.q}</h3>
              <p className="mt-1">{f.a}</p>
            </div>
          ))}
        </section>
        {g.sources && (
          <section className="mt-10">
            <h2 className="text-2xl font-bold">Sources</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              {g.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} rel="noopener" className="text-escarpment underline underline-offset-2">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
      <JsonLd
        data={[
          articleJsonLd({ path, headline: g.h1, description: g.description, published: g.updated, updated: g.updated, author: { name: "Shellharbour Cleaning team", role: "Illawarra cleaning" } }),
          faqJsonLd(g.faqs),
        ]}
      />
    </main>
  );
}
