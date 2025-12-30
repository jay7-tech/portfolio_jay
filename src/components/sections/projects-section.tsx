import { projects } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { AnimatedSection } from '../animated-section';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function ProjectsSection() {
  const getImage = (id: string) => {
    return PlaceHolderImages.find((img) => img.id === id);
  };

  return (
    <AnimatedSection id="projects">
      <div className="text-center">
        <h2 className="font-headline text-3xl md:text-4xl">
          Innovation & Development Showcase
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          A collection of projects where I turned complex problems into elegant solutions.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const image = getImage(project.image);
          return (
            <Card key={index} className="flex flex-col overflow-hidden hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
              {image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={image.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                {project.recognition && (
                  <CardDescription>
                    <Badge variant="secondary" className="mt-2">{project.recognition}</Badge>
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {(project.description || []).map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </AnimatedSection>
  );
}
