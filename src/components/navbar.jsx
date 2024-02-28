"use client";

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import NavLink from "./navLink";
import {GiHamburgerMenu, GiSkullCrossedBones} from "react-icons/gi";
import {motion} from "framer-motion";

const links = [
  {url: "/", title: "Home"},
  {url: "/about", title: "About"},
  {url: "/portfolio", title: "Portfolio"},
  {url: "/contact", title: "Contact"},
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full shadow-none md:shadow-md flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3 font-semibold">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-neutral-700 rounded-md p-3 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Varun Singh</span>
        </Link>
      </div>
      {/* SOCIAL */}
      <div className="hidden md:flex justify-end gap-4 w-1/3">
        <Link href="https://github.com/varun-singh-0518" target="_blank">
          <Image
            src="/github.png"
            alt="github"
            width={30}
            height={30}
            className="hover:scale-110"
          />
        </Link>
        <Link href="https://twitter.com/Varun__Singh__" target="_blank">
          <Image
            src="/twitter.svg"
            alt="twitter"
            width={30}
            height={30}
            className="hover:scale-110"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/varun-singh-429885215"
          target="_blank"
        >
          <Image
            src="/linkedin.png"
            alt="linkedin"
            width={30}
            height={30}
            className="hover:scale-110"
          />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <GiSkullCrossedBones
              size={34}
              className="text-pink-400 hover:text-pink-600"
            />
          ) : (
            <GiHamburgerMenu size={34} />
          )}
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen uppercase font-semibold bg-black/95 text-pink-400 flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=" hover:text-pink-600"
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
