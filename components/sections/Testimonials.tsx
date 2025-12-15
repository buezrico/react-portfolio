import { prisma } from "@/lib/prisma";
import { TestimonialsCarousel } from "./TestimonialsCarousel";
import { testimonials as fallbackTestimonials } from "@/lib/constants";

export async function Testimonials() {
  let testimonials;

  try {
    // Fetch testimonials from database
    const dbTestimonials = await prisma.testimonial.findMany({
      where: { status: "approved" },
      orderBy: { createdAt: "desc" },
    });

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
  } catch (error) {
    // If database is not set up yet or there's an error, use fallback testimonials
    console.log("Using fallback testimonials:", error);
    testimonials = fallbackTestimonials;
  }

  return <TestimonialsCarousel testimonials={testimonials} />;
}
