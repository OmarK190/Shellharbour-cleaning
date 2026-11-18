import type { MetadataRoute } from "next";
import { PAGES } from "@/lib/seo/registry";
import { canonicalUrl } from "@/lib/seo/meta";

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.filter((p) => p.indexable).map((p) => ({ url: canonicalUrl(p.path), lastModified: p.updated }));
}
