"use client";

import { useState } from "react";

const whatsappOptions = [
  {
    label: "English",
    number: "19413921221",
    text: "Hello, I would like to join your Mary Kay Beauty Team. Could you please give me more information about how the process works?",
  },
  {
    label: "Creole",
    number: "19413921221",
    text: "Bonjou, mwen ta renmen antre nan ekip Mary Kay Beauty ou. eske ou kapab ban mwen plis esplikasyon sou kijan pou sa fet.?",
  },
];

export default function JoinNowWhatsAppButton({ className = "" }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`pbJoinNowBtn ${className}`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(true);
        }}
      >
        Join Our team Now
      </button>

      {open && (
        <div className="pbJoinNowOverlay" role="dialog" aria-modal="true">
          <div
            className="pbJoinNowBackdrop"
            onClick={() => setOpen(false)}
          />

          <div className="pbJoinNowModal">
            <button
              type="button"
              className="pbJoinNowClose"
              onClick={() => setOpen(false)}
            >
              ×
            </button>

            <span>Choose Language</span>
            <h3>Contact us on WhatsApp</h3>
            <p>
              Select the language you prefer to communicate with our beauty team.
            </p>

            <div className="pbJoinNowChoices">
              {whatsappOptions.map((option) => (
                <a
                  key={option.label}
                  href={`https://wa.me/${option.number}?text=${encodeURIComponent(
                    option.text
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pbJoinNowChoice"
                >
                  {option.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}