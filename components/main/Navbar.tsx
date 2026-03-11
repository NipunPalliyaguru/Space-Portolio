import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-6 lg:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-2 sm:px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/fb1.jpg"
            alt="logo"
            width={32}
            height={32}
            className="cursor-pointer hover:animate-slowspin rounded-lg sm:w-10 sm:h-10"
          />

          <span className="font-bold ml-2 sm:ml-[10px] hidden sm:block text-gray-300 text-sm sm:text-base">
           Nipun Ayodya
          </span>
        </a>

        <div className="w-auto sm:w-[400px] lg:w-[500px] h-full flex flex-row items-center justify-between lg:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-2 sm:mr-[15px] px-2 sm:px-4 lg:px-[20px] py-1 sm:py-2 lg:py-[10px] rounded-full text-gray-200 text-xs sm:text-sm">
            <a href="#about-me" className="cursor-pointer">
              About
            </a>
            <a href="#Experience" className="cursor-pointer">
            Experience
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-2 sm:gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={20}
              height={20}
              className="sm:w-6 sm:h-6"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
