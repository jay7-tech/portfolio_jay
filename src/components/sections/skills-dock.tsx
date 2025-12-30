
"use client";

import { skills } from '@/lib/data';
import { 
  Bot, Code, Camera, Waves, BrainCircuit
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { AnimatedSection } from '../animated-section';
import React from 'react';
import { SiReact, SiMongodb, SiExpress, SiNodedotjs, SiPython, SiTypescript, SiJavascript, SiDocker, SiGit, SiFlask, SiWebrtc, SiGithub } from 'react-icons/si';
import type { IconType } from 'react-icons';


const skillIcons: { [key: string]: IconType | LucideIcon } = {
    'React': SiReact,
    'Robotics Simulation': Bot,
    'MERN Stack': SiReact,
    'JavaScript': SiJavascript,
    'Python': SiPython,
    'TypeScript': SiTypescript,
    'Node.js': SiNodedotjs,
    'MongoDB': SiMongodb,
    'Express.js': SiExpress,
    'Computer Vision': Camera,
    'YOLO': Camera,
    'Autonomous Systems': Bot,
    'ABB Arm Robot': Bot,
    'WebSockets': Waves,
    'WebRTC': SiWebrtc,
    'Git': SiGit,
    'GitHub': SiGithub,
    'Docker': SiDocker,
    'Flask': SiFlask,
  };
  

const allSkills = Object.entries(skills).flatMap(([category, skillList]) => 
    skillList.map(skill => ({name: skill, category}))
);

export function SkillsDock() {
  return (
    <AnimatedSection id="skills">
      <div className="text-center">
        <p className="text-sm uppercase text-muted-foreground tracking-widest">MY SKILLS</p>
        <h2 className="font-headline text-4xl md:text-5xl mt-2">
            The Secret <span className="text-primary">Sauce</span>
        </h2>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-4">
        {allSkills.map((skill, index) => {
          const Icon = skillIcons[skill.name] || Code;
          return (
            <div key={index} className="group flex h-20 w-20 items-center justify-center rounded-2xl bg-muted/20 border border-border/50 p-4 transition-all duration-300 hover:bg-muted/40" title={skill.name}>
                <Icon className="h-10 w-10 text-foreground" />
            </div>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
