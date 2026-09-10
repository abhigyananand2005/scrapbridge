import { z } from "zod";

export const registerSchema = z.object({
  body: z
    .object({
      name: z
        .string()
        .trim()
        .min(2, "Name must contain at least 2 characters")
        .max(80, "Name cannot exceed 80 characters"),

      email: z
        .string()
        .trim()
        .email("Please provide a valid email address")
        .max(120, "Email cannot exceed 120 characters")
        .transform((email) => email.toLowerCase()),

      password: z
        .string()
        .min(8, "Password must contain at least 8 characters")
        .max(128, "Password cannot exceed 128 characters"),
    })
    .strict(),
});

export const loginSchema = z.object({
  body: z
    .object({
      email: z
        .string()
        .trim()
        .email("Please provide a valid email address")
        .transform((email) => email.toLowerCase()),

      password: z
        .string()
        .min(1, "Password is required"),
    })
    .strict(),
});
