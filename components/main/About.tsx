"use client";
import React, { createContext } from 'react';
import { motion } from 'framer-motion';
import my from '../../public/yellow_croped.png';

const About = () => {
    return (
        <div className='w-full max-w-7xl mx-auto mt-48 lg:mt-32 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
            <div className='mx-2 xs:mx-4 sm:mx-8 lg:mx-16 xl:mx-32 lg:items-center lg:gap-x-20 lg:gap-y-0 min-h-screen'>
                {/* Profile Image Section */}
                <div className='flex-1 lg:mb-20 text-center relative'>
                    <motion.div
                        className="relative inline-block"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Glowing background effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Profile image with enhanced styling */}
                        <motion.img
                            src={my.src}
                            alt="Nipun Palliyaguru - Software Engineer"
                            className="relative w-32 h-32 xs:w-36 xs:h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 xl:w-56 xl:h-56 -mt-48 object-cover rounded-full mx-auto border-4 border-indigo-500/30 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(99,102,241,0.3)] transition-all duration-500 hover:scale-105 hover:border-indigo-400/50"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            whileHover={{ scale: 1.05 }}
                        />
                        
                        {/* Floating particles effect */}
                        <div className="absolute top-4 left-4 w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                        <div className="absolute bottom-6 left-8 w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-700"></div>
                        <div className="absolute bottom-4 right-4 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
                    </motion.div>
                </div>
                {/* Text Content Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className='flex-1 sm:mb-40 text-center relative'
                >
                    {/* Section Title */}
                    <motion.h2 
                        className='text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        About Me
                    </motion.h2>
                    
                    {/* Enhanced description */}
                    <motion.div
                        className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-3xl p-6 xs:p-8 sm:p-10 md:p-12 border border-gray-700/50 shadow-2xl max-w-5xl mx-auto"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <p className='text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-justify text-gray-200 leading-relaxed'>
                            I&apos;m a dedicated <span className="text-indigo-400 font-semibold">Software Engineer</span>, driven by a strong passion for developing innovative programs that enhance organizational efficiency and success. With a demonstrated ability to lead, motivate, and educate teams, I excel in managing projects effectively. Known for my hardworking nature and enthusiasm, I approach tasks with self-motivation. I possess excellent interpersonal and communication skills, allowing me to easily collaborate and work with others. With these qualities, I am confident in my ability to make a positive impact and contribute to the success of any organization.
                        </p>
                        
                        {/* Decorative elements */}
                        <div className="absolute top-4 left-4 w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                        <div className="absolute bottom-4 left-4 w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-700"></div>
                        <div className="absolute bottom-4 right-4 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
                    </motion.div>
                    {/* Enhanced Statistics Section */}
                    <motion.div 
                        className='grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 xs:gap-6 sm:gap-8 mt-12 max-w-7xl mx-auto'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                    >
                        {/* Years of Experience */}
                        <motion.div 
                            className='group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl xs:rounded-3xl p-4 xs:p-6 border border-gray-700/50 hover:border-indigo-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20'
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className='text-center'>
                                <div className='text-xs xs:text-sm sm:text-base text-indigo-300 font-medium mb-2 tracking-wider'>
                                    Years of Experience
                                </div>
                                <motion.div 
                                    className='text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2'
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.6, delay: 1.2 }}
                                >
                                    4
                                </motion.div>
                                <div className='w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-60'></div>
                            </div>
                        </motion.div>

                        {/* Customer Projects */}
                        <motion.div 
                            className='group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl xs:rounded-3xl p-4 xs:p-6 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20'
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className='text-center'>
                                <div className='text-xs xs:text-sm sm:text-base text-purple-300 font-medium mb-2 tracking-wider'>
                                    Customer Projects<br />
                                    <span className='text-xs text-purple-400'>(Freelance)</span>
                                </div>
                                <motion.div 
                                    className='text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2'
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.6, delay: 1.4 }}
                                >
                                    20+
                                </motion.div>
                                <div className='w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60'></div>
                            </div>
                        </motion.div>

                        {/* Industrial Projects */}
                        <motion.div 
                            className='group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl xs:rounded-3xl p-4 xs:p-6 border border-gray-700/50 hover:border-pink-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20'
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className='text-center'>
                                <div className='text-xs xs:text-sm sm:text-base text-pink-300 font-medium mb-2 tracking-wider'>
                                    Industrial Projects<br />
                                    <span className='text-xs text-pink-400'>(Local)</span>
                                </div>
                                <motion.div 
                                    className='text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2'
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.6, delay: 1.6 }}
                                >
                                    3
                                </motion.div>
                                <div className='w-full h-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-full opacity-60'></div>
                            </div>
                        </motion.div>

                        {/* University Projects */}
                        <motion.div 
                            className='group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl xs:rounded-3xl p-4 xs:p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20'
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className='text-center'>
                                <div className='text-xs xs:text-sm sm:text-base text-cyan-300 font-medium mb-2 tracking-wider'>
                                    University Projects<br />
                                    <span className='text-xs text-cyan-400'>(SLIIT)</span>
                                </div>
                                <motion.div 
                                    className='text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2'
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.6, delay: 1.8 }}
                                >
                                    4
                                </motion.div>
                                <div className='w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-60'></div>
                            </div>
                        </motion.div>

                        {/* Bootcamp Projects */}
                        <motion.div 
                            className='group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl xs:rounded-3xl p-4 xs:p-6 border border-gray-700/50 hover:border-green-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20'
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className='text-center'>
                                <div className='text-xs xs:text-sm sm:text-base text-green-300 font-medium mb-2 tracking-wider'>
                                    Bootcamp Projects<br />
                                    <span className='text-xs text-green-400'>(Self)</span>
                                </div>
                                <motion.div 
                                    className='text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2'
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: 0.6, delay: 2.0 }}
                                >
                                    10+
                                </motion.div>
                                <div className='w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-60'></div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
