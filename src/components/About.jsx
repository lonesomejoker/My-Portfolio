import React from "react";
import {
  aboutItems,
  fadeIn,
  staggerContainer,
  textVariant,
} from "../common/Elements";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      id="about"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className=" pt-[1rem] lg:pt-[3rem] pb-[2rem] bg-zinc-900 "
    >
      <div className=" flex flex-col lg:gap-y-0 gap-y-4 lg:grid relative grid-cols-2 container items-center overflow-x-clip z-[5]">
        <div className=" space-y-4 z-[3]">
        <motion.h1 variants={textVariant(0.5)} className="text-[20px] lg:text-[28px] font-semibold text-center lg:text-left">Personal + Official Projects</motion.h1>

          {aboutItems.map((item, idx) => {
            return (
              <motion.div
                variants={fadeIn("right", "tween", (idx + 1) * 0.3, 1)}
                className=" px-3 lg:px-4 py-4 duration-700 lg:py-6 flex items-center gap-x-5 hover:bg-purple-700 bg-gradient-to-r from-[#7d42bb] hover:shadow-md hover:shadow-gray-400 rounded-tr-2xl rounded-bl-2xl w-full lg:w-[80%] mx-auto text-white lg:mx-0"
                key={item.id}
              >
                <h1 className="">{item.icon}</h1>
                <section className=" space-y-2.5">
                  <h1 className=" font-[500] text-[18px] lg:text-[20px] ">
                    {item.title}
                  </h1>
                  <p className=" font-[450] text-zinc-400">{item.project}</p>
                </section>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          variants={textVariant(0.5)}
          className=" font-[450] mt-4 lg:mt-0 relative z-[4] "
        >
          <h1 className=" text-[26px] lg:text-[34px] font-[550]">About Me</h1>
          <div className="my-5 text-gray-300 ">
            <p>
              As a Frontend Developer, I specialize in
              creating highly-responsive and scalable web applications. With a
              Bachelor’s degree in Computer Science and 6 months of hands-on
              experience on 5+ projects.I have a strong background in building
              reusable code and libraries and optimizing applications for
              maximum speed and scalability.
            </p>
            <p className="pt-3 ">
              {" "}
              I am eager to contribute to innovative projects by developing
              well-structured front-end architecture and collaborating with
              engineering teams to enhance user experience and performance.
            </p>
          </div>

          <motion.div className="flex justify-center text-gray-300 gap-x-3 lg:justify-start">
            <section className=" bg-gradient-to-r from-[#7d42bb] px-3 py-3 rounded-tr-2xl rounded-bl-2xl">
              <h1 className=" font-[400] lg:font-600 text-[28px] lg:text-[32px] text-center">
                9+{" "}
              </h1>
              <p className="text-center ">Projects Completed</p>
            </section>
            <section className=" border-[2px] bg-gradient-to-r from-[#7d42bb] border-stone-800 px-1.5 lg:px-3 py-3 rounded-tl-2xl rounded-br-2xl">
              <h1 className="font-[400] lg:font-600 text-[28px] lg:text-[32px] text-center">
                1+{" "}
              </h1>
              <p className="text-center ">Company worked</p>
            </section>
          </motion.div>
        </motion.div>
        <img
          src="/assets/digital.png"
          alt="digital"
          className=" absolute z-0 h-[10rem]  opacity-20 lg:opacity-60 brightness-50 top-0 right-0"
        />
        <img
          src="/assets/circuit.png"
          alt="digital"
          className=" absolute z-0 h-[12rem] opacity-10 lg:opacity-75 brightness-50 bottom-0 right-0"
        />
      </div>
    </motion.div>
  );
};

export default About;
