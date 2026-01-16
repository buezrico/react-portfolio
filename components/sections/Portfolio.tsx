"use client";

import Image from "next/image";
import { AnimatedSectionHeading } from "@/components/shared/AnimatedSectionHeading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { portfolioProjects } from "@/lib/constants";
import { BsArrowUpRight } from "react-icons/bs";

export function Portfolio() {
  // Featured project (first one)
  const featuredProject = portfolioProjects[0];
  const regularProjects = portfolioProjects.slice(1);

  return (
    <section id="portfolio" className="relative overflow-hidden">
      {/* Background decoration - Enhanced */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <AnimatedSectionHeading subtitle="Showcasing Excellence" title="Featured Work" />

      <div className="container-custom">
        {/* Featured Project - Large Showcase */}
        <div className="mb-16">
          <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-card via-card/95 to-card border border-primary/20 shadow-2xl hover:shadow-primary/20 transition-all duration-700">
            {/* Decorative corner accent - hidden on mobile */}
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-[40px] sm:rounded-bl-[60px] z-10" />
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center z-20">
              <span className="text-primary font-bold text-xs sm:text-sm">01</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-[220px] sm:h-[300px] lg:h-[380px] overflow-hidden">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card/80 via-card/40 to-transparent lg:opacity-100 opacity-60" />

                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 px-4 py-2 rounded-full bg-primary/90 backdrop-blur-md border border-primary-foreground/20 z-10">
                  <span className="text-primary-foreground font-semibold text-sm">Featured Project</span>
                </div>
              </div>

              {/* Content Side */}
              <div className="relative p-4 sm:p-8 lg:p-12 flex flex-col justify-center overflow-hidden">
                <div className="min-w-0">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                    {featuredProject.title}
                  </h3>

                  <p className="text-light leading-relaxed mb-6 text-sm sm:text-base line-clamp-4 sm:line-clamp-none">
                    {featuredProject.description}
                  </p>

                  {/* Tech Stack */}
                  {featuredProject.technologies && (
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                      {featuredProject.technologies.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-primary/15 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {featuredProject.technologies.length > 4 && (
                        <Badge className="bg-muted text-muted-foreground px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm">
                          +{featuredProject.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button asChild size="default" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 group/btn sm:h-11 sm:px-8">
                      <a href={featuredProject.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                        <span>View Live</span>
                        <BsArrowUpRight className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom glow effect */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
        </div>

        {/* Regular Projects Grid - 3 Columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularProjects.map((project, index) => (
            <div key={project.id}>
              <div className="group relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-card via-card to-card/95 border border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                {/* Project Number Badge */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center z-20 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-primary-foreground font-bold text-sm">
                    {String(index + 2).padStart(2, '0')}
                  </span>
                </div>

                {/* Image Container */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Hover Action Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-xl shadow-primary/50 group/btn">
                      <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                        <span>View Project</span>
                        <BsArrowUpRight className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-light leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-primary/10 text-primary border border-primary/20 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="bg-muted text-muted-foreground text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  )}
                </div>

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
