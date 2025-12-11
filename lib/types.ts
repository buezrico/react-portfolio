import { StaticImageData } from "next/image";

// Portfolio Types
export interface PortfolioProject {
  id: number;
  image: StaticImageData;
  title: string;
  demo: string;
  description: string;
  technologies?: string[];
}

// Work Experience Types
export interface WorkExperience {
  id: number;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

// Skills Types
export interface Skill {
  id: number;
  name: string;
  category?: "frontend" | "backend" | "tools";
}

// About Stats Types
export interface AboutStat {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  title: string;
  value: string;
}

// Social Link Types
export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  gradient: string;
  ariaLabel: string;
}

// Navigation Types
export interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  href: string;
}

// Footer Link Types
export interface FooterLink {
  id: string;
  label: string;
  href: string;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormState {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
}

// Testimonial Types
export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: StaticImageData;
  rating: number; // 1-5 stars
  featured?: boolean;
  date?: string;
}
