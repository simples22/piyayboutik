import Link from "next/link";
import { notFound } from "next/navigation";
import { marykayProducts } from "@/data/marykayProducts";
import CategorySection from "@/components/CategorySection";
import MaryKayDisclaimerSection from "@/components/MaryKayDisclaimerSection";
import FAQSection from "@/components/FAQSection";

export function generateStaticParams() {
  return marykayProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = marykayProducts.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found | AVE® Cosmetics",
    };
  }

  return {
    title: `${product.title} | AVE® Cosmetics`,
    description: product.description,
    alternates: {
      canonical: `/shop/${product.slug}`,
    },
    openGraph: {
      title: `${product.title} | AVE® Cosmetics`,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },
  };
}

export default async function ProductDetailsPage({ params }) {
  const { slug } = await params;
  const product = marykayProducts.find((item) => item.slug === slug);

  if (!product) notFound();

  return (
    <main className="pbProductDetailsPage">
      <section className="pbProductDetailsHero">
        <div className="pbContainer">
          <Link href="/shop" className="pbMiniLink">
            ← Back to Shop
          </Link>

          <div className="pbProductDetailsGrid">
            <div className="pbProductDetailsMedia">
              <img src={product.image} alt={product.title} />
            </div>

            <div className="pbProductDetailsContent">
              <span className="pbProductBadge">{product.category}</span>

              <h1>{product.title}</h1>

              <strong className="pbProductDetailsPrice">
                {product.priceValue}
              </strong>

              <p>{product.description}</p>

              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="pbProductBtn"
              >
                Buy Now →
              </a>

              <p className="pbProductDisclosure">

        
                AVE™ Cosmetics features carefully selected beauty and skincare
                collections designed to support quality, confidence, and everyday
                self-care experiences through trusted beauty product recommendations.
            

                This product may direct puschase on the official Mary Kay® website for
                final checkout. AVE™ Cosmetics may receive a commission from
                qualifying purchases.
              </p>
            </div>
          </div>
        </div>
        <CategorySection />
        <MaryKayDisclaimerSection className="pbProductDisclaimerSectionSlug" />
        <FAQSection limit={5} showViewAll={true} />
      </section>
    </main>
  );
}