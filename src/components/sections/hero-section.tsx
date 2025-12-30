import { personalInfo } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 z-10">
      <div className="max-w-4xl">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl">
         <span className="block mb-4 font-headline text-5xl md:text-7xl lg:text-8xl">JAYDEEP GOWDA</span>
          {personalInfo.title}
        </h1>
        <div className="mt-8 flex gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="#contact">Let&apos;s Connect</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#projects">View My Work</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce">
         <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}
