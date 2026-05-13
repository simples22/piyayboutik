"use client";

import ProductGrid from "@/components/ProductGrid";
import { marykayProducts } from "@/data/marykayProducts";
import Link from "next/link";
import { useRef } from "react";

export default function FeaturedProducts() {
  const featured = marykayProducts.filter((item) => item.featured).slice(0, 9);
  const trackRef = useRef(null);

  function scroll(dir) {
    const grid = trackRef.current?.querySelector(".pbProductsGrid");
    if (!grid) return;

    grid.scrollBy({
      left: dir === "next" ? 320 : -320,
      behavior: "smooth",
    });
  }

  return (
    <section className="pbSection">
      <div className="pbContainer">
        <div className="HeadBeauty">
          <h1>Featured Products</h1>
        </div>

        <div className="pbSectionHead pbSectionHeadFlex">
          <div>
            <h2>Selected beauty essentials</h2>
            <p>
              Premium product picks for skincare, makeup and daily beauty routines.
            </p>
          </div>

          <div className="pbSectionActions">
            <div className="pbCarouselBtns">
              <button type="button" onClick={() => scroll("prev")}>
                ←
              </button>
              <button type="button" onClick={() => scroll("next")}>
                →
              </button>
            </div>

            <Link href="/shop" className="pbBtn pbBtnLight2">
              View All →
            </Link>
          </div>
        </div>

        <div ref={trackRef} className="pbProductsScroll">
          <ProductGrid products={featured} />
        </div>
      </div>
    </section>
  );
}