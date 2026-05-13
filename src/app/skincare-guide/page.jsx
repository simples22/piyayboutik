import GuideHero from "@/components/GuideHero";
import GuideCards from "@/components/GuideCards";
import AffiliateCTA from "@/components/AffiliateCTA";

export const metadata = {
  title: "Guide & Support | Vendermarket.com",
  description:
    "Beauty guide, product support, paraben-free awareness, and Mary Kay Independent Beauty Consultant information.",
};

export default function SkincareGuidePage() {
  return (
    <main className="pbPage">
      <GuideHero />
      <GuideCards />
      <AffiliateCTA />
    </main>
  );
}