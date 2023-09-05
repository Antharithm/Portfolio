"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Solidity | EVM</li>
        <li>JavaScript | Node.js</li>
        <li>Python | ML</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Pennsylvania | Blockchain Coding Bootcamp</li>
        <li>Temple University | Media Studies and A/V Production</li>
        <li>UDEMY Univerity | JavaScript Mastery</li>
      </ul>
    ),
  },
  {
    title: "Expirence",
    id: "expirence",
    content: (
      <ul className="list-disc pl-2">
        <li>Comcast | Data Analytics for Advertisement Traffic and Revenue</li>
        <li>Tellor | Blockchain Developer</li>
        <li>Bricks | Blockchain Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/bgCover.png"
          alt="/images/AntharithmAV8.png"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Fullstack software developer specializing in Solidity, Python and
            JavaScript programming languages. Experienced Blockchain Architect
            with proficient coding skills, leveraging development tools such as
            Ethers.js, React.js, Oracles and Node providers. Fully capable of
            developing, testing and deploying smart contracts across EVM
            compatible networks for my clients.
          </p>
          <div className="flex flex-row justify-start mt-8">
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
              selectTab={() => handleTabChange("expirence")}
              active={tab === "expirence"}
            >
              {" "}
              Expirence{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
