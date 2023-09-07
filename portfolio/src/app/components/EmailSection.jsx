import React from "react";
// import TwitterIcon from "../../../public/twitter-icon.svg";
// import InstagramIcon from "../../../public/instagram-icon.svg";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-lx font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Greetings! I am always looking for new and exciting opportunities.
          Feel free to reach out to me about working together, music, or we can
          just have some interesting conversations!
        </p>
      </div>
      <div className="socials flex flex-row gap-2">
        <Link href="https://github.com/antharithm" target="_blank">
          <Image src={GithubIcon} alt="Github Icon" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/anthony-tilotta-74739ab3/"
          target="_blank"
        >
          <Image src={LinkedinIcon} alt="Linkedin Icon" />
        </Link>
      </div>
      <div>
        <form className="flex flex-col gap-4">
          <label htmlFor="email" className="text-white">
            Your email
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="youremail@gmail.com"
          />
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
