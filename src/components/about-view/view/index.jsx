"use client";

import { useEffect, useMemo, useRef } from "react";
import AnimationWrapper from "../../view/animation-wrapper/index";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import SkillsView from "../skills-view";
import ExperienceView from "../experience-view";
import EducationView from "../education-view";
import ProfilAbout from "../../../../public/images/profil.png"

function variants() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

export default function AboutView({ data }) {
  console.log(data, "AboutView");

  const setVariants = useMemo(() => variants(), []);

  return (
    <main id="about" className="">
      <div className="max-w-screen mt-12  justify-center items-center flex flex-col mx-2 md:mx-8">
        <AnimationWrapper>
          <motion.div
            className={
              "pt-10 grid w-full grid-cols-1 md:grid-cols-8 gap-6 md:gap-16 mt-6 md:mt-24 px-4 md:px-20"
            }
            variants={setVariants}
          >

            <div className="md:col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-pink-600">
                Biography
              </h2>
              <p className="font-medium my-4">
                Hello, I&apos;m Nanda, an experienced software engineer with 3 months practical experience in software development. I&apos;m passionate about creating efficient and user-friendly digital solutions, seeing software engineering as a means to solve real-world problems and provide seamless user-centric experiences.
              </p>

              <p className="font-medium my-4">
                I focus more on the appearance of the website or Frond End Developer, because I prefer to design a good appearance so that users feel comfortable when using a website that I create.
              </p>

            </div>
            <div className="md:col-span-3 relative h-max rounded-2xl border-2 border-solid border-pink-600 bg-white p-4 md:p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-pink-600" />
              <Image
                src={ProfilAbout}
                width={150}
                height={150}
                alt="Ipung"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="md:col-span-2 flex flex-col items-center md:items-end justify-between">
              <div className="flex flex-col items-center md:items-end justify-center">
                <span className="inline-block text-4xl font-bold">
                  <AnimatedNumbers value={0} />+
                </span>
                <h2 className="text-lg font-bold capitalize text-pink-600">
                  Satisfied Clients
                </h2>
              </div>

              <div className="flex flex-col items-center md:items-end justify-center mt-6 md:mt-0">
                <span className="inline-block text-4xl font-bold">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-lg font-bold capitalize text-pink-600">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-center md:items-end justify-center mt-6 md:mt-0">
                <span className="inline-block text-4xl font-bold">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-lg font-bold capitalize text-pink-600">
                  Months of Experience
                </h2>
              </div>
            </div>

          </motion.div>
          <SkillsView />
          <ExperienceView />
          <EducationView />
        </AnimationWrapper>
      </div>
    </main>
  );
}