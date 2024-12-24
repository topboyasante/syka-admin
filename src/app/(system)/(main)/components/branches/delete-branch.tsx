"use client"
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  Dialog,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Branch } from "@/services/branches/types";
import { useState } from "react";

interface DeleteBranchDialogProps {
  branch: Branch;
  open: boolean;
  onClose: () => void;
}

export default function DeleteBranchDialog({
  branch,
  open,
  onClose,
}: DeleteBranchDialogProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/branches/${branch.ID}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete branch");
      }

      onClose();
    } catch (error) {
      console.error("Error deleting branch:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Branch</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete {branch.name}? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isLoading}
          >
            {isLoading ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
