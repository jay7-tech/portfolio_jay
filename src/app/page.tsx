import { HeroSection } from "@/components/sections/hero-section";
import { SkillsMarquee } from "@/components/sections/skills-marquee";
import { CuratedWorkSection } from "@/components/sections/curated-work-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SkillsDock } from "@/components/sections/skills-dock";
import { AboutSection } from "@/components/sections/about-section";
import { BackgroundStars } from "@/components/background-stars";

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <BackgroundStars />
      <HeroSection />
      <SkillsMarquee />
      <div className="container px-4 md:px-6 space-y-24 md:space-y-32 my-24 md:my-32">
        <AboutSection />
        <SkillsDock />
        <CuratedWorkSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </div>
  );
}
