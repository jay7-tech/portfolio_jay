
import { marqueeSkills } from "@/lib/data";

export function SkillsMarquee() {
  const skills = [...marqueeSkills, ...marqueeSkills, ...marqueeSkills, ...marqueeSkills]; 

  const MarqueeContent = () => (
    <div className="flex shrink-0 animate-marquee min-w-full items-center">
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center">
          <span className="mx-6 text-lg font-semibold tracking-wider">
            {skill}
          </span>
          <span className="text-xl">&#x2022;</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative w-full py-4 overflow-hidden z-10">
      {/* Background Strap */}
      <div className="absolute inset-0 rotate-6 flex items-center justify-center">
         <div className="relative w-[150%] h-10 bg-primary/20 flex items-center text-primary/50">
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>
      {/* Main/Foreground Strap */}
      <div className="relative -rotate-6 flex items-center justify-center">
        <div className="relative w-[150%] h-10 bg-accent flex items-center text-accent-foreground border-y-2 border-primary/10">
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>
    </div>
  );
}
