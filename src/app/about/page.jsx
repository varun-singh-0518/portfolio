"use client";

import {motion, useInView} from "framer-motion";
import Image from "next/image";
import {useRef} from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, {margin: "-100px"});

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, {margin: "-100px"});

  return (
    <motion.div
      className="h-full"
      initial={{y: "-200vh"}}
      animate={{y: "0%"}}
      transition={{duration: 1}}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 mt-1 lg:-mt-24 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/profile.png"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover hover:scale-105"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
              ABOUT ME🚀
            </h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Hello, My name is Varun. I&apos;m passionate web developer, I
              specialize in crafting cutting-edge digital experiences that
              seamlessly blend creativity with functionality. With a keen focus
              on user satisfaction, I leverage the power of JavaScript to bring
              ideas to life, both on the frontend and backend.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic font-semibold">
              Within my portfolio, you&apos;ll find a diverse range of projects
              showcasing my expertise in JavaScript development. From
              captivating frontend interfaces that engage and delight users to
              robust backend systems that ensure seamless performance and
              scalability.
            </span>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{x: "-300px"}}
              animate={isSkillRefInView ? {x: 0} : {}}
              transition={{delay: 0.2}}
              className="font-bold text-3xl md:text-4xl lg:text-5xl"
            >
              SKILLS💻
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{x: "-300px"}}
              animate={isSkillRefInView ? {x: 0} : {}}
              className="flex gap-4 flex-wrap"
            >
              <Image
                src="/html.svg"
                alt="HTML"
                width={50}
                height={40}
                className=" hover:scale-110"
              />
              <Image
                src="/css.svg"
                alt="CSS"
                width={50}
                height={40}
                className=" hover:scale-110"
              />
              <Image
                src="/js.svg"
                alt="JavaScript"
                width={50}
                height={40}
                className=" hover:scale-110"
              />
              <Image
                src="/ts.svg"
                alt="TypeScript"
                width={50}
                height={40}
                className=" hover:scale-110"
              />
              <Image
                src="/react.svg"
                alt="React"
                width={50}
                height={40}
                className=" hover:scale-110"
              />
              <Image
                src="/redux.svg"
                alt="Redux"
                width={50}
                height={40}
                className=" hover:scale-110"
              />
              <Image
                src="/next.svg"
                alt="NextJS"
                width={50}
                height={40}
                className=" hover:scale-110"
              />
              <Image
                src="/scss.svg"
                alt="SCSS"
                width={50}
                height={50}
                className=" hover:scale-110"
              />
              <Image
                src="/tailwind.svg"
                alt="TailwindCSS"
                width={50}
                height={50}
                className=" hover:scale-110"
              />
              <Image
                src="/bootstrap.svg"
                alt="Bootstrap"
                width={50}
                height={50}
                className=" hover:scale-110"
              />
              <Image
                src="/mongo.svg"
                alt="MongoDB"
                width={60}
                height={60}
                className=" hover:scale-110"
              />
              <Image
                src="/node.svg"
                alt="NodeJS"
                width={50}
                height={40}
                className=" hover:scale-110"
              />
              <Image
                src="/expressjs.png"
                alt="ExpressJS"
                width={50}
                height={40}
                className=" hover:scale-110"
              />
              <Image
                src="/framer-motion.svg"
                alt="Framer Motion"
                width={50}
                height={50}
                className=" hover:scale-110"
              />
              <Image
                src="/firebase.svg"
                alt="Firebase"
                width={50}
                height={50}
                className=" hover:scale-110"
              />
              <Image
                src="/git.svg"
                alt="Git"
                width={50}
                height={50}
                className=" hover:scale-110"
              />
              <Image
                src="/github.svg"
                alt="Github"
                width={50}
                height={50}
                className=" hover:scale-110"
              />
            </motion.div>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex w-full lg:w-[130%] flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{x: "-300px"}}
              animate={isExperienceRefInView ? {x: "0"} : {}}
              transition={{delay: 0.2}}
              className="font-bold text-3xl md:text-4xl lg:text-5xl"
            >
              EDUCATION🎓
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{x: "-300px"}}
              animate={isExperienceRefInView ? {x: "0"} : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 text-2xl font-semibold rounded-b-lg rounded-s-lg">
                    B.Tech
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic font-semibold">
                    Ajay Kumar Garg Engineering College, Ghaziabad
                    <p className="mt-2 font-medium font-serif">
                      Completed my graduaton in Civil Engineering with an
                      aggregate of 70.4%
                    </p>
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2019 - 2023
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 text-2xl font-semibold rounded-b-lg rounded-s-lg">
                    Class XII
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic font-semibold">
                    K.C.M. School, Moradabad
                    <p className="mt-2 font-medium font-serif">Scored 70.4%</p>
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2018 - 2019
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 text-2xl font-semibold rounded-b-lg rounded-s-lg">
                    Class X
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic font-semibold">
                    K.C.M. School, Moradabad
                    <p className="mt-2 font-medium font-serif">Scored 85.6%</p>
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2016 - 2017
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:flex w-1/3 justify-center items-center sticky top-0 z-30 xl:w-1/2">
          <Image src="/react.svg" alt="photo" width={600} height={600} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
