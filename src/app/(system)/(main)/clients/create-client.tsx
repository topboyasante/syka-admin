'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
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
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { createClient } from '@/services/clients';
import { toast } from 'sonner';

const ClientFormSchema = z.object({
  first_name: z.string().min(1, 'First name is required'),
  last_name: z.string().min(1, 'Last name is required'),
  dob: z
    .string()
    .min(1, 'Date of birth is required')
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
  sex: z.enum(['male', 'female', 'other', 'prefer_not_to_say']),
  country: z.string().min(1, 'Country is required'),
  city: z.string().min(1, 'City is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format'),
  company_name: z.string().min(1, 'Company name is required'),
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

export default function CreateClient() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ClientFormValues>({
    resolver: zodResolver(ClientFormSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      dob: '',
      email: '',
      phone: '',
      company_name: '',
      sex: 'other',
      country: '',
      city: '',
    },
  });

  async function onSubmit(data: ClientFormValues) {
    setIsLoading(true);

    const res = await createClient(data);
    setIsLoading(false);
    setOpen(false);
    form.reset();
    if (res) {
      toast.error(res);
    } else {
      toast.success('created client successfully');
    }
  }

  return (
    <section className="flex w-full">
      <div
        className="ml-auto flex gap-1 items-center justify-center border px-4 py-1.5 bg-blue-400 rounded-md text-white cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <Plus className="h-4 w-4" />
        create client
      </div>
      <Dialog open={open} onOpenChange={() => setOpen(false)}>
        <DialogContent className="sm:max-w-[425px] my-5 h-[500px] overflow-y-scroll">
          <DialogHeader>
            <DialogTitle>Create Client</DialogTitle>
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
                        <Input
                          placeholder="Enter your company name"
                          {...field}
                        />
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
                <Button
                  type="button"
                  variant="outline"
                  onOpenChange={() => setOpen(false)}
                >
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
    </section>
  );
}
