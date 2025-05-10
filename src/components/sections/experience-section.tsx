import { SectionWrapper } from '@/components/section-wrapper';
import { experiencesData, type Experience } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="bg-background">
      <AnimatedSection>
        <div className="flex items-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            <span className="text-primary font-mono text-2xl md:text-3xl mr-2">02.</span>
            Where I Am Working
          </h2>
          <div className="ml-4 flex-grow h-px bg-border/50"></div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay="duration-500">
        <Tabs defaultValue={experiencesData[0].id} className="flex flex-col md:flex-row gap-8">
          <TabsList className="flex md:flex-col md:h-auto justify-start bg-transparent p-0 border-none md:border-l-2 md:border-border/30">
            {experiencesData.map((exp) => (
              <TabsTrigger 
                key={exp.id} 
                value={exp.id}
                className="text-left justify-start w-full md:w-48 px-4 py-3 whitespace-normal text-sm font-mono text-foreground/70 data-[state=active]:text-primary data-[state=active]:bg-primary/10 data-[state=active]:shadow-none data-[state=active]:border-primary md:border-l-2 md:border-transparent md:data-[state=active]:border-l-primary md:-ml-px hover:bg-primary/5 hover:text-primary"
              >
                {exp.company}
               
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="flex-1 min-h-[300px]">
            {experiencesData.map((exp) => (
              <TabsContent key={exp.id} value={exp.id} className="mt-0">
                <Card className="bg-transparent border-none shadow-none p-0">
                  <CardHeader className="p-1">
                    <CardTitle className="text-xl md:text-2xl font-semibold text-slate-100">
                      {exp.role} <span className="text-primary"><a href="https://www.gammastack.com/">@ {exp.company}</a></span>
                    </CardTitle>
                    <CardDescription className="text-xs font-mono text-muted-foreground mt-1">
                      {exp.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-4 p-1">
                    <ul className="space-y-2 text-foreground/80">
                      {exp.description.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <ChevronRight className="h-4 w-4 mr-2 mt-1 text-primary shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </AnimatedSection>
    </SectionWrapper>
  );
}
