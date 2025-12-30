import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatedSection } from '../animated-section';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ArrowUpRight } from 'lucide-react';
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
        {projects.map((project, index) => {
          const image = getImage(project.image);
          const isReversed = index % 2 !== 0;

          return (
            <div key={project.title} className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${isReversed ? 'md:grid-flow-col-dense' : ''}`}>
              <div className={`relative group aspect-video rounded-lg overflow-hidden border ${isReversed ? 'md:col-start-2' : ''}`}>
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={image.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0" />
              </div>
              
              <div className="flex flex-col justify-center">
                {project.recognition && (
                  <Badge variant="secondary" className="mb-3 w-fit">{project.recognition}</Badge>
                )}
                <h3 className="font-headline text-2xl md:text-3xl">{project.title}</h3>
                <ul className="list-disc pl-5 mt-4 space-y-2 text-muted-foreground">
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
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
                   <Button variant="ghost" asChild>
                    <Link href="#">
                      <span>View Details</span>
                      <ArrowUpRight />
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
