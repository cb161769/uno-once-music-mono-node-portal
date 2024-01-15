import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerLine = `h-[3px] w-6 my-[2px] rounded-full  transition ease transform duration-300`;

  const nav = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Professional Community",
      path: "/professional-community",
    },
    {
      name: "About US",
      path: "/about-uS",
    },
    {
      name: "Contact US",
      path: "/Contact-uS",
    },
  ];
  const variants = {
    open: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 * index,
        staggerChildren: 0.1,
      },
    }),
    closed: (index: number) => ({
      opacity: 0,
      x: "-100%",
      transition: {
        delay: 0.1 * index,
        staggerDirection: -1,
      },
    }),
  };

  return (
    <>
      <button
        className="flex z-50  lg:hidden flex-col h-12 w-12 absolute right-5 top-5 rounded justify-center items-center group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`${hamburgerLine} ${
            isOpen
              ? "rotate-45 translate-y-[7px] bg-white "
              : "bg-primary group-hover:bg-white"
          }`}
        />
        <div
          className={`${hamburgerLine} ${
            isOpen
              ? "opacity-0 bg-white"
              : "bg-primary group-hover:bg-white h-[3.2px]"
          }`}
        />
        <div
          className={`${hamburgerLine} ${
            isOpen
              ? "-rotate-45 -translate-y-[7px] bg-white  "
              : "bg-primary group-hover:bg-white"
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={
          isOpen
            ? { opacity: 1, pointerEvents: "auto" }
            : { opacity: 0, pointerEvents: "none" }
        }
        className=" transition-all duration-500 absolute inset-0 bg-black/30 backdrop-blur-sm flex z-40 "
      >
        <nav className=" p-5 pt-32">
          <ul>
            {nav.map((item, index) => (
              <motion.li
                custom={index}
                variants={variants}
                animate={isOpen ? "open" : "closed"}
                className=" hover:text-primary text-4xl pt-5 font-semibold uppercase transition-colors"
                key={item.name}
              >
                <Link to={item.path}>{item.name}</Link>
              </motion.li>
            ))}
          </ul>
          <motion.div
            custom={4}
            variants={variants}
            animate={isOpen ? "open" : "closed"}
            className="mt-20 flex gap-x-4"
          >
            <Button>
              <Link to="/log-in">Log In</Link>
            </Button>
            <Button>
              <Link to="/sign-up">Sign Up</Link>
            </Button>
          </motion.div>
        </nav>
      </motion.div>
    </>
  );
};

export default MobileMenu;
