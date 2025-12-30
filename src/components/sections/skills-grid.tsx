import { skills } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { 
  Atom, BrainCircuit, Bot, Code, Database, Server, Camera, Video, GitBranch, Container, Waves, Palette, Users, Languages, Mic
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { AnimatedSection } from '../animated-section';

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

export function SkillsGrid() {
  return (
    <AnimatedSection id="skills">
      <div className="text-center">
        <h2 className="font-headline text-3xl md:text-4xl">My Technical Toolkit</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          A versatile collection of technologies I use to build robust and innovative solutions.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, skillList]) => (
          <Card key={category}>
            <CardHeader>
              <CardTitle>{category}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skillList.map((skill) => {
                const Icon = skillIcons[skill] || Code;
                return (
                  <div key={skill} className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm">
                    <Icon className="h-4 w-4 text-primary" />
                    <span>{skill}</span>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}
