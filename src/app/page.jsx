import HomeHero from "@/components/HomeHero";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategorySection from "@/components/CategorySection";
import BeautyTips from "@/components/BeautyTips";
import FAQSection from "@/components/FAQSection";
import AffiliateCTA from "@/components/AffiliateCTA";
import FragranceProductsSection from "@/components/FragranceProductsSection";
import Notice from "@/components/Notice";
import PromoMarqueeSection from "@/components/promoMarqueeSection";
import JoinNowPromoGrid from "@/components/JoinMyTeam/JoinNowPromo";
export default function HomePage() {
  return (
    <main>
    
      <HomeHero />
      <PromoMarqueeSection />
      <FeaturedProducts />
      <CategorySection />
          <Notice />
      <FragranceProductsSection />
      <BeautyTips />
      <FAQSection limit={5} showViewAll={true} />
      <JoinNowPromoGrid />
      <AffiliateCTA />
    </main>
  );
}