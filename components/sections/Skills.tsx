'use client'

import { motion } from "framer-motion";
import { BsCodeSlash, BsServer, BsGear } from "react-icons/bs";
import { AnimatedSectionHeading } from "@/components/shared/AnimatedSectionHeading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/constants";

const categoryConfig = {
  frontend: {
    title: "Frontend Development",
    icon: BsCodeSlash,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10"
  },
  backend: {
    title: "Backend Development",
    icon: BsServer,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10"
  },
  tools: {
    title: "Tools & Technologies",
    icon: BsGear,
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/10 to-red-500/10"
  }
};

export function Skills() {
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category || 'tools';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <AnimatedSectionHeading subtitle="What Skills I Have" title="Technical Expertise" />

      <div className="container-custom max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-6">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => {
            const config = categoryConfig[category as keyof typeof categoryConfig];
            const Icon = config.icon;

            return (
              <motion.div
                key={category}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 h-full group">
                  {/* Top gradient accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${config.gradient}`} />

                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${config.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Content */}
                  <div className="relative p-6">
                    {/* Icon badge */}
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${config.gradient} shadow-lg shadow-primary/30 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white text-2xl" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-6 text-foreground">
                      {config.title}
                    </h3>

                    {/* Skills badges */}
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill) => (
                        <motion.div
                          key={skill.id}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm py-1.5 px-3 font-medium"
                          >
                            {skill.name}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom shine effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
