import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";

const AI_AND_SEARCH_CRAWLERS = [
  "Googlebot",
  "Bingbot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "Google-Extended",
];

const PRIVATE_PATHS = ["/book-now/thank-you/", "/api/"];

export default function robots(): MetadataRoute.Robots {
  if (process.env.DEPLOY_ENV !== "production") {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: [
      { userAgent: AI_AND_SEARCH_CRAWLERS, allow: "/", disallow: PRIVATE_PATHS },
      { userAgent: "*", allow: "/", disallow: PRIVATE_PATHS },
    ],
    sitemap: `${siteUrl()}/sitemap.xml`,
  };
}
