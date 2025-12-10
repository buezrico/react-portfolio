"use server";

import { z } from "zod";
import type { ContactFormState } from "@/lib/types";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000),
});

export async function sendEmail(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    // TODO: Integrate EmailJS or alternative email service
    // For now, just log the data
    console.log("Contact form submission:", validatedFields.data);

    // Placeholder for EmailJS integration:
    // const emailjs = await import("@emailjs/browser");
    // await emailjs.send(
    //   process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    //   process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    //   {
    //     from_name: validatedFields.data.name,
    //     from_email: validatedFields.data.email,
    //     message: validatedFields.data.message,
    //   },
    //   process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    // );

    return {
      success: true,
      message: "Message sent successfully! We will get back to you soon.",
    };
  } catch (error) {
    console.error("Email send error:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
}
