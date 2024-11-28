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
        , I discovered my passion for software development. To deepen my
        knowledge, I pursued a Master's in Computer Science at the{" "}
        <span className="font-medium">University of North Texas, Denton</span>.
        Over the years, I have gained significant experience in{" "}
        <span className="font-medium">Java Full Stack Development</span>, with
        expertise in building scalable applications using{" "}
        <span className="font-medium">Spring Boot, React.js, and AWS</span>. My
        professional journey includes impactful roles at{" "}
        <span className="font-medium">J.P. Morgan & Chase</span> and{" "}
        <span className="font-medium">Capgemini</span>, where I developed
        cutting-edge solutions for fintech and e-commerce platforms. I excel in{" "}
        <span className="font-medium">
          microservices architecture, database optimization, and CI/CD pipelines
        </span>
        , always striving to deliver efficient and scalable systems.
      </p>

      <p>
        I am passionate about solving complex problems, mentoring junior
        developers, and staying ahead in the ever-evolving tech landscape. My
        current interests include{" "}
        <span className="font-medium">cloud-native architectures</span> and{" "}
        <span className="font-medium">advanced distributed systems</span>. When
        I'm not coding, I enjoy playing chess, watching cricket, and exploring
        new cooking recipes. I also love engaging with the tech community by
        sharing knowledge and guiding aspiring developers. As a lifelong
        learner, I am currently diving deeper into{" "}
        <span className="font-medium">
          Kubernetes, Docker, and data-driven system design
        </span>
        . I am actively seeking a{" "}
        <span className="font-medium">full-time role</span> as a{" "}
        <span className="font-medium">Full Stack Engineer</span> to leverage my
        skills and contribute to impactful projects.
      </p>
    </motion.section>
  );
}
