"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";

const branchFormSchema = z.object({
  name: z
    .string()
    .min(2, "Branch name must be at least 2 characters")
    .max(100, "Branch name cannot exceed 100 characters"),
  address: z
    .string()
    .min(5, "Address must be at least 5 characters")
    .max(200, "Address cannot exceed 200 characters"),
  country: z
    .string()
    .min(2, "Country must be at least 2 characters")
    .max(100, "Country name cannot exceed 100 characters"),
  phone: z
    .string()
    .regex(
      /^\+?[1-9]\d{1,14}$/,
      "Please enter a valid phone number in international format"
    ),
  email: z.string().email("Please enter a valid email address"),
  parent_branch_id: z.string().optional(),
});

type BranchFormValues = z.infer<typeof branchFormSchema>;

interface Branch extends BranchFormValues {
  ID: string;
}

interface EditBranchProps {
  branch: Branch;
  existingBranches: Array<{
    ID: string;
    name: string;
  }>;
  open: boolean;
  onClose: () => void;
}

function RequiredLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-1 items-center">
      {children}
      <span className="text-red-500">*</span>
    </div>
  );
}

export function EditBranchModal({
  branch,
  existingBranches,
  open,
  onClose,
}: EditBranchProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<BranchFormValues>({
    resolver: zodResolver(branchFormSchema),
    defaultValues: {
      name: branch.name,
      address: branch.address,
      country: branch.country,
      phone: branch.phone,
      email: branch.email,
      parent_branch_id: branch.parent_branch_id,
    },
  });

  useEffect(() => {
    form.reset({
      name: branch.name,
      address: branch.address,
      country: branch.country,
      phone: branch.phone,
      email: branch.email,
      parent_branch_id: branch.parent_branch_id,
    });
  }, [branch, form]);

  async function onSubmit(data: BranchFormValues) {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/branches/${branch.ID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to update branch");
      }

      onClose();
    } catch (error) {
      console.error("Error updating branch:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const availableParentBranches = existingBranches.filter(
    (existingBranch) => existingBranch.ID !== branch.ID
  );

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Branch</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <div className="grid gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <RequiredLabel>
                      <FormLabel>Branch Name</FormLabel>
                    </RequiredLabel>
                    <FormControl>
                      <Input placeholder="Enter branch name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="parent_branch_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parent Branch</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select parent branch (optional)" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {availableParentBranches.map((branch) => (
                          <SelectItem key={branch.ID} value={branch.ID}>
                            {branch.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <RequiredLabel>
                      <FormLabel>Address</FormLabel>
                    </RequiredLabel>
                    <FormControl>
                      <Input placeholder="Enter branch address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <RequiredLabel>
                      <FormLabel>Country</FormLabel>
                    </RequiredLabel>
                    <FormControl>
                      <Input placeholder="Enter country" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <RequiredLabel>
                      <FormLabel>Phone Number</FormLabel>
                    </RequiredLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="Enter phone number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <RequiredLabel>
                      <FormLabel>Email</FormLabel>
                    </RequiredLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end gap-3">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
