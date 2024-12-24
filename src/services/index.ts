import { AxiosError } from "axios";
import { ErrorResponse } from "./types";

// Helper function to handle API errors
export function HandleApiError(error: unknown): ErrorResponse {
  if (error instanceof AxiosError) {
    return {
      error: true,
      message:
        error.response?.data?.message ||
        "An error occurred while processing your request",
    };
  }
  return {
    error: true,
    message:
      error instanceof Error ? error.message : "An unexpected error occurred",
  };
}
