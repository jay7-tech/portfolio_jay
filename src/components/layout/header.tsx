import Link from 'next/link';
import { Button } from '../ui/button';

export default function Header() {
  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-4 px-3 py-2 rounded-full border border-black/10 bg-white/30 dark:border-white/10 dark:bg-black/30 shadow-lg backdrop-blur-sm">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold font-headline group-hover:scale-110 transition-transform">
            JG
          </div>
          <span className="hidden sm:inline font-bold text-foreground">Jaydeep Gowda</span>
        </Link>
        <div className="h-6 w-px bg-border hidden sm:block"></div>
        <ul className="flex items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Button variant="ghost" size="sm" asChild>
                <Link href={link.href}>{link.name}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
