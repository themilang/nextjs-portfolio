'use client';
import React ,{useTransition,useState}from "react";
import Image from "next/image";
import img from "../../../../../public/aboutme.jpg";
import { TabsDemo } from "../tabsDemo";
const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className=" pl-2">
            <li>HTML5,CSS</li>
            <li>JavaScript</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDb</li>
          <li>MySQL</li>
          <li>Reactjs</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
          <li>C/C++ </li>
          <li>AWS , GIT </li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="pl-2">
          <li>Fullstack Academy of Code</li>
          <li>University of California, Santa Cruz</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className=" pl-2">
          <li>AWS Cloud Practitioner</li>
          <li>Google Professional Cloud Developer</li>
        </ul>
      ),
    },
  ];





const AboutSection = () => {


    const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id:any) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white mt-12" id="about">
    <div className="md:grid md:grid-cols-2 gap-8  py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Image alt="Milan ghimire at f1soft" src={img} width={500} height={500} className=" mt-12 rounded-2xl lg:ml-12" />
      
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold dark:text-white text-black mb-4">About Me</h2>
        <p className="text-base lg:text-[16px] dark:text-white text-gray-900">
          I am a full stack web developer with a passion for creating
          interactive and responsive web applications. I have experience
          working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
          Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
          looking to expand my knowledge and skill set. I am a team player and
          I am excited to work with others to create amazing applications.
        </p>
      
      <div id="abtab" className="-mt-28">
      <TabsDemo/>

      </div>

        {/* <div className="flex flex-row justify-start mt-8">
          <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          >
            {" "}
            Skills{" "}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          >
            {" "}
            Education{" "}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("certifications")}
            active={tab === "certifications"}
          >
            {" "}
            Certifications{" "}
          </TabButton>
        </div> */}
        {/* <div className="mt-8">
        {TAB_DATA.find((t) => t.id === tab)?.content}

        </div> */}
      </div>
    </div>
  </section>
);
};


export default AboutSection;
