"use client";

import { motion } from "framer-motion";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import {
  socialLinks,
  footerNavLinks,
  contactInfo,
  professionalTagline,
} from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = href === "#" ? "header" : href;
    const element = document.querySelector(target);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden mt-32"
      role="contentinfo"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-foreground/3 rounded-full blur-[100px]" />
      </div>

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/50 to-transparent" />

      <div className="container-custom relative py-16">
        {/* Branding Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.a
            href="#"
            onClick={(e) => scrollToSection(e, "#")}
            className="inline-block text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary-foreground via-primary-foreground/90 to-primary-foreground/80 bg-clip-text text-transparent hover:from-primary-foreground hover:via-primary-foreground hover:to-primary-foreground transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            RICO
          </motion.a>
          <p className="text-sm md:text-base text-primary-foreground/70">
            {professionalTagline}
          </p>
        </motion.div>

        {/* Three Column Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* About Me Column */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary-foreground/90 mb-4">
              About Me
            </h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Passionate full-stack developer specializing in Next.js,
              TypeScript, and modern web technologies. I create fast, engaging,
              and user-friendly applications that solve real-world problems.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary-foreground/90 mb-4">
              Quick Links
            </h3>
            <nav aria-label="Footer Navigation">
              <ul className="space-y-2">
                {footerNavLinks.map((link) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="relative inline-block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 group"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-foreground group-hover:w-full transition-all duration-300" />
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Connect Column */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary-foreground/90 mb-4">
              Connect
            </h3>
            <div className="space-y-3">
              <p className="text-xs text-primary-foreground/60 mb-3">
                Get in touch through any of these channels:
              </p>

              <div className="flex items-center justify-center md:justify-start gap-2">
                <MdEmail className="text-primary-foreground/70 flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 hover:underline"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2">
                <MdPhone className="text-primary-foreground/70 flex-shrink-0" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 hover:underline"
                >
                  {contactInfo.phone}
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2">
                <MdLocationOn className="text-primary-foreground/70 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  {contactInfo.location}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div
            className="flex flex-wrap justify-center gap-3 md:gap-4"
            aria-label="Social Media Links"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith("mailto:") ? undefined : "_blank"}
                  rel={social.url.startsWith("mailto:") ? undefined : "noreferrer"}
                  aria-label={social.ariaLabel}
                  className={`relative group p-3 md:p-4 rounded-xl bg-gradient-to-br ${social.gradient} shadow-lg hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <Icon className="text-white text-xl relative z-10" />
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="mb-8 h-px bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent" />

        {/* Legal Section */}
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-sm text-primary-foreground/70">
            &copy; {currentYear} Buez Rico. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/50">
            Crafted with passion &bull; Built with Next.js & TypeScript
          </p>
        </motion.div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent" />
    </footer>
  );
}
