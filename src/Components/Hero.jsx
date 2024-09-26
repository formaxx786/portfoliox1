import {HERO_CONTENT} from '../Constants'
import Profile from '../Images/Profile.jpg'
import {motion} from 'framer-motion'
const Container=(delay)=>({
  hidden:{x:-110, opacity:0},
  visible:{
       x:0,
       opacity:1,
       transition:{duration:0.6, delay:delay}
  },
})
const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
      <div className='w-full lg:w-1/2'>
      <div className='flex flex-col items-center lg:items-start'>
        <motion.h1 variants={Container(0)} initial='hidden' animate='visible'  className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Suneel Kumar</motion.h1>
        <motion.span variants={Container(0.4)} initial='hidden' animate='visible' className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-light text-transparent '>Front-end Developer</motion.span>
        <motion.p variants={Container(0.8)} initial='hidden' animate='visible' className='my-2 max-w-xl py-6 font-extralight tracking-tighter'>{HERO_CONTENT}</motion.p>
      </div>
      </div>
      <div className='w-full lg:w-1/2 lg:p-8'>
        <div className='flex justify-center'>
            <motion.img initial={{x:130, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1,delay:0.8}} src={Profile} alt="Suneel" className='w-72 rounded-2xl h-96' />
        </div>
      </div>
     </div>
    </div>
  )
}

export default Hero
