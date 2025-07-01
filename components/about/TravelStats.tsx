"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const TravelStats = () => {
  const stats = [
    { id: 1, label: "Happy Travelers", value: 1000, suffix: "+" },
    { id: 2, label: "Destinations", value: 500, suffix: "+" },
    { id: 3, label: "Tours Completed", value: 300, suffix: "+" },
    { id: 4, label: "Countries Visited", value: 50, suffix: "+" },
  ];
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  return (
    <div className="bg-blue-50 py-16">
      <div className="mx-auto container text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-blue-600 mb-8">
          Why Choose Us
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Join thousand of travelers around the world and make your journey
          unforgetable with Trendy Travel. Explore unique destinations with us!
        </p>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-orange-500 mb-2">
                <CountUp
                  start={0}
                  end={inView ? stat.value : 0}
                  duration={2.5}
                  delay={0.5}
                  suffix={stat.suffix}
                />
              </h3>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelStats;
