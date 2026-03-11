"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-col sm:flex-row relative items-center justify-center min-h-screen w-full h-full px-4 sm:px-6 lg:px-8">
      <div className="absolute w-auto h-auto top-4 sm:top-8 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-2xl sm:text-3xl lg:text-[40px] font-medium text-center text-gray-200"
        >
          Certificates
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Badges
        </motion.div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto gap-4 sm:gap-6 mt-16 sm:mt-20">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/cisco.jpeg"
            alt="Cisco"
            width={100}
            height={100}
            className="z-10 rounded-lg sm:w-[120px] sm:h-[120px] lg:w-[150px] lg:h-[150px]"
          />
          <div className="text-white Welcome-box px-[10px] sm:px-[15px] py-[4px] z-[20] brder my-[10px] sm:my-[20px] border-[#7042f88b] opacity-[0.9] text-xs sm:text-sm">
            Cisco CCNA
          </div>
        </div>

        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/aws.jpeg"
            alt="AWS"
            width={100}
            height={100}
            className="z-10 rounded-lg sm:w-[120px] sm:h-[120px] lg:w-[150px] lg:h-[150px]"
          />
          <div className="text-white Welcome-box px-[10px] sm:px-[15px] py-[4px] z-[20] brder my-[10px] sm:my-[20px] border-[#7042f88b] opacity-[0.9] text-xs sm:text-sm">
            AWS Deployment
          </div>
        </div>

        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/az.jpg"
            alt="Azure"
            width={100}
            height={100}
            className="z-10 rounded-lg sm:w-[120px] sm:h-[120px] lg:w-[150px] lg:h-[150px]"
          />
          <div className="text-white Welcome-box px-[10px] sm:px-[15px] py-[4px] z-[20] brder my-[10px] sm:my-[20px] border-[#7042f88b] opacity-[0.9] text-xs sm:text-sm">
            Azure DevOps
          </div>
        </div>
      </div>

      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-sm sm:text-base lg:text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;
