"use client";

import { useState } from "react";
import Image from "next/image";
import JoinNowWhatsAppButton from "@/components/JoinMyTeam/JoinNowWhatsAppButton";
import PBImage from "../PBImage";

const joinSteps = [
  {
    id: "step-1",
    label: "STEP 1",
    title: "Scan the QRCode to Connect With Our Independent Beauty Team",
    image: "/images/join-team/step-1.jpg",
    text: "Connect with our Independent Beauty Team to receive guidance, understand the Mary Kay opportunity, ask your questions and prepare your consultant journey with confidence.",
  },
  {
    id: "step-2",
    label: "STEP 2",
    title: "Sign Your Beauty Consulting Agreement",
    image: "/images/join-team/step-2.jpg",
    text: "Sign and submit the Independent Beauty Consultant agreement to officially begin your Mary Kay business path and access the support system available for new consultants.",
  },
  {
    id: "step-3",
    label: "STEP 3",
    title: "Complete Your Minimum Purchase & Receive Your ID Code",
    image: "/images/join-team/step-03.jpg",
    text: "Make the required minimum agreement purchase, receive your personal ID code and become a supply owner with a beauty shop managed by yourself.",
  },
];

const advantages = [
  "Strategic sales guidance",
  "Social media support",
  "Commercial package support for marketing",
  "Digital marketing and web assistance",
  "Product knowledge and beauty business mentorship",
];

export default function JoinTeamStepsSection() {
  const [activeStep, setActiveStep] = useState(joinSteps[0]);

  return (
    <section className="pbJoinStepsSection">
      <div className="pbJoinStepsContainer">
        <div className="pbJoinStepsSwitch">
          {joinSteps.map((step) => (
            <button
              key={step.id}
              type="button"
              onClick={() => setActiveStep(step)}
              className={`pbJoinStepSwitchBtn ${
                activeStep.id === step.id ? "isActive" : ""
              }`}
            >
              {step.label}
            </button>
          ))}
        </div>

        <div className="pbJoinStepDisplay">
          <div className="pbJoinStepContent">
            
            <span>{activeStep.label}</span>
          </div>

          <div className="pbJoinStepImage">
            <PBImage
              src={activeStep.image}
              alt={activeStep.title}
              width={1200}
              height={720}
            />
          </div>

          <div className="pbJoinStepContent pbJoinStepMainContent">
            <h3>{activeStep.title}</h3>
            <p>{activeStep.text}</p>
            <JoinNowWhatsAppButton className="pbJoinStepNowBtn" />
           <div className="pbJoinStepsHead">
          <span>Start Your Consultant Journey</span>
        </div>
          </div>
        </div>

        <section className="pbJoinAdvantagesSection">
          <div className="pbJoinAdvantagesHead">
            <div className="HeadBeauty">
              <h1>Advantages</h1>
            </div>

            <h3>Why Join Our Beauty Team?</h3>

            <p>
              Joining our team gives you access to business support, sales
              guidance, marketing assistance and digital tools designed to help
              you grow with confidence.
            </p>

          </div>

          <div className="pbJoinAdvantagesGrid">
            {advantages.map((item) => (
              <article className="pbJoinAdvantageCard" key={item}>
                <strong>+</strong>
                <p>{item}</p>
              </article>
            ))}
          </div>
                  <div className="pbJoinNowBtnCenter">
                    <JoinNowWhatsAppButton />
                </div>
        </section>
      </div>
    </section>
  );
}