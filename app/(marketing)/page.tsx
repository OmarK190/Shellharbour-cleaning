import { pageMeta } from "@/lib/seo/registry";
import { localBusinessJsonLd, faqJsonLd } from "@/lib/seo/schema";
import { SITE } from "@/config/site";
import { HOME } from "@/content/home";
import { JsonLd } from "@/components/layout/JsonLd";
import { Hero } from "@/components/home/Hero";
import {
  TrustStrip,
  ServiceGrid,
  HowItWorks,
  WhatsIncluded,
  Reviews,
  GuaranteeSummary,
  AreasWeClean,
  Cleaners,
  Faq,
  FinalCta,
} from "@/components/home/Sections";

export const metadata = pageMeta("/");

export default function HomePage() {
  return (
    <main id="main" data-page-type="home">
      <Hero />
      <TrustStrip />
      <ServiceGrid />
      <HowItWorks />
      <WhatsIncluded />
      <Reviews />
      <GuaranteeSummary />
      <AreasWeClean />
      <Cleaners />
      <Faq />
      <FinalCta />
      <JsonLd data={[localBusinessJsonLd(SITE.hubs), faqJsonLd(HOME.faqs)]} />
    </main>
  );
}
