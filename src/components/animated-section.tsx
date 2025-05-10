"use client";

import { useRef, useEffect, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: string; 
  threshold?: number;
  animationVariants?: {
    hidden: string;
    visible: string;
  };
}

const defaultAnimation = {
  hidden: 'opacity-0 translate-y-5',
  visible: 'opacity-100 translate-y-0',
};

export function AnimatedSection({ 
  children, 
  className, 
  delay = 'duration-500', 
  threshold = 0.1,
  animationVariants = defaultAnimation
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: threshold,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={sectionRef}
      className={cn(
        'transform transition-all ease-out',
        delay,
        isVisible ? animationVariants.visible : animationVariants.hidden,
        className
      )}
    >
      {children}
    </div>
  );
}
