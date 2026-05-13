import Image from "next/image";
import PBImage from "./PBImage";

const tips = [
  {
    number: "01",
    title: "Cleanse",
    text: "Start with a gentle cleanser to refresh the skin and prepare it for your routine.",
  },
  {
    number: "02",
    title: "Treat",
    text: "Use serum or targeted care based on your beauty goals and skin needs.",
  },
  {
    number: "03",
    title: "Moisturize",
    text: "Lock in hydration with a comfortable moisturizer for a smoother-looking finish.",
  },
  {
    number: "04",
    title: "Protect",
    text: "Maintain consistency and use daytime protection as part of your daily care.",
  },
];

export default function BeautyTips() {
  return (
    <section className="pbTipsSection">
      <div className="HeadBeauty">
        <h1> Beauty Tips</h1>
        </div>

      <div className="pbContainer pbTipsLayout">
        <div className="pbTipsMedia">
          <PBImage
            src="/images/beauty-tips.jpg"
            alt="Daily skincare routine"
            fill
            className="pbTipsImg"
          />
        </div>

        <div className="pbTipsContent">
          <h2>Build a simple daily skincare routine</h2>
          <p className="pbTipsIntro">
            A refined routine helps your visitors understand how to choose and
            combine beauty essentials with confidence.
          </p>

          <div className="pbTipsList">
            {tips.map((tip) => (
              <article key={tip.number} className="pbTipItem">
                <span>{tip.number}</span>
                <div>
                  <h3>{tip.title}</h3>
                  <p>{tip.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}