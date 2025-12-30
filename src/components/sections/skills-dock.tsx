
"use client";

import { skills } from '@/lib/data';
import { 
  Atom, BrainCircuit, Bot, Code, Database, Server, Camera, Video, GitBranch, Container, Waves, Palette, Users, Languages, Mic, HardDrive
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { AnimatedSection } from '../animated-section';
import React from 'react';
import { SiReact, SiMongodb, SiExpress, SiNodedotjs, SiPython, SiTypescript, SiJavascript, SiDocker, SiGit, SiFlask, SiWebrtc } from 'react-icons/si';
import type { IconType } from 'react-icons';


const skillIcons: { [key: string]: IconType | LucideIcon } = {
    'React': SiReact,
    'Machine Learning': BrainCircuit,
    'Robotics Simulation': Bot,
    'MERN Stack': Code,
    'JavaScript': SiJavascript,
    'Python': SiPython,
    'TypeScript': SiTypescript,
    'Node.js': SiNodedotjs,
    'MongoDB': SiMongodb,
    'Express.js': SiExpress,
    'Computer Vision': Camera,
    'Autonomous Systems': Bot,
    'ABB Arm Robot': Bot,
    'WebSockets': Waves,
    'WebRTC': SiWebrtc,
    'Git': SiGit,
    'Docker': SiDocker,
    'Strategic Thinking': Palette,
    'Networking': Users,
    'Negotiation': Mic,
    'Effective Communication': Mic,
    'Languages': Languages,
    'Hardware': HardDrive,
  };
  

const allSkills = Object.entries(skills).flatMap(([category, skillList]) => 
    skillList.map(skill => ({name: skill, category}))
);

export function SkillsDock() {
  return (
    <AnimatedSection id="skills">
      <div className="text-center">
        <p className="text-sm uppercase text-muted-foreground tracking-widest">Technical Toolkit</p>
        <h2 className="font-headline text-4xl md:text-5xl mt-2">
            The Tools I Use to <span className="text-primary">Build</span>
        </h2>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-8">
        {allSkills.map((skill, index) => {
          const Icon = skillIcons[skill.name] || Code;
          return (
            <div key={index} className="group relative" title={skill.name}>
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border bg-card shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-primary/20 group-hover:shadow-lg">
                    <Icon className="h-10 w-10 text-primary" />
                </div>
            </div>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
