"use client";
import {motion, useInView, useScroll, useTransform} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {useRef} from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-200",
    title: "Music Player",
    desc: "This project is a music player application built using Next.js. It allows users to listen to their favorite songs, create playlists, and manage their music library seamlessly. The app is designed to provide an intuitive and enjoyable music listening experience.",
    img: "/project1.png",
    repo_link: "https://github.com/varun-singh-0518/music-player",
    live_link: "https://music-player-kappa-one.vercel.app",
  },
  {
    id: 2,
    color: "from-blue-200 to-orange-200",
    title: "Movies App",
    desc: "This project is a Netflix clone built using the MERN stack. It aims to replicate the user interface of the popular streaming platform Netflix. Users can browse through a catalog of movies and TV shows, view details of each movie card hovering over them.",
    img: "/project3.png",
    repo_link: "https://github.com/varun-singh-0518/Movies-Streaming-App",
    live_link: "https://movies-streaming-app.vercel.app",
  },
  {
    id: 3,
    color: "from-orange-200 to-green-100",
    title: "Youtube Clone",
    desc: "This project is built using React that emulates the core functionalities of YouTube. It provides users with the ability to search for videos, view detailed information about each video, and watch them directly within the application.",
    img: "/project2-.png",
    repo_link: "https://github.com/varun-singh-0518/youtube-clone",
    live_link: "https://youtube-clone-azure-one.vercel.app",
  },
  {
    id: 4,
    color: "from-green-100 to-pink-200 via-red-200",
    title: "Task Manager App",
    desc: "This project is a full-stack task management app built with React, Node.js, Express, and MongoDB, featuring user authentication (signup and login) for personalized todo management.",
    img: "/project5.png",
    repo_link: "https://github.com/varun-singh-0518/task-management-frontend",
    live_link: "https://task-management-eight-blond.vercel.app",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const {scrollYProgress} = useScroll({target: ref});
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const HeadingRef = useRef();
  const isHeadingRefInView = useInView(HeadingRef, {margin: "-100px"});

  return (
    <motion.div
      className="h-full"
      initial={{y: "-200vh"}}
      animate={{y: "0%"}}
      transition={{duration: 1}}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-6xl md:text-8xl text-center">
          My Projects
          <div className="w-[90%] flex items-center flex-col">
            <div className=" flex flex-col md:flex-row gap-2 mt-10">
              <Image src="/project1.png" alt="" width={300} height={300} />
              <Image src="/project2-.png" alt="" width={300} height={300} />
            </div>
            <div className="hidden md:flex flex-row gap-2 mt-2">
              <Image src="/project4.png" alt="" width={300} height={300} />
              <Image src="/project3.png" alt="" width={300} height={300} />
            </div>
          </div>
          <p className="mt-12 text-2xl"> Swipe down to see⬇️</p>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{x}} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-black">
                  <h1 className="text-4xl font-bold md:text-7xl lg:text-5xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px] font-semibold">
                    {item.desc}
                  </p>
                  <div className="flex flex-row gap-4 mt-0 lg:-mt-6 justify-end">
                    <Link href={item.live_link} target="_blank">
                      <button className="p-2 text-sm md:text-md lg:text-lg text-white font-semibold rounded bg-neutral-700 hover:bg-neutral-900">
                        Live link
                      </button>
                    </Link>
                    <Link href={item.repo_link} target="_blank">
                      <button className="p-2 text-sm md:text-md lg:text-lg text-white font-semibold rounded bg-neutral-700 hover:bg-neutral-900">
                        GitHub Repo
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-gradient-to-br from-slate-200 via-green-100 to-pink-200">
        <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold">
          Want to Contact Me ?
        </h1>
        <div ref={HeadingRef} className="relative">
          <motion.h1
            initial={{x: "-160vh", y: "0"}}
            animate={isHeadingRefInView ? {x: "0px", y: "50px"} : {}}
            transition={{duration: 2, ease: "easeOut"}}
            className="w-64 h-64 md:w-[500px] md:h-[500px] text-2xl md:text-3xl lg:text-5xl"
          >
            Front-end Developer and UI Designer
          </motion.h1>
          <Link
            href="/contact"
            className="w-20 h-20 mt-36 lg:mt-52 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
