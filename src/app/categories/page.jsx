import Image from "next/image"; // ✅ AJOUT IMPORTANT
import AffiliateCTA from "@/components/AffiliateCTA";
import CategorySection from "@/components/CategorySection";
import PBImage from "@/components/PBImage";

export default function CategoriesPage() {
  return (
    <>
    <main className="pbPage">
<div className="pbContainer">
      {/* HERO */}
      <div className="pbCategoryHero">

        <div className="pbCategoryHeroMedia">
          <PBImage
            src="/images/categorys-hero.jpg"
            alt="Mary Kay beauty category products"
            fill
            priority
            className="pbCategoryHeroImg"
          />
        </div>

        <div className="pbCategoryHeroText">
          <h1>Shop by beauty you needs</h1>
          <p>
            Explore curated category destinations and continue directly to the
            official Mary Kay platform through your consultant link.
          </p>
        </div>

      </div>
      </div>
</main>
      <CategorySection />
      <AffiliateCTA />

    </>
  );
}