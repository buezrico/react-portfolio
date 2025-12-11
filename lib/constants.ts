import { PortfolioProject, WorkExperience, Skill, SocialLink, FooterLink, Testimonial } from "./types";
import billionbros from "@/public/images/portfolio/billionbros.png";
import thegrandcobbler from "@/public/images/portfolio/thegrandcobbler.png";
import codeafrica from "@/public/images/portfolio/codeafrica.png";
import assetplus from "@/public/images/portfolio/assetplus.png";
import valucares from "@/public/images/portfolio/valucares.png";
import tourafrica from "@/public/images/portfolio/tourafrica.png";
import insightproxim from "@/public/images/portfolio/insightproxim.png";
import synproxi from "@/public/images/portfolio/synproxi.png";
import nkechi from "@/public/images/portfolio/nkechi.png";
import medhub from "@/public/images/portfolio/medhub.png";
import { BsLinkedin, BsGithub, BsWhatsapp, BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

// Portfolio projects data
export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    image: medhub,
    title: "MEDHUB",
    demo: "https://medhub.com/",
    description:
      "MedHub is an integrated online platform for leading diagnostic centers in Nigeria who offer comprehensive medical test services with advanced technology. ",
    technologies: ["Next.js, Typescript, Tailwindcss, Shadcn, Zustand, Prisma"],
  },
  {
    id: 2,
    image: assetplus,
    title: "ASSETPLUS",
    demo: "https://assetplusng.com",
    description:
      "Nigeria's leading Real Estate Financing company providing finance for dream houses and landed properties in Nigeria and in diaspora.",
    technologies: ["Next.js, Typescript, Tailwindcss, Shadcn, Zustand, Prisma"],
  },
  {
    id: 4,
    image: billionbros,
    title: "BILLION BROS",
    demo: "https://billionbros.ng/",
    description:
      "Billionaire Brothers is a thrilling online platform where users can earn daily by playing fun games and joining impactful raffles.",
    technologies: ["Next.js", "TypeScript", "Prisma"],
  },
  {
    id: 3,
    image: thegrandcobbler,
    title: "THE GRAND COBBLER",
    demo: "https://thegrandcobbler.com/",
    description:
      "THE GRAND COBBLER is Lagos' finest and most reliable shoes and leather goods repair company. An on-demand service providing modern aftercare.",
    technologies: ["Next.js", "TypeScript"],
  },
  {
    id: 5,
    image: codeafrica,
    title: "CODE AFRICA",
    demo: "https://codeafrica.vercel.app/",
    description:
      "Code Africa is a Next.js and Sass-powered platform for digital skills training. Students can register and pay for courses, it also has an admin dashboard.",
    technologies: ["Next.js", "Sass"],
  },
  {
    id: 6,
    image: valucares,
    title: "VALUCARES",
    demo: "https://valucares.vercel.app//",
    description:
      "Valucares is an online, real-time healthcare provider. Customers can book appointments for health checks seamlessly.",
    technologies: ["Next.js, Typescript, Sass"],
  },
  {
    id: 7,
    image: tourafrica,
    title: "TOURAFRICA",
    demo: "https://tourafrica.vercel.app",
    description:
      "TourAfrica is a comprehensive travel platform that offers curated African travel experiences. Explore and book unique tours, accommodations, and activities with ease.",
    technologies: ["Next.js. Typescript, Sass"],
  },
  {
    id: 8,
    image: insightproxim,
    title: "INSIGHTPROXIMCONSULTING",
    demo: "https://insightproxim.vercel.app",
    description:
      "InsightProxim Consulting provides expert guidance and solutions in business strategy and management. Tailored consulting services to help organizations achieve their goals.",
    technologies: ["Next.js, Typescript, Sass"],
  },
  {
    id: 9,
    image: synproxi,
    title: "SYNPROXI",
    demo: "https://synproxi.vercel.app/",
    description:
      "Synproxi offers free digital skills training to empower individuals with the knowledge and tools to succeed in the digital world.",
    technologies: ["Next.js, Typescript, Tailwindcss"],
  },
  {
    id: 10,
    image: nkechi,
    title: "NKECHI KEN",
    demo: "https://nkechikennkwonta.vercel.app/",
    description:
      "A Portfolio website for Mrs Nkechi Ken. Built with NextJs, TypeScript and Sass.",
    technologies: ["Next.js", "TypeScript", "Sass"],
  },
];

