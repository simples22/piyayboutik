import Image from "next/image";
import ContactInfoCards from "@/components/ContactInfoCards";
import PBImage from "@/components/PBImage";

export const metadata = {
  title: "Contact | AVE Cosmetics Companies Contact Center",
  description:
    "Contact avecosmetics.com, an customer support will be assist you for your purchase, repport service or others assistance if available.",
};

export default function ContactPage() {
  return (
    <>
    <div className="pbContactHeroMedia">
            <PBImage
              src="/images/contact-hero.jpg"
              alt="Vendermarket contact and beauty support"
              fill
              priority
              className="pbContactHeroImg"
            />
          </div>
    <main className="pbPage">

      <section className="pbContactHero">
        <div className="pbContainer pbContactHeroInner">

          <div className="pbContactHeroText">
            <h1>Contact Vendermarket.com</h1>
            <p>
              Have questions about product discovery, referral links, beauty
              guidance, or continuing to the official Mary Kay platform? Contact
              us directly.
            </p>
          </div>

      <ContactInfoCards />

        </div>
      </section>

      <section className="pbSection">
        <div className="pbContainer pbContactContent">
          <div className="pbContactCard">
            <h2>Support In</h2>

            <p>
              Vendermarket.com is an independent platform operated by a Mary Kay
              Independent Beauty Consultant and is not owned, operated, or
              endorsed by Mary Kay Inc.
            </p>

            <p>
              For order, payment, shipping, return, or official product support,
              please use the official Mary Kay platform where the transaction
              occurs.
            </p>

            <a href="mailto:contact@vendermarket.com" className="pbMiniLink">
              contact@vendermarket.com
            </a>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}