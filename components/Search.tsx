"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const Search = () => {
  const searchParams = useSearchParams();
  const destination = searchParams.get("destination");
  const activity = searchParams.get("activity");
  const duration = searchParams.get("duration");
  const price = searchParams.get("price");
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Search Results</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Filters</h2>
          <ul className="list-disc pl-5">
            {destination && <li>Destination: {destination}</li>}
            {activity && <li>Activity: {activity}</li>}
            {duration && <li>Duration: {duration}</li>}
            {price && <li>Price Range: {price}</li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
