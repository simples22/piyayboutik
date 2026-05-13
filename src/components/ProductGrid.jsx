"use client";

import Link from "next/link";

export default function ProductGrid({ products = [] }) {
  function trackClick(product) {
    console.log("Product view:", product.title);
  }

  return (
    <section className="pbProducts">
      <div className="pbProductsGrid">
        {products.map((product) => {
          const productUrl = `/shop/${product.slug}`;

          return (
            <article className="pbProductCard" key={product.id}>
              <Link
                href={productUrl}
                onClick={() => trackClick(product)}
                className="pbProductImageLink"
                aria-label={`View ${product.title}`}
              >
                <span className="pbProductBadge">{product.category}</span>

                <img
                  src={product.image}
                  alt={product.title}
                  className="pbProductImg"
                />
              </Link>

              <div className="pbProductBody">
                <div className="pbProductMeta">
                  <span>{product.category}</span>
                  <strong>{product.priceValue}</strong>
                </div>

                <h3>{product.title}</h3>

                <Link
                  href={productUrl}
                  onClick={() => trackClick(product)}
                  className="pbProductBtn"
                >
                  View Product →
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}