// Work experience data
export const workExperiences: WorkExperience[] = [
  {
    id: 1,
    company: "MEGANET LIMITED",
    position: "FRONTEND SOFTWARE ENGINEER",
    location: "Lagos, Nigeria",
    startDate: "Feb. 2023",
    endDate: "Nov. 2023",
    responsibilities: [
      "Led the process of hosting websites on cloud platforms, optimising load times and ensuring a smooth user experience through fast delivery and reliable hosting solutions.",
      "Leveraged NextJS to build interactive and responsive user interfaces that enhance user engagement and satisfaction.",
      "Worked with Typescript and NextJs.",
    ],
  },
  {
    id: 2,
    company: "UBUBA TECHNOLOGY",
    position: "FRONTEND SOFTWARE ENGINEER",
    location: "Port-Harcourt, Nigeria",
    startDate: "Apr. 2021",
    endDate: "Jan. 2023",
    responsibilities: [
      "Utilized React and Firebase technologies to develop and maintain front-end functionalities.",
      "Experience with Rest APIs to fetch data and manage states with global state management libraries.",
      "Implemented advanced filtering system for the web application.",
    ],
  },
  {
    id: 3,
    company: "TECHCREEK",
    position: "FRONTEND SOFTWARE ENGINEER",
    location: "Port Harcourt, Nigeria",
    startDate: "Aug. 2019",
    endDate: "Dec 2019",
    responsibilities: [
      "Applied pragmatism and best practices in software engineering, delivering tasks on time, and with excellent quality.",
      "Experience with Rest APIs to fetch data and state management with Redux.",
      "Developed proficiency in version control systems, such as Git, for efficient collaboration and code management.",
    ],
  },
];

// Skills data
export const skills: Skill[] = [
  { id: 1, name: "HTML5", category: "frontend" },
  { id: 2, name: "JavaScript", category: "frontend" },
  { id: 3, name: "TypeScript", category: "frontend" },
  { id: 4, name: "React", category: "frontend" },
  { id: 5, name: "Next Js", category: "frontend" },
  { id: 6, name: "Redux", category: "frontend" },
  { id: 7, name: "Bootstrap", category: "frontend" },
  { id: 8, name: "Tailwind", category: "frontend" },
  { id: 9, name: "Chakra UI", category: "frontend" },
  { id: 10, name: "SASS/SCSS", category: "frontend" },
  { id: 11, name: "React Native", category: "frontend" },
  { id: 12, name: "React Query", category: "frontend" },
  { id: 13, name: "React Router", category: "frontend" },
  { id: 14, name: "React Hook Form", category: "frontend" },
  { id: 15, name: "REST API", category: "backend" },
  { id: 16, name: "Next API", category: "backend" },
  { id: 17, name: "Node/Express Js", category: "backend" },
  { id: 18, name: "Prisma", category: "backend" },
  { id: 19, name: "Postgres SQL", category: "backend" },
  { id: 20, name: "MongoDB", category: "backend" },
  { id: 21, name: "JWT", category: "backend" },
  { id: 22, name: "Socket.io", category: "backend" },
  { id: 23, name: "Redis", category: "backend" },
  { id: 24, name: "MySQL", category: "backend" },
  { id: 25, name: "NestJs", category: "backend" },
  { id: 26, name: "Git/Github", category: "tools" },
  { id: 27, name: "Vercel", category: "tools" },
  { id: 28, name: "Netlify", category: "tools" },
  { id: 29, name: "Render", category: "tools" },
  { id: 30, name: "Heroku", category: "tools" },
  { id: 31, name: "AWS", category: "tools" },
  { id: 32, name: "NPM", category: "tools" },
  { id: 33, name: "Yarn", category: "tools" },
  { id: 34, name: "pnpm", category: "tools" },
];

