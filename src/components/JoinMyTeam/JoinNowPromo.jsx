"use client";

import { useRouter } from "next/navigation";
import JoinNowWhatsAppButton from "@/components/JoinMyTeam/JoinNowWhatsAppButton";
import PBImage from "../PBImage";

export default function JoinNowPromoGrid() {
  const router = useRouter();

  return (
    <section className="pbJoinPromoSection">
      <div className="pbJoinPromoContainer">
        <div
          className="pbJoinPromoGrid"
          role="link"
          tabIndex={0}
          onClick={() => router.push("/joinmyteam")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              router.push("/joinmyteam");
            }
          }}
        >
          <div className="pbJoinPromoImage">
            <PBImage
              src="/images/join-team/join-now-banner-1.jpg"
              alt="Join Mary Kay Beauty Team"
              width={1200}
              height={900}
            />
          </div>

          <div className="pbJoinPromoContent">
            <span>Opportunity</span>

            <h2>Build Your Beauty Business With my Team</h2>

            <p>
              Start your consultant journey with access to beauty education,
              product guidance, digital support and a flexible opportunity
              designed to help you grow at your own pace.
            </p>

            <div
              className="pbJoinPromoBtnWrap"
              onClick={(e) => e.stopPropagation()}
            >

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}