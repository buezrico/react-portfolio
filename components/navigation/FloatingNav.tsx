"use client";

import { motion } from "framer-motion";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdWorkOutline } from "react-icons/md";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const navItems = [
  { id: "#", icon: AiOutlineHome, label: "Home" },
  { id: "#about", icon: AiOutlineUser, label: "About" },
  { id: "#work-experience", icon: MdWorkOutline, label: "Experience" },
  { id: "#portfolio", icon: BiBook, label: "Portfolio" },
  { id: "#skills", icon: RiServiceLine, label: "Skills" },
  { id: "#contact", icon: BiMessageSquareDetail, label: "Contact" },
];

export function FloatingNav() {
  const activeSection = useActiveSection();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href === "#" ? "header" : href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="fixed left-1/2 -translate-x-1/2 bottom-4 sm:bottom-8 z-50 flex gap-1 sm:gap-3 bg-card/70 backdrop-blur-sm px-3 py-2 sm:px-6 sm:py-3 rounded-full border border-primary/20 shadow-lg"
    >
      {navItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;

        return (
          <motion.a
            key={item.id}
            href={item.id}
            onClick={(e) => handleClick(e, item.id)}
            className={cn(
              "p-2 sm:p-3 rounded-full transition-all duration-400 hover:bg-primary/20",
              isActive && "bg-primary text-primary-foreground"
            )}
            aria-label={item.label}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon size={20} />
          </motion.a>
        );
      })}

      {/* Theme Toggle */}
      <ThemeToggle variant="nav" />
    </nav>
  );
}