// Social Media Links
export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/chibueze-okoronkwo/",
    icon: BsLinkedin,
    gradient: "from-blue-600 to-blue-400",
    ariaLabel: "Visit LinkedIn profile",
  },
  {
    name: "GitHub",
    url: "http://github.com/buezrico",
    icon: BsGithub,
    gradient: "from-gray-700 to-gray-500",
    ariaLabel: "Visit GitHub profile",
  },
  {
    name: "Email",
    url: "mailto:chibueze@buezrico.com",
    icon: MdEmail,
    gradient: "from-red-600 to-orange-400",
    ariaLabel: "Send an email",
  },
  {
    name: "WhatsApp",
    url: "https://wa.link/em6oai",
    icon: BsWhatsapp,
    gradient: "from-green-600 to-emerald-400",
    ariaLabel: "Contact via WhatsApp",
  },
  {
    name: "Twitter/X",
    url: "https://twitter.com/buezrico",
    icon: BsTwitterX,
    gradient: "from-gray-800 to-gray-600",
    ariaLabel: "Follow on Twitter",
  },
];

// Footer Navigation Links
export const footerNavLinks: FooterLink[] = [
  { id: "home", label: "Home", href: "#" },
  { id: "about", label: "About", href: "#about" },
  { id: "work-experience", label: "Experience", href: "#work-experience" },
  { id: "portfolio", label: "Portfolio", href: "#portfolio" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "contact", label: "Contact", href: "#contact" },
];

// Contact Info
export const contactInfo = {
  email: "chibueze@buezrico.com",
  phone: "+2348109169579",
  location: "Lagos, Nigeria",
};

// Professional Tagline
export const professionalTagline = "Full-Stack Developer & Creative Problem Solver";

// Testimonials data
export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Rico's ability to transform complex requirements into clean, performant code is exceptional. His attention to detail and commitment to best practices elevated our entire project.",
    author: "Sarah Johnson",
    role: "Product Manager",
    company: "TechVenture Inc.",
    rating: 5,
    featured: true,
    date: "Dec 2024"
  },
  {
    id: 2,
    quote: "Working with Rico was a game-changer. He delivered a full-stack solution ahead of schedule without compromising on quality. His technical expertise is unmatched.",
    author: "Michael Chen",
    role: "CTO",
    company: "DataFlow Systems",
    rating: 5,
    date: "Nov 2024"
  },
  {
    id: 3,
    quote: "Outstanding work on our e-commerce platform. Rico's expertise in Next.js and TypeScript helped us achieve exceptional performance and user experience.",
    author: "David Williams",
    role: "Senior Developer",
    company: "ShopFlow Tech",
    rating: 5,
    date: "Oct 2024"
  },
  {
    id: 4,
    quote: "Professional, responsive, and highly skilled. Rico transformed our legacy system into a modern, scalable application. Highly recommended!",
    author: "Emily Rodriguez",
    role: "Engineering Lead",
    company: "CloudNine Solutions",
    rating: 5,
    date: "Sep 2024"
  },
  {
    id: 5,
    quote: "Rico's full-stack capabilities are impressive. He seamlessly handled both frontend and backend development, delivering a robust and elegant solution.",
    author: "James Anderson",
    role: "Tech Lead",
    company: "Innovation Labs",
    rating: 5,
    date: "Aug 2024"
  },
  {
    id: 6,
    quote: "Exceptional problem-solving skills and clean code architecture. Rico went above and beyond to ensure our project's success.",
    author: "Lisa Thompson",
    role: "Project Director",
    company: "Digital Dynamics",
    rating: 5,
    date: "Jul 2024"
  }
];
