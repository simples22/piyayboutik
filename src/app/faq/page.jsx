import FAQSection from "@/components/FAQSection";
import Image from "next/image";

export const metadata = {
  title: "FAQ | PiyayBoutik",
  description:
    "Frequently asked questions about Mary Kay products, consultants, affiliate links and beauty routines.",
};

export default function FAQPage() {
  return (
    <>
              {/* IMAGE UNDER TEXT */}
          <div className="pbFaqHeroMedia">
            <Image
              src="/images/faqshero-hero.jpg"
              alt="Beauty help and skincare guidance"
              fill
              className="pbFaqHeroImg"
              priority
            />
          </div>
    <main className="pbFaqPage">

      {/* HERO */}
      <section className="pbFaqHero">
        <div className="pbContainer pbFaqHeroInner">
          <h1>Questions about Vendermarket.com</h1>
          <p>
            Find answers about product selection, ordering, consultants,
            affiliate links, shipping, returns and skincare routines.
          </p>

        </div>
      </section>

      {/* FAQ */}
      <FAQSection limit={25} showViewAll={false} />

    </main>
    </>
  );
}