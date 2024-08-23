import React from 'react'
import MultipleItems from './MultipleItems'
import { fadeIn, sliderData, staggerChildren } from '../common/Elements'
import { motion } from 'framer-motion'

const Portfolio = () => {
  return (
    <motion.div className='bg-zinc-900 overflow-x-clip' variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}>
    <div className=' container '>
        <motion.h1 className=" font-[600] lg:text-2xl mb-[1rem] text-lg text-center lg:text-left" variants={fadeIn("up", "tween", 0.8, 1.5)}> My Latest Works</motion.h1>
     <MultipleItems data={sliderData}/>
    </div>
      
    </motion.div>
  )
}

export default Portfolio
