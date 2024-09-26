import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import {RiJavaLine} from 'react-icons/ri'
import {RiHtml5Line} from 'react-icons/ri'
import {RiCss3Line} from 'react-icons/ri'
import {RiTailwindCssLine} from 'react-icons/ri'
import {motion} from 'framer-motion'
const icons=(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
    },
  }
})

function Technologies() {
  return (
   <div className='border-b border-neutral-800 pb-24'>
    <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-80}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Technologies</motion.h1>
    <motion.div whileInView={{x:0, opacity:1}} initial={{x:-130,opacity:0}} transition={{duration:1.5}} className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div variants={icons(2.5)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
            <a href="https://react.dev/"> <RiReactjsLine className='text-5xl text-cyan-400'/></a>
            </motion.div>

        < motion.div variants={icons(3)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
       <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"> <RiJavaLine className='text-5xl text-yellow-500'/></a> 
        </motion.div>

        <motion.div variants={icons(5)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"> <RiHtml5Line className='text-5xl text-red-800'/></a>
        </motion.div>

       <motion.div variants={icons(2)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
       <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"> <RiCss3Line className='text-5xl text-neutral-300'/></a>
        </motion.div>

        <motion.div variants={icons(6)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
         <a href="https://tailwindcss.com/"><RiTailwindCssLine className='text-5xl text-cyan-500'/></a>
        </motion.div>

    </motion.div>
   </div>
  )
}

export default Technologies
