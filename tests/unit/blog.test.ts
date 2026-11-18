import { POSTS, getPost, postWordCount, type Post } from "@/content/blog";
import { PAGES } from "@/lib/seo/registry";
import { BANNED_PHRASES } from "../../scripts/checks/lib.mjs";

const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;
const allParagraphs = (p: Post) => [p.answer, ...p.sections.flatMap((s) => s.paragraphs), ...p.faqs.map((f) => f.a)];

test("four launch posts with unique slugs and no dates in URLs", () => {
  expect(POSTS.length).toBeGreaterThanOrEqual(4);
  const slugs = POSTS.map((p) => p.slug);
  expect(new Set(slugs).size).toBe(slugs.length);
  for (const s of slugs) expect(s).toMatch(/^[a-z0-9-]+$/);
  for (const s of slugs) expect(s).not.toMatch(/\d{4}/);
});

describe.each(POSTS.map((p) => [p.slug, p] as const))("%s", (_slug, post) => {
  test("answer-first: 40–60 word answer naming the brand", () => {
    expect(words(post.answer)).toBeGreaterThanOrEqual(40);
    expect(words(post.answer)).toBeLessThanOrEqual(60);
    expect(post.answer).toContain("Shellharbour Cleaning");
  });

  test("TL;DR has exactly 3 bullets", () => {
    expect(post.tldr).toHaveLength(3);
  });

  test("900–1,600 words", () => {
    const n = postWordCount(post);
    expect(n).toBeGreaterThanOrEqual(900);
    expect(n).toBeLessThanOrEqual(1600);
  });

  test("every paragraph is a self-contained unit: names the brand or a place, and is 35+ words", () => {
    for (const para of post.sections.flatMap((s) => s.paragraphs)) {
      expect(words(para), para.slice(0, 60)).toBeGreaterThanOrEqual(35);
      expect(para, para.slice(0, 60)).toMatch(/Shellharbour Cleaning|Shellharbour|Kiama|Dapto|Wollongong|Illawarra|NSW|NDIS/);
      expect(para.trimStart(), para.slice(0, 60)).not.toMatch(/^(This|It|They|These|That|Also|However)\b/);
    }
  });

  test("question-phrased H2s for at least half the sections", () => {
    const q = post.sections.filter((s) => s.heading.trim().endsWith("?")).length;
    expect(q).toBeGreaterThanOrEqual(Math.ceil(post.sections.length / 2));
  });

  test("has 4–8 FAQs, a 'when to call a pro' link to one service page, and two related posts", () => {
    expect(post.faqs.length).toBeGreaterThanOrEqual(4);
    expect(post.faqs.length).toBeLessThanOrEqual(8);
    expect(post.callAPro.href).toMatch(/^\/services\/[a-z-]+\/$/);
    expect(post.related).toHaveLength(2);
    for (const r of post.related) expect(POSTS.map((p) => p.slug)).toContain(r);
  });

  test("has at least one hard number and cited sources", () => {
    expect(allParagraphs(post).join(" ")).toMatch(/\$\d/);
    expect(post.sources.length).toBeGreaterThanOrEqual(1);
    for (const s of post.sources) expect(s.url).toMatch(/^https:\/\//);
  });

  test("dates are content-sourced ISO dates and the page is registered", () => {
    expect(post.published).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(post.updated).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    const entry = PAGES.find((p) => p.path === `/blog/${post.slug}/`);
    expect(entry?.pageType).toBe("blog");
    expect(entry?.updated).toBe(post.updated);
  });

  test("no banned or vague phrases", () => {
    const text = allParagraphs(post).join(" ").toLowerCase();
    for (const phrase of BANNED_PHRASES) expect(text).not.toContain(phrase);
  });
});

test("getPost throws for unknown slugs", () => {
  expect(() => getPost("nope")).toThrow();
});
