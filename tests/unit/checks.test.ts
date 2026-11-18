import { run as content } from "../../scripts/checks/check-content.mjs";
import { run as links } from "../../scripts/checks/check-links.mjs";
import { run as schema } from "../../scripts/checks/check-schema.mjs";
import { run as images } from "../../scripts/checks/check-images.mjs";
import { run as duplicates } from "../../scripts/checks/check-duplicates.mjs";

const page = (body: string, title = "Title", desc = "Desc") =>
  `<html><head><title>${title}</title><meta name="description" content="${desc}"></head><body>${body}</body></html>`;

const ctx = {
  phoneE164: null as string | null,
  ratingNull: true,
  production: false,
  pages: [
    { path: "/", pageType: "home", indexable: true },
    { path: "/a/", pageType: "service", indexable: true },
    { path: "/b/", pageType: "service", indexable: true },
  ],
  images: [
    { id: "hero", src: "/images/hero.jpg", sourceType: "stock-people" },
    { id: "team1", src: "/images/team1.jpg", sourceType: "real-team" },
  ],
};

describe("check-content", () => {
  test("flags emoji and banned phrases", () => {
    const fails = content([{ path: "/x/", html: page("<h1>A</h1><p>Unlock a seamless clean ✨</p>") }], ctx).join(" ");
    expect(fails).toMatch(/emoji/);
    expect(fails).toMatch(/unlock/);
    expect(fails).toMatch(/seamless/);
  });
  test("flags vague claims", () => {
    expect(content([{ path: "/x/", html: page("<h1>A</h1><p>Many customers prefer us.</p>") }], ctx).join(" ")).toMatch(/many customers/);
  });
  test("flags two h1s and zero h1s", () => {
    expect(content([{ path: "/y/", html: page("<h1>A</h1><h1>B</h1>") }], ctx).join(" ")).toMatch(/h1/);
    expect(content([{ path: "/z/", html: page("<p>x</p>") }], ctx).join(" ")).toMatch(/h1/);
  });
  test("flags long title and description", () => {
    const f = content([{ path: "/x/", html: page("<h1>A</h1>", "t".repeat(61), "d".repeat(156)) }], ctx).join(" ");
    expect(f).toMatch(/title/);
    expect(f).toMatch(/description/);
  });
  test("flags CleanerAtDoor identifiers and tel links while phone unset", () => {
    const f = content([{ path: "/x/", html: page('<h1>A</h1><p>Munno Para</p><a href="tel:+61300381988">Call</a>') }], ctx).join(" ");
    expect(f).toMatch(/Munno Para/);
    expect(f).toMatch(/tel/);
  });
  test("clean page passes", () => {
    expect(content([{ path: "/x/", html: page("<h1>House cleaning</h1><p>From $121.</p>") }], ctx)).toEqual([]);
  });
});

describe("check-links", () => {
  const files = [
    { path: "/", html: page('<h1>H</h1><a href="/a/">a</a><a href="/missing/">m</a><a href="/_next/x.js">js</a><a href="https://example.com">e</a>') },
    { path: "/a/", html: page('<h1>A</h1><a href="/">home</a>') },
    { path: "/b/", html: page("<h1>B</h1>") },
  ];
  test("flags orphan indexable page and broken link in production", () => {
    const f = links(files, { ...ctx, production: true }).join(" ");
    expect(f).toMatch(/orphan.*\/b\//);
    expect(f).toMatch(/\/missing\//);
  });
  test("unknown internal links are allowed outside production", () => {
    expect(links(files, ctx).join(" ")).not.toMatch(/\/missing\//);
  });
});

describe("check-schema", () => {
  const ld = (o: unknown) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`;
  test("flags invalid JSON-LD", () => {
    expect(schema([{ path: "/", html: page('<h1>A</h1><script type="application/ld+json">{bad</script>') }], ctx).join(" ")).toMatch(/parse/);
  });
  test("flags aggregateRating while rating is null", () => {
    const html = page("<h1>A</h1>" + ld({ "@type": ["LocalBusiness", "HouseCleaning"], "@id": "x", name: "n", areaServed: [], aggregateRating: {} }));
    expect(schema([{ path: "/", html }], ctx).join(" ")).toMatch(/aggregateRating/);
  });
  test("flags FAQPage with fewer than 4 questions", () => {
    expect(schema([{ path: "/", html: page("<h1>A</h1>" + ld({ "@type": "FAQPage", mainEntity: [{}] })) }], ctx).join(" ")).toMatch(/FAQPage/);
  });
});

describe("check-images", () => {
  test("flags missing alt and unregistered image", () => {
    const f = images([{ path: "/", html: page('<h1>A</h1><img src="/images/hero.jpg" alt=""><img src="/images/x.jpg" alt="x thing here">') }], ctx).join(" ");
    expect(f).toMatch(/alt/);
    expect(f).toMatch(/not in manifest/);
  });
  test("flags stock image in team slot and image reused across pages", () => {
    const f = images(
      [
        { path: "/", html: page('<h1>A</h1><div data-slot="team"><img src="/images/hero.jpg" alt="A cleaner at work"></div>') },
        { path: "/a/", html: page('<h1>B</h1><img src="/images/hero.jpg" alt="A cleaner at work">') },
      ],
      ctx,
    ).join(" ");
    expect(f).toMatch(/slot/);
    expect(f).toMatch(/more than one page/);
  });
  test("decodes next/image optimiser URLs", () => {
    const html = page('<h1>A</h1><img src="/_next/image/?url=%2Fimages%2Fhero.jpg&amp;w=1200&amp;q=75" alt="A cleaner at work">');
    expect(images([{ path: "/", html }], ctx)).toEqual([]);
  });
});

describe("check-duplicates", () => {
  const para = "<p>" + "word ".repeat(30).trim() + "</p>";
  test("flags a 25+ word paragraph shared by two pages of the same type", () => {
    const f = duplicates([{ path: "/a/", html: page("<h1>A</h1>" + para) }, { path: "/b/", html: page("<h1>B</h1>" + para) }], ctx).join(" ");
    expect(f).toMatch(/duplicate/);
  });
});
