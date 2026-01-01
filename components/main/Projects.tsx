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
      
      {/* Industrial/Client Projects - LIVE */}
      <div className="w-full px-10 mb-8">
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6 text-center">
          Industrial Projects
        </h2>
        <div className="h-A w-full flex flex-col md:flex-row gap-10 justify-center flex-wrap">
          <ProjectCard
            link="#"
            src="/CardImage.png"
            title="Axonall - Luxury Travel Project"
            description="Comprehensive travel management platform with multi-modal booking capabilities including flights, hotels, cruises, and private jets. Integrated Sabre APIs and Stripe payment processing."
            projectType="LIVE"
            techs={["MEARN", "Java", "Spring Boot", "Sabre", "Stripe"]}
          />
          <ProjectCard
            link="#"
            src="/CardImage.png"
            title="Collect Mate - Automatic Card & Recovery Solutions"
            description="Industrial banking project for automatic card management and recovery solutions. Built with enterprise Java and Spring Boot for robust financial operations."
            projectType="LIVE"
            techs={["Java", "Spring Boot", "Angular"]}
          />
          <ProjectCard
            link="#"
            src="/CardImage.png"
            title="Financial Reconciliation Project - VISA & MASTER CARDS"
            description="Enterprise banking solution for financial reconciliation processing for Visa and MasterCard transactions. Ensures accurate transaction matching and reporting."
            projectType="LIVE"
            techs={["Java", "Spring Boot", "Angular"]}
          />
        </div>
      </div>

      {/* Client Base Projects */}
      <div className="w-full px-10 mb-8">
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6 text-center">
          Client Base Projects
        </h2>
        <div className="h-A w-full flex flex-col md:flex-row gap-10 justify-center flex-wrap">
          <ProjectCard
            link="https://happytails-six.vercel.app/"
            src="/PETSM.png"
            title="Happy Tails - Pet Shelter Management System"
            description="Happy Tails is a project developed using the MERN (MongoDB, Express.js, React.js, Node.js). It serves as an online platform for managing a pet shelter located in Kandy, Sri Lanka."
            projectType="CLIENT"
            techs={["React JS", "Express JS", "MongoDB", "Node JS", "Tailwind CSS"]}
          />
          <ProjectCard
            link="#"
            src="/CardImage.png"
            title="E-Learning Management System - OpenAI & GeminiAI"
            description="Advanced e-learning platform integrated with OpenAI and GeminiAI for intelligent content generation and personalized learning experiences."
            projectType="CLIENT"
            techs={["NextJS", "MongoDB", "Node JS", "Zod", "Clerk", "Mux", "Tailwind CSS"]}
          />
        </div>
      </div>

      {/* University Projects */}
      <div className="w-full px-10 mb-8">
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6 text-center">
          University Projects
        </h2>
        <div className="h-A w-full flex flex-col md:flex-row gap-10 justify-center flex-wrap">
          <ProjectCard
            link="https://github.com/NipunPalliyaguru/BODIMA-MAD-Mobile-App-Y2S2"
            src="/mad.png"
            title="BODIMA Mobile Application"
            description="BODIMA is a mobile application developed by a group of 2nd-year 2nd-semester students for the Mobile Application Development (MAD) project from the SLIIT."
            projectType="UNIVERSITY"
            techs={["Kotlin", "Firebase"]}
          />
          <ProjectCard
            link="https://github.com/NipunPalliyaguru/Online-Fuel-Management-System"
            src="/CardImage.png"
            title="Online Fuel Management System"
            description="University project for managing fuel stations and inventory. Developed using Java Servlets with HTML, PHP, and Bootstrap CSS for the frontend."
            projectType="UNIVERSITY"
            techs={["Java", "Servlet", "HTML", "PHP", "Bootstrap CSS"]}
          />
          <ProjectCard
            link="#"
            src="/CardImage.png"
            title="FitLink Social Media Platform"
            description="Social media platform for fitness enthusiasts. Built with Spring Boot backend and NextJS frontend, featuring real-time interactions and MongoDB for data storage."
            projectType="UNIVERSITY"
            techs={["Spring Boot", "NextJS", "MongoDB", "Tailwind CSS"]}
          />
          <ProjectCard
            link="https://github.com/NipunPalliyaguru/Recipe-Management-System"
            src="/RecMS.png"
            title="Recipe Management System"
            description="Recipe Management System is a project developed using the MERN (MongoDB, Express.js, React.js, Node.js). It serves as an online platform for managing recipes."
            projectType="UNIVERSITY"
            techs={["MongoDB", "Express.js", "React.js", "Node.js"]}
          />
        </div>
      </div>

      {/* <div className="h-A w-full flex flex-col md:flex-row gap-10 px-10 my-10">
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
      </div> */}
    </div>
  );
};

export default Projects;
