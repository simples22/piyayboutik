"use client";

import { useRef } from "react";
import Image from "next/image";

const categories = [
  {
    name: "New Products",
    link: "https://www.marykay.com/piyayboutik.com/en/new-products",
  },
  {
    name: "Skincare",
    link: "https://www.marykay.com/piyayboutik.com/en/skincare",
  },
  {
    name: "Makeup",
    link: "https://www.marykay.com/piyayboutik.com/en/makeup",
  },
  {
    name: "Body & Sun",
    link: "https://www.marykay.com/piyayboutik.com/en/body-sun",
  },
  {
    name: "Fragrances",
    link: "https://www.marykay.com/piyayboutik.com/en/fragrance",
  },
  {
    name: "Mens",
    link: "https://www.marykay.com/piyayboutik.com/en/mens",
  },
  {
    name: "Women's Fragrance",
    link: "https://www.marykay.com/piyayboutik.com/en/fragrance/womens-collection",
  },
  {
    name: "Collection Care",
    link: "https://www.marykay.com/piyayboutik.com/en/skincare/collection",
  },
  {
    name: "Gifts",
    link: "https://www.marykay.com/piyayboutik.com/en/gifts",
  },
];

export default function CategorySection() {
  const trackRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (!trackRef.current) return;

    trackRef.current.scrollBy({
      left: direction === "next" ? 320 : -320,
      behavior: "smooth",
    });
  };

  function trackClick(category) {
    console.log("Category click:", category.name);
  }

  return (
    <section className="pbSection pbSoft pbCategorySection">
      <div className="pbContainer">

        <div className="pbSectionHead pbCategoryHead">
          <div>
            <h2>Choose a product destination</h2>
          </div>

          <div className="pbCategoryControls">
            <button type="button" onClick={() => scrollCarousel("prev")}>
              ←
            </button>
            <button type="button" onClick={() => scrollCarousel("next")}>
              →
            </button>
          </div>
        </div>

        <div className="pbCategoryCarousel">
          <div className="pbCategoryTrack" ref={trackRef}>
            {categories.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer sponsored"
                onClick={() => trackClick(item)}
                className="pbCategoryCard"
              >
                <small>Mary Kay® Destination</small>
                <h3>{item.name}</h3>
                <span>Explore →</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}