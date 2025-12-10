"use client";

import { motion } from "framer-motion";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const footerLinks = [
  { id: "home", label: "Home", href: "#" },
  { id: "about", label: "About", href: "#about" },
  { id: "work-experience", label: "Experience", href: "#work-experience" },
  { id: "portfolio", label: "Portfolio", href: "#portfolio" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "contact", label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: BsLinkedin,
    href: "https://www.linkedin.com/in/chibueze-okoronkwo/",
    label: "LinkedIn",
    gradient: "from-blue-600 to-blue-400",
  },
  {
    icon: BsGithub,
    href: "http://github.com/buezrico",
    label: "GitHub",
    gradient: "from-gray-700 to-gray-500 dark:from-gray-300 dark:to-gray-100",
  },
  {
    icon: MdEmail,
    href: "mailto:buezokoronkwo@gmail.com",
    label: "Email",
    gradient: "from-red-600 to-orange-400",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href === "#" ? "header" : href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden mt-32">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-foreground/3 rounded-full blur-[100px]" />
      </div>

      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-foreground/50 to-transparent" />

      {/* Decorative dots pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />

      <div className="container-custom relative py-16">
        {/* Logo/Brand */}
        <motion.div
          className="text-center mb-12"
          whileHover={{ scale: 1.02 }}
        >
          <motion.a
            href="#"
            className="inline-block text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-foreground via-primary-foreground/90 to-primary-foreground/80 bg-clip-text text-transparent hover:from-primary-foreground/80 hover:via-primary-foreground hover:to-primary-foreground transition-all duration-500"
            onClick={(e) => scrollToSection(e, "#")}
            whileHover={{ scale: 1.05 }}
          >
            RICO
          </motion.a>
          <p className="text-primary-foreground/70 text-sm mt-2 font-medium">
            Full-Stack Developer & Creative Problem Solver
          </p>
        </motion.div>

        {/* Navigation Links */}
        <nav className="mb-12">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <li key={link.id}>
                <motion.a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="relative text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 font-medium group"
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-foreground group-hover:w-full transition-all duration-300" />
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={`relative group p-4 rounded-xl bg-gradient-to-br ${social.gradient} shadow-lg hover:shadow-xl transition-all duration-300`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <Icon className="text-white text-xl relative z-10" />
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
              </motion.a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent mb-8" />

        {/* Copyright & Credits */}
        <div className="text-center space-y-2">
          <p className="text-primary-foreground/70 text-sm font-medium">
            &copy; {currentYear} Chibueze Rico. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-xs">
            Crafted with passion and attention to detail
          </p>
        </div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent" />
    </footer>
  );
}
