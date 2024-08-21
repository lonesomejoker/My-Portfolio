import React from 'react'
import { aboutItems, fadeIn, projectNums, staggerContainer, textVariant } from '../common/Elements'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }} className='  lg:py-7 py-4 bg-zinc-900'>
      <div className=' flex flex-col lg:gap-y-0 gap-y-4 lg:grid grid-cols-2 px-5 lg:px-28 items-center'>
      <div className=' space-y-4'>
        {
          aboutItems.map((item,idx)=>{
            return(
                <motion.div variants={fadeIn("right","tween",(idx+1)*0.6,1)} className=' px-3 lg:px-4 py-4 lg:py-6 flex items-center gap-x-5 border-2 border-stone-800 rounded-tr-2xl rounded-bl-2xl w-full lg:w-[80%] mx-auto lg:mx-0' key={item.id}>
                  <h1 className=''>{item.icon}</h1>
                  <section className=' space-y-2.5'>
                  <h1 className=' font-[500] text-[18px] lg:text-[20px] '>{item.title}</h1>
                  <p className=' font-[450] text-stone-400'>{item.project}</p>
                  </section>
                </motion.div>
            )
          })
        }
      </div>
      <motion.div variants={textVariant(0.5)} className=' font-[450] mt-4 lg:mt-0 '>
        <h1 className=' text-[28px] lg:text-[38px] font-[550]'>What do I do?</h1>
        <div className=' w-[98%] my-5 text-justify lg:text-left'>
        <p>Officia officia et nulla proident consequat. Velit mollit esse qui quis ipsum laborum esse quis commodo aliqua est commodo. Ipsum ipsum aliquip eiusmod excepteur magna occaecat. Deserunt eu nulla ullamco Lorem proident.</p>
        <p className=' mt-3'>Eu aliquip nisi et nulla. Cupidatat laborum consectetur consectetur veniam nulla sint dolor ea non dolor quis.</p>
        </div>

        {/* <motion.div className=' flex gap-x-3 justify-center lg:justify-start w-[80%]'>
        <section  className=' border-[2px] border-stone-800 px-1.5 lg:px-3 py-3 rounded-tr-2xl rounded-bl-2xl'>
            <h1 className=' font-[400] lg:font-600 text-[18px] lg:text-[32px] text-center'>8+ </h1>
            <p className=' text-center text-[12px]'>Projects Completed</p>
        </section>
        <section className=' border-[2px] border-stone-800 px-1.5 lg:px-3 py-3 rounded-tl-2xl rounded-br-2xl'>
        <h1 className='font-[400] lg:font-600 text-[18px] lg:text-[32px] text-center'>1+ </h1>
        <p className=' text-center text-[12px]'>Company worked</p>
        </section>
        </motion.div> */}
        

      </motion.div>
      </div>
    </motion.div>
  )
}

export default About;
