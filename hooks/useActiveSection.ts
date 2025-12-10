"use client";

import { useState, useEffect } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("#");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id], header");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id || "";
            setActiveSection(id ? `#${id}` : "#");
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return activeSection;
}
