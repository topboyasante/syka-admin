'use client';

import React, { useState } from 'react';
import { Client } from './data';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { updateClient } from '@/services/clients';

const ClientFormSchema = z.object({
  first_name: z.string().min(1, 'First name is required'),
  last_name: z.string().min(1, 'Last name is required'),
  dob: z
    .string()
    .min(1, 'Date of birth is required')
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
  sex: z.enum(['male', 'female', 'other', 'prefer_not_to_say']),
  country: z.string().min(1, 'Country is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format'),
  company_name: z.string().min(1, 'Company name is required'),
});

export type ClientFormValues = z.infer<typeof ClientFormSchema>;

interface EditClientProps {
  client: Client;
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

export default function EditClient({ client, open, onClose }: EditClientProps) {
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
      country: client.country,
    },
  });

  async function onSubmit(data: ClientFormValues) {
    setIsLoading(true);

    try {
      await updateClient(data, client.ID);
      onClose();
    } catch (error) {
      console.error('Error updating branch:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] my-5 h-[500px] overflow-y-scroll">
        <DialogHeader>
          <DialogTitle>Edit Client</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <div className="grid gap-4">
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
                      <Input placeholder="Enter your phone" {...field} />
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
                      <Input placeholder="Enter your country" {...field} />
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
                      <Input placeholder="Enter your sex" {...field} />
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
                {isLoading ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
