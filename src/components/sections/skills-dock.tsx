"use client";

import { skills } from '@/lib/data';
import { AnimatedSection } from '../animated-section';
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Bot, Share2, ScanLine } from 'lucide-react';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiPython, SiTypescript, SiJavascript, SiDocker, SiGit, SiFlask, SiWebrtc, SiGithub, SiTailwindcss, SiCss3, SiFirebase, SiAutodesk } from 'react-icons/si';


const YoloIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props} fill="currentColor">
        <path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm0 234.8c-58.9 0-106.8-47.9-106.8-106.8S69.1 21.2 128 21.2s106.8 47.9 106.8 106.8S186.9 234.8 128 234.8z"/>
        <path d="M128 42.4c-47.2 0-85.6 38.4-85.6 85.6s38.4 85.6 85.6 85.6 85.6-38.4 85.6-85.6-38.4-85.6-85.6-85.6zm0 150c-35.6 0-64.4-28.8-64.4-64.4s28.8-64.4 64.4-64.4 64.4 28.8 64.4 64.4-28.8 64.4-64.4 64.4z"/>
        <path d="M163.6 106.3c-5.1-1.6-10.4-.8-14.9 2.5-4.5 3.3-7.5 8.3-8.4 13.7-1.7-11.8-10.1-21.2-22-21.2-12.2 0-22.1 9.9-22.1 22.1s9.9 22.1 22.1 22.1c11.8 0 21.5-9.3 22-21 .9-5.4 3.9-10.4 8.4-13.7 4.5-3.3 9.8-4.1 14.9-2.5 8.8 2.8 15.1 11.2 15.1 20.7 0 12.2-9.9 22.1-22.1 22.1-8.3 0-15.6-4.6-19.4-11.5-2.9 4.3-7.5 7.1-12.7 7.1-8.3 0-15-6.7-15-15s6.7-15 15-15c5.2 0 9.8 2.8 12.7 7.1 3.8-6.9 11.1-11.5 19.4-11.5 12.2 0 22.1-9.9 22.1-22.1.1-9.5-6.2-17.9-15.1-20.7z"/>
    </svg>
);


const iconMap: { [key: string]: React.ElementType } = {
    SiMongodb,
    SiExpress,
    SiReact,
    SiNodedotjs,
    SiPython,
    SiTypescript,
    SiJavascript,
    SiDocker,
    SiGit,
    SiFlask,
    SiWebrtc,
    SiGithub,
    SiTailwindcss,
    SiCss3,
    SiFirebase,
    SiAutodesk,
    Bot,
    Share2,
    ScanLine,
    YoloIcon
};


export function SkillsDock() {
  return (
    <AnimatedSection id="skills">
      <div className="text-center">
        <p className="text-sm uppercase text-muted-foreground tracking-widest">MY SKILLS</p>
        <h2 className="font-headline text-4xl md:text-5xl mt-2">
            The Secret <span className="text-primary">Sauce</span>
        </h2>
      </div>

      <div className="mt-16">
        <TooltipProvider>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {skills.map((skill) => {
              const Icon = typeof skill.icon === 'string' ? iconMap[skill.icon] : skill.icon;
              return (
                <Tooltip key={skill.name}>
                  <TooltipTrigger asChild>
                    <div className="group flex h-16 w-16 items-center justify-center rounded-2xl bg-card border border-border/20 p-3 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                      <Icon className="h-full w-full text-foreground/80 transition-colors group-hover:text-foreground" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </TooltipProvider>
      </div>
    </AnimatedSection>
  );
}
