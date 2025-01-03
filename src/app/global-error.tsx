"use client";

import { AlertOctagon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <AlertOctagon className="h-20 w-20 text-red-600" />
            </div>

            <h1 className="text-4xl font-bold mb-2">Application Error</h1>

            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              A critical error has occurred. Please try refreshing the page or
              contact support if the problem persists.
            </p>

            <div className="space-x-4">
              <Button variant="default" onClick={() => reset()}>
                Refresh Page
              </Button>

              <Button
                variant="outline"
                onClick={() => (window.location.href = "/")}
              >
                Return Home
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
      </body>
    </html>
  );
}
