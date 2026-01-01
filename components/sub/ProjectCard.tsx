import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
  projectType?: string;
  techs?: string[];
}

const ProjectCard = ({ src, title, description, link, projectType, techs }: Props) => {
  return (
    
    <a href={link} target="_blank" className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:border-[#7042f88b] transition-all">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-lg font-semibold text-white">{title}</h1>
          {projectType && (
            <span className="bg-[#F7E976] text-black text-xs px-2 py-1 rounded-full font-bold">
              {projectType}
            </span>
          )}
        </div>
        <p className="mt-2 text-gray-300 text-justify text-sm mb-3">{description}</p>
        {techs && techs.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {techs.slice(0, 4).map((tech, index) => (
              <span key={index} className="bg-[#7042f88b] text-gray-200 text-xs px-2 py-1 rounded">
                {tech}
              </span>
            ))}
            {techs.length > 4 && (
              <span className="bg-[#7042f88b] text-gray-200 text-xs px-2 py-1 rounded">
                +{techs.length - 4}
              </span>
            )}
          </div>
        )}
      </div>
    </a>
  );
};

export default ProjectCard;
