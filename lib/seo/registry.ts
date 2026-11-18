// Every indexable page registers here (architecture.md §4). Checks read this list:
// title ≤ 60, description ≤ 155, one URL per primary keyword, content-sourced dates.
import type { Metadata } from "next";
import { buildMeta } from "./meta";
import { POSTS } from "@/content/blog";
import { FACTS_UPDATED } from "@/content/facts";
import { SERVICES } from "@/content/services";
import { HUBS } from "@/content/locations";
import { GUIDES } from "@/content/guides";
import { CITY_SERVICES } from "@/content/cityServices";

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

const V1 = "2026-11-19";

PAGES.push(
  {
    path: "/services/",
    title: "Cleaning Services Illawarra | Prices From $121",
    description: "Every Shellharbour Cleaning service with its published price: regular, deep, end of lease, carpet, NDIS, Airbnb and office cleaning across the Illawarra.",
    primaryKeyword: "cleaning services illawarra",
    pageType: "company",
    indexable: true,
    updated: V1,
  },
  ...SERVICES.map(
    (s): PageEntry => ({
      path: `/services/${s.slug}/`,
      title: s.title,
      description: s.description,
      primaryKeyword: s.name.toLowerCase(),
      pageType: "service",
      indexable: true,
      updated: V1,
    }),
  ),
  {
    path: "/locations/",
    title: "Areas We Clean | Shellharbour, Kiama, Dapto, Wollongong",
    description: "Shellharbour Cleaning serves Shellharbour City, Kiama Municipality, the Dapto district and Wollongong. Find your suburb and see your price.",
    primaryKeyword: "cleaners illawarra",
    pageType: "company",
    indexable: true,
    updated: V1,
  },
  ...HUBS.map(
    (h): PageEntry => ({
      path: `/locations/${h.slug}/`,
      title: h.title,
      description: h.description,
      primaryKeyword: `cleaners ${h.slug}`,
      pageType: "hub",
      indexable: true,
      updated: V1,
    }),
  ),
  {
    path: "/pricing/",
    title: "Cleaning Prices Illawarra | From $121, GST Included",
    description: "Every Shellharbour Cleaning price in one place: regular $60.50/hr, end of lease $190–$410, deep from $181.50, carpet from $50 a room. GST included.",
    primaryKeyword: "cleaning prices illawarra",
    pageType: "pricing",
    indexable: true,
    updated: V1,
  },
  {
    path: "/book-now/",
    title: "See Your Cleaning Price | Shellharbour Cleaning",
    description: "Pick your service, bedrooms and bathrooms to see your fixed Shellharbour Cleaning price for homes in Shellharbour, Kiama, Dapto and Wollongong.",
    primaryKeyword: "book a cleaner illawarra",
    pageType: "pricing",
    indexable: true,
    updated: V1,
  },
  {
    path: "/reviews/",
    title: "Shellharbour Cleaning Reviews",
    description: "Customer reviews for Shellharbour Cleaning in Shellharbour, Kiama, Dapto and Wollongong. Only real reviews with a source are published here.",
    primaryKeyword: "shellharbour cleaning reviews",
    pageType: "company",
    indexable: true,
    updated: V1,
  },
  {
    path: "/guarantee/",
    title: "Our Re-Clean Guarantee | Shellharbour Cleaning",
    description: "Report a missed area within 24 hours with photos: we reply within 48 hours, re-clean free, and refund in full within 15 days if you are still unhappy.",
    primaryKeyword: "cleaning guarantee",
    pageType: "company",
    indexable: true,
    updated: V1,
  },
  {
    path: "/about/",
    title: "About Shellharbour Cleaning | Illawarra Cleaners",
    description: "Who Shellharbour Cleaning is, where we clean, how we price, and the facts behind the business, including our ABN.",
    primaryKeyword: "about shellharbour cleaning",
    pageType: "company",
    indexable: true,
    updated: V1,
  },
  {
    path: "/privacy/",
    title: "Privacy Policy | Shellharbour Cleaning",
    description: "How Shellharbour Cleaning collects, uses, stores and protects your personal information under the Australian Privacy Principles.",
    primaryKeyword: "shellharbour cleaning privacy policy",
    pageType: "legal",
    indexable: true,
    updated: V1,
  },
  {
    path: "/terms/",
    title: "Terms of Service | Shellharbour Cleaning",
    description: "The terms that apply to Shellharbour Cleaning bookings: pricing, payment, cancellations, the re-clean guarantee and refunds.",
    primaryKeyword: "shellharbour cleaning terms",
    pageType: "legal",
    indexable: true,
    updated: V1,
  },
  ...GUIDES.map(
    (g): PageEntry => ({ path: `/${g.slug}/`, title: g.title, description: g.description, primaryKeyword: g.primaryKeyword, pageType: g.pageType, indexable: true, updated: g.updated }),
  ),
  ...CITY_SERVICES.map(
    (c): PageEntry => ({
      path: `/${c.hub}/${c.service}/`,
      title: c.title,
      description: c.description,
      primaryKeyword: `${c.service.replace(/-/g, " ")} ${c.hub}`,
      pageType: "service-in-city",
      indexable: true,
      updated: V1,
    }),
  ),
  {
    path: "/faq/",
    title: "Cleaning FAQ | Shellharbour Cleaning",
    description: "Answers about booking, prices, payment, cancellations and the re-clean guarantee for Shellharbour Cleaning in Shellharbour, Kiama, Dapto and Wollongong.",
    primaryKeyword: "shellharbour cleaning faq",
    pageType: "company",
    indexable: true,
    updated: V1,
  },
  {
    path: "/contact/",
    title: "Contact Shellharbour Cleaning",
    description: "Contact Shellharbour Cleaning: hours, service areas in Shellharbour, Kiama, Dapto and Wollongong, ABN, and the fastest way to get your price.",
    primaryKeyword: "contact shellharbour cleaning",
    pageType: "company",
    indexable: true,
    updated: V1,
  },
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

