"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const filterSchema = z.object({
  rating: z.string().optional(),
  priceMin: z.string().optional(),
  priceMax: z.string().optional(),
});

type FilterType = z.infer<typeof filterSchema>;

const HotelFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const form = useForm<FilterType>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      rating: searchParams.get("rating") || "",
      priceMin: searchParams.get("priceMin") || "",
      priceMax: searchParams.get("priceMax") || "",
    },
  });
  const onSubmit = (data: FilterType) => {
    const params = new URLSearchParams();
    if (data.rating) params.set("rating", data.rating);
    if (data.priceMin) params.set("priceMin", data.priceMin);
    if (data.priceMax) params.set("priceMax", data.priceMax);
    router.push(`/hotels?${params.toString()}`);
  };

  return (
    <div className="container mx-auto mt-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4"
        >
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="number"
                    step="0.1"
                    placeholder="Rating, 4.5"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="priceMin"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="number" placeholder="Minimum price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="priceMax"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="number" placeholder="Maximum price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default HotelFilter;
