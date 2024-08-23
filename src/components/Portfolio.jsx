import React from 'react'
import MultipleItems from './MultipleItems'
import { sliderData } from '../common/Elements'

const Portfolio = () => {
  return (
    <div className='bg-zinc-900 overflow-x-clip'>
    <div className=' container '>
        <h1 className=" font-[600] lg:text-2xl mb-[1rem] text-lg text-center lg:text-left">Some of My Works...</h1>
     <MultipleItems data={sliderData}/>
    </div>
      
    </div>
  )
}

export default Portfolio
