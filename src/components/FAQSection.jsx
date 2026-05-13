"use client";

import Link from "next/link";
import { useState } from "react";
import { faChevronDown, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faqs } from "@/data/faqs";

export default function FAQSection({ limit = 5, showViewAll = true }) {
  const items = faqs.slice(0, limit);
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="pbFaqSection pbSoft">
      <div className="HeadBeauty">
        <h1> FAQS </h1>
        </div>
      <div className="pbContainer">
        <div className="pbSectionHead pbFaqHead">
          <div>
            <h2>Frequently Asked Questions</h2>
            <p>
              Helpful answers about Mary Kay products, consultants, affiliate links,
              ordering and beauty routines.
            </p>
          </div>
        </div>

        <div className="pbFaq">
          {items.map((item, index) => (
            <article
              className={`pbFaqItem ${openIndex === index ? "active" : ""}`}
              key={item.question}
            >
              <button
                type="button"
                className="pbFaqQuestion"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="pbFaqIcon">
                  <FontAwesomeIcon icon={faCircleQuestion} />
                </span>

                <span>{item.question}</span>

                <FontAwesomeIcon icon={faChevronDown} className="pbFaqChevron" />
              </button>

              <div className="pbFaqAnswer">
                <p>{item.answer}</p>
              </div>
            </article>
          ))}
        </div>
        
         {showViewAll && (
          <div className="pbFaqFooter">
            <Link href="/faq" className="pbMiniLink">
              View all FAQ →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}