import type { NextConfig } from "next";

// Cache Components is off: on the Cloudflare Workers runtime it hangs page renders
// (Next warns its setTimeout() implementation is unsupported). This site is static
// marketing content, so classic static generation with `dynamic = "force-static"` is used.

const isProduction = process.env.DEPLOY_ENV === "production";

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
];

const nextConfig: NextConfig = {
  trailingSlash: true,
  async headers() {
    const headers = isProduction
      ? securityHeaders
      : [...securityHeaders, { key: "X-Robots-Tag", value: "noindex, nofollow" }];
    return [{ source: "/:path*", headers }];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
