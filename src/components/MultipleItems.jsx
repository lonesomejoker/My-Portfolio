import React from "react";
import Slider from "react-slick";
import { FaLink } from "react-icons/fa";

const MultipleItems = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <div className=" px-1 lg:px-3 shadow-md" key={item.id}>
              <img
                src={item.image}
                alt="image"
                className=" h-[6.5rem] md:h-[10rem] w-full lg:h-[18rem] mx-auto rounded-t-xl"
              />
              <a href={item.link} ><h1 className="text-blue-700 py-2 font-[500] text-[12px] lg:text-[20px] bg-neutral-800 rounded-b-xl flex items-center gap-x-2 justify-center line-clamp-1 lg:line-clamp-none">
              {item.title}<span><FaLink className=" text-blue-700 text-[0.8rem] lg:text-[1.2rem]"/></span>

              </h1>
              </a>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default MultipleItems;
