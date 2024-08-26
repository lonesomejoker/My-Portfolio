import React from "react";
import { fadeIn, staggerChildren, textVariant } from "../common/Elements";
import { motion } from "framer-motion";

const TechStack = () => {
  const techItems = [
    {
      id: 1,
      image: "/assets/htm.png",
      title: "HTML",
      color: "#ff7816",
      height: "4rem",
    },
    {
      id: 2,
      image: "/assets/css.png",
      title: "CSS",
      color: "#2062af",
      height: "4.3rem",
    },
    {
      id: 3,
      image: "/assets/js.png",
      title: "JavaScript",
      color: "#f0bb1d",
      height: "4.1rem",
    },
    {
      id: 4,
      image: "/assets/react.png",
      title: "React",
      color: "#50c2e1",
      height: "4.5rem",
    },
    {
      id: 5,
      image: "/assets/tailwind.png",
      title: "Tailwind CSS",
      color: "#00b9d8",
      height: "3.1rem",
    },
    {
      id: 6,
      image: "/assets/redux.png",
      title: "Redux Toolkit",
      color: "#7d42bb",
      height: "4rem",
    },
    {
      id: 7,
      image: "/assets/redux.png",
      title: "RTK Query",
      color: "#7d42bb",
      height: "4rem",
    },
    {
      id: 8,
      image: "/assets/sass.png",
      title: "SASS",
      color: "#cb6698",
      height: "4.2rem",
    },
    {
      id: 9,
      image: "/assets/ant.png",
      title: "Ant Design",
      color: "#0d6bff",
      height: "4rem",
    },
    {
      id: 10,
      image: "/assets/framer.png",
      title: "Framer Motion",
      color: "#ef01b8",
      height: "4.2rem",
    },
  ];

  return (
    <motion.div
      className="bg-neutral-900 shadow-lg shadow-stone-700 z-[3]"
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }} id="skills"
    >
      <div className="container z-[4] relative">
        <motion.h1
          variants={textVariant(0.5)}
          className="font-[600] lg:text-2xl mb-[2rem] text-lg text-center lg:text-left flex items-center justify-between opacity-60"
        >
          My Techstack Skillsets
        </motion.h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-y-5">
          {techItems.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                variants={fadeIn("up", "tween", (idx + 1) * 0.3, 1.5)}
                className="space-y-2 py-4 mx-auto content-center z-[3] hover:scale-125 duration-500"
              >
                <img 
                  src={item.image}
                  alt={item.title}
                  style={{ height: item.height }}
                  className="mx-auto hover:scale-110 duration-500"
                />
                <h1
                  style={{ color: item.color }}
                  className="text-center font-[600] text-[18px] lg:text-[20px]"
                >
                  {item.title}
                </h1>
              </motion.div>
            );
          })}
        </div>
        <img
          src="/assets/tech-stack.png"
          className=" absolute z-0 h-[60%] top-[25%] left-[0.2%]  md:left-[20%] lg:left-[37%] opacity-10 brightness-75"
        />
      </div>
    </motion.div>
  );
};

export default TechStack;
