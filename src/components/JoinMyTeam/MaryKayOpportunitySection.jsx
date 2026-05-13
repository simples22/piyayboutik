import JoinNowWhatsAppButton from "@/components/JoinMyTeam/JoinNowWhatsAppButton";

const opportunityItems = [
  {
    number: "1",
    title: "Fits Your Life!",
    text: "Make extra money on the side, prioritize what matters most and start earning right away through your online personalized shop —> My Shop.",
  },
  {
    number: "2",
    title: "Helps You Be Who You Want to Be!",
    text: "Join a supportive community and experience real-world opportunities designed to help you grow with confidence.",
  },
  {
    number: "3",
    title: "Lets You Sell Products You Can Believe In!",
    text: "Sell high-quality, effective beauty products and feel proud to represent a brand built around care, service and trust.",
  },
  {
    number: "4",
    title: "Goes Beyond Beauty!",
    text: "Started by a woman, Mary Kay has empowered connection, confidence and entrepreneurship for more than 60 years. Through the Mary Kay Ash Foundation®, the mission also supports the fight against domestic violence and women’s cancers.",
  },
];

export default function MaryKayOpportunitySection() {
  return (
    <section className="pbMkOpportunitySection">
      <div className="pbMkOpportunityContainer">
        <div className="pbMkOpportunityHead">
                <div className="HeadBeauty">
                    <h1> Opportunity</h1>
                </div>
          <h2>The Mary Kay Opportunity</h2>
        </div>

        <div className="pbMkOpportunityGrid">
          {opportunityItems.map((item) => (
            <article className="pbMkOpportunityCard" key={item.number}>
              <div className="pbMkOpportunityNumber">
                {item.number}
              </div>

              <div className="pbMkOpportunityContent">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
                          <div className="pbJoinNowBtnCenter">
                            <JoinNowWhatsAppButton />
                        </div>
      </div>
    </section>
  );
}