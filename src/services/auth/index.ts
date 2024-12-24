"use server";
import http from "@/lib/axios";
import { AxiosError } from "axios";
import { createSession } from "./sessions";
import { LoginFormSchema, LoginFormState } from "./types";

export async function Login(
  prevState: LoginFormState,
  formData: FormData
): Promise<LoginFormState> {
  try {
    const validatedFields = LoginFormSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { email, password } = validatedFields.data;

    const res = await http.post("/auth/login/", {
      email,
      password,
    });

    await createSession({
      access_token: res.data.token,
    });

    return { successMessage: "Successfully signed in" };
  } catch (error) {
    console.log(error);
    if (error instanceof AxiosError) {
      return {
        errorMessage:
          error.response?.data.error ||
          "An Error occurred while logging you in. Please try again.",
      };
    }

    return {
      errorMessage:
        "An Error occurred while logging you in. Please try again later.",
    };
  }
}
