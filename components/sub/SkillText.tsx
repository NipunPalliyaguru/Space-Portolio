"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8'>
<motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[6px] sm:py-[8px] px-[5px] sm:px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-2 sm:mr-[10px] h-4 w-4 sm:h-5 sm:w-5" />
          <h1 className="Welcome-text text-xs sm:text-[13px]">
          These are the technological tools I have experience using
          </h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-xl sm:text-2xl lg:text-[30px] text-white font-medium mt-2 sm:mt-[10px] text-center mb-3 sm:mb-[15px]'
        >
            Languages and Frameworks
        </motion.div>


        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-sm sm:text-base lg:text-[20px] text-gray-200 mb-6 sm:mb-10 mt-2 sm:mt-[10px] text-center'
        >
            {/* Never miss a task, deadline or idea */}
        </motion.div>

        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-sm sm:text-base lg:text-[20px] text-gray-200 mb-6 sm:mb-10 mt-2 sm:mt-[10px] text-center'
        >
           <div>  </div>
        </motion.div>
        
    </div>

    

    
  )
}

export default SkillText