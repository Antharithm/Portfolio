"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
      <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
        <h1 className="text-white max-w-2xl mb-4 lg:text-5xl text-4xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-gray-400 from-gray-300">
            Hello, I'm{" "}
          </span>{" "}
          <br></br>
          {/* <TypeAnimation
            sequence={[
              "Anthony",
              3000,
              "Web Developer.",
              1000,
              "Blockchain Developer.",
              1000,
              "UI/UX Designer.",
              1000,
              "Musician.",
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "1em",
              display: "inline-block",
              color: "#50fd9a",
            }}
            repeat={Infinity}
          /> */}
        </h1>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          I am a Fullstack Web Developer with experience building applications
          for the web, mobile and EVM compatible Blockchains. I leverage my
          skills and technical abilities in JavaScript, Solidity and Python to
          create modern and creative user experiences for my clients.
        </p>
        <div>
          <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#50fd9a] hover:bg-slate-600 text-white border border-gray-600">
            Hire Me
          </button>
          <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#50fd9a] hover:bg-gray-500 text-white mt-3l">
            <span className="block bg-[#121212] hover:bg-slate-600 rounded-full px-5 py-2">
              Download CV
            </span>
          </button>
        </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            src="/images/circleProPic2.png"
            alt="/images/circleProPic.png"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
