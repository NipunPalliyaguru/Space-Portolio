import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-4 sm:p-[15px]">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-col sm:flex-row items-center justify-around flex-wrap gap-6 sm:gap-4">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-sm sm:text-[16px]">Community</div>
                    <p className="flex flex-row items-center my-3 sm:my-[15px] cursor-pointer">
                        <RxGithubLogo className="text-lg sm:text-xl" />
                        <span className="text-sm sm:text-[15px] ml-2 sm:ml-[6px]"><a href="https://github.com/NipunPalliyaguru" target="_blanck">Github</a></span>    
                    </p>
                    <p className="flex flex-row items-center my-3 sm:my-[15px] cursor-pointer">
                        <RxLinkedinLogo className="text-lg sm:text-xl" />
                        <span className="text-sm sm:text-[15px] ml-2 sm:ml-[6px]"><a href="https://www.linkedin.com/in/nipun-palliyaguru-98a470216/" target="_blanck">Linkedin</a></span>    
                    </p>     
                    <p className="flex flex-row items-center my-3 sm:my-[15px] cursor-pointer">
                        <FaYoutube className="text-lg sm:text-xl" />
                        <span className="text-sm sm:text-[15px] ml-2 sm:ml-[6px]"><a href="https://facebook.com/nipun.ayodya" target="_blanck">Facebook</a></span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-sm sm:text-[16px]">Social Media</div>
                    <p className="flex flex-row items-center my-3 sm:my-[15px] cursor-pointer">
                        <FaYoutube className="text-lg sm:text-xl" />
                        <span className="text-sm sm:text-[15px] ml-2 sm:ml-[6px]"><a href="https://www.instagram.com/Nipun.Ayodya/" target="_blanck">Instagram</a></span>    
                    </p>
                    <p className="flex flex-row items-center my-3 sm:my-[15px] cursor-pointer">
                        <RxGithubLogo className="text-lg sm:text-xl" />
                        <span className="text-sm sm:text-[15px] ml-2 sm:ml-[6px]"><a href="https://github.com/NipunPalliyaguru" target="_blanck">Twitter</a></span>    
                    </p>
                    <p className="flex flex-row items-center my-3 sm:my-[15px] cursor-pointer">
                        <RxDiscordLogo className="text-lg sm:text-xl" />
                        <span className="text-sm sm:text-[15px] ml-2 sm:ml-[6px]">Linkedin<a href="https://www.linkedin.com/in/nipun-palliyaguru-98a470216/" target="_blanck"></a></span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-sm sm:text-[16px]">About</div>
                   <p className="flex flex-row items-center my-3 sm:my-[15px] cursor-pointer">
                     
                        {/* <span className="text-[15px] ml-[6px]">Become Sponsor</span>     */}
                    </p>
                    <p className="flex flex-row items-center my-3 sm:my-[15px] cursor-pointer">
                      
                        <span className="text-sm sm:text-[15px] ml-2 sm:ml-[6px]">Learning about me</span>    
                    </p>
                    <p className="flex flex-row items-center my-3 sm:my-[15px] cursor-pointer">
                  
                    
                    </p>
                </div>
            </div>

            <div className="mb-4 sm:mb-[20px] text-sm sm:text-[15px] text-center">
              
            </div>
        </div>
    </div>
  )
}

export default Footer