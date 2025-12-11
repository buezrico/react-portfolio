"use client";

import Image from "next/image";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Button } from "@/components/ui/button";

export function Header() {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="h-[45vh] min-h-[400px] pt-20 pb-8 overflow-hidden relative">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Original floating dots */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/40 rounded-full animate-float animation-delay-2000 opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary/60 rounded-full animate-float animation-delay-4000 opacity-50" />
      </div>

      {/* Social icons - LEFT SIDE with glassmorphism */}
      <div className="hidden md:flex absolute md:left-[7%] lg:left-[12.5%] top-1/2 -translate-y-1/2 flex-col gap-4 opacity-0 animate-fade-in animation-delay-800">
        <a
          href="http://github.com/buezrico"
          target="_blank"
          rel="noreferrer"
          className="p-3 bg-primary/20 border border-primary/30 rounded-full hover:bg-primary hover:border-primary hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:scale-110 group"
        >
          <BsGithub
            size={20}
            className="text-primary group-hover:text-primary-foreground transition-colors"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/chibueze-okoronkwo/"
          target="_blank"
          rel="noreferrer"
          className="p-3 bg-primary/20 border border-primary/30 rounded-full hover:bg-primary hover:border-primary hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:scale-110 group"
        >
          <BsLinkedin
            size={20}
            className="text-primary group-hover:text-primary-foreground transition-colors"
          />
        </a>
      </div>

      {/* Main content - CENTER */}
      <div className="container-custom h-full flex flex-col justify-center items-center text-center">
        {/* Greeting with fade-in animation */}
        <h3 className="text-lg mb-2 opacity-0 animate-fade-in">
          <span className="mr-2">Hello 👋</span> I&apos;m
        </h3>

        {/* Name with gradient text effect */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 opacity-0 animate-fade-in animation-delay-200">
          <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient">
            Chibueze Rico
          </span>
          <span className="ml-2">😎</span>
        </h1>

        {/* Tagline with subtle animation */}
        <h4 className="text-light mb-8 text-lg md:text-xl opacity-0 animate-fade-in animation-delay-400">
          A Creative Software Engineer 🚀
        </h4>

        {/* CTA Buttons with enhanced effects */}
        <div className="flex gap-4 opacity-0 animate-fade-in animation-delay-600">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/30 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all hover:scale-105"
          >
            <a href="/documents/cv.pdf" download>
              Download CV
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all hover:scale-105"
          >
            <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
              Let&apos;s Talk
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Down - RIGHT SIDE with pulse animation */}
      <div className="hidden md:block absolute md:right-[7%] lg:right-[12.5%] top-1/2 -translate-y-1/2 opacity-0 animate-fade-in animation-delay-800">
        <a
          href="#about"
          onClick={(e) => scrollToSection(e, "#about")}
          className="text-primary text-sm font-medium tracking-[0.3em] uppercase hover:scale-110 transition-transform duration-300 animate-pulse-slow"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll Down
        </a>
      </div>
    </header>
  );
}
