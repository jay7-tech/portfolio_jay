
"use client";

import { categorizedSkills } from '@/lib/data';
import { AnimatedSection } from '../animated-section';
import React from 'react';

export function SkillsDock() {
  return (
    <AnimatedSection id="skills">
      <div className="text-center">
        <h2 className="font-headline text-4xl md:text-5xl mt-2">
            Technical <span className="text-primary">Tool-Kit</span>
        </h2>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categorizedSkills.map((category) => (
          <div key={category.category} className="bg-muted/20 border border-border/50 rounded-lg p-6">
            <h3 className="font-headline text-xl text-primary mb-4">{category.category}</h3>
            <ul className="space-y-4">
              {category.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <li key={skill.name} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background border p-2">
                      <Icon className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <p className="font-bold">{skill.name}</p>
                      {skill.description && (
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
