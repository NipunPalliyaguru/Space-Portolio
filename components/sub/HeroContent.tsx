"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-20 mt-20 sm:mt-32 lg:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-3 sm:gap-5 justify-center m-auto text-center lg:text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[6px] sm:py-[8px] px-[5px] sm:px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-2 sm:mr-[10px] h-4 w-4 sm:h-5 sm:w-5" />
          <h1 className="Welcome-text text-xs sm:text-[13px]">
            Fullstack Developer 
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 sm:gap-6 mt-3 sm:mt-6 text-3xl sm:text-4xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Nipun
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Palliayguru{" "}
            </span>

            <motion.div
       initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-3 sm:mb-6 text-xl sm:text-2xl lg:text-[36px] xl:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-2 sm:mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  'Developer', 2000,
                  'DevOps', 2000,
                  'CyberOps ', 2000,
                ]}
                speed={50}
                className="text-gradient"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>


            About
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm sm:text-base lg:text-lg text-gray-400 my-3 sm:my-5 max-w-[600px] mx-auto lg:mx-0"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] mx-auto lg:mx-0"
          href="/CV_NIPUN_PALLIYAGURU.pdf"
          download="CV_NIPUN_PALLIYAGURU.pdf"
        >
          Download CV
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-8 lg:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={400}
          width={400}
          className="sm:h-[500px] sm:w-[500px] lg:h-[650px] lg:w-[650px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
