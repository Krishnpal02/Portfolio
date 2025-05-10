import { Button } from '@/components/ui/button';
import { heroData } from '@/lib/data';
import Link from 'next/link';
import { AnimatedSection } from '@/components/animated-section';

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="container mx-auto px-6 sm:px-8 lg:px-10 max-w-3xl text-left">
        <AnimatedSection delay="duration-300">
          <p className="text-base md:text-lg text-primary font-mono mb-3 md:mb-4">{heroData.greeting}</p>
        </AnimatedSection>
        <AnimatedSection delay="duration-500">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-100 mb-3 md:mb-4">
            {heroData.name}.
          </h1>
        </AnimatedSection>
        <AnimatedSection delay="duration-700">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-400 mb-6 md:mb-8">
            {heroData.title}
          </h2>
        </AnimatedSection>
        <AnimatedSection delay="duration-900">
          <p className="text-base md:text-lg text-slate-400 max-w-xl mb-8 md:mb-12 leading-relaxed">
            {heroData.subtitle}
          </p>
        </AnimatedSection>
        <AnimatedSection delay="duration-1000">
          <Button asChild size="lg" className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6 font-mono">
            <Link href={heroData.ctaLink}>{heroData.ctaLabel}</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
