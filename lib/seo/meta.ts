import type { Metadata } from "next";
import { SITE, siteUrl } from "@/config/site";

/** Absolute canonical URL: query and hash stripped, trailing slash kept (FR2). */
export function canonicalUrl(pathOrUrl: string): string {
  const url = new URL(pathOrUrl, `${siteUrl()}/`);
  let path = url.pathname;
  if (!path.endsWith("/")) path = `${path}/`;
  return `${siteUrl()}${path}`;
}

const DEFAULT_OG_IMAGE = "/images/og-default.jpg";
const DEFAULT_OG_ALT = "Cleaner wiping a kitchen bench in an Illawarra home";

export function buildMeta(opts: {
  path: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}): Metadata {
  const url = canonicalUrl(opts.path);
  const image = `${siteUrl()}${opts.image ?? DEFAULT_OG_IMAGE}`;
  return {
    title: { absolute: opts.title },
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: "en_AU",
      title: opts.title,
      description: opts.description,
      url,
      images: [{ url: image, alt: opts.imageAlt ?? DEFAULT_OG_ALT }],
    },
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description, images: [image] },
  };
}
