'use client'

import { motion } from "framer-motion";
import { AnimatedSectionHeading } from "@/components/shared/AnimatedSectionHeading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { workExperiences } from "@/lib/constants";
import { BsBriefcase } from "react-icons/bs";

export function WorkExperience() {
  return (
    <section id="work-experience" className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <AnimatedSectionHeading
        subtitle="Professional Journey"
        title="Work Experience"
      />

      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {workExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 h-full group">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/60" />

                {/* Content section with enhanced spacing */}
                <div className="relative p-4 sm:p-8">
                  {/* Icon badge */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                    <BsBriefcase className="text-primary-foreground text-2xl" />
                  </div>

                  {/* Position */}
                  <h3 className="text-2xl font-bold mb-4 pr-16 text-foreground leading-tight">
                    {exp.position}
                  </h3>

                  {/* Company badge with enhanced styling */}
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors mb-4 font-semibold text-base px-4 py-1"
                  >
                    {exp.company}
                  </Badge>

                  {/* Location */}
                  <p className="text-sm text-muted-foreground mb-2">
                    📍 {exp.location}
                  </p>

                  {/* Date with enhanced visibility */}
                  <div className="flex items-center gap-2 mt-2 pt-4 border-t border-primary/10">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-sm shadow-primary" />
                    <p className="text-sm font-semibold text-foreground/80">
                      {exp.startDate} - {exp.endDate}
                    </p>
                  </div>
                </div>

                {/* Bottom shine effect */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
