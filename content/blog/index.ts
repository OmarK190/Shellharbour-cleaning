// Blog posts (PRD FR37, FR54, FR55). Keyword targets: Semrush AU database, 2026-11-19
// (see docs/research/illawarra-keywords.md §0b).
import type { Post } from "./types";
import { endOfLeaseCleaningCost } from "./end-of-lease-cleaning-cost";
import { howMuchDoesCarpetCleaningCost } from "./how-much-does-carpet-cleaning-cost";
import { houseCleaningPricesWollongong } from "./house-cleaning-prices-wollongong";
import { doesNdisCoverCleaning } from "./does-ndis-cover-cleaning";

export type { Post } from "./types";

export const POSTS: Post[] = [endOfLeaseCleaningCost, howMuchDoesCarpetCleaningCost, houseCleaningPricesWollongong, doesNdisCoverCleaning];

export function getPost(slug: string): Post {
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) throw new Error(`Unknown post: ${slug}`);
  return post;
}

const count = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

/** Words a reader sees in the article body (answer, TL;DR, sections, tables, call-a-pro, FAQ). */
export function postWordCount(p: Post): number {
  const parts = [
    p.h1,
    p.answer,
    ...p.tldr,
    ...p.sections.flatMap((s) => [s.heading, ...s.paragraphs, ...(s.table ? [s.table.caption, ...s.table.head, ...s.table.rows.flat()] : [])]),
    p.callAPro.text,
    ...p.faqs.flatMap((f) => [f.q, f.a]),
  ];
  return parts.reduce((n, s) => n + count(s), 0);
}
