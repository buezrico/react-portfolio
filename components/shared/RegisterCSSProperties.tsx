"use client";

import { useEffect } from "react";

export function RegisterCSSProperties() {
  useEffect(() => {
    if (typeof window !== "undefined" && CSS.registerProperty) {
      try {
        CSS.registerProperty({
          name: "--gradient-angle",
          syntax: "<angle>",
          inherits: false,
          initialValue: "0deg",
        });
      } catch {
        // Property already registered or not supported
      }
    }
  }, []);

  return null;
}
