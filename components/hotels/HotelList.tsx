"use client";
import React, { use } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter, useSearchParams } from "next/navigation";
import { Star } from "lucide-react";
import { useHotelStore } from "@/store/HotelStore";


const HotelList = () => {
  const {hotels,error,loading,fetchHotels} = useHotelStore();
  const searchParams = useSearchParams();
  const router = useRouter();




  React.useEffect(() => {
    const filters: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      filters[key] = value;
    });
    fetchHotels(filters);
  }, [searchParams, fetchHotels]);

  return (
    <div className="container mx-auto p-4">
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index}>
              <Skeleton className="h-48 w-full rounded-lg" />
              <Skeleton className="h-6 w-full my-2" />
              <Skeleton className="h-4 w-1/4 my-1" />
              <Skeleton className="h-4 w-3/4 my-1" />
              <Skeleton className="h-4 w-1/3 my-1" />
              <Skeleton className="h-6 w-1/3 my-2" />
            </div>
          ))}
        </div>
      )}
      {!loading && !error && hotels.length === 0 && (
        <div className="text-center text-blue-500 font-semibold mt-8">
          No hotels found.
        </div>
      )}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-4">
          {hotels.map((hotel) => (
            <Card key={hotel.id} className="shadow-md">
              <CardHeader>
                <img
                  src={hotel.photos[0]}
                  alt={hotel.name}
                  className="w-full h-48 object-cover rounded"
                />
                <CardTitle className="text-lg font-semibold mt-2">
                  {hotel.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-xl flex items-center gap-1">{hotel.rating} <Star className="text-yellow-500" /> </p>

                <p className="text-gray-700">{hotel.description}</p>
                <p className="text-sm text-gray-500">{hotel.location}</p>
                <p className="text-lg font-bold mt-4">
                  ${hotel.pricePerNight} / night
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default HotelList;
