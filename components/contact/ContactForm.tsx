"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import ReCAPTCHA from "react-google-recaptcha";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  recaptcha: z.string().min(1, {
    message: "Please complete the reCAPTCHA.",
  }),
});

const ContactForm = () => {

  const [recaptchaToken, setRecaptchaToken] = React.useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      recaptcha: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values }),
      });

      if (response.ok) {
        const result = await response.json();
        
        form.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="px-4 py-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="name" {...field} />
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
                  <Input placeholder="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <ReCAPTCHA 
          sitekey="6LdF5WsrAAAAAMCR2A_x7T1BFtzrOJ8ks18Pe7G6"
          onChange={(token:string | null) => {
            setRecaptchaToken(token);
            form.setValue("recaptcha", token || "")
            }}
          onExpired={() => {
            setRecaptchaToken(null);
            form.setValue("recaptcha", "")
          }}
           />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
