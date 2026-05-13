"use client";

import Link from "next/link";
import { marykayProducts } from "@/data/marykayProducts";

export default function FragranceProductsSection() {
  const fragranceProducts = marykayProducts
    .filter((product) => product.category === "Fragrance")
    .slice(0, 4);

  function trackClick(product) {
    console.log("Fragrance view:", product.title);
  }

  return (
    <section className="pbFragranceSection">
      <div className="HeadBeauty">
        <h1> Our Fragrance Products</h1>
      </div>

      <div className="pbContainer">
        <div className="pbFragranceHead">
          <div>
            <h2>Signature scents for everyday confidence</h2>
          </div>

          <Link href="/shop" className="pbMiniLink">
            View All →
          </Link>
        </div>

        <div className="pbFragranceGrid">
          {fragranceProducts.map((product) => {
            const productUrl = `/shop/${product.slug}`;

            return (
              <article className="pbFragranceCard" key={product.id}>
                <Link
                  href={productUrl}
                  onClick={() => trackClick(product)}
                  className="pbFragranceMedia"
                >
                  <img src={product.image} alt={product.title} />
                </Link>

                <div className="pbFragranceBody">
                  <span>{product.category}</span>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <strong>{product.priceValue}</strong>

                  <Link
                    href={productUrl}
                    onClick={() => trackClick(product)}
                  >
                    View Product →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}