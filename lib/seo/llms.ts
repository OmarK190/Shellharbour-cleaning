// llms.txt (optional; ignored by Google Search, may help other AI systems). Generated from content data.
import { SITE, siteUrl } from "@/config/site";
import { POSTS } from "@/content/blog";
import { factsList } from "@/content/facts";

export function buildLlmsTxt(): string {
  const base = siteUrl();
  const lines = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.name} is a cleaning business serving Shellharbour, Kiama, Dapto and Wollongong in the Illawarra region of NSW, Australia, with published prices and a written re-clean guarantee.`,
    "",
    "## Key facts",
    ...factsList().map((f) => `- ${f.label}: ${f.value}`),
    "",
    "## Main pages",
    `- [Business facts](${base}/facts/): Verified facts about ${SITE.name}`,
    `- [Home](${base}/): House cleaning in Shellharbour, Kiama, Dapto and Wollongong`,
    ...SITE.hubs.map((h) => `- [Cleaners in ${h.name}](${base}${h.path}): ${SITE.name} services and suburbs in ${h.name}`),
    "",
    "## Guides",
    ...POSTS.map((p) => `- [${p.h1}](${base}/blog/${p.slug}/): ${p.answer}`),
    "",
  ];
  return lines.join("\n");
}
