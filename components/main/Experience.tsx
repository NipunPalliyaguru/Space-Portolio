import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import my from "../../public/epic.jpeg";

const Experience = () => {
    
  const experiences = [
    
    {
      name: "EPIC LANKA PVT LTD",
      icon: "https://media.licdn.com/dms/image/C560BAQH00MCBWLYYyA/company-logo_200_200/0/1631348879206?e=1731542400&v=beta&t=vjH89OmT24nD1x6JaH2rVY4SoRm74IpVzS6BqgZ4I1U", // replace with the actual path to the icon
      title: "Associate Software Developer",
      working_type: "Full Time",
      year: "January 2024 - Present",
      details: [
        "Developed and maintained full-stack applications using Angular, Java, and Spring Boot.",
        "Collaborated with cross-functional teams to design and implement new features.",
        "Improved application performance by optimizing code and implementing best practices.",
      ],
      techs: [ "Angular", "Java", "Spring Boot", "AWS", "Oracle", "React Js", " Next Js", "Nest Js", " Tailwind CSS", " Github", "Docker", "SQL",],
      projects: ["Project A", "Project B", "Project C"], // replace with actual project names
    },
    {
      name: "EPIC LANKA PVT LTD",
      icon: "https://media.licdn.com/dms/image/C560BAQH00MCBWLYYyA/company-logo_200_200/0/1631348879206?e=1731542400&v=beta&t=vjH89OmT24nD1x6JaH2rVY4SoRm74IpVzS6BqgZ4I1U", // replace with the actual path to the icon
      title: "Software Engineer Trainee",
      working_type: "Full Time",
      year: "July 2023 - January 2024",
      details: [
        "Assisted in the development and maintenance of software applications.",
        "Participated in code reviews and contributed to team projects.",
        "Gained hands-on experience with full-stack development and cloud technologies.",
      ],
      techs: [ "Angular", "Java", "Spring Boot", "AWS", "Oracle", "React Js", " Next Js", "Nest Js", " Tailwind CSS", " Github", "Docker", "SQL",],
      projects: ["Project D", "Project E"], // replace with actual project names
    },
    {
      name: "Upwork (Freelance)",
      icon: "https://pangrampangram.com/cdn/shop/articles/442269ac56eddaecd3fa3dd752c38870_1920x.jpg?v=1631828825", // replace with the actual path to the icon
      title: "Full Stack Developer",
      working_type: "Part-Time",
      year: "July 2020 - Present",
      details: [
        "Completed various full-stack development projects for clients in the US and Canada.",
        "Specialized in building responsive and scalable web applications.",
        "Worked with a variety of technologies including NodeJS, ReactJS, and MongoDB.",
      ],
      techs: ["NodeJS", "ReactJS", "MongoDB", "NextJS"],
      projects: ["Client Project 1", "Client Project 2"], // replace with actual project names
    },
    // Add more experiences as needed
  ];

  return (
    <div className="container mx-auto -mt-48" >

        
      <h1 id="Experience" className="text-[40px] font-medium text-center text-gray-200 mb-32">Experience</h1>
      {experiences.map((experience, index) => (
        <div
          key={index}
          className="bg-tertiary false w-full mr-20 ml-8 mb-20 text-white justify-center  rounded-3xl min-h-[400px] gap-4 p-5"
          style={{ backgroundColor: "#151030" }}
        >
          <div className="flex md:justify-between max-[500px]:gap-4 max-[500px]:flex-col">
            <span className="bg-gradient-to-r from-indigo-300 flex  items-center py-1 md:px-3 px-3 rounded-full md:w-94 min-w-[192px]">
              <img
                src={experience.icon}
                alt="sezenta"
                className="md:w-12 md:h-12 h-16 w-16   "
              />
              <span className="flex ml-4 flex-col w-full">
                <p className="text-white font-bold ml-2 text-3xl w-full">
                  {experience.name}
                </p>
                <p className="text-white ml-2">{experience.working_type}</p>
              </span>
            </span>
            <span className="bg-[#F7E976] text-black  h-12 px-5 font-bold rounded-full md:min-w-[250px] min-w-[288px]  flex md:py-4 items-center max-[500px]:text-sm gap-2">
              <FaRegCalendarAlt /> {experience.year}
            </span>
          </div>
          <div className="flex py-8 text-3xl">{experience.title}</div>
          <div className="flex flex-col gap-4 p-4 ">
            {experience.details.map((data, index) => (
              <div key={index} className="flex flex-row gap-3">
                <MdKeyboardDoubleArrowRight className="text-3xl" /> {data}
              </div>
            ))}
          </div>
          <div className=" flex flex-wrap gap-3 justify-center">
            {experience.techs.map((data, index) => (
              <div
                key={index}
                className="bg-[#F7E976] p-5 text-black rounded-2xl"
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
