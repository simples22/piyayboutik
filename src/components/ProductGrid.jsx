"use client";

export default function ProductGrid({ products = [] }) {
  function trackClick(product) {
    console.log("Affiliate click:", product.title);
  }

  return (
    <section className="pbProducts">
      <div className="pbProductsGrid">
        {products.map((product) => (
          <article className="pbProductCard" key={product.id}>
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer sponsored"
              onClick={() => trackClick(product)}
              className="pbProductImageLink"
              aria-label={`Shop ${product.title}`}
            >
              <span className="pbProductBadge">{product.category}</span>

              <img
                src={product.image}
                alt={product.title}
                className="pbProductImg"
              />
            </a>

            <div className="pbProductBody">
              <div className="pbProductMeta">
                <span>{product.category}</span>
                <strong>{product.priceValue}</strong>
              </div>

              <h3>{product.title}</h3>
{/*
              <p>{product.description}</p>
*/}
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer sponsored"
                onClick={() => trackClick(product)}
                className="pbProductBtn"
              >
                Shop Now →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}