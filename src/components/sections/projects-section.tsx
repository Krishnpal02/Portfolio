"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionWrapper } from '@/components/section-wrapper';
import { projectsData, projectCategories, type Project } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import { cn } from '@/lib/utils';

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState(projectCategories[0]);

  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <SectionWrapper id="projects" className="bg-background">
      <AnimatedSection>
        <div className="flex items-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            <span className="text-primary font-mono text-2xl md:text-3xl mr-2">03.</span>
            Some Things I’ve Built
          </h2>
          <div className="ml-4 flex-grow h-px bg-border/50"></div>
        </div>
      </AnimatedSection>
      
      {/* Filter Buttons - hidden for now as per vinay.design which doesn't have explicit filters */}
      {/*
      <AnimatedSection delay="duration-300">
        <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-12">
          {projectCategories.map(category => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className={cn(
                "font-mono",
                activeFilter === category 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                  : "border-primary/50 text-primary/80 hover:bg-primary/10 hover:text-primary"
              )}
            >
              {category}
            </Button>
          ))}
        </div>
      </AnimatedSection>
      */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.map((project, index) => (
          <AnimatedSection key={project.id} delay={`duration-${500 + index * 100}`}>
            <ProjectCard project={project} />
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="bg-card h-full flex flex-col overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 group transform hover:-translate-y-1">
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <Image
          src={project.imageSrc}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          data-ai-hint={project.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardHeader className="pt-6 pb-3 px-5">
        <CardTitle className="text-xl font-semibold text-slate-100 group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow px-5 pb-4">
        <p className="text-sm text-foreground/70 leading-relaxed mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <Badge key={tag} variant="secondary" className="bg-secondary/20 text-secondary font-mono text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-5 pb-5 pt-2 flex justify-end items-center space-x-3">
        {project.repoUrl && (
          <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository`}>
            <Github className="h-5 w-5 text-foreground/70 hover:text-primary transition-colors" />
          </Link>
        )}
        {project.liveUrl && (
          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}>
            <ExternalLink className="h-5 w-5 text-foreground/70 hover:text-primary transition-colors" />
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
