"use client";
import React from 'react'
import { motion } from "framer-motion";
import AnimationWrapper from "../../view/animation-wrapper/index";
import { AiOutlineGithub } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import Project1 from "../../../../public/images/portofoliosaya.png"

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <motion.div
    initial={{ y: 50, scale: 0.9 }}
    whileInView={{ y: 0, scale: 1 }}
    transition={{ duration: 0.5, type: "spring" }}
    >
      <article className="flex flex-col md:flex-row justify-between items-center w-full rounded-3xl border border-solid border-pink-600 bg-white shadow-pink-600 shadow-2xl p-4 md:p-12">
        <Link href={link} target="_blank" className="w-full md:w-1/2 cursor-pointer overflow-hidden rounded-lg">
          <Image src={img} alt={title} width={300} height={300} className="w-full h-auto transition ease-in-out delay-150 hover:-translate-y-3" />
        </Link>

        <div className="w-full md:w-1/2 flex flex-col justify-between items-start mt-4 md:pl-6">
          <span className="text-pink-600 font-medium text-xl">{type}</span>
          <Link href={link} target="_blank" className="hover:underline underline-offset-2">
            <h2 className="my-2 w-full text-4xl text-left font-bold">{title}</h2>
          </Link>
          <p className="my-2 font-medium">{summary}</p>
          <div className="mt-2 flex items-center">
            <Link href={github} target="_blank" className="">
              <AiOutlineGithub className="w-10 h-10" />
            </Link>
            <Link href={link} target="_blank" className="ml-4 rounded-lg bg-pink-600 text-white p-2 px-6 text-lg font-semibold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-600 duration-300">
              Visit Project
            </Link>
          </div>
        </div>
      </article>
    </motion.div>
  );
};

const variants = {
  offscreen: {
    y: 150,
    opacity: 0,
  },
  onscreen: { y: 0, opacity: 1, transition: { type: "spring", duration: 2 } },
};

const Project = ({ type, title, summary, img, link, github }) => {
  return (
    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <article className="w-full md:w-1/2 lg:w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-pink-600 bg-white p-4 md:p-6 ">
        <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
          <Image src={img} alt={title} width={300} height={300} className="w-full h-auto transition ease-in-out delay-150 hover:-translate-y-3" />
        </Link>

        <div className="w-full flex flex-col justify-between items-start mt-4">
          <span className="text-pink-600 font-medium text-xl">{type}</span>
          <Link href={link} target="_blank" className="hover:underline underline-offset-2">
            <h2 className="my-2 w-full text-3xl text-left font-bold">{title}</h2>
          </Link>
          <div className="mt-2 w-full flex items-center justify-between">
            <Link href={link} target="_blank" className="text-lg font-semibold hover:underline">
              Visit
            </Link>
            <Link href={github} target="_blank" className="">
              <AiOutlineGithub className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </article>
    </motion.div>
  );
};

const ProjectsView = () => {
  return (
    <main>
      <div className="max-w-screen mt-28 md:mt-12 justify-center items-center flex flex-col mx-4 md:mx-8">
        <AnimationWrapper>
          <motion.div className="w-full mb-4 md:mb-16 flex flex-col items-center justify-center" variants={variants}>
            <div className="grid grid-cols-12 gap-4 md:gap-16 mt-4 md:mt-24">
              <div className="col-span-12">
                <FeaturedProject
                  title="Portfolio"
                  img={Project1}
                  summary="I created this project using Next.js, Tailwind CSS, and Framer Motion."
                  link="/"
                  github="https://github.com/IpungNanda?tab=repositories"
                  type="Featured Project"
                />
              </div>
              <div className="col-span-6">
                <Project
                  title="Portfolio"
                  img={Project1}
                  summary="I created this project using Next.js, Tailwind CSS, and Framer Motion."
                  link="/"
                  github="https://github.com/IpungNanda?tab=repositories"
                  type="Featured Project"
                />
              </div>
              <div className="col-span-6">
                <Project
                  title="Portfolio"
                  img={Project1}
                  summary="I created this project using Next.js, Tailwind CSS, and Framer Motion."
                  link="/"
                  github="https://github.com/IpungNanda?tab=repositories"
                  type="Featured Project"
                />
              </div>
              <div className="col-span-12">
                <FeaturedProject
                  title="Portfolio"
                  img={Project1}
                  summary="I created this project using Next.js, Tailwind CSS, and Framer Motion."
                  link="/"
                  github="https://github.com/IpungNanda?tab=repositories"
                  type="Featured Project"
                />
              </div>
              <div className="col-span-6">
                <Project
                  title="Portfolio"
                  img={Project1}
                  summary="I created this project using Next.js, Tailwind CSS, and Framer Motion."
                  link="/"
                  github="https://github.com/IpungNanda?tab=repositories"
                  type="Featured Project"
                />
              </div>
              <div className="col-span-6">
                <Project
                  title="Portfolio"
                  img={Project1}
                  summary="I created this project using Next.js, Tailwind CSS, and Framer Motion."
                  link="/"
                  github="https://github.com/IpungNanda?tab=repositories"
                  type="Featured Project"
                />
              </div>
            </div>
          </motion.div>
        </AnimationWrapper>
      </div>
    </main>
  );
};

export default ProjectsView;
