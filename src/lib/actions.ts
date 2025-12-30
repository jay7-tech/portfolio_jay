"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormState = {
    message: string;
    errors: {
        name?: string[];
        email?: string[];
        message?: string[];
    } | {};
};

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors below.",
    };
  }

  // In a real app, you would send an email or save to a DB.
  // For this portfolio, we'll simulate a success.
  console.log("New contact form submission:", validatedFields.data);

  return {
    message: "Thank you for your message! I'll be in touch soon.",
    errors: {},
  };
}
