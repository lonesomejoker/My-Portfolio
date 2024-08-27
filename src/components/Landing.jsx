import React from "react";
import { motion } from "framer-motion";
import profile from "/assets/pp.png";
import splash from "/assets/splash.png";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { fadeIn,slideIn, staggerContainer } from "../common/Elements";


const Landing = () => {
  return (
    <motion.div variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
     className="pt-[5rem] lg:pt-[7.3rem]  bg-neutral-900" id="intro">
      <div className="container ">
        <div className="flex items-center justify-between lg:items-start" style={{ zIndex: 2 }}>
          <motion.h1 variants={fadeIn("right","tween",0.2,1)} className=" font-bold text-[22px] lg:text-[38px] ">
            Hey There,
            <br />
            I'm Shirish{" "}
          </motion.h1>
          <motion.h1 variants={fadeIn("left","tween",0.4,1)} className=" w-[47%] lg:w-auto text-sm lg:text-lg text-right">Academic Qualifications: BSc.CSIT, +2 Science</motion.h1>
        </div>

        <div className="relative flex flex-col items-center py-5 lg:flex-row lg:py-0">
          <section style={{zIndex:3}} className="flex flex-col justify-center pt-10 lg:justify-start lg:pt-0">
            <h1 className=" font-semibold text-[20px] lg:text-xl text-center lg:text-left ">Connect with me</h1>
            <section className="flex items-center mx-auto my-4 gap-x-5 lg:mx-0">
              <a href="https://www.linkedin.com/in/series-shrestha/">
                <FaLinkedin className=" text-[#0a62bc]" size={32} />
              </a>
              <a href="https://github.com/lonesomejoker">
                <FaGithub className="text-gray-200" size={32} />
              </a>
              <a href="https://www.facebook.com/lonesomejoker.100/">
                <FaFacebookSquare className=" text-[#0a67ff]" size={32} />
              </a>
            </section>
            <a
              href="mailto:shakestha@gmail.com"
              className="flex items-center text-blue-400 underline gap-x-1"
            >
              <span className="text-2xl ">
                <CgMail />
              </span>
              shakestha@gmail.com
            </a>
          </section>
          <motion.img variants={slideIn("down","tween",0.5,1)}
            src={profile}
            className=" h-[22rem] lg:h-[24rem] relative lg:-bottom-[5.5rem] lg:left-[15%]"
            style={{ zIndex: 5 }}
          />
          <motion.img variants={fadeIn("up","tween",0.4,1)}
            src={splash}
            className=" h-[24rem] lg:h-[28rem] absolute bottom-5 lg:-bottom-[5.5rem] lg:right-[22%] xl:right-[37%]"
            style={{ zIndex: 1 }}
          />
          <img src="/assets/dotted.png" alt="hash" className=" opacity-60 h-[6rem] lg:h-[12rem] absolute top-0 right-0 z-0"/>
        </div>
        <div className=" flex  justify-between font-[500] items-center">
          <motion.section className="flex items-center gap-x-3" variants={fadeIn("right","tween",0.2,1)}>
            <h1 className=" text-[20px] lg:text-[38px] font-semibold" >1</h1>
            <p className=" font-[200] lg:font-[500]">
              Year
              <br /> Experience
            </p>
          </motion.section>
          <motion.h1 className=" w-[40%] lg:w-auto font-[200] lg:font-[500] text-right " variants={fadeIn("left","tween",0.2,1)}>Frontend/React Developer</motion.h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Landing;
