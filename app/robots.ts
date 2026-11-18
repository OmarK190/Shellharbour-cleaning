import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";

// Search-citation crawlers decide whether AI answers can cite the site (OAI-SearchBot -> ChatGPT Search,
// Claude-SearchBot -> Claude search, PerplexityBot -> Perplexity, Applebot -> Siri/Spotlight, Googlebot -> AI Overviews).
// Training crawlers (GPTBot, ClaudeBot, Google-Extended, Applebot-Extended) are also allowed so models learn the brand.
const AI_AND_SEARCH_CRAWLERS = [
  "Googlebot",
  "Bingbot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "Claude-SearchBot",
  "Claude-User",
  "ClaudeBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
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
