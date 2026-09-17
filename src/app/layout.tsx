import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { SparkleCursor } from "@/components/SparkleCursor";
import { CharacterGuide } from "@/components/CharacterGuide";

// Load Cormorant Garamond for elegant editorial headings
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Load body font
const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mary Zatikian — UGC Creator & Content Strategist",
  description:
    "High-converting short-form video assets, aesthetic product photography, and creative strategy for beauty and lifestyle brands.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${sans.variable} scroll-smooth`}
    >
      <body className="antialiased selection:bg-ugc-burgundy selection:text-ugc-cream font-sans">
        <CharacterGuide />
        <SparkleCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}