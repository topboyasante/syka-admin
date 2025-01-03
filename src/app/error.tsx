"use client";

import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <AlertTriangle className="h-20 w-20 text-red-500" />
        </div>

        <h1 className="text-4xl font-bold mb-2">Something went wrong!</h1>

        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          An unexpected error has occurred. Our team has been notified and is
          working to fix the issue.
        </p>

        <div className="space-x-4">
          <Button variant="default" onClick={() => reset()}>
            Try Again
          </Button>

          <Button variant="outline" onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>

        {process.env.NODE_ENV === "development" && (
          <div className="mt-8 p-4 bg-gray-100 rounded-lg max-w-md mx-auto">
            <p className="text-sm text-gray-700 font-mono break-all">
              {error.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
