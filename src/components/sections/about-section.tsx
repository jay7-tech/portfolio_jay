import Image from 'next/image';
import { personalInfo } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatedSection } from '../animated-section';

export function AboutSection() {
  const profileImage = PlaceHolderImages.find((img) => img.id === 'profile-picture');

  return (
    <AnimatedSection id="about" className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="md:col-span-1 flex justify-center">
          {profileImage && (
             <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-primary/20">
                <Image
                src={profileImage.imageUrl}
                alt="A photo of Jaydeep Gowda"
                fill
                className="object-cover"
                data-ai-hint={profileImage.imageHint}
                />
            </div>
          )}
        </div>
        <div className="md:col-span-2 text-center md:text-left">
          <h2 className="font-headline text-3xl md:text-4xl mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground">
            {personalInfo.summary}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
