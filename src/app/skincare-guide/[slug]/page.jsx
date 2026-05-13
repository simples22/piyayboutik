import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guides } from "@/data/guides";
import AffiliateCTA from "@/components/AffiliateCTA";
import PBImage from "@/components/PBImage";

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);

  if (!guide) {
    return {
      title: "Guide Not Found | Vendermarket.com",
    };
  }

  return {
    title: `${guide.title} | Vendermarket.com`,
    description: guide.excerpt,
  };
}

export default async function GuideDetailsPage({ params }) {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);

  if (!guide) notFound();

  return (
    <main className="pbGuideSlugPage">
      <section className="pbGuideSlugHero">
        <div className="pbContainer pbGuideSlugHeroInner">
          <div className="pbGuideSlugHeroMedia">
            <PBImage
              src={guide.image || "/images/guides/guide-default.jpg"}
              alt={guide.title}
              fill
              priority
              className="pbGuideSlugHeroImg"
            />
          </div>
          <div className="pbGuideSlugIntro">
            <span className="pbEyebrow">{guide.category}</span>
            <h1>{guide.title}</h1>
            <p>{guide.excerpt}</p>
          </div>
        </div>
      </section>

      <section className="pbGuideSlugContent">
        <div className="pbContainer">
          <div className="pbGuideSlugList">
            {guide.content.map((section, index) => (
              <article className="pbGuideSlugBlock" key={section.heading}>
                <div className="pbGuideSlugBlockText">
                  <span className="pbGuideStep">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h2>{section.heading}</h2>

                  {section.body.map((paragraph, pIndex) => (
                    <p key={`${section.heading}-${pIndex}`}>{paragraph}</p>
                  ))}
                </div>

                {/*<div className="pbGuideSlugBlockMedia">
                  <PBImage
                    src={section.image || "/images/guides/guide-default.jpg"}
                    alt={section.heading}
                    fill
                    className="pbGuideSlugBlockImg"
                  />
                </div>*/}
              </article>
            ))}
          </div>
        </div>
      </section>

      <AffiliateCTA />
    </main>
  );
}