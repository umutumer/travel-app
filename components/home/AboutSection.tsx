"use client";
import React, { use } from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
const AboutSection = () => {
  const pathname = usePathname();
  return (
    <div className="bg-orange-100">
      <div className="mx-auto container text-center py-16 px-6 lg:px-28">
        <TypeAnimation
          sequence={[
            "WELCOME TO TRENDY TRAVEL",
            2000,
            "SEYAHATE HOŞ GELDİNİZ",
            2000,
            "WILKOMMEN BEI TRAVEL",
            2000,
            "BIENVENUE A TRAVEL",
            2000,
          ]}
          wrapper="span"
          speed={50}
          className="text-blue-600 font-bold text-2xl lg:text-4xl mb-4"
          repeat={Infinity}
        />
        <div className="flex justify-center items-center mb-6">
          <hr className="border-gray-300 w-1/5" />
          <span className="mx-3 text-gray-400 text-xl">&#128064;</span>
          <hr className="border-gray-300 w-1/5" />
        </div>
        {pathname === "/" && (
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
            quasi, laborum sed unde dicta rem illo perferendis dolore iure odio,
            ipsam quis! Ipsam voluptatem maiores, quo vel quia, optio
            repellendus exercitationem voluptas illo, magnam impedit cumque
            aspernatur neque nulla eum soluta facere? Aut vero maxime magnam,
            unde laudantium rerum molestias!
          </p>
        )}
        {pathname === "/about" && (
          <div>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              quasi, laborum sed unde dicta rem illo perferendis dolore iure
              odio, ipsam quis! Ipsam voluptatem maiores, quo vel quia, optio
              repellendus exercitationem voluptas illo, magnam impedit cumque
              aspernatur neque nulla eum soluta facere? Aut vero maxime magnam,
              unde laudantium rerum molestias!
            </p>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              quasi, laborum sed unde dicta rem illo perferendis dolore iure
              odio, ipsam quis! Ipsam voluptatem maiores, quo vel quia, optio
              repellendus exercitationem voluptas illo, magnam impedit cumque
              aspernatur neque nulla eum soluta facere? Aut vero maxime magnam,
              unde laudantium rerum molestias!
            </p>
          </div>
        )}
        <div className="flex justify-center items-center gap-4">
          <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }}>
            <Button className="bg-blue-500 text-white px-8 py-6 rounded-full hover:bg-blue-600 ">
              Learn More
            </Button>
          </motion.div>
          <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }}>
            <Button className="px-8 py-6 rounded-full">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
