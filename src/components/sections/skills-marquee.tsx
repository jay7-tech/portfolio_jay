import { marqueeSkills } from "@/lib/data";

export function SkillsMarquee() {
  const skills = [...marqueeSkills, ...marqueeSkills, ...marqueeSkills, ...marqueeSkills]; 

  return (
    <div className="relative w-full py-4 overflow-hidden bg-primary text-primary-foreground z-10 border-t-2 border-b-2 border-primary-foreground/20">
      <div className="relative flex whitespace-nowrap animate-marquee">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center">
            <span className="mx-6 text-lg font-semibold tracking-wider">
              {skill}
            </span>
            <span className="text-primary-foreground/50">+</span>
          </div>
        ))}
      </div>
    </div>
  );
}
