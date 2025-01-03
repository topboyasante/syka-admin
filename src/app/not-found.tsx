"use client";
import { FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProgressBarLink } from "@/components/ui/progress-bar";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <FileQuestion className="h-20 w-20 text-gray-400" />
        </div>

        <h1 className="text-4xl font-bold mb-2">Page not found</h1>

        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. Please check the
          URL or return to the homepage.
        </p>

        <div className="space-x-4">
          <Button variant="default" asChild>
            <ProgressBarLink href="/">Return Home</ProgressBarLink>
          </Button>

          <Button variant="outline" onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
