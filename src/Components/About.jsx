import Profile from '../Images/Profile.jpg'
import {ABOUT_TEXT} from '../Constants'
import {motion} from 'framer-motion'
function About() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-80}} transition={{duration:1.2}} className='my-20 text-center text-4xl '>About <span className='text-neutral-500'>Me</span> </motion.h1>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8'>
            <motion.div whileInView={{opacity:1,x:0}} initial={{x:-130,opacity:0}} transition={{duration:0.6}} className='flex items-center justify-center'>
            <img src={Profile} alt="Suneel" className='w-72 rounded-2xl h-96' />
            </motion.div>
           
        </div>
        <div className='w-full lg:w-1/2'>
            <motion.div className='flex justify-center lg:justify-start'whileInView={{opacity:1,x:0}} initial={{x:130,opacity:0}} transition={{duration:0.6}}><p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}
  
            </p>
            
            </motion.div>
            </div>
            </div>
    </div>
  )
}

export default About
