import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const Certifications = () => {
    
  const certifications = [
    {
        name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
        issuer: "Amazon Web Services",
        date: "October 2024",
        icon: "/aws.jpeg",
        description: "Comprehensive understanding of AWS cloud computing fundamentals including core services, security, architecture, pricing, and support. Covers EC2, S3, RDS, Lambda, and cloud best practices for building scalable and secure cloud solutions.",
    },
    {
        name: "Microsoft Azure AZ-900T00 | AI | DevOps",
        issuer: "Microsoft Azure",
        date: "January 2022",
        icon: "/azure.png",
        description: "Azure Fundamentals certification covering cloud concepts, Azure services, security, privacy, compliance, and pricing. Includes knowledge of Azure AI services and DevOps practices for modern cloud application development and deployment.",
    },
    {
        name: "Microsoft Azure AI Fundamentals | DevOps",
        issuer: "Microsoft Azure",
        date: "January 2022",
        icon: "/azure.png",
        description: "Specialized certification in Azure AI services including machine learning, cognitive services, and bot frameworks. Demonstrates expertise in implementing AI solutions and integrating DevOps practices for AI-powered applications.",
    },
    {
        name: "Microsoft Azure AZ-400 | DevOps",
        issuer: "Microsoft Azure",
        date: "January 2022",
        icon: "/azure.png",
        description: "Advanced DevOps Engineer Expert certification covering continuous integration, continuous delivery, dependency management, application infrastructure, and implementing DevOps processes. Expertise in Azure DevOps, GitHub Actions, and CI/CD pipelines.",
    },
    {
        name: "CISCO CCNA V7 Router Configuration",
        issuer: "Cisco",
        date: "January 2020",
        icon: "/cisco.jpeg",
        description: "Cisco Certified Network Associate certification demonstrating proficiency in network fundamentals, IP connectivity, IP services, security fundamentals, automation, and programmability. Expertise in configuring and troubleshooting routers and switches.",
    },
    {
        name: "CISCO CyberOPS Associate",
        issuer: "Cisco",
        date: "July 2023",
        icon: "/cisco.jpeg",
        description: "Cybersecurity Operations Associate certification covering security concepts, security monitoring, host-based analysis, network intrusion analysis, and security policies and procedures. Expertise in threat detection, analysis, and response using security operations center (SOC) methodologies.",
    },
  ];


  return (
    <div className="container mx-auto -mt-20 px-4 sm:px-6 md:px-8 lg:px-12" id="certifications">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center text-gray-200 mb-12 sm:mb-16 md:mb-32">Certifications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-tertiary text-white rounded-3xl min-h-[350px] gap-4 p-5 sm:p-6 hover:scale-105 transition-transform flex flex-col"
            style={{ backgroundColor: "#151030" }}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={cert.icon}
                alt={cert.issuer}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-base sm:text-lg truncate">
                  {cert.issuer}
                </p>
                <span className="bg-[#F7E976] text-black text-xs px-2 sm:px-3 py-1 font-bold rounded-full flex items-center gap-1 w-fit mt-2">
                  <FaRegCalendarAlt className="text-xs" /> <span className="whitespace-nowrap">{cert.date}</span>
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3 mb-4">
              <MdVerified className="text-xl sm:text-2xl text-[#F7E976] flex-shrink-0 mt-1" />
              <p className="text-gray-200 text-sm sm:text-base font-semibold leading-relaxed">{cert.name}</p>
            </div>
            <div className="mt-auto pt-4 border-t border-gray-700">
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;

