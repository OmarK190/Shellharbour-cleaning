// Image register (PRD FR51, owner image rule 2026-11-19).
// - People: free, watermark-free, high-resolution stock with a commercial licence ("stock-people"),
//   or real photos ("real-team", "real-job"). Never AI-generated.
// - Non-people cleaning scenes: AI-generated ("ai-scene") or stock ("stock-scene").
// - Team, before/after and gallery slots accept real photos only (enforced by check-images).
// Every image here must also appear in public/images/CREDITS.md.

export type ImageSource = "stock-people" | "stock-scene" | "ai-scene" | "real-team" | "real-job";

export type ManifestImage = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  sourceType: ImageSource;
  /** Photographer + platform + URL, or "AI-generated, {tool}, {date}", or "Own photo, {date}". */
  credit: string;
  showsPeople: boolean;
};

// Empty until the owner approves stock picks or supplies photos (see ledger and CREDITS.md).
export const IMAGES: ManifestImage[] = [];

export function image(id: string): ManifestImage {
  const found = IMAGES.find((i) => i.id === id);
  if (!found) throw new Error(`Unknown image: ${id}`);
  return found;
}

export function validateManifest(list: ManifestImage[]): string[] {
  const errors: string[] = [];
  const ids = new Set<string>();
  const srcs = new Set<string>();
  for (const i of list) {
    if (i.showsPeople && !["stock-people", "real-team", "real-job"].includes(i.sourceType)) {
      errors.push(`${i.id}: images of people must be stock or real photos, never AI (${i.sourceType})`);
    }
    if (i.alt.trim().length < 10) errors.push(`${i.id}: alt text too short`);
    if (i.credit.trim().length < 4) errors.push(`${i.id}: credit missing`);
    if (ids.has(i.id)) errors.push(`${i.id}: duplicate id`);
    if (srcs.has(i.src)) errors.push(`${i.src}: duplicate src`);
    ids.add(i.id);
    srcs.add(i.src);
  }
  return errors;
}
