export function NormalizeAuthError(error: string): string {
  const errorMap: Record<string, string> = {
    "user not found": "No user exists with the provided credentials",
  };

  return errorMap[error];
}
