import React from "react";
import Slider from "react-slick";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../common/Elements";

const MultipleItems = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <IoIosArrowForward color="#484848"/>,
    prevArrow: <IoIosArrowBack color="#484848" />,
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
    <motion.div
      className="container"
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <Slider {...settings}>
        {data.map((item, idx) => {
          return (
            <div className="px-1 lg:px-3 shadow-md group" key={item.id}>
              <motion.div
                className="relative"
                variants={fadeIn("up", "tween", (idx + 1) * 0.4, 1)}
              >
                <img
                  src={item.image}
                  alt="image"
                  className="h-[12rem] md:h-[11rem] w-full lg:h-[12.4rem] mx-auto rounded-xl"
                />
                <a href={item.link}>
                  <h1 className="absolute inset-0 flex items-center justify-center bg-neutral-800 bg-opacity-50 backdrop-blur-[2px] text-blue-400 text-[18px] rounded-xl translate-y-full opacity-0 duration-500 group-hover:translate-y-0 group-hover:opacity-100 font-semibold gap-x-2">
                   {item.title} <span><FaExternalLinkAlt className="text-[1.4rem]"/></span>
                  </h1>
                </a>
              </motion.div>
            </div>
          );
        })}
      </Slider>
    </motion.div>
  );
};

export default MultipleItems;
