import React from 'react'
import Logo from '../Images/Logo.webp'
import {FaLinkedin,FaGithub,FaInstagram} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import { FaFilePdf } from 'react-icons/fa'
const Navbar = () => {
  return (
    <nav className='mb-20  flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
        <img src={Logo} alt="logo" className='w-12 h-12' />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl '>
          <a href="https://drive.google.com/file/d/1F6PZaN-JhQRKxBKGXKyrNGqR2t3mM2IV/view?usp=drive_link" rel='noopener noreferrer' download><FaFilePdf/></a>
           <a href="https://www.linkedin.com/in/suneel-kumar-576617229/"><FaLinkedin/></a> 
           <a href="https://github.com/formaxx786"><FaGithub/></a> 
            <a href="https://www.instagram.com/_sun.eel_/"><FaInstagram/></a>
         <a href="https://x.com/743Suneel"><FaSquareXTwitter/></a>   
        </div>

    </nav>
 
    
  )
}

export default Navbar
