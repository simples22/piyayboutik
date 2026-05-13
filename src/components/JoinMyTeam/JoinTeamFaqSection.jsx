"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I join the beauty team?",
    answer:
      "You can start by contacting our Independent Beauty Team. We will guide you through the steps, explain the Mary Kay opportunity and help you begin the consultant process.",
  },
  {
    question: "Do I need experience to become a consultant?",
    answer:
      "No. You do not need previous beauty or sales experience. You can receive guidance, product knowledge and support to help you grow step by step.",
  },
  {
    question: "What is the first step?",
    answer:
      "The first step is to connect with our team so we can explain the opportunity, answer your questions and help you prepare your Independent Beauty Consultant agreement.",
  },
  {
    question: "Is there a minimum purchase required?",
    answer:
      "Yes. After completing the agreement process, a minimum purchase may be required to activate your consultant journey, receive your ID code and begin managing your own supply shop.",
  },
  {
    question: "Will I receive support after joining?",
    answer:
      "Yes. Our team provides strategic sales guidance, social media support, commercial package assistance, product education and digital marketing support.",
  },
  {
    question: "Can I work on my own schedule?",
    answer:
      "Yes. This opportunity is designed to fit your lifestyle, allowing you to grow your beauty business with flexibility.",
  },
];

export default function JoinTeamFaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="pbJoinFaqSection">
      <div className="pbJoinFaqContainer">
        <div className="pbJoinFaqHead">
                  <div className="HeadBeauty">
                    <h1> FAQS </h1>
                 </div>
          <p>
            Helpful answers for anyone interested in joining our beauty team and
            starting the Mary Kay consultant journey.
          </p>
        </div>

        <div className="pbJoinFaqAccordion">
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <article
                className={`pbJoinFaqItem ${isOpen ? "isOpen" : ""}`}
                key={item.question}
              >
                <button
                  type="button"
                  className="pbJoinFaqQuestion"
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <strong>{isOpen ? "−" : "+"}</strong>
                </button>

                <div className="pbJoinFaqAnswer">
                  <p>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}