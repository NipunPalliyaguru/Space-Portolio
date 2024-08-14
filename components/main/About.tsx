"use client";
import React, { createContext } from 'react';
import { motion } from 'framer-motion';
import my from '../../public/yellow_croped.png';

const About = () => {
    return (
        <div className='container mx-auto mt-48 -lg:mt-32'>
            <div className=' mx-32 lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
                <div className='flex-1 lg:mb-20 text-center mx-4'>
                {/* Image */}
                <motion.img
                    src={my.src}
                    alt="About"
                    className="w-1/ lg:w-1/6 h-auto -mt-48 object-cover rounded-full mx-auto"
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                />
</div>
                {/* Text */}
                <motion.div
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.3 }}
                    className='flex-1 sm:mb-40 text-center'>
                    {/* <h2 className='h2 text-fuchsia-300 text-center mr-40'>About me.</h2> */}
                    {/* <h3 className='h3 mb-4'>I&apos;m an undergraduate Student at SLIIT </h3> */}
                    <p className='mb-6 text-[24px] text-justify text-gray-400 mt-18 max-w-auto'>
                    I&apos;m a dedicated Software Engineer, driven by a strong passion for developing innovative programs that enhance organizational efficiency and success. With a demonstrated ability to lead, motivate, and educate teams, I excel in managing projects effectively. Known for my hardworking nature and enthusiasm, I approach tasks with self-motivation. I possess excellent interpersonal and communication skills, allowing me to easily collaborate and work with others. With these qualities, I am confident in my ability to make a positive impact and contribute to the success of any organization.
                    </p>
                    {/* Stats */}
                    <div className='flex justify-center lg:justify-start gap-x-10 lg:gap-x-12'>
                        <div>
                            <div className='text-[40px] font-tertiary text-gradient mb-2'>
                                {/* Your content */}
                            </div>
                            <div className='font-primary text-sm tracking-[3px] text-gray-200 my-5 max-w-[600px]'>
                                Years of <br />
                                Experience  
                                
                                <div className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'>4</div>
                            </div>
                        </div>

                        <div>
                            <div className='text-[40px] font-tertiary text-gradient mb-2'>
                                {/* Your content */}
                            </div>
                            <div className='font-primary text-sm tracking-[3px] text-gray-200 my-5 max-w-[600px]'>
                                Projects <br />
                                Completed  
                                <div className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'>6</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
