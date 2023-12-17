import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import wordanalyticsImg from "@/public/wordanalytics.png";
import avatarCraft from "@/public/avatar-ai.png";
import cloudGo from "@/public/cloud-go.png";
import ecommerce from "@/public/e-commerce.png";

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
    title: "Graduated Bachelor Degree",
    location: "Tanjungpinang, Indonesia",
    description:
      "I majored in informatics engineering and graduated in 3.5 years. During my studies I was very interested in the world of programming and computers, so I decided to continue learning more.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
  },
  {
    title: "Graduated Bootcamp",
    location: "Batam, Indonesia",
    description:
      "While waiting for graduation, I immediately took bootcamp activities to learn about backend programming, then after that I immediately got a job as a backend developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Backend Developer",
    location: "Selangor, Malaysia",
    description:
      "I am now a backend developer working as a full-time in Slurp!",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Avatar Craft AI",
    description:
      "This is my personal work with Next.js, this project using replicate dreambooth to generated avatar from training models.",
    tags: ["React", "Next.js", "PostGres", "Tailwind", "Prisma"],
    imageUrl: avatarCraft,
  },
  {
    title: "Cloud Getorders",
    description:
      "This is a full-time project in GetOrders, currently working to maintain this website from managing data in the backend",
    tags: ["Svelte", "JavaScript", "CSS", "MongoDB", "NodeJs"],
    imageUrl: cloudGo,
  },
  {
    title: "Nest Ecommerce",
    description:
      "This is personal project making online store providing some food and beverages with Laravel, integrate with stripe. Managing vendor and customer sides.",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    imageUrl: ecommerce,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Svelte",
  "Vue.js",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Rest API",
  "Nest.js",
  "Express",
  "PostgreSQL",
  "Laravel",
] as const;
