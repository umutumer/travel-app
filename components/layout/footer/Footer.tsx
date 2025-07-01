import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { navigationLinks } from "@/constans";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram size={16} />,
      href: "https://instagram.com/umutumer",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={16} />,
      href: "https://linkedin.com/in/umutumer",
    },
    {
      name: "YouTube",
      icon: <Youtube size={16} />,
      href: "https://youtube.com/@umutumerx",
    },
  ];
  const instagramImages = Array.from(
    { length: 11 },
    (_, index) => `/instagram/${index + 1}.jpg`
  );

  return (
    <footer className="relative bg-black text-white p-6">
      <div className="p-4 flex flex-wrap items-center justify-center md:justify-between gap-4 md:gap-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full md:w-auto">
          <div className="max-w-xs">
            <h4 className="text-xl font-bold mb-4">Travel</h4>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              tenetur expedita suscipit quam dignissimos minima ea quis nesciunt
              at accusamus.
            </p>
            <div className="flex items-center gap-4 mt-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-orange-500 transition-colors"
                  target="_blank"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="">
            <h4 className="text-xl font-bold mb-4">Site Map</h4>
            <div className="flex flex-col gap-2 text-sm">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-orange-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full md:w-auto">
          <div>
            <h4 className="text-xl font-bold mb-4">Instagram</h4>
            <div className="grid grid-cols-6 gap-2">
              {instagramImages.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Instagram Image ${index + 1}`}
                  width={500}
                  height={500}
                  className="w-20 h-20 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Subscribe</h4>
            <p className="text-sm mb-4">
              Please subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="Subscribe to our newsletter" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-4 text-center text-sm border-t border-gray-700">
        <div className="flex flex-col md:flex-row justify-between">
          <p className="mb-2 md:mb-0">
            © {new Date().getFullYear()} Travel. All rights reserved.
          </p>
          <p>
            Designed by{" "}
            <Link href="">
              <span className="text-orange-500 hover:underline">
                Umut Can Tümer
              </span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
