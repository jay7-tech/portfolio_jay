import { HeroSection } from "@/components/sections/hero-section";
import { SkillsMarquee } from "@/components/sections/skills-marquee";
import { SkillsGrid } from "@/components/sections/skills-grid";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <HeroSection />
      <SkillsMarquee />
      <div className="container px-4 md:px-6 space-y-24 md:space-y-32 my-24 md:my-32">
        <SkillsGrid />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </div>
  );
}
