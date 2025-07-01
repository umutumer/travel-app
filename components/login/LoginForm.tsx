"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";

import { usePageDirection } from "@/context/PageTransitionContext";
import LoginBg from "@/public/slider/bgswipe.jpg";
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

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email(),
  password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const router = useRouter();
  const { setDirection } = usePageDirection();
  const [error, setError] = React.useState("");

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (res?.error) setError("Invalid email or password");
    else router.push("/");
  };

  const handleGoRegister = () => {
    setDirection("forward");
    router.push("/register");
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-slate-100 p-6">
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex flex-col-reverse lg:flex-row shadow-2xl rounded-2xl overflow-hidden w-full max-w-7xl bg-white"
      >
        {/* Form (Left) */}
        <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Welcome Back</h1>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="********" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-between flex-wrap gap-4">
                <Button type="submit" className="w-full sm:w-auto">Login</Button>
                <button
                  type="button"
                  onClick={handleGoRegister}
                  className="text-sm text-blue-600 hover:underline font-medium"
                >
                  Don’t have an account? Register
                </button>
              </div>
            </form>
          </Form>
        </div>

        {/* Image (Right) */}
        <div className="relative w-full lg:w-1/2 h-72 md:h-[400px] lg:h-[600px]">
          <Image
            src={LoginBg.src}
            alt="Login background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <h2 className="text-orange-500 text-2xl md:text-3xl lg:text-4xl font-semibold text-center px-4">
              Are you ready to travel?
            </h2>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginForm;
