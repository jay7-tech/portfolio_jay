
import { marqueeSkills } from "@/lib/data";

export function SkillsMarquee() {
  const skills = [...marqueeSkills, ...marqueeSkills, ...marqueeSkills, ...marqueeSkills]; 

  const MarqueeContent = () => (
    <div className="flex shrink-0 animate-marquee min-w-full">
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center">
          <span className="mx-6 text-lg font-semibold tracking-wider">
            {skill}
          </span>
          <span className="text-primary-foreground/50">+</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative w-full py-8 overflow-hidden z-10 -rotate-6 scale-110">
      <div className="absolute inset-0 flex">
        <div className="relative w-full h-12 bg-primary flex items-center">
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>
      <div className="absolute inset-0 flex top-1.5">
         <div className="relative w-full h-12 bg-black/40 flex items-center">
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>
    </div>
  );
}
