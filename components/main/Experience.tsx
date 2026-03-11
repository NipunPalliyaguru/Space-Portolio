import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import my from "../../public/epic.jpeg";

const Experience = () => {
    
  const experiences = [
    {
        name: "AXONALL",
        icon: "https://media.licdn.com/dms/image/v2/D560BAQHjx_2BgRLEGg/company-logo_200_200/B56ZfgS7PeG0AU-/0/1751814747814/axonall_logo?e=1762387200&v=beta&t=_E44DZ6pVgj7_36a9LekL5uSeclD3yUkAgvvr8-fXM0", 
        title: "Software Engineer",
        working_type: "Full Time",
        year: "January 2025 - Present",
        details: [
            "Develop and maintain scalable full-stack applications using Java, Spring Boot, and the MERN stack.",
            "Specialize in microservices architecture, leveraging Docker and Kubernetes for containerization and AWS-based CI/CD pipelines.",
            "Focus on enhancing system security, performance, and cloud infrastructure while optimizing AWS services for scalability and cost efficiency.",
            "Implement DevOps best practices, streamline deployment automation, infrastructure as code (IaC), and API management.",
            "Ensure high availability and efficiency through innovative cloud-based solutions."
        ],
        techs: ["Java", "Spring Boot", "MERN Stack", "Docker", "Kubernetes", "AWS", "Microservices", "DevOps", "Node.js", "Jira", "GitHub", "Web Services API"],
        projects: ["Luxury Hotels Booking Platform", "Space Travel Experiences", "Microservices Architecture"],
    },
    {
        name: "BotMedFusion",
        icon: "https://media.licdn.com/dms/image/v2/D560BAQHlgpoUXEnRSQ/company-logo_200_200/company-logo_200_200/0/1692042539560?e=1762387200&v=beta&t=CdukHvOo8AU1K9Q63POMRPm8wN5fWvl1G4PGjighbiY", 
        title: "Software Engineer",
        working_type: "Full Time",
        year: "October 2024 - Present",
        details: [
            "Develop and maintain high-performance software solutions, focusing on full-stack development and cloud-based technologies.",
            "Collaborate with cross-functional teams to enhance system architecture, optimize performance, and ensure seamless user experiences.",
            "Contribute to innovative projects in a hybrid work environment, delivering scalable solutions for healthcare technology.",
            "Work on cutting-edge medical technology solutions that improve patient care and healthcare delivery.",
            "Implement modern development practices and cloud technologies to enhance system reliability and performance."
        ],
        techs: ["Full-Stack Development", "Cloud Technologies", "System Architecture", "Performance Optimization", "Healthcare Technology", "Hybrid Development"],
        projects: ["Medical Technology Solutions", "Healthcare Platform Development", "Patient Care Systems"],
    },
    {
        name: "Upwork (Freelance)",
        icon: "https://pangrampangram.com/cdn/shop/articles/442269ac56eddaecd3fa3dd752c38870_1920x.jpg?v=1631828825",
        title: "Full Stack Developer",
        working_type: "Part-Time",
        year: "February 2020 - Present",
        details: [
            "Develop and deliver scalable full-stack applications for global clients using MEAN stack, Node.js, and AWS.",
            "Specialize in web technologies, API integrations, and cloud-based solutions to enhance performance and security.",
            "Collaborate with clients to build custom software solutions tailored to business needs and requirements.",
            "Provide ongoing maintenance and feature enhancements, ensuring long-term client satisfaction and project success.",
            "Work with diverse international clients to deliver high-quality, responsive web applications."
        ],
        techs: ["MEAN Stack", "Node.js", "AWS", "Web Technologies", "API Integration", "Full-Stack Development", "Software Infrastructure"],
        projects: ["Global Client Solutions", "Custom Software Development", "API Integration Projects"],
    },
    {
        name: "DMS Software Technologies (Pvt) Ltd",
        icon: "https://media.licdn.com/dms/image/C560BAQH00MCBWLYYyA/company-logo_200_200/0/1631348879206?e=1731542400&v=beta&t=vjH89OmT24nD1x6JaH2rVY4SoRm74IpVzS6BqgZ4I1U", 
        title: "Associate Software Engineer",
        working_type: "Full Time",
        year: "July 2024 - September 2024",
        details: [
            "Contributed to the development and optimization of software solutions, focusing on application engineering and program creation.",
            "Worked with Python and other technologies to enhance software infrastructure and ensure high-performance applications.",
            "Collaborated in a hybrid environment to meet project goals effectively and deliver quality software solutions.",
            "Participated in code reviews and contributed to the optimization of existing codebases.",
            "Gained valuable experience in software development lifecycle and best practices."
        ],
        techs: ["Python", "Software Infrastructure", "Application Engineering", "Program Creation", "Software Development", "Code Review"],
        projects: ["Software Infrastructure Projects", "Application Development", "Code Optimization"],
    },
    {
        name: "EPIC LANKA PVT LTD",
        icon: "https://media.licdn.com/dms/image/C560BAQH00MCBWLYYyA/company-logo_200_200/0/1631348879206?e=1731542400&v=beta&t=vjH89OmT24nD1x6JaH2rVY4SoRm74IpVzS6BqgZ4I1U", 
        title: "Associate Software Developer",
        working_type: "Full Time",
        year: "January 2024 - July 2024",
        details: [
            "Led the development and maintenance of full-stack applications using Angular, Java, and Spring Boot.",
            "Collaborated closely with cross-functional teams to design and implement new features, enhancing user experience and system performance.",
            "Played a pivotal role in the card management and financial system development for Visa and MasterCard, focusing on secure transaction processing and compliance with industry standards.",
            "Optimized application performance by refactoring code, improving database queries, and implementing best practices for scalability.",
            "Integrated AWS services for cloud-based deployment and automated CI/CD pipelines to streamline development processes."
        ],
        techs: ["Angular", "Java", "Spring Boot", "AWS", "Oracle", "React Js", "Next Js", "Tailwind CSS", "Github", "Docker", "SQL"],
        projects: ["Visa Card Management System", "MasterCard Financial Gateway", "Corporate Banking Portal"],
    },
    {
        name: "EPIC LANKA PVT LTD",
        icon: "https://media.licdn.com/dms/image/C560BAQH00MCBWLYYyA/company-logo_200_200/0/1631348879206?e=1731542400&v=beta&t=vjH89OmT24nD1x6JaH2rVY4SoRm74IpVzS6BqgZ4I1U", 
        title: "Software Engineer Trainee",
        working_type: "Full Time",
        year: "May 2023 - January 2024",
        details: [
            "Assisted senior developers in the design and implementation of software applications, gaining in-depth knowledge of full-stack development.",
            "Participated in code reviews and contributed to the optimization of existing codebases.",
            "Developed and tested key features for card management systems under the guidance of experienced developers.",
            "Worked with cloud technologies, including AWS, to deploy and manage applications.",
            "Collaborated on projects involving financial transaction processing, ensuring adherence to compliance standards."
        ],
        techs: ["Angular", "Java", "Spring Boot", "AWS", "Oracle", "React Js", "Next Js", "Tailwind CSS", "Github", "Docker", "SQL"],
        projects: ["Visa Transaction Processing", "MasterCard Compliance Integration"],
    },
    {
        name: "Bank of Ceylon",
        icon: "https://media.licdn.com/dms/image/C560BAQH00MCBWLYYyA/company-logo_200_200/0/1631348879206?e=1731542400&v=beta&t=vjH89OmT24nD1x6JaH2rVY4SoRm74IpVzS6BqgZ4I1U", 
        title: "Bank Trainee",
        working_type: "Part-Time",
        year: "January 2017 - February 2018",
        details: [
            "Gained foundational experience in banking operations and financial services.",
            "Assisted with customer service and basic banking procedures.",
            "Learned about financial systems and banking regulations.",
            "Developed strong interpersonal and communication skills in a professional banking environment.",
            "Contributed to daily banking operations and customer support activities."
        ],
        techs: ["Banking Operations", "Customer Service", "Financial Systems", "Communication", "Professional Development"],
        projects: ["Customer Service Support", "Banking Operations", "Financial Services"],
    },
];


  return (
    <div className="w-full max-w-7xl mx-auto -mt-20 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <h1 
        id="Experience" 
        className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-center text-gray-200 mb-12 xs:mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32"
      >
        Experience
      </h1>
      
      <div className="flex flex-col gap-8 xs:gap-10 sm:gap-12 md:gap-16 lg:gap-20">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="group w-full bg-gradient-to-br from-[#151030] to-[#0f0a1f] text-white rounded-2xl xs:rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] transition-all duration-500 overflow-hidden border border-gray-800/50 hover:border-indigo-500/30 relative"
            style={{ maxWidth: "1300px", margin: "0 auto" }}
          >
            {/* Gradient overlay for enhanced visual appeal */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {/* Header Section */}
            <div className="relative z-10 flex flex-col xs:flex-row gap-3 xs:gap-4 sm:gap-6 p-4 xs:p-5 sm:p-6 md:p-8">
              {/* Company Info */}
              <div className="flex-1 min-w-0">
                <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 flex items-center py-2 xs:py-3 sm:py-4 px-3 xs:px-4 sm:px-6 rounded-full xs:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="relative">
                    <img
                      src={experience.icon}
                      alt={`${experience.name} logo`}
                      className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20 hover:ring-white/40 transition-all duration-300"
                    />
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                  </div>
                  <div className="flex flex-col ml-2 xs:ml-3 sm:ml-4 min-w-0 flex-1">
                    <p className="text-white font-bold text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl truncate drop-shadow-sm">
                      {experience.name}
                    </p>
                    <p className="text-white/90 text-xs xs:text-sm sm:text-base md:text-lg font-medium">
                      {experience.working_type}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Date Badge */}
              <div className="bg-gradient-to-r from-[#F7E976] to-[#F4E55C] text-black px-3 xs:px-4 sm:px-6 py-2 xs:py-3 sm:py-4 font-bold rounded-full xs:rounded-2xl flex items-center justify-center gap-2 min-w-fit shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-[#F4E55C] hover:to-[#F1E042]">
                <FaRegCalendarAlt className="text-xs xs:text-sm sm:text-base md:text-lg" />
                <span className="text-xs xs:text-sm sm:text-base md:text-lg whitespace-nowrap font-semibold">
                  {experience.year}
                </span>
              </div>
            </div>

            {/* Job Title */}
            <div className="relative z-10 px-4 xs:px-5 sm:px-6 md:px-8 pb-4 xs:pb-5 sm:pb-6">
              <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-sm">
                {experience.title}
              </h3>
            </div>

            {/* Details Section */}
            <div className="relative z-10 px-4 xs:px-5 sm:px-6 md:px-8 pb-4 xs:pb-5 sm:pb-6">
              <div className="space-y-3 xs:space-y-4 sm:space-y-5">
                {experience.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-start gap-3 xs:gap-4 sm:gap-5 group/detail">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg group-hover/detail:scale-110 transition-transform duration-300">
                        <MdKeyboardDoubleArrowRight className="text-white text-sm xs:text-base sm:text-lg md:text-xl" />
                      </div>
                    </div>
                    <p className="text-gray-200 text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed group-hover/detail:text-white transition-colors duration-300">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Section */}
            <div className="relative z-10 px-4 xs:px-5 sm:px-6 md:px-8 pb-4 xs:pb-5 sm:pb-6">
              <div className="flex flex-wrap gap-2 xs:gap-3 sm:gap-4 justify-center xs:justify-start">
                {experience.techs.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="group/tech relative bg-gradient-to-r from-[#F7E976] to-[#F4E55C] text-black px-3 xs:px-4 sm:px-5 md:px-6 py-1.5 xs:py-2 sm:py-3 rounded-full xs:rounded-xl text-xs xs:text-sm sm:text-base md:text-lg font-semibold hover:from-[#F4E55C] hover:to-[#F1E042] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default"
                  >
                    <span className="relative z-10">{tech}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full xs:rounded-xl opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
