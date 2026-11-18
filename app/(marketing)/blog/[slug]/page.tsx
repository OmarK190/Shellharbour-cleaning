import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { POSTS, getPost } from "@/content/blog";
import { pageMeta } from "@/lib/seo/registry";
import { articleJsonLd, faqJsonLd } from "@/lib/seo/schema";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { JsonLd } from "@/components/layout/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return pageMeta(`/blog/${slug}/`);
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!POSTS.some((p) => p.slug === slug)) notFound();
  const post = getPost(slug);
  const path = `/blog/${post.slug}/`;
  const related = post.related.map(getPost);

  return (
    <main id="main" data-page-type="blog">
      <Breadcrumb
        items={[
          { name: "Home", path: "/" },
          { name: "Cleaning guides", path: "/blog/" },
          { name: post.h1, path },
        ]}
      />
      <article className="mx-auto max-w-prose px-4 pb-20">
        <h1 className="text-4xl font-bold md:text-5xl">{post.h1}</h1>
        <p className="mt-3 text-sm">
          By {post.author.name} · {post.author.role} · Published {formatDate(post.published)} ·{" "}
          <strong>Last updated {formatDate(post.updated)}</strong>
        </p>

        <p className="mt-6 text-lg font-semibold text-deep-water">{post.answer}</p>

        <aside aria-label="Summary" className="mt-6 rounded-card bg-sea-glass p-5">
          <p className="font-display text-lg font-bold text-deep-water">TL;DR</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {post.tldr.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </aside>

        {post.sections.map((s) => (
          <section key={s.heading} className="mt-10">
            <h2 className="text-2xl font-bold md:text-3xl">{s.heading}</h2>
            {s.paragraphs.map((para) => (
              <p key={para.slice(0, 40)} className="mt-4">
                {para}
              </p>
            ))}
            {s.table && (
              <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <caption className="mb-2 text-left font-semibold">{s.table.caption}</caption>
                  <thead>
                    <tr>
                      {s.table.head.map((h) => (
                        <th key={h} scope="col" className="border-b-2 border-deep-water p-2">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {s.table.rows.map((row) => (
                      <tr key={row.join("|")}>
                        {row.map((cell, i) => (
                          <td key={i} className="border-b border-sea-glass p-2 align-top">
                            {cell}
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
          <p className="mt-2">{post.callAPro.text}</p>
          <Link href={post.callAPro.href} className="mt-4 inline-block font-semibold text-sea-glass underline underline-offset-4">
            {post.callAPro.label}
          </Link>
        </aside>

        <section className="mt-10">
          <h2 className="text-2xl font-bold md:text-3xl">Frequently asked questions</h2>
          {post.faqs.map((f) => (
            <div key={f.q} className="mt-5">
              <h3 className="text-lg font-bold">{f.q}</h3>
              <p className="mt-1">{f.a}</p>
            </div>
          ))}
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Sources</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            {post.sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} rel="noopener" className="text-escarpment underline underline-offset-2">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <nav aria-label="Related guides" className="mt-10">
          <h2 className="text-2xl font-bold">Related guides</h2>
          <ul className="mt-3 space-y-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/blog/${r.slug}/`} className="font-semibold text-escarpment underline underline-offset-4">
                  {r.h1}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </article>
      <JsonLd
        data={[
          articleJsonLd({ path, headline: post.h1, description: post.description, published: post.published, updated: post.updated, author: post.author }),
          faqJsonLd(post.faqs),
        ]}
      />
    </main>
  );
}
