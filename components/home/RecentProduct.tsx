"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { packages } from "@/constans";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Clock, MapPin } from "lucide-react";
import { Button } from "../ui/button";
const RecentProduct = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel
      className="m-10 container mx-auto p-12"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {packages.map((pkg, index) => (
          <CarouselItem
            key={index}
            className="w-[300px] sm:w-[400px] md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-2"
          >
            <Card className="bg-white shadow-lg rounded-lg">
              <CardHeader className="relative">
                <Image
                  width={500}
                  height={500}
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle className="text-xl h-[60px]">{pkg.title}</CardTitle>
                {pkg.discount && (
                  <Badge className="text-sm text-white absolute top-0 right-6 bg-blue-500 px-2">
                    {pkg.discount}
                  </Badge>
                )}
              </CardHeader>
              <CardContent>
                <CardDescription className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" /> {pkg.location}
                </CardDescription>
                <CardDescription className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" /> {pkg.duration}
                </CardDescription>
                <div className="flex items-center mt-4">
                  <span className="text-xl font-bold text-orange-500">
                    {pkg.price}
                  </span>
                  {pkg.oldPrice && (
                    <span className="text-sm line-through text-gray-400 ml-2">
                      {pkg.oldPrice}
                    </span>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button>
                  View Details
                </Button>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 bg-orange-500 hover:bg-orange-600 hover:text-white text-white p-3 md:p-4 lg:p-5 xl:p-6" />
      <CarouselNext className="right-0 bg-orange-500 hover:bg-orange-600 hover:text-white text-white p-3 md:p-4 lg:p-5 xl:p-6" />
    </Carousel>
  );
};

export default RecentProduct;
