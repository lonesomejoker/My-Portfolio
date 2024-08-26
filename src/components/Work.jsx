import React from "react";
import {
  fadeIn,
  staggerContainer,
  textVariant2,
  zoomIn,
} from "../common/Elements";
import { motion } from "framer-motion";

const Work = () => {
  const workExp = [
    {
      id: 1,
      company: "Think4Tech",
      position: "React Intern",
      desc: "Designed responsive and continous webpages with reusabel components",
      date: "Mar 2024 - Aug 2024",
    },
    {
      id: 2,
      company: "Modern Diagnostic Center",
      position: "Data Entry Operator",
      desc: "Entries of data of patient and taking out final reports",
      date: "Oct 2020 - Apr 2021",
    },
  ];
  return (
    <motion.div
      className=" bg-neutral-900 overflow-x-clip"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }} id="projects"
    >
      <div className=" container">
        <motion.h1 className=" font-[600] lg:text-2xl mb-[2rem] text-lg text-center lg:text-left" variants={fadeIn("up", "tween", 1, 1.5)}>My Work Experience</motion.h1>
        <div className=" relative space-y-[2rem] text-gray-200 ">
          {workExp.map((item, idx) => {
            return (
              <motion.div
                variants={textVariant2((idx + 1) * 0.4)}
                className=" flex w-full"
                key={item.id}
              >
                <section className="flex-1">
                  <h1 className="font-[500] text-[16px] lg:text-[22px] w-[88%] lg:w-full">
                    {item.company}
                  </h1>
                  <p className=" font-[450] text-zinc-500 text-[15px] lg:text-lg">{item.date}</p>
                </section>
                <section className=" flex-1">
                  <h1 className=" font-[500] text-[16px] lg:text-[22px] ">
                    {item.position}
                  </h1>
                  <p className=" font-[450] text-zinc-500 text-[15px] lg:text-lg">{item.desc}</p>
                </section>
              </motion.div>
            );
          })}
          <motion.div
            variants={zoomIn(1, 1)}
            className=" absolute h-full flex flex-col gap-[1.5rem] left-[43.8%] lg:left-[45%] -top-[1.3rem]"
          >
            {/*animated line*/}
            <motion.div variants={fadeIn("down", "tween", 2, 1.5)}
              className="z-[1] absolute h-[92%] w-[2px] bg-right bg-repeat-y left-[47%] lg:left-[48%] rounded-[5px]"
              style={{
                backgroundImage:"linear-gradient(white 33%, rgba(255, 255, 255, 0) 0%)",
                backgroundSize: "2px 30px",
              }}
            ></motion.div>

            <div className=" flex-1 z-[2]">
              <div className=" rounded-full size-[1rem] lg:size-[1.2rem] bg-yellow-400"></div>
            </div>
            <div className=" flex-1 z-[2]">
              <div className=" rounded-full bg-emerald-400 size-[1rem] lg:size-[1.2rem] "></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
