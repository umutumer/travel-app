"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const CompanyLogos = () => {
  const companyLogos = [
    "/company/1.png",
    "/company/2.png",
    "/company/3.png",
    "/company/4.png",
    "/company/5.png",
    "/company/6.png",
    "/company/7.png",
    "/company/8.png",
  ];
  return (
    <div className="bg-gray-100 py-16">
      <h2 className="text-center text-2xl lg:text-4xl font-bold text-gray-800 mb-6 lg:mb-12">
        Trusted by Leading Companies
      </h2>
      <Marquee
        speed={150}
        pauseOnHover={true}
        gradient={false}
        className="mx-auto max-w-6xl px-4"
        style={{ padding: "0 20px" }}
      >
        <div className="flex items-center space-x-8">
          {companyLogos.map((logo, index) => (
            <Image
              src={logo}
              width={700}
              height={500}
              alt="Company Logo"
              className="w-72 h-auto object-contain"
              key={index}
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default CompanyLogos;
