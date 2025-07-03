"use client";
import {
  Instagram,
  Linkedin,
  MessageCircle,
  Phone,
  User,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TravelLogo from "@/public/travel-logo.png";
import MobileMenu from "./MobileMenu";
import { navigationLinks } from "@/constans";
import SearchComp from "./Search";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
const Header = () => {
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
  const pathName = usePathname();
  const { data: session, status } = useSession();

  return (
    <header className="bg-black text-white">
      {/* Top Bar */}
      <div className="flex justify-center md:justify-between items-center p-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="bg-white p-2 rounded-full">
              <MessageCircle size={12} className="text-orange-500" />
            </div>
            <p className="text-sm sm:text-base">utumer6@gmail.com</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="bg-white p-2 rounded-full">
              <Phone size={12} className="text-orange-500" />
            </div>
            <p className="text-sm sm:text-base">+90 534 591 84 76</p>
          </div>
        </div>
        <div>
          <div className="hidden md:flex items-center gap-4">
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
      </div>
      {/* Navigation Bar */}
      <div className="bg-white text-black h28 shadow-md flex items-center justify-between p-4">
        <Link href={'/'}>
          <Image
            src={TravelLogo}
            width={210}
            height={50}
            alt="travel-logo"
            className="w-36 lg:w-52 h-auto"
          />
        </Link>
        <nav className="hidden md:flex gap-4 text-lg font-semibold">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={
                pathName === link.href
                  ? "text-orange-500"
                  : "hover:text-orange-500 transition-colors"
              }
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <SearchComp />
          {session ? (
            <Link
              href={"/profile"}
              className="p-3 bg-orange-200 flex items-center justify-center text-orange-600 text-sm font-extrabold rounded-full"
            >
              {session.user.image ? (
                <Image
                  alt="user-image"
                  width={160}
                  height={160}
                  src={session.user.image}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <p className="flex">
                  {session.user.firstName?.[0]}
                  {session.user.lastName?.[0]}
                </p>
              )}
            </Link>
          ) : (
            <Link
              href={"/login"}
              className="p-3 flex bg-orange-500 cursor-pointer text-white rounded-full"
            >
              <User size={16} />
            </Link>
          )}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
