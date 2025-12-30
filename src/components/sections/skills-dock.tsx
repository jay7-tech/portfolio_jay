"use client";

import { skills } from '@/lib/data';
import { AnimatedSection } from '../animated-section';
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

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
              const Icon = skill.icon;
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
