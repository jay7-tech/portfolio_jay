import { personalInfo } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full h-[75vh] flex flex-col items-center justify-center text-center px-4 z-10">
      <div className="max-w-4xl pt-16">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl">
         JAYDEEP GOWDA
        </h1>
        <h2 className="mt-4 font-headline text-xl md:text-2xl lg:text-3xl max-w-2xl mx-auto text-foreground/80">
            {personalInfo.title}
        </h2>
        <div className="mt-8 flex gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="#contact">Let&apos;s Connect</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#projects">View My Work</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-1 animate-bounce bg-card/20 border border-border rounded-full p-1">
        <Button variant="ghost" size="icon" asChild>
            <Link href="#about" aria-label="Scroll to about section">
                <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </Link>
        </Button>
      </div>
    </section>
  );
}
