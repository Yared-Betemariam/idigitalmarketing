import AboutMeSection from "@/components/AboutMeSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import TestimonialsSection from "@/components/TestimonialsSection";
import WorksSection from "@/components/WorksSection";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  return (
    <main className="flex flex-col flex-1 overflow-x-hidden">
      <HeroSection />
      <AboutMeSection />
      <Services />
      {/* <Resume /> */}
      <WorksSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
