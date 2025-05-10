import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <section id={id} className={cn('py-20 md:py-28', className)}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-4xl xl:max-w-5xl">
        {children}
      </div>
    </section>
  );
}
