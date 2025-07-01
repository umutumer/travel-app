"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigationLinks } from "@/constans";
import { Instagram, Linkedin, Menu, Youtube } from "lucide-react";
import React from "react";
import TravelLogo from "@/public/travel-logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const MobileMenu = () => {
    const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram  />,
      href: "https://instagram.com/umutumer",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin  />,
      href: "https://linkedin.com/in/umutumer",
    },
    {
      name: "YouTube",
      icon: <Youtube  />,
      href: "https://youtube.com/@umutumerx",
    },
  ];
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <div className="p-3  flex md:hidden bg-orange-500 cursor-pointer text-white rounded-full">
          <Menu size={16} />
        </div>
      </SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>
            <Image
              src={TravelLogo}
              width={210}
              height={50}
              alt="travel-logo"
              className="w-36 lg:w-52 h-auto"
            />
          </SheetTitle>
        </SheetHeader>
        <SheetDescription className="mt-10">
            <div className="flex flex-col gap-4 text-lg text-center font-semibold">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={pathName === link.href ? "text-orange-500 border-b p-2 border-orange-500" : "hover:text-orange-500 hover:border-orange-500 transition-colors border-b p-2 border-gray-200 last:border-b-0 duration-300 ease-in-out" + "border-b p-2 border-gray-200 last:border-b-0 duration-300 ease-in-out"}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </SheetDescription>
          <div className="flex justify-center items-center gap-8 mt-10 text-5xl">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-orange-500 transition-colors"
                  target="_blank"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
