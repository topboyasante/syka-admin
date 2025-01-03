"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { updateClient } from "@/services/clients";
import { toast } from "sonner";
import { PhoneInput } from "@/components/ui/phone-input";
import CountrySelect from "@/components/ui/country-select";
import { Client } from "@/services/clients/types";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";

const ClientFormSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  dob: z
    .string()
    .min(1, "Date of birth is required")
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
  sex: z.enum(["male", "female", "other", "prefer_not_to_say"]),
  country: z.string().min(1, "Country is required"),
  city: z.string().min(1, "City is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"),
  company_name: z.string().min(1, "Company name is required"),
});

export type ClientFormValues = z.infer<typeof ClientFormSchema>;

function RequiredLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-1 items-center">
      {children}
      <span className="text-red-500">*</span>
    </div>
  );
}

interface EditClientProps {
  client: Client;
}
export default function EditClient({ client }: EditClientProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ClientFormValues>({
    resolver: zodResolver(ClientFormSchema),
    defaultValues: {
      first_name: client.first_name,
      last_name: client.last_name,
      dob: client.dob,
      email: client.email,
      phone: client.phone,
      company_name: client.company_name,
      sex: client.sex,
      city: client.city,
      country: client.country,
    },
  });

  async function onSubmit(data: ClientFormValues) {
    setIsLoading(true);

    try {
      await updateClient(data, client.ID);
      toast.success("Client updated successfully");
      router.push("/clients");
    } catch (error) {
      toast.error("Failed to update client");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Edit Client</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* First 4 fields in 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <RequiredLabel>
                      <FormLabel>First Name</FormLabel>
                    </RequiredLabel>
                    <FormControl>
                      <Input placeholder="Enter first name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <RequiredLabel>
                      <FormLabel>Last Name</FormLabel>
                    </RequiredLabel>
                    <FormControl>
                      <Input placeholder="Enter last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem>
                    <RequiredLabel>
                      <FormLabel>DOB</FormLabel>
                    </RequiredLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your date of birth"
                        type="date"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sex"
                render={({ field }) => (
                  <FormItem>
                    <RequiredLabel>
                      <FormLabel>Sex</FormLabel>
                    </RequiredLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                          <SelectItem value="prefer_not_to_say">
                            Prefer not to say
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Remaining fields in single column */}
            <div className="grid grid-cols-1 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <RequiredLabel>
                      <FormLabel>Email</FormLabel>
                    </RequiredLabel>
                    <FormControl>
                      <Input placeholder="Enter email" {...field} />
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
                      <FormLabel>Phone</FormLabel>
                    </RequiredLabel>
                    <FormControl>
                      <PhoneInput
                        {...field}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company_name"
                render={({ field }) => (
                  <FormItem>
                    <RequiredLabel>
                      <FormLabel>Company Name</FormLabel>
                    </RequiredLabel>
                    <FormControl>
                      <Input placeholder="Enter your company name" {...field} />
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
                      <CountrySelect
                        {...field}
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <RequiredLabel>
                      <FormLabel>City</FormLabel>
                    </RequiredLabel>
                    <FormControl>
                      <Input placeholder="Enter your city" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-end gap-3">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Saving..." : "Update Client"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
