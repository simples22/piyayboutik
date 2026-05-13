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
  title: {
    default: "AVE® Cosmetics | Beauty, Skincare & Mary Kay® Products",
    template: "%s | AVE® Cosmetics",
  },
  description:
    "AVE® Cosmetics is a modern beauty and skincare platform featuring premium cosmetic selections, skincare essentials, beauty routines, wellness collections, and curated Mary Kay® products for everyday confidence and self-care.",
  keywords: [
    "AVE Cosmetics",
    "AVE Cosmetico",
    "beauty products",
    "skincare products",
    "cosmetics online",
    "Mary Kay products",
    "makeup products",
    "beauty consultant",
    "skincare routine",
    "premium cosmetics",
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