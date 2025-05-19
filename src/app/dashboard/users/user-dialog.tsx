"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
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

const userFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .optional()
    .or(z.literal("")),
});

type UserFormData = z.infer<typeof userFormSchema>;

interface UserDialogProps {
  isOpen: boolean;
  onClose: () => void;
  user?: {
    id: string;
    name: string;
    email: string;
  } | null;
  onSuccess: () => void;
}

export function UserDialog({
  isOpen,
  onClose,
  user,
  onSuccess,
}: UserDialogProps) {
  const isEditing = !!user;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<UserFormData>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (user) {
      form.reset({
        name: user.name,
        email: user.email,
        password: "", // Password field is empty when editing
      });
    } else {
      form.reset({
        name: "",
        email: "",
        password: "",
      });
    }
  }, [user, form]);

  const onSubmit = async (data: UserFormData) => {
    setIsSubmitting(true);
    try {
      const url = isEditing
        ? `/api/users/${user.id}`
        : "/api/users";
      
      const method = isEditing ? "PUT" : "POST";      // If editing and password is empty, remove it from the payload
      if (isEditing && !data.password) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...restData } = data;
        data = restData as UserFormData;
      }

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }      toast.success(
        isEditing ? "User updated successfully" : "User created successfully"
      );
      onSuccess();
      onClose();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error 
        ? error.message 
        : "An error occurred";
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? "Edit User" : "Add New User"}
          </DialogTitle>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter name" {...field} />
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
                  <FormLabel>Email</FormLabel>
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
            
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {isEditing ? "Password (leave blank to keep current)" : "Password"}
                  </FormLabel>
                  <FormControl>
                    <Input 
                      type="password"
                      placeholder={isEditing ? "••••••••" : "Enter password"} 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <DialogFooter className="mt-6">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Loading..." : isEditing ? "Update" : "Add"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
