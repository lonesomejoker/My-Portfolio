import { LuPhoneOutgoing } from "react-icons/lu";
import { RiComputerLine } from "react-icons/ri";
import { CiMobile2 } from "react-icons/ci";
import { TbBrandAsana } from "react-icons/tb";

export const navItems=[
    {
        id:1,
        title:"SERVICES",
        path:"services"
    },
    {
        id:2,
        title:"EXPERIENCE",
        path:"experience"
    },
    {
        id:3,
        title:"PORTFOLIO",
        path:"portfolio"
    },
    {
        id:4,
        title:"TESTIMONIALS",
        path:"testimonial"
    },
    {
          id:5,
          title:"+977-9810113906",
          icon:<LuPhoneOutgoing
          color="limegreen"
          size={40}
          className=" bg-white text-green-400 p-[8px] rounded-[999px] shadow-md shadow-gray-400"
        />
    },
]

export const aboutItems=[
  {
     id:1,
     title:"Frontend Development",
     project:"5 projects",
     icon:<RiComputerLine className=" bg-green-500  p-2 rounded-full text-[3em]"/>
  },
  {
     id:2,
     title:"Responsive Design",
     project:"4 projects",
     icon:<CiMobile2 className=" bg-yellow-400  p-2 rounded-full text-[3em]"/>
  },
  {
     id:3,
     title:"Brand Identity",
     project:"2 projects",
     icon:<TbBrandAsana className=" bg-orange-500 p-2 rounded-full text-[3em]"/>

  },
]

export const headerVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        delay: 1,
      },
    },
  };

 
export const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
});

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});


export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "-50%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const textVariant = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 3,
      delay,
    },
  },
});
