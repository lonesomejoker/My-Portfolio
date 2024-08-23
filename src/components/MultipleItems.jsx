import React from "react";
import Slider from "react-slick";
import { FaLink } from "react-icons/fa";
import { TbPlayerTrackNext,TbPlayerTrackPrev } from "react-icons/tb";

import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../common/Elements";

const MultipleItems = ({ data }) => { 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <TbPlayerTrackNext color="gray" />,
    prevArrow: <TbPlayerTrackPrev color="gray" />,
    responsive: [
      {
        breakpoint: 1024, // Medium screens (e.g., tablets)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // Small screens (e.g., mobile)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <motion.div className="container"
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}>
      <Slider {...settings}>
        {data.map((item,idx) => {
          return (
            <div className=" px-1 lg:px-3 shadow-md" key={item.id}>
              <motion.img variants={fadeIn("up","tween",(idx+1)*0.4,1)}
                src={item.image}
                alt="image"
                className=" h-[12rem] md:h-[11rem] w-full lg:h-[12.4rem] mx-auto rounded-t-xl"
              />
              <a href={item.link} >
              <section className=" flex items-center justify-center gap-x-3 bg-neutral-800 rounded-b-xl">
              <h1 className="text-blue-700 py-2 font-[500] text-[12px] lg:text-[20px] bg-neutral-800 line-clamp-1">
              {item.title}
              </h1>
              <h2><FaLink className=" text-blue-700 text-[0.8rem] lg:text-[1.2rem]"/></h2>
              </section>
              </a>
            </div>
          );
        })}
      </Slider>
    </motion.div>
  );
};

export default MultipleItems;
