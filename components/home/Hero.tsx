"use client";
import { slides } from "@/constans";
import React from "react";
import { Button } from "../ui/button";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HeroBg from "@/public/slider/bgswipe.jpg";
import MainSearch from "./MainSearch";
const Hero = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
    <div
      className="relative bg-orange-100 py-16"
      style={{
        backgroundImage: `url(${HeroBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Left */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left px-6 transition-all duration-500">
          <h4 className="text-orange-600 font-bold">Lets Go Now</h4>
          <h1 className="text-3xl min-h-24 md:text-5xl font-semibold text-gray-900">
            {slides[currentSlide].title}
          </h1>
          <p className="text-gray-600 text-base md:text-lg min-h-12">
            {slides[currentSlide].description}
          </p>
          <Button className="px-6 py-3 rounded-full">
            {slides[currentSlide].buttonText}
          </Button>
        </div>
        {/* Right */}
        <div className="lg:w-1/2 mt-2 lg:mt-0 w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper w-full"
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <MainSearch />
    </div>
  );
};

export default Hero;
