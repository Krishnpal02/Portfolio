"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { navLinks, fullName } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      let currentSection = '';
      navLinks.forEach(link => {
        const section = document.getElementById(link.href.substring(1));
        if (section && section.offsetTop <= window.scrollY + 100) { // Adjusted offset
          currentSection = link.href;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const NavLinkContent = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-md",
        activeSection === href ? "text-primary" : "text-foreground/80"
      )}
    >
      {label}
    </Link>
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary hover:opacity-80 transition-opacity">
            <Code2 size={28} />
            <span className="hidden sm:inline">{fullName.split(' ')[0]}</span>
            <span className="sm:hidden">KC</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLinkContent key={link.href} href={link.href} label={link.label} />
            ))}
            <Button asChild variant="outline" size="sm" className="ml-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-foreground" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background p-6">
                <div className="flex flex-col space-y-6 mt-8">
                  {navLinks.map((link) => (
                     <SheetClose asChild key={link.href}>
                        <NavLinkContent href={link.href} label={link.label} />
                     </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                    </Button>
                  </SheetClose>
                </div>
                <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </SheetClose>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
