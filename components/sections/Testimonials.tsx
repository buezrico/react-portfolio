import { prisma } from "@/lib/prisma";
import { TestimonialsCarousel } from "./TestimonialsCarousel";
import { testimonials as fallbackTestimonials } from "@/lib/constants";
import type { Testimonial } from "@/lib/types";

interface DbTestimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  imageUrl: string | null;
  rating: number;
  featured: boolean;
  createdAt: Date;
}

export async function Testimonials() {
  let testimonials: Testimonial[];

  try {
    // Fetch testimonials from database
    const dbTestimonials = (await prisma.testimonial.findMany({
      where: { status: "approved" },
      orderBy: { createdAt: "desc" },
    })) as DbTestimonial[];

    // Transform database testimonials to match expected format
    testimonials = dbTestimonials.map((t, index) => ({
      id: index + 1,
      quote: t.quote,
      author: t.author,
      role: t.role,
      company: t.company,
      image: t.imageUrl || undefined,
      rating: t.rating,
      featured: t.featured,
      date: new Date(t.createdAt).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      }),
    }));

    // Fall back to static testimonials if database is empty
    if (testimonials.length === 0) {
      testimonials = fallbackTestimonials;
    }
  } catch {
    // If database is not set up yet or there's an error, use fallback testimonials
    testimonials = fallbackTestimonials;
  }

  return <TestimonialsCarousel testimonials={testimonials} />;
}
