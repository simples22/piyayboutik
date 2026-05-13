import Link from "next/link";

export default function MaryKayDisclaimerSection() {
  return (
    <section className="pbMkDisclaimerSection">
      <div className="pbMkDisclaimerContainer">
        <div className="pbMkDisclaimerBox">
                <div className="HeadBeauty">
                    <h1>Why Mary Kay</h1>
                 </div>
          <h2>
            About Mary Kay Beauty Products
          </h2>

          <p className="pbMkDisclaimerText">
            Mary Kay® beauty and skincare products are developed through decades of
            research, innovation and ingredient testing designed to support skin comfort,
            hydration and daily beauty care routines. Several Mary Kay Naturally™
            collections are formulated with naturally derived ingredients and botanical
            extracts while selected product lines are created without parabens,
            phthalates, synthetic fragrances, synthetic dyes and SLS/SLES according to
            official Mary Kay® product information and third-party certification references.
            Mary Kay also highlights the use of ingredients such as vitamins,
            antioxidant-rich botanical extracts, aloe-based elements, floral waters,
            nourishing oils and skin-conditioning agents in various skincare solutions
            intended to help improve the appearance, softness and overall feel of the
            skin. Product experiences and skin compatibility may vary depending on skin
            type, sensitivities and individual use conditions. Customers are encouraged to
            carefully review product labels, ingredient information and usage directions
            before application. By browsing or purchasing through our platform, you also
            agree to review our{" "}
            <a href="/terms-and-conditions">Terms & Conditions</a>,{" "}
            <a href="/privacy-policy">Privacy Policy</a>,{" "}
            <a href="/shipping-policy">Shipping Policy</a> and{" "}
            <a href="/refund-policy">Refund Policy</a>. Our platform independently
            promotes selected Mary Kay® products and opportunities while respecting public
            brand information, product transparency and responsible beauty communication.
            </p>
        </div>
      </div>
    </section>
  );
}