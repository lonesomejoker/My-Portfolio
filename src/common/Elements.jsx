import { LuPhoneOutgoing } from "react-icons/lu";
import { RiComputerLine } from "react-icons/ri";
import { CiMobile2 } from "react-icons/ci";
import { TbBrandAsana } from "react-icons/tb";

export const navItems=[
    {
        id:1,
        title:"HOME",
        path:"intro"
    },
    {
        id:2,
        title:"ABOUT ME",
        path:"about"
    },
    {
        id:3,
        title:"PROJECTS",
        path:"projects"
    },
    {
        id:4,
        title:"SKILLSET",
        path:"skills"
    },
    {
          id:5,
          title:"9810113906",
          icon:<LuPhoneOutgoing
          color="limegreen"
          className=" text-[1.9rem] bg-gray-700 text-green-400 p-[3px] rounded-tl-lg rounded-br-lg shadow-md shadow-green-600"
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

export const sliderData=[
  {
    id:1,
    title:"Online Shoe Store",
    link:"https://online-shoe-store.netlify.app/",
    image:"/assets/shoe-store.png"
  },
  {
    id:2,
    title:"Hotel Site",
    link:"https://hotel-wpg.netlify.app/",
    image:"/assets/hotel-site.png"
  },
  {
    id:3,
    title:"Movie Streaming Website",
    link:"https://streammovieweb.netlify.app/",
    image:"/assets/movie-site.png"
  },
  {
    id:4,
    title:"Plant Shop",
    link:"https://plant-shop-vurilo.netlify.app/",
    image:"/assets/plant-shop.png"
  }
]

export const projectNums=[
  {
    id:1,
    num:"8+",
    desc:"Projects Completed"
  },
  {
    id:2,
    num:"8+",
    desc:"Projects Completed"
  }
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

export const staggerChildren = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

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

export const textVariant2 = (delay) =>({
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
      delay
    },
  },
});

export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});