"use client";
import { motion, TargetAndTransition, Variants } from "framer-motion";
import Image from "next/image";
import React from "react";

const HomeSection = () => {
  const fadeIn: Variants = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: (custom: number): TargetAndTransition => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };
  return (
    <div className="mx-auto container lg:mt-8 md:mt-44 mt-64 mb-12">
      <div className="flex flex-col md:flex-row gap-8 px-3 lg:px-28">
        <motion.div
          className="group overflow-hidden relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.1 }}
          variants={fadeIn}
          custom={0}
        >
          <Image
            src={"/home/1.jpg"}
            alt="Home Section Image 1"
            width={1260}
            height={590}
            className="rounded-xl transition-transform duration-300 group-hover:scale-110"
          />
        </motion.div>
        <motion.div
          className="group overflow-hidden relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.1 }}
          variants={fadeIn}
          custom={1}
        >
          <Image
            src={"/home/2.jpg"}
            alt="Home Section Image 1"
            width={1260}
            height={590}
            className="rounded-xl transition-transform duration-300 group-hover:scale-110"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HomeSection;
