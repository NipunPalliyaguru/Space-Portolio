import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;

}

const ProjectCard = ({ src, title, description,link }: Props) => {
  return (
    
    <a href={link} target="_blanck"  className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:scale-105 transition-transform duration-300">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-3 sm:p-4">
        <h1 className="text-base sm:text-lg font-semibold text-white mb-2">{title}</h1>
        <p className="text-sm sm:text-base text-gray-300 text-justify leading-relaxed">{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
