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
      <SectionHeading>About me 👋🏻</SectionHeading>
      <p className="mb-3">
        I'm currently a full-time backend developer at{" "}
        <span className="font-medium">GetOrders</span>, where I get to channel
        my passion for software development into building robust backend
        systems. Armed with a degree in{" "}
        <span className="font-medium">Computer Engineering</span>, my journey
        into the programming world ignited after completing my bachelor's
        degree. Through a coding bootcamp, I delved deep into the realms of{" "}
        <span className="font-medium">backend web development</span>, and the
        thrill of problem-solving has kept me captivated ever since.
        <span className="italic"> Solving problems</span> is my forte—I relish
        that "Aha!" moment when a solution clicks into place. My tech arsenal
        includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        , complemented by proficiency in TypeScript and Prisma. Eager to broaden
        my horizons, I'm constantly exploring new technologies and pushing the
        boundaries of what's possible. Currently, I'm on the lookout for
        exciting challenges and growth opportunities as a{" "}
        <span className="font-medium">full-time backend developer</span>.
      </p>

      <p>
        <span className="italic">When I'm not immersed in code,</span> you'll
        find me navigating the fascinating landscape of AWS Lambda, API Gateway,
        and crafting Node.js scripts. I thrive on the intricacies of backend
        development, constantly honing my skills to create efficient and
        scalable solutions. Join me on this journey where every line of code is
        an opportunity to innovate.
      </p>
    </motion.section>
  );
}
