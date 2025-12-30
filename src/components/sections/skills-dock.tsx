
"use client";

import { skills } from '@/lib/data';
import { 
  Atom, BrainCircuit, Bot, Code, Database, Server, Camera, Video, GitBranch, Container, Waves, Palette, Users, Languages, Mic
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { AnimatedSection } from '../animated-section';
import React, { useRef, useState } from 'react';
import { useMotionValue, motion, useSpring, useTransform } from 'framer-motion';

const skillIcons: { [key: string]: LucideIcon } = {
  'React': Atom,
  'Machine Learning': BrainCircuit,
  'Robotics Simulation': Bot,
  'MERN Stack': Code,
  'JavaScript': Code,
  'Python': Code,
  'TypeScript': Code,
  'Node.js': Server,
  'MongoDB': Database,
  'Express.js': Server,
  'Computer Vision': Camera,
  'Autonomous Systems': Bot,
  'ABB Arm Robot': Bot,
  'WebSockets': Waves,
  'WebRTC': Video,
  'Git': GitBranch,
  'Docker': Container,
  'Strategic Thinking': Palette,
  'Networking': Users,
  'Negotiation': Mic,
  'Effective Communication': Mic,
  'Languages': Languages,
};

const allSkills = Object.values(skills).flat();

export function SkillsDock() {
  let mouseX = useMotionValue(Infinity);

  return (
    <AnimatedSection id="skills">
       <div className="text-center">
        <h2 className="font-headline text-3xl md:text-4xl">My Technical Toolkit</h2>
        <p className="mt-4 text-lg text-muted-foreground">
        A versatile collection of technologies I use to build robust and innovative solutions.
        </p>
      </div>

      <div 
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="mx-auto flex h-24 items-center justify-center gap-4 rounded-2xl bg-card/50 border px-4 mt-12"
        style={{
            perspective: '800px'
        }}
      >
        <div 
            className="flex justify-center"
             style={{
                transform: 'rotateX(20deg)',
                transformStyle: 'preserve-3d',
             }}
        >
            {allSkills.map((skill, index) => {
                 const Icon = skillIcons[skill] || Code;
                return (
                    <AppIcon mouseX={mouseX} key={index}>
                        <Icon className="h-8 w-8 text-primary" />
                    </AppIcon>
                )
            })}
        </div>
      </div>
    </AnimatedSection>
  );
}


function AppIcon({ mouseX, children }: { mouseX: any, children: React.ReactNode }) {
    let ref = useRef<HTMLDivElement>(null);
  
    let { left } = ref.current?.getBoundingClientRect() ?? { left: 0 };
  
    let distance = useTransform(mouseX, (val) => val - left - 24);
    let widthSync = useTransform(distance, [-150, 0, 150], [48, 80, 48]);
    let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });
  
    return (
      <motion.div
        ref={ref}
        style={{ width }}
        className="aspect-square w-12 rounded-full bg-card/80 flex items-center justify-center"
      >
        {children}
      </motion.div>
    );
  }
