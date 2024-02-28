"use client";

import Image from "next/image";
import {motion} from "framer-motion";
import Link from "next/link";
import AboutPage from "./about/page";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{y: "-200vh"}}
      animate={{y: "0%"}}
      transition={{duration: 1}}
    >
      <div className="h-full flex gap-1 lg:gap-12 flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-2/5 lg:h-[85%] mt-1 md:mt-8 rounded-2xl overflow-hidden lg:w-1/2 relative">
          <Image
            src="/photo.jpg"
            alt="photo"
            fill
            className="object-contain lg:object-cover"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-3/5 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-semibold text-center font-serif">
            Hi👋🏼, I&apos;m{" "}
            <motion.span
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 4}}
              className="text-pink-600"
            >
              Varun Singh
            </motion.span>
          </h1>
          {/* DESC */}
          <p className="md:text-xl line-clamp-5 md:line-clamp-6 font-serif font-semibold">
            Welcome to my portfolio! I&apos;m a web developer dedicated to
            crafting innovative and user-friendly digital experiences. I prefer
            JavaScript for frontend and backend development.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-pink-700 bg-pink-700 text-white hover:bg-pink-800 font-semibold">
              Download Resume
            </button>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 bg-neutral-900 hover:bg-neutral-700 text-white ring-black font-semibold">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
