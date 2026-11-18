import { PAGES, pageMeta, canonicalUrl } from "@/lib/seo/registry";
import { organizationJsonLd, localBusinessJsonLd, breadcrumbJsonLd, faqJsonLd, personJsonLd } from "@/lib/seo/schema";
import { SITE } from "@/config/site";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";

afterEach(() => {
  delete process.env.DEPLOY_ENV;
});

test("every registered page meets title/description/path rules", () => {
  for (const p of PAGES) {
    expect(p.title.length, p.path).toBeLessThanOrEqual(60);
    expect(p.description.length, p.path).toBeLessThanOrEqual(155);
    expect(p.path).toMatch(/^\/([a-z0-9-]+\/)*$/);
  }
});

test("one URL per primary keyword", () => {
  const kws = PAGES.map((p) => p.primaryKeyword);
  expect(new Set(kws).size).toBe(kws.length);
});

test("every page has a content-sourced updated date", () => {
  for (const p of PAGES) expect(p.updated, p.path).toMatch(/^\d{4}-\d{2}-\d{2}$/);
});

test("canonical strips query and keeps trailing slash", () => {
  expect(canonicalUrl("/?utm_source=gbp&utm_medium=organic")).toBe("https://staging.shellharbourcleaning.invalid/");
  expect(canonicalUrl("/locations/kiama")).toBe("https://staging.shellharbourcleaning.invalid/locations/kiama/");
});

test("pageMeta uses registry title, description and canonical", () => {
  const m = pageMeta("/");
  expect(m.title).toEqual({ absolute: PAGES[0].title });
  expect(m.description).toBe(PAGES[0].description);
  expect(m.alternates?.canonical).toBe("https://staging.shellharbourcleaning.invalid/");
});

test("organization has stable @id, logo, description; no sameAs/foundingDate while unset", () => {
  const o = organizationJsonLd();
  expect(o["@id"]).toMatch(/#organization$/);
  expect(o.logo).toMatch(/\/brand\/logo\.png$/);
  expect(typeof o.description).toBe("string");
  expect(o).not.toHaveProperty("sameAs");
  expect(o).not.toHaveProperty("foundingDate");
});

test("local business has no aggregateRating, phone or address while unset, and serves four hubs", () => {
  const lb = localBusinessJsonLd(SITE.hubs);
  expect(lb["@type"]).toEqual(["LocalBusiness", "HouseCleaning"]);
  expect(lb).not.toHaveProperty("aggregateRating");
  expect(lb).not.toHaveProperty("telephone");
  expect(lb).not.toHaveProperty("address");
  expect((lb.areaServed as unknown[]).length).toBe(4);
});

test("breadcrumb, faq and person builders", () => {
  const b = breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Kiama", path: "/locations/kiama/" }]);
  expect((b.itemListElement as { position: number }[]).map((i) => i.position)).toEqual([1, 2]);
  const f = faqJsonLd([{ q: "Q?", a: "A." }]);
  expect(f["@type"]).toBe("FAQPage");
  const p = personJsonLd({ name: "Sam", role: "Manager", linkedin: "https://www.linkedin.com/in/x" });
  expect(p.sameAs).toEqual(["https://www.linkedin.com/in/x"]);
});

test("robots disallows all outside production", () => {
  process.env.DEPLOY_ENV = "staging";
  const r = robots();
  expect(r.rules).toEqual({ userAgent: "*", disallow: "/" });
});

test("robots allows AI crawlers in production", () => {
  process.env.DEPLOY_ENV = "production";
  const r = robots();
  const agents = (Array.isArray(r.rules) ? r.rules : [r.rules]).flatMap((x) => x.userAgent);
  for (const a of ["Googlebot", "Bingbot", "OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "Google-Extended"]) {
    expect(agents).toContain(a);
  }
});

test("sitemap lists indexable pages with lastModified from content", () => {
  const s = sitemap();
  expect(s.length).toBe(PAGES.filter((p) => p.indexable).length);
  expect(s[0].lastModified).toBe(PAGES[0].updated);
});
