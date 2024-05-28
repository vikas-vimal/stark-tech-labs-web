import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(1, "This field is required")
    .max(300, "More than 300 characters are not allowed"),
  email: z
    .string()
    .email()
    .min(1, "This field is required")
    .max(300, "More than 300 characters are not allowed"),
  countryCode: z.string(),
  phone: z
    .string()
    .min(1, "This field is required")
    .max(300, "More than 300 characters are not allowed"),
  companyName: z
    .string()
    .min(1, "This field is required")
    .max(300, "More than 300 characters are not allowed"),
  message: z
    .string()
    .min(1, "This field is required")
    .max(1000, "More than 1000 characters are not allowed"),
});

export type ContactFormType = z.infer<typeof ContactFormSchema>;
