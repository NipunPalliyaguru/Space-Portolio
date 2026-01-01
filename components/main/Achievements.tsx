import React from "react";
import { FaTrophy, FaRocket, FaShieldAlt, FaCloud, FaCog, FaChartLine } from "react-icons/fa";

const Achievements = () => {
    
  const achievements = [
    {
        icon: <FaRocket className="text-3xl" />,
        title: "Sabre APIs Integration",
        description: "Successfully integrated Sabre APIs in multi-modal travel booking platforms including flights, hotels, cruises, and private jets.",
    },
    {
        icon: <FaTrophy className="text-3xl" />,
        title: "Stripe Billing Modules",
        description: "Designed and developed Stripe-based PaaS/SaaS billing modules with seamless checkout, recurring billing, and finance dashboards.",
    },
    {
        icon: <FaChartLine className="text-3xl" />,
        title: "Marketing Tech Integrations",
        description: "Led marketing tech integrations using Data Dog, Google Tag Manager, boosting event-driven tracking and analytics.",
    },
    {
        icon: <FaCog className="text-3xl" />,
        title: "CRM Pipelines & Automation",
        description: "Implemented CRM pipelines and automated campaigns via Salesforce Marketing Cloud and custom GTM triggers.",
    },
    {
        icon: <FaShieldAlt className="text-3xl" />,
        title: "Secure Admin Portals",
        description: "Developed secure internal admin portals for enterprise clients with RBAC, logging, and workflow management.",
    },
    {
        icon: <FaCloud className="text-3xl" />,
        title: "Cloud-Based Solutions",
        description: "Architected and deployed cloud-based full-stack solutions on AWS including containerized microservices.",
    },
    {
        icon: <FaCog className="text-3xl" />,
        title: "CI/CD Automation",
        description: "Automated CI/CD workflows using GitHub Actions, with integrated release notifications and error handling.",
    },
    {
        icon: <FaChartLine className="text-3xl" />,
        title: "Performance Optimization",
        description: "Delivered performance-optimized full-stack apps, achieving a 30% reduction in load times and improved UX scores.",
    },
  ];


  return (
    <div className="container mx-auto -mt-20" id="achievements">
      <h1 className="text-[40px] font-medium text-center text-gray-200 mb-32">Key Achievements & Contributions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-tertiary text-white rounded-3xl min-h-[250px] gap-4 p-6 hover:scale-105 transition-transform flex flex-col"
            style={{ backgroundColor: "#151030" }}
          >
            <div className="text-[#F7E976] mb-4">
              {achievement.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              {achievement.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed flex-grow">
              {achievement.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;

