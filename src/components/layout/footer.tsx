import { personalInfo } from '@/lib/data';
import { ThemeToggle } from '../theme-toggle';
import { Button } from '../ui/button';
import type { IconType } from 'react-icons';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between h-16">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {personalInfo.name}
        </p>
        <div className="flex items-center gap-2">
          {personalInfo.socials.map((social) => {
            const Icon = social.icon as IconType;
            return (
              <Button key={social.name} variant="ghost" size="icon" asChild>
                <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                  <Icon className="h-5 w-5" />
                </a>
              </Button>
            );
          })}
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
