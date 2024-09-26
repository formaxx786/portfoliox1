import React from 'react'
import { motion } from 'framer-motion'
function Experiences() {
  return (
    <div className=' border-b border-neutral-900 pb-4'>
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-80}} transition={{duration:1.2}}  className='my-20 text-center text-4xl'>Experience</motion.h2>
      
    </div>
  )
}

export default Experiences
