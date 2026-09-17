import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ApproachSection } from "@/components/ApproachSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { BrandAlignmentSection } from "@/components/BrandAlignmentSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div id="hero" className="bg-theme-hero border-b border-ugc-burgundy/10">
        <HeroSection />
      </div>

      <div id="about" className="bg-theme-about border-b border-ugc-burgundy/10">
        <AboutSection />
      </div>

      <div id="approach" className="bg-theme-philosophy border-b border-ugc-burgundy/20">
        <ApproachSection />
      </div>

      <div id="portfolio" className="bg-theme-portfolio border-b border-ugc-burgundy/10">
        <PortfolioSection />
      </div>

      <div id="services" className="bg-theme-services border-b border-ugc-burgundy/10">
        <ServicesSection />
      </div>

      <div id="process" className="bg-theme-process border-b border-ugc-burgundy/10">
        <ProcessSection />
      </div>

      <div id="brand-fit" className="bg-theme-brand-fit border-b border-ugc-burgundy/10">
        <BrandAlignmentSection />
      </div>

      <div id="faq" className="bg-theme-faq border-b border-ugc-burgundy/10">
        <FAQSection />
      </div>

      <div id="contact" className="bg-theme-contact">
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}