import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
    
  const education = [
    {
        name: "SRI LANKA INSTITUTE OF INFORMATION TECHNOLOGY",
        icon: "https://via.placeholder.com/200x200/4F46E5/FFFFFF?text=SLIIT", 
        degree: "BSc (Hons) in Information Technology",
        specialization: "Specializing in Software Engineering",
        cgpa: "CGPA 3.6",
        year: "Ongoing",
        details: [
            "Pursuing Bachelor's degree in Information Technology with specialization in Software Engineering.",
            "Focusing on software development, system architecture, and modern programming practices.",
            "Engaging in practical projects and industry-relevant coursework.",
        ],
    },
    {
        name: "Sri Lanka International Buddhist Academy",
        icon: "https://via.placeholder.com/200x200/10B981/FFFFFF?text=SLIBA", 
        degree: "Diploma in English",
        specialization: "Grade - Superior A",
        cgpa: "",
        year: "December 2018 - June 2019",
        details: [
            "Completed Diploma in English with Superior A grade.",
            "Enhanced communication and language skills for professional development.",
        ],
    },
    {
        name: "Vidyatrtha College Kandy",
        icon: "https://via.placeholder.com/200x200/6366F1/FFFFFF?text=VCK", 
        degree: "High School Education",
        specialization: "Maths Stream",
        cgpa: "",
        year: "April 2004 - November 2020",
        details: [
            "Completed high school education in Mathematics stream.",
            "Combined Mathematics - Grade A",
            "Physics - Grade B",
            "Information Technology - Grade B",
        ],
    },
  ];


  return (
    <div className="container mx-auto -mt-20 px-4 sm:px-6 md:px-8 lg:px-12" id="education">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center text-gray-200 mb-12 sm:mb-16 md:mb-32">Education</h1>
      {education.map((edu, index) => (
        <div
          key={index}
          className="bg-tertiary false w-full mx-auto mb-12 sm:mb-16 md:mb-20 text-white justify-center rounded-3xl min-h-[400px] gap-4 p-4 sm:p-5 md:p-6"
          style={{ backgroundColor: "#151030", maxWidth: "1300px" }}
        >
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-4">
            <span className="bg-gradient-to-r from-indigo-300 flex items-center py-1 px-3 rounded-full w-full sm:w-auto">
              <img
                src={edu.icon}
                alt={edu.name}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex-shrink-0"
              />
              <span className="flex ml-3 sm:ml-4 flex-col w-full min-w-0">
                <p className="text-white font-bold ml-2 text-lg sm:text-xl md:text-2xl lg:text-3xl w-full break-words">
                  {edu.name}
                </p>
                <p className="text-white ml-2 text-xs sm:text-sm">{edu.degree}</p>
              </span>
            </span>
            <span className="bg-[#F7E976] text-black h-auto sm:h-12 px-3 sm:px-5 py-2 sm:py-0 font-bold rounded-full w-full sm:w-auto sm:min-w-[250px] flex items-center justify-center sm:justify-start text-xs sm:text-sm md:text-base gap-2">
              <FaRegCalendarAlt className="flex-shrink-0" /> <span className="text-center sm:text-left">{edu.year}</span>
            </span>
          </div>
          <div className="flex py-4 items-center gap-3">
            <FaGraduationCap className="text-2xl sm:text-3xl text-[#F7E976] flex-shrink-0" />
            <div className="flex flex-col">
              <div className="flex py-2 text-lg sm:text-xl md:text-2xl font-semibold">{edu.specialization}</div>
              {edu.cgpa && (
                <div className="text-base sm:text-lg md:text-xl text-gray-300">{edu.cgpa}</div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:gap-4 p-2 sm:p-4">
            {edu.details.map((data, index) => (
              <div key={index} className="flex flex-row gap-2 sm:gap-3">
                <MdKeyboardDoubleArrowRight className="text-xl sm:text-2xl md:text-3xl flex-shrink-0 mt-1" /> 
                <span className="text-sm sm:text-base text-gray-300">{data}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;

