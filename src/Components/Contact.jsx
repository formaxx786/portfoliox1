import {CONTACT} from '../Constants'
import { motion } from 'framer-motion'
function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20">
     <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-80}} transition={{duration:1.2}} className="my-10 text-center text-4xl">Get in Touch</motion.h1> 
     <div className="text-center tracking-tighter">
       <a href={`tel:${CONTACT.phoneNo}`}><motion.p className="my-4" whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-120}} transition={{duration:1}} >{CONTACT.phoneNo}</motion.p></a> 
        <a href={`mailto:${CONTACT.email}`} className='border-b'><motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:120}} transition={{duration:1}}>{CONTACT.email}</motion.p></a>
     </div>
    </div>
  )
}

export default Contact
