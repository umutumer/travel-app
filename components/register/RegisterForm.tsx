"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { usePageDirection } from "@/context/PageTransitionContext";
import RegisterBg from "@/public/slider/bgswipe.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

const registerSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  firstName: z.string().min(1, "firstName is required"),
  lastName: z.string().min(1, "lastName is required"),
});
type RegisterFormValues = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const router = useRouter();
  const { setDirection } = usePageDirection();
  const [error, setError] = React.useState<string>("");
  const [success,setSuccess] = React.useState<string>("");

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    setError("");
    console.log("Register:", data);
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        const text = await response.text();
        const result = text ? JSON.parse(text) : {};
        setError(result.message || "Registration Failed");
      }
      if (response.ok) {
        setSuccess("Success");
        setTimeout(() => {
          router.push("/login");
        },2000)
      } 
    } catch (error) {
      console.error(error);    
    }
  };

  const handleGoLogin = () => {
    setDirection("backward");
    router.push("/login");
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-slate-100 p-6">
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex flex-col lg:flex-row shadow-2xl rounded-2xl overflow-hidden w-full max-w-7xl bg-white"
      >
        {/* Image (Left) */}
        <div className="relative w-full lg:w-1/2 h-72 md:h-[400px] lg:h-[600px]">
          <Image
            src={RegisterBg.src}
            alt="Register background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <h2 className="text-orange-500 text-2xl md:text-3xl lg:text-4xl font-semibold text-center px-4">
              Join us and start your journey!
            </h2>
          </div>
        </div>

        {/* Form (Right) */}
        <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Create an Account
          </h1>

          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500 mb-4">{success}</p>}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="jsmith@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="********"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <Button type="submit" className="w-full sm:w-auto">
                  Register
                </Button>
                <button
                  type="button"
                  onClick={handleGoLogin}
                  className="text-sm text-blue-600 hover:underline font-medium"
                >
                  Already have an account? Login
                </button>
              </div>
            </form>
          </Form>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterForm;
