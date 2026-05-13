
import JoinTeamFaqSection from "@/components/JoinMyTeam/JoinTeamFaqSection";
import JoinTeamStepsSection from "@/components/JoinMyTeam/JoinTeamStepsSection";
import MaryKayOpportunitySection from "@/components/JoinMyTeam/MaryKayOpportunitySection";

export default function JoinMyTeamPage() {
  return (
    <main className="pbJoinTeamPage">
      {/* tes autres sections */}

      <JoinTeamStepsSection />
      <MaryKayOpportunitySection />
      <JoinTeamFaqSection />

      {/* tes autres sections */}
    </main>
  );
}