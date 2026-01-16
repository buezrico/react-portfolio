import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { ThemeScript } from "@/components/theme/ThemeScript";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { RegisterCSSProperties } from "@/components/shared/RegisterCSSProperties";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://buezrico.vercel.app",
  ),
  title: "Chibueze Rico | Software Engineer Portfolio",
  description:
    "Portfolio of Chibueze Okoronkwo (Buez Rico), a creative software engineer specializing in modern web development with React, Next.js, TypeScript, and Node.js. View projects and experience.",
  keywords: [
    "Chibueze Rico",
    "Buez Okoronkwo",
    "Software Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Buez Rico", url: "https://github.com/buezrico" }],
  creator: "Chibueze Rico",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buezrico.com",
    title: "Chibueze Okoronkwo | Software Engineer Portfolio",
    description:
      "Portfolio of Chibueze Okoronkwo, a creative software engineer specializing in modern web development with React, Next.js, and TypeScript.",
    siteName: "Buez Rico's Portfolio",
    images: [
      {
        url: "/images/me-studio.jpg",
        width: 1200,
        height: 630,
        alt: "Chibueze Okoronkwo - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chibueze Okoronkwo | Software Engineer Portfolio",
    description:
      "Portfolio of Chibueze Okoronkwo, a creative software engineer specializing in modern web development.",
    images: ["/images/me-studio.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Chibueze Okoronkwo",
              alternateName: "Buez Rico",
              jobTitle: "Software Engineer",
              url: "https://buezrico.com",
              sameAs: [
                "https://github.com/buezrico",
                "https://linkedin.com/in/chibueze-okoronkwo",
                "https://twitter.com/buezrico",
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Web Development",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <RegisterCSSProperties />
        <ThemeProvider>
          {/* Fixed Theme Toggle - top right */}
          <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50">
            <ThemeToggle className="bg-card/70 backdrop-blur-sm border border-primary/20 shadow-lg rounded-full" />
          </div>

          {/* Global Animated Background - covers entire page */}
          <div className="fixed inset-0 -z-50 pointer-events-none">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:mix-blend-normal" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:mix-blend-normal" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/25 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:mix-blend-normal" />
          </div>

          {children}
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
