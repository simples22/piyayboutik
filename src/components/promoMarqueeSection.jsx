import Image from "next/image";
import PBImage from "./PBImage";

const promoProducts = [
  {
    id: 1,
    title: "MKMen® Regimen Men Products",
    image: "/images/products/regimen-men-product-1.jpg",
    discount: "15% OFF",
    minimum: "Minimum purchase $125.00",
  },
  {
    id: 2,
    title: "Mary Kay Illuminea™ Extrait de Parfum",
    image: "/images/products/uliminea-fragance-product-2.jpg",
    discount: "19% OFF",
    minimum: "Minimum purchase $135.00",
  },
  {
    id: 3,
    title: "TimeWise® Miracle Set®",
    image: "/images/products/miracle-set-product-3.jpg",
    discount: "15% OFF",
    minimum: "Minimum purchase $200.00",
  },
  {
    id: 4,
    title: "Mary Kay Clinical Solutions® Retinol 0.3",
    image: "/images/products/clinical-solution-product-4.jpg",
    discount: "20% OFF",
    minimum: "Minimum purchase $145.00",
  },
];

function getWhatsAppLink(product) {
  const message = `Hello, I would like to confirm this promotional purchase.

Product: ${product.title}
Promotion: ${product.discount}
${product.minimum}

I understand that this promotion applies only to direct purchases confirmed through your official WhatsApp Business catalog.`;

  return `https://wa.me/19413921221?text=${encodeURIComponent(message)}`;
}

export default function PromoMarqueeSection() {
  const items = [...promoProducts, ...promoProducts];

  return (
    <section className="pbPromoMarqueeSection">
      <div className="pbPromoMarqueeWrap">
        <div className="pbPromoMarqueeTrack">
          {items.map((product, index) => (
            <article
              className="pbPromoMarqueeCard"
              key={`${product.id}-${index}`}
            >
              <div className="pbPromoMarqueeImage">
                <PBImage
                  src={product.image}
                  alt={product.title}
                  width={130}
                  height={130}
                />
              </div>

              <div className="pbPromoMarqueeContent">
                <strong>{product.discount}</strong>

                <h3>{product.title}</h3>

                <p>{product.minimum}</p>

                <a
                  href={getWhatsAppLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pbPromoWhatsappBtn"
                >
                  Confirm promo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="pbPromoMarqueeContainer">
        <p className="pbPromoMarqueeNotice">
          <strong>NOTICE: </strong> Promotions and product prices may change at
          any time based on availability, seasonal campaigns and exclusive
          beauty offers. The following promotions apply only to direct purchases
          confirmed through our official web site or the WhatsApp Business catalog party.
        </p>
      </div>
    </section>
  );
}