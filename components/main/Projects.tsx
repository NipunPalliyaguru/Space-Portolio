import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-A w-full flex flex-col md:flex-row gap-10 px-10 justify-center">
        <ProjectCard
          link="https://github.com/NipunPalliyaguru/Happy-Tails-Pet-Shelter-Management-System-ITP"
          src="/PETSM.png"
          title="Happy Tails - Pet Shelter Management System"
          description="Happy Tails is a project developed using the MERN (MongoDB, Express.js, React.js, Node.js). It serves as an online platform for managing a pet shelter located in Kandy, Sri Lanka. "
        />
        <ProjectCard
          link="https://github.com/NipunPalliyaguru/BODIMA-MAD-Mobile-App-Y2S2"
          src="/mad.png"
          title="BODIMA APP"
          description="BODIMA is a mobile application developed by a group of 2nd-year 2nd-semester students for the Mobile Application Development (MAD) project from the SLIIT)"
        />
        <ProjectCard
          link="https://github.com/NipunPalliyaguru/Recipe-Management-System"
          src="/RecMS.png"
          title="Recipe Management Systems"
          description="Recipe Management Systems is a project developed using the MERN (MongoDB, Express.js, React.js, Node.js). It serves as an online platform for managing recipes."
        />
      </div>

      <div className="h-A w-full flex flex-col md:flex-row gap-10 px-10 my-10">
        <ProjectCard
          link="https://github.com/NipunPalliyaguru/Online-Fuel-Management-System"
          src="/mad.png"
          title="Online Fuel Management System"
          description="Online Fuel Management System is a project developed using the MERN (MongoDB, Express.js, React.js, Node.js). It serves as an online platform for managing fuel stations."
        />
        <ProjectCard
          link="https://github.com/NipunPalliyaguru/Happy-Tails-Pet-Shelter-Management-System-ITP"
          src="/PETSM.png"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          link="https://github.com/NipunPalliyaguru/Happy-Tails-Pet-Shelter-Management-System-ITP"
          src="/RecMS.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
};

export default Projects;
