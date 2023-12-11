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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
