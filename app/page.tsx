import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { CtaSection } from "@/components/sections/cta-section";
import { FoundersSection } from "@/components/sections/founders-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <CtaSection />
        <FoundersSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
