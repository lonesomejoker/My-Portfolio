import React from 'react'
import { fadeIn, staggerChildren, textVariant } from '../common/Elements'
import { motion } from 'framer-motion'

const TechStack = () => {
    const techItems=[
        {
            id:1,
            image:"/assets/htm.png",
            title:"HTML",
            color:"#ff3a00",
        },
        {
            id:2,
            image:"/assets/css.png",
            title:"CSS",
            color:""
        },
        {
            id:3,
            image:"/assets/js.png",
            title:"JavaScript",
            color:""
        },
        {
            id:4,
            image:"/assets/react.png",
            title:"React",
            color:""
        },
        {
            id:5,
            image:"/assets/tailwind.png",
            title:"Tailwind CSS",
            color:""
        },
        {
            id:6,
            image:"/assets/redux.png",
            title:"Redux Toolkit",
            color:""
        },
        {
            id:7,
            image:"/assets/RTK.png",
            title:"RTK Query",
            color:""
        },
        {
            id:8,
            image:"/assets/sass.png",
            title:"SASS/SCSS",
            color:""
        },
        {
            id:9,
            image:"/assets/ant.png",
            title:"Ant Design",
            color:""
        },
        {
            id:10,
            image:"/assets/framer.png",
            title:"Framer Motion",
            color:"#ff3a00"
        },
    ]
  return (
    <motion.div className=' bg-neutral-900' variants={staggerChildren}
     initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}>
    <div className=' container'>
        <motion.h1 variants={textVariant(0.5)}className=" font-[600] lg:text-2xl mb-[2rem] text-lg text-center lg:text-left ">My Skillset Techstacks </motion.h1>
        <div className=' grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-y-5 '>
            {
             techItems.map((item,idx)=>{
                return(
                    <motion.div key={item.id} variants={fadeIn("up", "tween", (idx+1)*0.3, 1.5)} className=' space-y-2 py-4 mx-auto '>
                        <img src={item.image} alt="tech" className=' h-[4rem] mx-auto'/>
                        <h1 className={` text-center font-[600] text-[18px] lg:text-[20px]`}>{item.title}</h1>
                    </motion.div>
                )
             })
            }
        </div>
    </div>
      
    </motion.div>
  )
}

export default TechStack
