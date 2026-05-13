import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import ShopSearchLayer from "@/components/ShopSearchLayer";
import ShopProductsClient from "@/components/ShopProductsClient";
import { marykayProducts } from "@/data/marykayProducts";
import MaryKayDisclaimerSection from "@/components/MaryKayDisclaimerSection";
import PBImage from "@/components/PBImage";

export const metadata = {
  title: "Shop avecosmetico Products | By Mary Kay",
  description:
    "Explore Mary Kay product destinations through avecosmetico.com, an independent platform operated by a Mary Kay Independent Beauty Consultant.",
};

export default function ShopPage() {
  return (
    <main className="pbPage">
      <section className="pbPageHero pbShopHero">
        <div className="pbShopHeroBg">
          <PBImage
            src="/images/shop-hero.jpg"
            alt="Mary Kay beauty products"
            fill
            priority
            className="pbShopHeroImg"
          />
        </div>

        <div className="pbContainer pbShopHeroInner">
          <h1>Products supply by Consultant</h1>

          <div className="pbSearchStickyWrap">
            <ShopSearchLayer />
          </div>
        </div>
      </section>
            <ShopProductsClient products={marykayProducts} />
            <MaryKayDisclaimerSection />
    </main>
  );
}