import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faWandMagicSparkles,
  faUserTie,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { guides } from "@/data/guides";

const icons = [faLeaf, faWandMagicSparkles, faUserTie, faArrowRight];

export default function GuideCards() {
  return (
    <section className="pbGuideCardsSection">
      <div className="pbContainer">
        <div className="pbGuideCardsGrid">
          {guides.map((guide, index) => (
            <Link
              href={`/skincare-guide/${guide.slug}`}
              className="pbGuideCard"
              key={guide.slug}
            >
              <div className="pbGuideIcon">
                <FontAwesomeIcon icon={icons[index] || faLeaf} />
              </div>

              <span>{guide.category}</span>
              <h3>{guide.title}</h3>
              <p>{guide.excerpt}</p>

              <strong>
                View more <FontAwesomeIcon icon={faArrowRight} />
              </strong>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}