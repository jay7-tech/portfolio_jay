import { marqueeSkills } from "@/lib/data";

export function SkillsMarquee() {
  const skills = [...marqueeSkills, ...marqueeSkills]; // Duplicate for seamless loop

  return (
    <div className="relative w-full py-6 my-16 overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 bg-primary opacity-90"></div>
      <div className="relative flex whitespace-nowrap animate-marquee">
        {skills.map((skill, index) => (
          <span key={index} className="mx-4 text-2xl font-bold font-headline tracking-wider">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
