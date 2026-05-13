export const metadata = {
  title: "About Us | AVE Cosmetics Companies",
  description:
    "AVE Cosmetics Companies is a beauty and personal care company focused on brand development, consumer care, and modern beauty direction.",
};

const pillars = [
  {
    title: "Brand Development",
    text: "AVE Cosmetics Companies develops beauty and personal care concepts focused on modern identity, premium presentation, and long-term brand positioning. The company’s direction combines visual consistency, consumer trust, clean communication, and scalable beauty-oriented branding designed for future growth across multiple personal care categories.",
  },
  {
    title: "Consumer Care",
    text: "Our approach is centered around everyday confidence, accessible premium care, and modern consumer expectations. AVE focuses on creating a professional beauty environment that supports personal care routines, product accessibility, lifestyle-oriented wellness, and a clean user experience across digital and future retail channels.",
  },
  {
    title: "Beauty Platform",
    text: "AVE Cosmetics Companies operates as a modern beauty platform supporting cosmetics, grooming, skincare, body care, wellness, and future lifestyle-oriented beauty initiatives. The platform is structured to support future product expansion, digital presentation, consumer engagement, and long-term development within the beauty and personal care industry.",
  },
];

const divisions = [
  "AVE Cosmetics",
  "AVE Beauty",
  "AVE Body & Care",
  "AVE Men Care",
  "AVE Pure Care",
];

const operations = [
  {
    title: "Brand strategy",
    text: "AVE Cosmetics Companies develops a clear brand direction built around modern beauty, personal care, and consumer confidence. This includes the company’s identity, tone of voice, visual presentation, market positioning, and the long-term structure needed to support future AVE beauty categories.",
  },
  {
    title: "Beauty product direction",
    text: "The company studies consumer needs, beauty routines, packaging direction, product categories, and market opportunities to guide future product development. The goal is to create beauty and personal care concepts that feel premium, practical, and aligned with everyday consumer lifestyles.",
  },
  {
    title: "Consumer experience",
    text: "AVE focuses on building a consumer experience that is simple, trustworthy, and easy to understand. From website presentation to product communication, the company aims to make beauty discovery clear, accessible, and professional for customers, partners, and future retail opportunities.",
  },
  {
    title: "Affiliate and referral oversight",
    text: "The company may support affiliate, referral, or partner-based beauty programs with transparency and responsible communication. This includes clear product information, honest consumer guidance, and organized oversight of how third-party products or partner selections are presented through the platform.",
  },
  {
    title: "Retail and digital presentation",
    text: "AVE Cosmetics Companies manages how the brand is presented across digital channels, product pages, retail concepts, and investor-facing materials. The focus is on clean visual standards, professional messaging, strong brand consistency, and a premium presentation suitable for online and future retail environments.",
  },
];

export default function AboutUsPage() {
  return (
    <main className="aveAboutPage">
      <section className="aveAboutHero">
        <div className="aveContainer aveAboutHeroInner">
          <span className="aveEyebrow">AVE™ Cosmetics Group</span>
          <h1>Welcome to our platform</h1>
        </div>
      </section>

      <section className="aveAboutSection">
        <div className="aveContainer aveNumberLayout">
          <aside className="aveNumberSide">
            <span className="aveSectionNumber">01</span>
          </aside>

          <div className="aveNumberContent">
            <div className="aveMobileTitleRow">
              <span className="aveMobileNumber">01</span>
              <h2>Company Overview</h2>
            </div>

            <p>
              AVE™ Cosmetics Companies, operates as a beauty-focused company
              dedicated to brand development, consumer product direction, and
              modern personal care presentation.
            </p>
            <p>
              The company’s mission is to create a trusted beauty identity that
              connects quality, simplicity, and everyday confidence.
            </p>
            <p>
              The AVE™ identity is designed to support future growth across
              beauty, cosmetics, body care, grooming, wellness, and digital
              consumer discovery.
            </p>
          </div>
        </div>
      </section>

      <section className="aveAboutSection aveAboutLight">
        <div className="aveContainer aveNumberLayout">
          <aside className="aveNumberSide">
            <span className="aveSectionNumber">02</span>
          </aside>

          <div className="aveNumberContent">
            <div className="aveMobileTitleRow">
              <span className="aveMobileNumber">02</span>
              <h2>Core Direction</h2>
            </div>

            <div className="avePillarGrid">
              {pillars.map((item) => (
                <article className="avePillarCard" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="aveAboutSection">
        <div className="aveContainer aveNumberLayout">
          <aside className="aveNumberSide">
            <span className="aveSectionNumber">03</span>
          </aside>

          <div className="aveNumberContent">
            <div className="aveMobileTitleRow">
              <span className="aveMobileNumber">03</span>
              <h2>Brand Architecture</h2>
            </div>

            <p>
              The AVE brand architecture is organized to support one corporate
              identity with multiple beauty and personal care directions. Each
              division can grow independently while remaining connected to the
              same premium AVE ecosystem.
            </p>

            <div className="aveDivisionGrid">
              {divisions.map((item) => (
                <div className="aveDivisionItem" key={item}>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="aveAboutSection aveAboutDark">
        <div className="aveContainer aveNumberLayout">
          <aside className="aveNumberSide">
            <span className="aveSectionNumber aveSectionNumberLight">04</span>
          </aside>

          <div className="aveNumberContent">
            <span className="aveEyebrow">Our Position</span>

            <div className="aveMobileTitleRow">
              <span className="aveMobileNumber aveMobileNumberLight">04</span>
              <h2> Premium beauty made simple, modern, and accessible.</h2>
            </div>

            <p>
              AVE Cosmetics Companies aims to create a professional beauty
              presence that can serve consumers, partners, retailers, and future
              brand opportunities with clarity and consistency.
            </p>
          </div>
        </div>
      </section>

      <section className="aveAboutSection">
        <div className="aveContainer aveNumberLayout">
          <aside className="aveNumberSide">
            <span className="aveSectionNumber">05</span>
          </aside>

          <div className="aveNumberContent">
            <div className="aveMobileTitleRow">
              <span className="aveMobileNumber">05</span>
              <h2>Management Focus</h2>
            </div>

            <p>
              The management direction supports platform operations, beauty
              brand development, consumer communication, and responsible product
              presentation.
            </p>

            <div className="aveAccordionList">
              {operations.map((item) => (
                <details className="aveAccordionItem" key={item.title}>
                  <summary>
                    <span>{item.title}</span>
                    <strong>+</strong>
                  </summary>
                  <p>{item.text}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="aveAboutSection aveAboutLight">
        <div className="aveContainer aveNumberLayout">
          <aside className="aveNumberSide">
            <span className="aveSectionNumber">06</span>
          </aside>

          <div className="aveNumberContent">
            <span className="aveEyebrow">AVE</span>

            <div className="aveMobileTitleRow">
                <span className="aveMobileNumber">06</span>
                <h2>Building a modern beauty ecosystem </h2>
                </div>

                <p>
                AVE Cosmetics Companies is structured to support the long-term
                development of beauty, personal care, grooming, and lifestyle-oriented
                initiatives through a modern and scalable brand ecosystem. The company’s
                direction combines thoughtful branding, consumer-focused presentation,
                accessible premium positioning, and future expansion opportunities designed
                to support sustainable growth across digital, retail, and beauty-related
                markets.
                </p>
          </div>
        </div>
      </section>
    </main>
  );
}