"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">
          Electronics and Communication Engineering
        </span>
        , I decided to follow my passion for software development. I pursued a
        Master's in Computer Science and gained significant experience in{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is
        creating efficient and scalable solutions. I{" "}
        <span className="underline">love</span> the satisfaction of seeing my
        code positively impact users. My core stack includes{" "}
        <span className="font-medium">React, Java, Spring Boot, and AWS</span>.
        I am also proficient with Kubernetes and Docker. I have hands-on
        experience from roles at Optum, where I am currently working,
        and Capgemini, where I collaborated on complex projects. I continuously
        strive to learn new technologies and enhance my skills. I am currently
        seeking a <span className="font-medium">full-time position</span> as a
        Full Stack Engineer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        chess, watching cricket, and exploring new technologies. I also have a
        passion for <span className="font-medium">teaching and mentoring</span>{" "}
        others in the tech community. Currently, I am learning about{" "}
        <span className="font-medium">
          cloud-native architectures and advanced data structures
        </span>
        . In my free time, I enjoy hiking and experimenting with new cooking
        recipes.
      </p>
    </motion.section>
  );
}
