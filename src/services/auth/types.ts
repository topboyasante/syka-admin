import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email({ message: "Enter a valid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export type LoginFormState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
      };
      errorMessage?: string;
      successMessage?: string;
    }
  | undefined;
