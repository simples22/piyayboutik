"use client";

import { marykayProducts } from "@/data/marykayProducts";

export default function FragranceProductsSection() {
  const fragranceProducts = marykayProducts
    .filter((product) => product.category === "Fragrance")
    .slice(0, 4);

  function trackClick(product) {
    console.log("Fragrance click:", product.title);
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
          <a
            href="https://marykay.com/piyayboutik.com"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="pbMiniLink"
          >
            View All →
          </a>
        </div>

        <div className="pbFragranceGrid">
          {fragranceProducts.map((product) => (
            <article className="pbFragranceCard" key={product.id}>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer sponsored"
                onClick={() => trackClick(product)}
                className="pbFragranceMedia"
              >
                <img src={product.image} alt={product.title} />
              </a>

              <div className="pbFragranceBody">
                <span>{product.category}</span>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <strong>{product.price}</strong>

                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  onClick={() => trackClick(product)}
                >
                  Shop Now →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}