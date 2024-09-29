import React from 'react'
import { motion } from 'framer-motion'
import { PROJECTS } from '../Constants'
function Projects() {
  return (
    <div className=' border-b border-neutral-900 pb-4'>
         <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-80}} transition={{duration:1.2}} className='my-20 text-center text-4xl'>Projects</motion.h2>
    <div >{PROJECTS.map((project,index)=>(
           <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
             <a href="https://to-do-manager-one.vercel.app/"><motion.img whileInView={{opacity:1,x:0}} initial={{opacity:0, x:-130}} transition={{duration:1.3}} src={project.image} alt='project.title' className='w-[200px] h-[230px] rounded-lg'/></a>
           </div>
      <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0, x:130}} transition={{duration:1.3}} className='w-full max-w-xl lg:w-3/4'>
        <h6 className='mb-2 font-semibold '>{project.title}</h6>
        <p className='mb-4 text-neutral-400'>{project.description}</p>
        {project.technologies.map((tech,index)=>(
          <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-red-700'>{tech}</span>
        ))}
        </motion.div>
        </div>
    ))}</div>
</div>
  )
}

export default Projects
