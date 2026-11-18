// Every indexable page registers here (architecture.md §4). Checks read this list:
// title ≤ 60, description ≤ 155, one URL per primary keyword, content-sourced dates.
import type { Metadata } from "next";
import { buildMeta } from "./meta";
import { POSTS } from "@/content/blog";
import { FACTS_UPDATED } from "@/content/facts";

export { canonicalUrl } from "./meta";

export type PageType =
  | "home"
  | "service"
  | "hub"
  | "service-in-city"
  | "suburb"
  | "pricing"
  | "guide"
  | "checklist"
  | "blog"
  | "company"
  | "legal"
  | "facts"
  | "glossary"
  | "comparison";

export type PageEntry = {
  path: string;
  title: string;
  description: string;
  primaryKeyword: string;
  pageType: PageType;
  indexable: boolean;
  /** ISO date the content last changed — set by editors, never by the build (FR54). */
  updated: string;
};

export const PAGES: PageEntry[] = [
  {
    path: "/",
    title: "House Cleaning Illawarra | From $121 | Shellharbour Cleaning",
    description:
      "House, end of lease and deep cleaning in Shellharbour, Kiama, Dapto and Wollongong. Published prices from $121 and a free re-clean if we miss a spot.",
    primaryKeyword: "house cleaning illawarra",
    pageType: "home",
    indexable: true,
    updated: "2026-11-19",
  },
];

PAGES.push(
  {
    path: "/facts/",
    title: "Shellharbour Cleaning Facts | Prices, Areas, ABN",
    description:
      "Verified facts about Shellharbour Cleaning: services, prices from $121, service areas in the Illawarra, hours, ABN, guarantee and payment terms.",
    primaryKeyword: "shellharbour cleaning",
    pageType: "facts",
    indexable: true,
    updated: FACTS_UPDATED,
  },
  {
    path: "/blog/",
    title: "Cleaning Guides and Price Advice | Shellharbour Cleaning",
    description:
      "Cleaning prices, end of lease advice and NDIS guides for Wollongong, Shellharbour, Kiama and Dapto, written by Shellharbour Cleaning.",
    primaryKeyword: "cleaning advice illawarra",
    pageType: "blog",
    indexable: true,
    updated: POSTS.map((p) => p.updated).sort().at(-1)!,
  },
  ...POSTS.map(
    (p): PageEntry => ({
      path: `/blog/${p.slug}/`,
      title: p.title,
      description: p.description,
      primaryKeyword: p.primaryKeyword,
      pageType: "blog",
      indexable: true,
      updated: p.updated,
    }),
  ),
);

export function getPage(path: string): PageEntry {
  const page = PAGES.find((p) => p.path === path);
  if (!page) throw new Error(`Page not registered: ${path}`);
  return page;
}

export function pageMeta(path: string, opts: { image?: string; imageAlt?: string } = {}): Metadata {
  const page = getPage(path);
  return buildMeta({ path, title: page.title, description: page.description, ...opts });
}

