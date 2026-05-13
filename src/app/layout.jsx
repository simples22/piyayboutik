
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
  title: "AVE® Cosmetics | Official Beauty & Cosmetics Platform",
  description:
    "Discover AVE® Cosmetics Companies, an official beauty and skincare platform featuring premium cosmetic selections, skincare essentials, beauty routines, wellness collections, and curated Mary Kay® products designed to support everyday confidence, self-care, and modern beauty experiences online.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={inter.variable}
      data-scroll-behavior="smooth"
    >
      <body>
        <JoinMyTeamButton top="67%" />
        {/* HEADER */}
        <Header />
        {/* MAIN CONTENT */}
        <main id="main-content">
          {children}
        </main>
        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}