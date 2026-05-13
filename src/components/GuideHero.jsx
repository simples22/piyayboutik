import Image from "next/image";
import PBImage from "./PBImage";

export default function GuideHero() {
  return (
    <section className="pbGuideHero">
      <div className="pbContainer pbGuideHeroInner">

        <div className="pbGuideHeroMedia">
          <PBImage
            src="/images/guide-hero-1.jpg"
            alt="Beauty guide and Mary Kay product support"
            fill
            priority
            className="pbGuideHeroImg"
          />
        </div>

        <div className="pbGuideHeroText">
          <h1>Mary Kay product guidance and consultant support.</h1>
          <p>
            Explore product education, skincare routine tips, paraben-free
            awareness, and information about becoming a Mary Kay Independent
            Beauty Consultant.
          </p>
        </div>
      </div>
    </section>
  );
}