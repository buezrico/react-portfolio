import Image from "next/image";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { AiFillGithub } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stats = [
  {
    icon: FaAward,
    title: "Experience",
    value: "4+ Years Working",
  },
  {
    icon: AiFillGithub,
    title: "Github Repos",
    value: "70+ Repositories",
  },
  {
    icon: FiUsers,
    title: "Clients",
    value: "10+ Worldwide",
  },
  {
    icon: VscFolderLibrary,
    title: "Projects",
    value: "20+ Completed",
  },
];

export function About() {
  return (
    <section id="about">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Image - Clean Modern Tilted Design */}
          <div className="w-full md:w-[32%] flex-shrink-0">
            {/* Titles */}
            <div className="text-center mb-12">
              <h5 className="text-light text-sm mb-2">Get to know me</h5>
              <h2 className="text-primary text-3xl font-medium">About Rico</h2>
            </div>

            <div className="relative aspect-square">
              {/* Gradient Background Frame - Straight with Dark Mode Support */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-white dark:to-black rounded-[2.5rem] shadow-2xl" />

              {/* Image Container - Slanted and smaller to show yellow card */}
              <div className="relative w-[90%] h-[90%] left-[5%] top-[5%] rounded-[2.5rem] overflow-hidden -rotate-[18deg] shadow-xl hover:rotate-0 transition-transform duration-[400ms]">
                <Image
                  src="/images/me_studio.jpg"
                  alt="Chibueze Rico"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 35vw"
                />
              </div>
            </div>
          </div>

          {/* Content - Pushed to Right Edge */}
          <div className="w-full md:w-[55%] flex-shrink-0 flex flex-col items-center justify-center">
            {/* Stats Grid */}
            <div className="w-full grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.title}>
                    <Card className="bg-primary/5 border-primary/10 p-4 text-center hover:bg-primary/10 transition-colors duration-[400ms]">
                      <Icon className="text-primary text-2xl mx-auto mb-0" />
                      <h5 className="text-sm font-medium mb-0">{stat.title}</h5>
                      <small className="text-xs text-light">
                        {stat.value}
                      </small>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* Description */}
            <p className="text-light mb-8 leading-relaxed text-center">
              A Passionate developer focused on building engaging web applications and
              innovative solutions. I specialize in full-stack development using technologies
              like Next.js, TypeScript, Prisma, and Redis, with a knack for integrating
              real-time features and scalable platforms. I love creating games, community
              platforms, and solutions that connect users while maintaining performance and
              simplicity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <a href="#contact">Let&apos;s Talk</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href="http://github.com/buezrico"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <BsGithub />
                  Github
                </a>
              </Button>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a
                  href="https://www.linkedin.com/in/chibueze-okoronkwo/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <BsLinkedin />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
