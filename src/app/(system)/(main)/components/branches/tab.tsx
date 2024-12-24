import React from "react";
import Branches from "./branches";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { fetchBranches } from "@/services/branches";

export default async function BranchesTabComponent() {
  const branchesResponse = await fetchBranches();

  console.log(branchesResponse)

  // Handle error case
  if ("error" in branchesResponse) {
    return (
      <Alert variant="destructive">
        <AlertDescription>
          {branchesResponse.message || "Failed to load branches"}
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="space-y-4">
      <Branches initialBranches={branchesResponse} />
    </div>
  );
}
