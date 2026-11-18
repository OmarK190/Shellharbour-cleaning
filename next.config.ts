import type { NextConfig } from "next";

// Cache Components is off: on the Cloudflare Workers runtime it hangs page renders
// (Next warns its setTimeout() implementation is unsupported). This site is static
// marketing content, so classic static generation with `dynamic = "force-static"` is used.
const nextConfig: NextConfig = {
  trailingSlash: true,
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
