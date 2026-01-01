import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-6 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/fb1.jpg"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-slowspin rounded-lg w-8 h-8 sm:w-10 sm:h-10"
          />

          <span className="font-bold ml-[10px] hidden sm:block text-gray-300 text-sm md:text-base">
           Nipun Ayodya
          </span>
        </a>

        <div className="flex-1 max-w-[500px] h-full flex flex-row items-center justify-center mx-2 md:mx-4">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[10px] sm:px-[15px] md:px-[20px] py-[8px] sm:py-[10px] rounded-full text-gray-200 text-xs sm:text-sm">
            <a href="#about-me" className="cursor-pointer hover:text-[#F7E976] transition-colors">
              About
            </a>
            <a href="#Experience" className="cursor-pointer hover:text-[#F7E976] transition-colors">
            Exp
            </a>
            <a href="#skills" className="cursor-pointer hover:text-[#F7E976] transition-colors">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer hover:text-[#F7E976] transition-colors">
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
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
