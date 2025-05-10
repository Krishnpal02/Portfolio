"use client";

import Link from 'next/link';
import { socialLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useEffect, useState } from 'react';

export function SocialSidebar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay visibility to allow page content to load and avoid initial flicker
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn(
      "fixed bottom-0 left-4 md:left-8 z-30 hidden md:block transition-opacity duration-500",
      isVisible ? "opacity-100" : "opacity-0"
    )}>
      <ul className="flex flex-col items-center space-y-4">
        {socialLinks.map(({ name, Icon, url }) => (
          <li key={name} className="transform hover:scale-110 hover:text-primary transition-all duration-200">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
                    <Icon className="h-5 w-5 text-foreground/70 hover:text-primary transition-colors" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        ))}
        <li className="h-24 w-px bg-foreground/30 mt-4"></li> 
      </ul>
    </div>
  );
}

export function EmailSidebar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={cn(
      "fixed bottom-0 right-4 md:right-8 z-30 hidden md:block transition-opacity duration-500",
      isVisible ? "opacity-100" : "opacity-0"
    )}>
      <div className="flex flex-col items-center space-y-4">
        <Link 
          href="mailto:krishnpalchouhan02@gmail.com" 
          className="text-xs font-mono tracking-widest text-foreground/70 hover:text-primary transition-colors [writing-mode:vertical-rl]"
          style={{ letterSpacing: '0.1em' }} // Adjust letter spacing if needed
        >
          krishnpalchouhan02@gmail.com
        </Link>
        <div className="h-24 w-px bg-foreground/30 mt-4"></div> {/* Vertical line */}
      </div>
    </div>
  );
}
