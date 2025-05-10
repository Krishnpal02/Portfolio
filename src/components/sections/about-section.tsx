import Image from 'next/image';
import { SectionWrapper } from '@/components/section-wrapper';
import { aboutData } from '@/lib/data';
import { CheckCircle2 } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import Prof from '../../../public/Profile.jpg'
export function AboutSection() {
  return (
    <SectionWrapper id="about" className="bg-background">
      <AnimatedSection>
        <div className="flex items-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            <span className="text-primary font-mono text-2xl md:text-3xl mr-2">01.</span>
            {aboutData.title}
          </h2>
          <div className="ml-4 flex-grow h-px bg-border/50"></div>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-start">
        <div className="md:col-span-3 space-y-4 text-foreground/80 leading-relaxed text-base md:text-lg">
          {aboutData.paragraphs.map((paragraph, index) => (
            <AnimatedSection key={index} delay={`duration-${300 + index * 100}`}>
              <p>{paragraph}</p>
            </AnimatedSection>
          ))}
          
          <AnimatedSection delay="duration-700">
            <p className="mt-6 mb-3">{aboutData.techIntro}</p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm font-mono">
              {aboutData.skills.map((skill) => (
                <li key={skill} className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-secondary" />
                  {skill}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>

        <AnimatedSection className="md:col-span-2" delay="duration-500">
          <div className="relative group aspect-square max-w-xs mx-auto md:max-w-sm">
            <div className="absolute inset-0 rounded-lg bg-primary transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <Image
              src={Prof}
              alt="Krishnpal Chouhan"
              width={400}
              height={400}
              className="rounded-lg relative z-10 object-cover w-full h-full shadow-xl border-2 border-background"
              data-ai-hint="professional portrait"
            />
          </div>
        </AnimatedSection>
      </div>
    </SectionWrapper>
  );
}
