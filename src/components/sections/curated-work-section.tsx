import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatedSection } from '../animated-section';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Plus } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

export function CuratedWorkSection() {
  const getImage = (id: string) => {
    return PlaceHolderImages.find((img) => img.id === id);
  };

  return (
    <AnimatedSection id="projects">
      <div className="text-center">
        <p className="text-sm uppercase text-muted-foreground tracking-widest">Case Studies</p>
        <h2 className="font-headline text-4xl md:text-5xl mt-2">
          Curated <span className="text-primary">Work</span>
        </h2>
      </div>

      <div className="mt-16 space-y-24">
        {projects.map((project) => {
          const image = getImage(project.image);

          return (
            <div key={project.title} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative group aspect-[4/3] rounded-lg overflow-hidden bg-primary/10 p-4 md:p-8 border">
                {image && (
                  <div className="relative w-full h-full rounded-md overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={image.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute h-full w-1/3 bg-primary/10 blur-2xl transform rotate-45" />
                  <div className="absolute h-full w-1/3 bg-primary/10 blur-2xl transform -rotate-45" />
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                {project.recognition && (
                  <Badge variant="secondary" className="mb-3 w-fit">{project.recognition}</Badge>
                )}
                <h3 className="font-headline text-2xl md:text-3xl relative pl-6">
                   <span className="absolute left-0 top-1/2 w-4 h-px bg-primary -translate-y-1/2"></span>
                   {project.title}
                </h3>
                <p className="mt-4 text-muted-foreground">
                  {project.description.paragraph}
                </p>
                 <ul className="mt-4 space-y-2">
                  {project.description.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Plus className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map(tag => {
                    const Icon = tag.icon
                    return (
                        <Badge key={tag.name} variant="outline" className="flex items-center gap-1.5 py-1 px-2">
                            <Icon className="h-3.5 w-3.5" />
                            {tag.name}
                        </Badge>
                    )
                  })}
                </div>
                <div className="flex items-center gap-4 mt-6">
                  <Button asChild>
                    <Link href={project.githubUrl} target="_blank">
                      <SiGithub />
                      <span>View on GitHub</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
