export type Post = {
  slug: string;
  title: string; // ≤ 60 chars (used as <title>)
  description: string; // ≤ 155 chars
  h1: string;
  primaryKeyword: string;
  published: string; // ISO date
  updated: string; // ISO date, content-sourced (FR54)
  author: { name: string; role: string };
  /** 40–60 word direct answer at the top (FR37/FR55). */
  answer: string;
  tldr: [string, string, string];
  /** Each paragraph is a self-contained unit: names the brand or place, no leading pronoun. */
  sections: { heading: string; paragraphs: string[]; table?: { caption: string; head: string[]; rows: string[][] } }[];
  callAPro: { text: string; href: string; label: string };
  faqs: { q: string; a: string }[];
  sources: { label: string; url: string }[];
  related: [string, string];
};
