"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Dappazon",
    description: "Web3 Amazon clone",
    image: "/images/projects/dappazon.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Decentra Drive",
    description: "Decentralized Google Drive",
    image: "/images/projects/decentraDrive.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Goal Setting Mobile App",
    description: "React Native mobile app for setting goals",
    image: "/images/projects/goalapp.png",
    tag: ["All", "Mobile"],
  },
  {
    id: 4,
    title: "Time Series Analysis",
    description: "Machine Learning and AI for currencies",
    image: "/images/projects/timeseries.png",
    tag: ["All", "Web"],
  },
  {
    id: 5,
    title: "Willow",
    description: "Web3 Zillow clone",
    image: "/images/projects/willow.png",
    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "YouTube Clone",
    description: "YouTube UI/UX clone",
    image: "/images/projects/youtubeClone.png",
    tag: ["All", "Web"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  return (
    <section ref={ref}>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name="Mobile"
          onClick={handleTagChange}
          isSelected={tag == "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.pre}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
