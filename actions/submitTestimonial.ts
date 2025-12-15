"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const schema = z.object({
  author: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Valid email required"),
  role: z.string().min(2, "Job title required").max(100),
  company: z.string().min(2, "Company name required").max(100),
  rating: z.number().min(1).max(5),
  quote: z.string()
    .min(20, "Testimonial must be at least 20 characters")
    .max(1000, "Testimonial must be less than 1000 characters"),
  imageUrl: z.string().url("Valid image URL").optional().or(z.literal("")),
});

export async function submitTestimonial(prevState: any, formData: FormData) {
  // 1. Validate
  const validatedFields = schema.safeParse({
    author: formData.get("author"),
    email: formData.get("email"),
    role: formData.get("role"),
    company: formData.get("company"),
    rating: Number(formData.get("rating")),
    quote: formData.get("quote"),
    imageUrl: formData.get("imageUrl"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    // 2. Create testimonial in database
    await prisma.testimonial.create({
      data: {
        ...validatedFields.data,
        imageUrl: validatedFields.data.imageUrl || null,
        status: "approved", // Auto-approve for now
      },
    });

    // 3. Revalidate testimonials page
    revalidatePath("/");

    // 4. Return success
    return {
      success: true,
      message: "Thank you! Your testimonial has been submitted successfully.",
    };
  } catch (error) {
    console.error("Testimonial submission error:", error);
    return {
      success: false,
      message: "Failed to submit testimonial. Please try again.",
    };
  }
}
