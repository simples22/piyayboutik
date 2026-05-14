import "./globals.css";
import { Inter } from "next/font/google";
import "@/lib/fontawesome";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JoinMyTeamButton from "@/components/JoinMyTeamButton";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://avecosmetico.com"),

  verification: {
    google: "JkE3OmP3B4QfdXHOkBrYO53jkk3grXQBpr02hJuFWdk",
  },

  title: {
    default: "AVE™ Cosmetics | Beauty, Skincare & Mary Kay® Products",
    template: "%s | AVE® Cosmetics",
  },
  description:
    "AVE™ Cosmetics is a beauty and skincare platform featuring cosmetic selections, skincare essentials, beauty routines, wellness collections, and curated Mary Kay® products for everyday confidence and self-care.",
keywords: [
"AVE Cosmetics",
"AVE Cosmetico",
"beauty products",
"skincare products",
"cosmetics online",
"makeup products",
"Mary Kay products",
"premium skincare",
"anti-aging skincare",
"hydrating moisturizer",
"beauty consultant",
"facial cleanser",
"luxury cosmetics",
"beauty routine",
"skin care essentials",
"beauty and wellness",
"online beauty store",
"women skincare",
"men skincare",
"beauty care products",
"beauty shopping",
"beauty boutique",
"cosmetic products",
"skincare collection",
"facial serum",
"sunscreen skincare",
"beauty accessories",
"makeup essentials",
"fragrance products",
"beauty gift sets",
"self-care products",
"beauty trends",
"beauty solutions",
"skincare routine",
"skin hydration",
"facial masks",
"acne skincare",
"anti-aging cream",
"lip care products",
"beauty makeup",
"makeup brushes",
"eye makeup products",
"skincare treatment",
"wellness beauty",
"luxury beauty brand",
"premium cosmetics online",
"beauty lifestyle",
"clean skincare",
"glowing skin products",
"beauty inspiration",
"beauty company",
"cosmetic boutique online",
"fragrance collection",
"body care products",
"skincare for dry skin",
"skincare for oily skin",
"beauty products online",
"skincare solutions",
"modern beauty products",
"facial moisturizer",
"skin protection",
"SPF skincare",
"natural beauty products",
"makeup collection",
"cosmetics store",
"makeup online",
"beauty retailer",
"beauty website",
"skincare for women",
"skincare for men",
"beauty essentials online",
"Mary Kay skincare",
"Mary Kay cosmetics",
"Mary Kay beauty consultant",
"Mary Kay makeup",
"skincare gifts",
"cosmetic collections",
"luxury skincare products",
"body lotion products",
"facial care products",
"eye cream skincare",
"skincare beauty store",
"beauty ecommerce",
"skincare specialist",
"beauty wellness products",
"premium beauty online",
"online cosmetics shop",
"beauty recommendations",
"fragrance for women",
"fragrance for men",
"body wash products",
"cosmetic skincare brand",
"facial beauty products",
"daily skincare products",
"skincare online shopping",
"cosmetic beauty care",
"beauty self-care",
"skincare and makeup",
"makeup beauty products",
"beauty confidence",
"beauty experience",
"skin glow products",
"skincare innovation",
"trusted beauty products"
],

  applicationName: "AVE Cosmetics",
  authors: [{ name: "AVE Cosmetics Companies LLC" }],
  creator: "AVE Cosmetics Companies LLC",
  publisher: "AVE Cosmetics Companies LLC",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AVE® Cosmetics | Beauty, Skincare & Mary Kay® Products",
    description:
      "Discover premium skincare, beauty essentials, wellness collections, and curated Mary Kay® products through AVE® Cosmetics.",
    url: "https://avecosmetico.com",
    siteName: "AVE Cosmetics",
    images: [
      {
        url: "/images/homehero.jpg",
        width: 1200,
        height: 630,
        alt: "AVE Cosmetics beauty and skincare platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AVE® Cosmetics | Beauty, Skincare & Mary Kay® Products",
    description:
      "Premium skincare, beauty essentials, wellness collections, and curated Mary Kay® products online.",
    images: ["/images/homehero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body>
        <JoinMyTeamButton top="67%" />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}