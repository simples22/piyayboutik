import Link from "next/link";
import Image from "next/image";
import PBImage from "./PBImage";

export default function HomeHero() {
  return (
    <section className="pbHero">
      <div className="pbHeroMedia">
        <PBImage
          src="/images/homehero.jpg"
          alt="Mary Kay beauty skincare products"
          fill
          priority
          sizes="100vw"
          className="pbHeroImg"
        />
      </div>

      <div className="pbContainer pbHeroInner">
        <div className="pbHeroContent">
          <h1>Discover ou Beauty, skincare and confidence in one premium destination.</h1>

          <div className="pbHeroActions">
            <Link href="/shop" className="pbBtn">
              Shop Products →
            </Link>

            <a
              href="https://marykay.com/piyayboutik.com"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="pbBtn pbBtnLight"
            >
              Visit Store →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}