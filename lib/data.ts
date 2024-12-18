import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
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
    title: "Java Full Stack Developer",
    location: "J.P. Morgan & Chase, TX, USA",
    description:
      "Enhanced mobile payment systems using Spring Boot and ReactJS, achieving a 20% reduction in transaction times and improving user experience on mobile platforms.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2023 - Present",
  },
  {
    title: "Master of Science in Computer Science",
    location: "University of North Texas, Denton, TX, USA",
    description:
      "Specialized in full-stack engineering and cloud technologies with a focus on software development and scalable system design.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2024",
  },
  {
    title: "Java Full Stack Developer",
    location: "Capgemini, India",
    description:
      "Developed microservices-based inventory management systems using Spring Boot and Angular, enhancing scalability and system efficiency.",
    icon: React.createElement(CgWorkAlt),
    date: "Sept 2019 - Aug 2022",
  },
  {
    title: "Bachelor of Technology in Electronics and Communication",
    location: "Osmania University, Hyderabad, India",
    description:
      "Graduated with a strong foundation in electronics and communication engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2019",
  },
] as const;

export const projectsData = [
  {
    title: "IPL Data Marvel",
    description:
      "Real-time data application using Spring Boot and AWS for scalable data storage and processing.",
    tags: ["ReactJS", "Spring Boot", "AWS", "Spring Batch"],
    imageUrl: iplDataMarvelImg,
  },
  {
    title: "MovieQuest: Modern Movie Discovery App",
    description:
      "Movie discovery app with personalized recommendations, optimized backend APIs, and social media sharing.",
    tags: ["React", "Redux", "Material UI"],
    imageUrl: movieQuestImg,
  },
  {
    title: "Fast-PizzaStore Project",
    description:
      "PWA with offline support and real-time order tracking using Google Maps API.",
    tags: ["ReactJS", "PWA", "Google Maps API"],
    imageUrl: fastPizzaStoreImg,
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "C++",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "UI Material",
  "JavaScript",
  "Typescript",
  "ES6",
  "React JS",
  "Redux",
  "React Hooks",
  "Spring Boot",
  "Spring MVC",
  "Web Services",
  "REST API",
  "Microservices",
  "Hibernate",
  "J2EE Technologies",
  "Servlets",
  "JSP",
  "JDBC",
  "JMS",
  "Multithreading",
  "IDEs",
  "RESTful WebServices",
  "Core Java",
  "XML",
  "Java Database Connectivity (JDBC)",
  "Tomcat",
  "Struts",
  "SOAP",
  "Maven",
  "AngularJS",
  "Jakarta EE",
  "JUnit",
  "Spring Framework",
  "Swagger",
  "PostgreSQL",
  "MySQL",
  "Oracle",
  "Docker",
  "Kubernetes",
  "AWS",
  "CI/CD",
  "Agile",
  "Jira",
  "Git",
  "Scrum",
  "GitHub",
  "Terraform",
  "SonarQube",
  "POSTman",
  "JMeter",
  "Cucumber",
  "Gatling",
  "Windows",
  "Linux",
  "Mac OS",
] as const;
