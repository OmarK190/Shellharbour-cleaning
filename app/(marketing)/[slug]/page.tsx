import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GUIDES, getGuide } from "@/content/guides";
import { pageMeta } from "@/lib/seo/registry";
import { GuideArticle } from "@/components/pages/GuideArticle";

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return pageMeta(`/${slug}/`);
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!GUIDES.some((g) => g.slug === slug)) notFound();
  return <GuideArticle g={getGuide(slug)} />;
}
