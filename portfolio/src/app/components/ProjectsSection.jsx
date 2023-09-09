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
    gitUrl: "https://github.com/Antharithm/Dappazon",
  },
  {
    id: 2,
    title: "Decentra Drive",
    description: "Decentralized Google Drive",
    image: "/images/projects/decentraDrive.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Antharithm/Decentra-Drive",
  },
  {
    id: 3,
    title: "Goal Setting Mobile App",
    description: "React Native mobile app for setting goals",
    image: "/images/projects/goalapp.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Antharithm/dailyGoals-mobile-app",
  },
  {
    id: 4,
    title: "AWS Cluster",
    description: "The Power of the Cloud and Unsupervised Machine Learning",
    image: "/images/projects/awsCluster.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Antharithm/AWS-ClusterCrypto",
  },
  {
    id: 5,
    title: "Willow",
    description: "Web3 Zillow clone",
    image: "/images/projects/willow.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Antharithm/Willow",
  },
  {
    id: 6,
    title: "YouTube Clone",
    description: "YouTube UI/UX clone",
    image: "/images/projects/youtubeClone.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Antharithm/YouTube-Clone",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
