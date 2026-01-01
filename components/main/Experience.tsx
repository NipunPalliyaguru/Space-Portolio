import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import my from "../../public/epic.jpeg";

const Experience = () => {
    
  const experiences = [
    {
        name: "Axonall",
        icon: "https://media.licdn.com/dms/image/v2/D560BAQHjx_2BgRLEGg/company-logo_200_200/B56ZfgS7PeG0AU-/0/1751814747814/axonall_logo?e=1769040000&v=beta&t=9pG6Can5iqgcX6K9-G2PZkkd_l2SfKfsQj3oI72jwRo", 
        title: "Software Engineer",
        working_type: "Full Time",
        year: "January 2025 - Present",
        details: [
            "As a Software Engineer at Axonall, I develop and maintain scalable full-stack applications using Java, Spring Boot, and the MERN stack.",
            "I specialize in microservices architecture, leveraging Docker and Kubernetes for containerization and AWS-based CI/CD pipelines for seamless deployment and automation.",
            "I focus on enhancing system security, performance, and cloud infrastructure while optimizing AWS services for scalability and cost efficiency.",
            "By implementing DevOps best practices, I streamline deployment automation, infrastructure as code (IaC), and API management, ensuring high availability and efficiency."
        ],
        techs: ["MongoDB", "Express.js", "React", "Node.js", "Java", "Spring Boot", "AWS", "Microservices", "Docker", "Kubernetes", "CI/CD"],
        projects: ["Travel Management Platform", "Booking System", "Travel Arrangements Portal"],
    },
    {
        name: "BotMedFusion",
        icon: "https://media.licdn.com/dms/image/v2/D560BAQHlgpoUXEnRSQ/company-logo_200_200/company-logo_200_200/0/1692042539560?e=1769040000&v=beta&t=cDeso49y57Z5h7dMrFlSQsEYYHaA4PkE9DXmgEHULfc", 
        title: "Software Engineer",
        working_type: "Full Time",
        year: "October 2024 - Present",
        details: [
            "Developing and maintaining high-performance software solutions, focusing on full-stack development and cloud-based technologies.",
            "Collaborating with cross-functional teams to enhance system architecture, optimize performance, and ensure seamless user experiences.",
            "Contributing to innovative projects in a hybrid work environment."
        ],
        techs: ["Node.js", "Spring Boot", "React", "Next.js", "RESTful APIs", "Real-time Processing", "Healthcare Systems"],
        projects: ["Telemedicine Platform", "Patient Management System", "Healthcare Provider Portal"],
    },
    {
        name: "DMS Software Technologies",
        icon: "https://media.licdn.com/dms/image/v2/C560BAQEmN27_CaawNQ/company-logo_200_200/company-logo_200_200/0/1630662445467/dms_software_technologies_pvt_ltd_logo?e=1769040000&v=beta&t=jryDgzlCc3tfCp7vaQvj94S7SgOVStf3CZ9KdJsybN0", 
        title: "Associate Software Engineer",
        working_type: "Full Time",
        year: "July 2024 - September 2024",
        details: [
            "Contributed to the development and optimization of software solutions, focusing on application engineering and program creation.",
            "Worked with Python and other technologies to enhance software infrastructure and ensure high-performance applications.",
            "Collaborated in a hybrid environment to meet project goals effectively."
        ],
        techs: ["Python", "Java", "Spring Boot", "React", "Node.js", "SQL", "Git", "Agile Methodologies"],
        projects: ["Software Infrastructure Optimization", "Application Engineering Projects"],
    },
    {
        name: "EPIC LANKA PVT LTD",
        icon: "https://media.licdn.com/dms/image/v2/C560BAQH00MCBWLYYyA/company-logo_200_200/company-logo_200_200/0/1631348879206?e=1769040000&v=beta&t=I5RBb3pndubLNsoYl2zAbJsqVKMx2GSrKHWH9jl--1c", 
        title: "Associate Software Developer",
        working_type: "Full Time",
        year: "January 2024 - July 2024",
        details: [
            "Actively developed and maintained financial solutions including card issuing and transaction systems.",
            "Designed and implemented REST APIs using Java and Spring Boot to handle critical banking operations.",
            "Built and maintained Angular-based front-end modules aligned with modern UI/UX standards.",
            "Collaborated closely with cross-functional teams to design and implement new features, enhancing user experience and system performance.",
            "Optimized application performance by refactoring code, improving database queries, and implementing best practices for scalability."
        ],
        techs: ["Angular", "Java", "Spring Boot", "AWS", "Oracle", "React Js", "Next Js", "Tailwind CSS", "Github", "Docker", "SQL"],
        projects: ["Card Issuing System", "Transaction Processing System", "Banking Portal"],
    },
    {
        name: "EPIC LANKA PVT LTD",
        icon: "https://media.licdn.com/dms/image/v2/C560BAQH00MCBWLYYyA/company-logo_200_200/company-logo_200_200/0/1631348879206?e=1769040000&v=beta&t=I5RBb3pndubLNsoYl2zAbJsqVKMx2GSrKHWH9jl--1c", 
        title: "Software Engineer Trainee",
        working_type: "Full Time",
        year: "July 2023 - January 2024",
        details: [
            "Gained practical experience working on enterprise-grade banking software and financial systems.",
            "Assisted in back-end development with Java and Spring Boot, learning best practices for enterprise applications.",
            "Wrote unit tests and fixed bugs to improve code quality and system reliability.",
            "Introduced to Angular for front-end development and used Oracle databases for maintaining financial records.",
            "Collaborated on projects involving financial transaction processing, ensuring adherence to compliance standards."
        ],
        techs: ["Angular", "Java", "Spring Boot", "AWS", "Oracle", "React Js", "Next Js", "Tailwind CSS", "Github", "Docker", "SQL"],
        projects: ["Visa Transaction Processing", "MasterCard Compliance Integration"],
    },
    {
        name: "Upwork (Freelance)",
        icon: "https://pangrampangram.com/cdn/shop/articles/442269ac56eddaecd3fa3dd752c38870_1920x.jpg?v=1631828825",
        title: "Full Stack Developer",
        working_type: "Part-Time",
        year: "February 2020 - Present",
        details: [
            "Developing and delivering scalable full-stack applications for global clients using MEAN stack, Node.js, and AWS.",
            "Specializing in web technologies, API integrations, and cloud-based solutions to enhance performance and security.",
            "Collaborating with clients to build custom software solutions tailored to business needs."
        ],
        techs: ["NodeJS", "ReactJS", "MongoDB", "NextJS", "ExpressJS", "AWS", "MEAN Stack", "Bootstrap CSS", "Firebase"],
        projects: ["E-commerce Platform Development", "Healthcare Management System", "Real-time Chat Application"],
    },
    {
        name: "BANK OF CEYLON",
        icon: "https://media.licdn.com/dms/image/v2/C4E0BAQGo8tnBeWXytg/company-logo_200_200/company-logo_200_200/0/1631328201943?e=1769040000&v=beta&t=T7NytZiJZrl-_cLXVzhivg03BQOg0-7jBYOo5xVV3Bc", 
        title: "Bank Trainee",
        working_type: "Full Time",
        year: "July 2018 - February 2019",
        details: [
            "Gained valuable experience in banking operations and financial services at the Kandy Branch.",
            "Learned about banking procedures, customer service, and financial transaction processing.",
            "Assisted with daily banking operations and customer inquiries.",
            "Developed understanding of banking regulations and compliance requirements.",
            "Contributed to maintaining accurate financial records and documentation."
        ],
        techs: ["Banking Systems", "Financial Services", "Customer Service", "Compliance"],
        projects: ["Banking Operations", "Customer Service Management"],
    },
];


  return (
    <div className="container mx-auto -mt-20 px-4 sm:px-6 md:px-8 lg:px-12" >
        
      <h1 id="Experience" className="text-2xl sm:text-3xl md:text-4xl font-medium text-center text-gray-200 mb-12 sm:mb-16 md:mb-32">Experience</h1>
      {experiences.map((experience, index) => (
        <div
          key={index}
          className="bg-tertiary false w-full mx-auto mb-12 sm:mb-16 md:mb-20 text-white justify-center rounded-3xl min-h-[400px] gap-4 p-4 sm:p-5 md:p-6"
          style={{ backgroundColor: "#151030", maxWidth: "1300px" }}
        >
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-4">
            <span className="bg-gradient-to-r from-indigo-300 flex items-center py-1 px-3 rounded-full w-full sm:w-auto">
              <img
                src={experience.icon}
                alt={experience.name}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex-shrink-0"
              />
              <span className="flex ml-3 sm:ml-4 flex-col w-full min-w-0">
                <p className="text-white font-bold ml-2 text-lg sm:text-xl md:text-2xl lg:text-3xl w-full truncate">
                  {experience.name}
                </p>
                <p className="text-white ml-2 text-xs sm:text-sm">{experience.working_type}</p>
              </span>
            </span>
            <span className="bg-[#F7E976] text-black h-auto sm:h-12 px-3 sm:px-5 py-2 sm:py-0 font-bold rounded-full w-full sm:w-auto sm:min-w-[250px] flex items-center justify-center sm:justify-start text-xs sm:text-sm md:text-base gap-2">
              <FaRegCalendarAlt className="flex-shrink-0" /> <span className="text-center sm:text-left">{experience.year}</span>
            </span>
          </div>
          <div className="flex py-4 sm:py-6 md:py-8 text-xl sm:text-2xl md:text-3xl font-semibold">{experience.title}</div>
          <div className="flex flex-col gap-3 sm:gap-4 p-2 sm:p-4">
            {experience.details.map((data, index) => (
              <div key={index} className="flex flex-row gap-2 sm:gap-3">
                <MdKeyboardDoubleArrowRight className="text-xl sm:text-2xl md:text-3xl flex-shrink-0 mt-1" /> 
                <span className="text-sm sm:text-base text-gray-300">{data}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mt-4">
            {experience.techs.map((data, index) => (
              <div
                key={index}
                className="bg-[#F7E976] px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-4 text-black rounded-2xl text-xs sm:text-sm md:text-base"
              >
                {data}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
