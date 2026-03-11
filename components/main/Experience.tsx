"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

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
    <section className="w-full max-w-7xl mx-auto -mt-10 sm:-mt-16 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="text-center">
        <h1
          id="Experience"
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-cyan-400"
        >
          Experience
        </h1>
        <p className="mt-4 text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          A timeline of roles and impact — focused on scalable systems, cloud,
          and product delivery.
        </p>
      </div>

      <div className="relative mt-12 sm:mt-16">
        {/* Timeline spine */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        <div className="flex flex-col gap-4 sm:gap-5">
          {experiences.map((experience, index) => {
            const isRight = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={[
                  "relative grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6",
                  isRight ? "" : "sm:[&>div:last-child]:order-first",
                ].join(" ")}
              >
                {/* Timeline node */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-5 sm:top-6 z-20">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-indigo-400 via-purple-500 to-cyan-400 shadow-[0_0_0_4px_rgba(255,255,255,0.04)]" />
                </div>

                <div className="hidden sm:block" />

                <div
                  className={[
                    "group relative overflow-hidden rounded-lg border",
                    "bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm",
                    "border-gray-700/50 shadow-xl transition-all duration-500",
                    "hover:border-cyan-400/40 hover:shadow-cyan-500/10",
                    "p-4 sm:p-5",
                  ].join(" ")}
                >
                  {/* Ambient glow */}
                  <div className="pointer-events-none absolute -inset-24 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />

                  {/* Header */}
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <img
                        src={experience.icon}
                        alt={`${experience.name} logo`}
                        className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg object-cover ring-1 ring-white/10 flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                          <div className="text-white font-semibold text-sm sm:text-base truncate">
                            {experience.name}
                          </div>
                          <span className="text-[10px] sm:text-xs text-gray-200/80 border border-white/10 bg-white/5 px-1.5 py-0.5 rounded">
                            {experience.working_type}
                          </span>
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-gray-300">
                          {experience.title}
                        </div>
                      </div>
                    </div>

                    <div className="sm:ml-auto inline-flex items-center gap-1.5 rounded border border-white/10 bg-white/5 px-2 py-1.5 text-[11px] sm:text-xs text-gray-200/90">
                      <FaRegCalendarAlt className="text-gray-200/80" />
                      <span className="whitespace-nowrap">{experience.year}</span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="relative z-10 mt-3 space-y-1.5">
                    {experience.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="flex items-start gap-2 text-gray-200/90"
                      >
                        <div className="mt-0.5 flex-shrink-0 h-4 w-4 rounded-sm bg-gradient-to-r from-indigo-500/70 to-cyan-500/70 flex items-center justify-center">
                          <MdKeyboardDoubleArrowRight className="text-white text-[10px]" />
                        </div>
                        <p className="text-xs sm:text-sm leading-snug">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Techs + Projects inline */}
                  <div className="relative z-10 mt-3 flex flex-wrap items-center gap-1.5">
                    {experience.techs.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-[10px] sm:text-xs text-gray-200/90 border border-white/10 bg-black/20 px-2 py-1 rounded hover:border-cyan-400/30 hover:bg-cyan-500/10 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {experience.projects?.length ? (
                      <>
                        <span className="text-gray-500/60 text-[10px]">·</span>
                        {experience.projects.map((p, pIndex) => (
                          <span
                            key={pIndex}
                            className="text-[10px] sm:text-xs font-medium text-black bg-gradient-to-r from-[#F7E976] to-[#F4E55C] px-2 py-1 rounded"
                          >
                            {p}
                          </span>
                        ))}
                      </>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
