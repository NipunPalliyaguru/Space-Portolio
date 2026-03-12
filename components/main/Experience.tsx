"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Experience = () => {
  const experiences = [
    {
        name: "AXONALL",
        icon: "https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/595245247_122109438759123979_7927910765246886401_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=X0GTotI1X6EQ7kNvwFToNW-&_nc_oc=Adk77lOa7A-MClgEgE5Yxe-9ZIrn7wSWItcx3U71kAHH2S7ZufupnF69OOg22TXCK0c&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=0Uu3ilkkeql9tRx9m2owTQ&_nc_ss=8&oh=00_AfwTAdnqjkOeFyzVmO93JqkyW0Wg1ZQrcwFBr9QOTB7yuw&oe=69B6E3FB", 
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
        icon: "https://media.licdn.com/dms/image/v2/D560BAQHlgpoUXEnRSQ/company-logo_200_200/company-logo_200_200/0/1692042539560?e=1775088000&v=beta&t=-7wqleXScsmgY1zulTuQeCI3ln8Tc3PAqywfKbqa8pU", 
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
        icon: "https://media.licdn.com/dms/image/v2/C560BAQEmN27_CaawNQ/company-logo_200_200/company-logo_200_200/0/1630662445467/dms_software_technologies_pvt_ltd_logo?e=1775088000&v=beta&t=JLysvxwsO_34I85XCbBRND775OM5Ak91bkC3WfTG9ow",
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
        icon: "https://media.licdn.com/dms/image/v2/C560BAQH00MCBWLYYyA/company-logo_200_200/company-logo_200_200/0/1631348879206?e=1775088000&v=beta&t=XyJe6-RamV20KpK77tnuvLQHXGM6kl4tdkYigmuyi1U", 
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
        icon: "https://media.licdn.com/dms/image/v2/C560BAQH00MCBWLYYyA/company-logo_200_200/company-logo_200_200/0/1631348879206?e=1775088000&v=beta&t=XyJe6-RamV20KpK77tnuvLQHXGM6kl4tdkYigmuyi1U", 
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
    <section className="w-full max-w-7xl mx-auto -mt-6 sm:-mt-10 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
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

      <div className="relative mt-7 sm:mt-10">
        {/* Timeline spine */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        <div className="flex flex-col gap-3 sm:gap-4">
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
                  "relative grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-5",
                  isRight ? "" : "sm:[&>div:last-child]:order-first",
                ].join(" ")}
              >
                {/* Timeline node */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-4.5 sm:top-5 z-20">
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
                  <div className="relative z-10 mt-3 space-y-2.5">
                    {experience.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="flex items-start gap-2 text-gray-200/90"
                      >
                        <div className="mt-0.5 flex-shrink-0 h-4 w-4 rounded-sm bg-gradient-to-r from-indigo-500/70 to-cyan-500/70 flex items-center justify-center">
                          <MdKeyboardDoubleArrowRight className="text-white text-[10px]" />
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed">
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

      {/* Travel & GDS expertise section */}
      <div className="mt-12 sm:mt-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-300">
            Travel & GDS Expertise
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-300">
            Hands-on experience integrating{" "}
            <span className="font-semibold text-cyan-300">Sabre</span> and{" "}
            <span className="font-semibold text-cyan-300">Booking.com</span>{" "}
            global distribution systems (GDS) for end‑to‑end travel products:
            hotels, flights, private jets & yachts, and ground transportation.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {[
            {
              title: "Hotels & Stays",
              subtitle: "GDS hotel content & dynamic pricing",
              img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=70",
              points: [
                "Pulled real-time hotel inventory via Sabre & Booking.com APIs.",
                "Implemented rate plans, room mappings, and cancellation rules.",
              ],
            },
            {
              title: "Flights & GDS",
              subtitle: "Multi‑segment itineraries & ancillaries",
              img: "https://media.istockphoto.com/id/1457441464/photo/luxury-private-jet.jpg?s=612x612&w=0&k=20&c=R-hqLQXNcMZUUqL9rwR3cadol5w_7oO27lUujn5FHxQ=",
              points: [
                "Worked with GDS flows for availability, pricing, and ticketing.",
                "Supported fare rules, baggage, and PNR life‑cycle operations.",
              ],
            },
            {
              title: "Private Jets & Yachts",
              subtitle: "High‑touch luxury travel products",
              img: "https://media.istockphoto.com/id/2209853704/photo/a-beautiful-bay-of-fteri-beach-kefalonia.jpg?s=1024x1024&w=is&k=20&c=Ql9AyTf7bhh-2wl-eX5MGBkOLT9_lCXZgP_yFZggFgI=",
              points: [
                "Modeled charter products with complex availability patterns.",
                "Built inquiry and confirmation flows for premium customers.",
              ],
            },
            {
              title: "Ground Transportation",
              subtitle: "Cars, transfers & local mobility",
              img: "https://c.ndtvimg.com/2021-04/7ng7lr7g_hype-luxury-mobility-rentals_625x300_27_April_21.jpg",
              points: [
                "Integrated car and transfer options alongside air & hotel.",
                "Unified booking flows across multiple transportation partners.",
              ],
            },
          ].map((card) => (
            <div
              key={card.title}
              className="group relative overflow-hidden rounded-2xl border border-gray-700/60 bg-gradient-to-b from-gray-900/80 to-gray-900/40 backdrop-blur-md shadow-2xl hover:border-cyan-400/60 hover:shadow-cyan-500/30 transition-all duration-500"
            >
              <div className="relative h-40 sm:h-48 lg:h-56 w-full overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-80 group-hover:opacity-95 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300/90">
                    Certified Travel Domain
                  </div>
                  <div className="text-base sm:text-xl font-semibold text-white">
                    {card.title}
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-3">
                <div className="text-sm sm:text-base text-gray-200">
                  {card.subtitle}
                </div>
                <ul className="space-y-2">
                  {card.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-2.5 text-xs sm:text-sm text-gray-100"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400/90 flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
