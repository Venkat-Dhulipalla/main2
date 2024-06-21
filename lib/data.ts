import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import imgUploaderImg from "@/public/imgUploader.png";
// import taskManagerImg from "@/public/taskManager.png";
import iplDataMarvelImg from "@/public/iplDataMarvel.png";
import movieQuestImg from "@/public/movieQuest.png";
import fastPizzaStoreImg from "@/public/fastPizzaStore.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated with Bachelor's in Electronics and Communication Engineering",
    location: "Hyderabad, India",
    description: "Completed my bachelor's degree, which laid the foundation for my interest in software development.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Associate Software Engineer",
    location: "Bangalore, India",
    description: "Worked on full-stack development projects, specializing in ReactJS and Spring MVC.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full Stack Engineering Analyst",
    location: "Hyderabad, India",
    description: "Developed scalable solutions using ReactJS, Spring Boot, and AWS. Led a team of junior engineers and improved system efficiency.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Master's in Computer Science",
    location: "Denton, TX",
    description: "Advanced my skills in software development with a focus on full-stack engineering and cloud technologies.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2024",
  },
] as const;

export const projectsData = [
  // {
  //   title: "Full-Stack Image Uploader Application",
  //   description: "Developed an integrated application using Spring Boot for the backend, ReactJS for the frontend, and Amazon S3 for image storage.",
  //   tags: ["Spring Boot", "ReactJS", "Amazon S3", "Docker"],
  //   imageUrl: imgUploaderImg,
  // },
  // {
  //   title: "Task Management System",
  //   description: "Implemented a microservices architecture with separate services for users, tasks, and submissions using ReactJS and Spring Boot.",
  //   tags: ["ReactJS", "Spring Boot", "Microservices", "AWS", "MySQL"],
  //   imageUrl: taskManagerImg,
  // },
  {
    title: "IPL Data Marvel",
    description: "Developed a real-time data application using Spring Boot and AWS services for scalable data storage and processing.",
    tags: ["ReactJS", "Spring Boot", "Spring Batch", "AWS"],
    imageUrl: iplDataMarvelImg,
  },
  {
    title: "MovieQuest: Modern Movie Discovery App",
    description: "Created a movie discovery app with personalized recommendations, optimized backend APIs, and social media sharing features.",
    tags: ["React", "Redux", "Material UI"],
    imageUrl: movieQuestImg,
  },
  {
    title: "Fast-PizzaStore Project",
    description: "Utilized PWA techniques for offline support and integrated Google Maps API for real-time order tracking.",
    tags: ["ReactJS", "PWA", "Google Maps API"],
    imageUrl: fastPizzaStoreImg,
  },
] as const;
export const skillsData = [
  "Java",
  "JavaScript",
  "SQL",
  "ReactJS",
  "Spring Boot",
  "Spring Data JPA",
  "Hibernate",
  "Kubernetes",
  "AWS",
  "Docker",
  "OAuth",
  "JWT",
  "Jenkins",
  "JIRA",
  "Git",
  "Swagger",
  "PostgreSQL",
  "MariaDB",
  "Oracle",
  "CI/CD",
  "Agile",
  "XP Engineering Practices",
  "Junit",
  "Cucumber",
  "Gatling",
  "Jmeter",
] as const;
