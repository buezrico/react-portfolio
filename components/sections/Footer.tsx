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
      className="relative bg-gradient-to-br from-gray-100 via-gray-50 to-white text-foreground dark:from-gray-950 dark:via-gray-900 dark:to-black dark:text-white overflow-hidden mt-32 border-t border-border"
      role="contentinfo"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/5 dark:bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-primary/5 dark:bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container-custom relative py-10">
        {/* Branding Section */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.a
            href="#"
            onClick={(e) => scrollToSection(e, "#")}
            className="inline-block text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-foreground via-foreground/95 to-foreground/90 dark:from-white dark:via-white/95 dark:to-white/90 bg-clip-text text-transparent hover:from-foreground hover:via-foreground hover:to-foreground dark:hover:from-white dark:hover:via-white dark:hover:to-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Buez Rico
          </motion.a>
          <p className="text-sm md:text-base text-muted-foreground">
            {professionalTagline}
          </p>
        </motion.div>

        {/* Three Column Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 md:gap-10 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* About Me Column */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <div className="h-0.5 w-8 bg-gradient-to-r from-foreground/40 dark:from-white/50 to-transparent"></div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-foreground/80 dark:text-white/80">
                About Me
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Passionate full-stack developer specializing in Next.js,
              TypeScript, and modern web technologies. I create fast, engaging,
              and user-friendly applications that solve real-world problems.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <div className="h-0.5 w-8 bg-gradient-to-r from-foreground/40 dark:from-white/50 to-transparent"></div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-foreground/80 dark:text-white/80">
                Quick Links
              </h3>
            </div>
            <nav aria-label="Footer Navigation">
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {footerNavLinks.map((link, index) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <motion.a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="relative inline-block text-sm text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors duration-300 group"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground dark:bg-white group-hover:w-full transition-all duration-300" />
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Connect Column */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <div className="h-0.5 w-8 bg-gradient-to-r from-foreground/40 dark:from-white/50 to-transparent"></div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-foreground/80 dark:text-white/80">
                Connect
              </h3>
            </div>
            <div className="space-y-2.5">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MdEmail className="text-muted-foreground text-base flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors duration-300 hover:underline"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2">
                <MdPhone className="text-muted-foreground text-base flex-shrink-0" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-sm text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors duration-300 hover:underline"
                >
                  {contactInfo.phone}
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2">
                <MdLocationOn className="text-muted-foreground text-base flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  {contactInfo.location}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div
            className="flex flex-wrap justify-center gap-3"
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
                  className={`relative group p-3 rounded-xl bg-gradient-to-br ${social.gradient} backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <Icon className="text-white text-xl relative z-10" />
                  {/* Enhanced shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="mb-6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Legal Section */}
        <motion.div
          className="text-center space-y-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Buez Rico. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/70">
            Crafted with passion &bull; Built with Next.js & TypeScript
          </p>
        </motion.div>
      </div>

      {/* Bottom subtle glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
    </footer>
  );
}
