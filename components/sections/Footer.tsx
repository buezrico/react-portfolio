"use client";

import { motion } from "framer-motion";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const footerLinks = [
  { id: "home", label: "Home", href: "#" },
  { id: "about", label: "About", href: "#about" },
  { id: "work-experience", label: "Work Experience", href: "#work-experience" },
  { id: "portfolio", label: "Portfolio", href: "#portfolio" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "contact", label: "Contact", href: "#contact" },
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
    <footer className="bg-primary text-primary-foreground py-12 mt-32">
      <div className="container-custom">
        <motion.a
          href="#"
          className="text-3xl font-semibold block mb-8 text-center hover:opacity-80 transition-colors duration-[400ms]"
          onClick={(e) => scrollToSection(e, "#")}
          whileHover={{ scale: 1.05 }}
        >
          RICO
        </motion.a>

        <ul className="flex flex-wrap justify-center gap-8 mb-12">
          {footerLinks.map((link) => (
            <li key={link.id}>
              <motion.a
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="hover:opacity-80 transition-colors duration-[400ms]"
                whileHover={{ x: 5 }}
              >
                {link.label}
              </motion.a>
            </li>
          ))}
        </ul>

        <div className="flex justify-center gap-4 mb-8">
          <motion.a
            href="https://www.linkedin.com/in/chibueze-okoronkwo/"
            target="_blank"
            rel="noreferrer"
            className="bg-background text-foreground p-3 rounded hover:bg-foreground hover:text-background transition-all duration-[400ms]"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <BsLinkedin size={20} />
          </motion.a>
          <motion.a
            href="http://github.com/buezrico"
            target="_blank"
            rel="noreferrer"
            className="bg-background text-foreground p-3 rounded hover:bg-foreground hover:text-background transition-all duration-[400ms]"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <BsGithub size={20} />
          </motion.a>
        </div>

        <div className="text-center text-sm opacity-70">
          <p>&copy; {currentYear} Chibueze Rico. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
