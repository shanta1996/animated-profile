import React from 'react'
import { FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import '../App.css'

const Social = () => {
  return (
    <>
       <div  className='bg-slate-900 h-[200px] pt-[60px]'>
          <div id='social' className='bg-slate-800 flex justify-evenly items-center border-t-[1px] border-b-[1px] my-auto p-10 '>
          <a href="https://github.com/shanta1996" target='_blank'  className='text-white'>
          <FaGithub size={30} />
          </a>
          <a href="https://www.instagram.com/shantachaudhary34/" target='_blank'><IoLogoInstagram size={30} /></a>
          <a href="https://www.linkedin.com/in/shanta-chaudhary-24b2642b3/" target='_blank'><FaLinkedinIn size={30} /></a>
          <a href="https://x.com/shanta_c94100" target='_blank'><FaXTwitter size={30} /></a>
          </div>
          

        </div>
    </>
  )
}

export default Social