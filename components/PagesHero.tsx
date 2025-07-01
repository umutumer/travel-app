"use client";
import { usePathname } from "next/navigation";
import React from "react";

const PagesHero = () => {
  const pathname = usePathname();
  const pages = [
    { path: "/about", title: "About" },
    { path: "/hotels", title: "Hotels" },
    { path: "/trips", title: "Trips" },
    { path: "/rent-a-cars", title: "Rent a Cars" },
    { path: "/contact", title: "Contact" },
  ];
  const filteredPages = pages.filter((page) => pathname.includes(page.path));
  return (
    <div className="bg-orange-50 w-full h-60 flex items-center justify-center">
      <h1 className="text-3xl lg:text-5xl font-bold text-orange-600">
        {filteredPages.length > 0 ? filteredPages[0].title : "Page Not Found"}
      </h1>
    </div>
  );
};

export default PagesHero;
