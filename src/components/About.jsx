import { useGSAP } from '@gsap/react'
import '../App.css'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { PiHandWavingBold   } from "react-icons/pi";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // const ref=useRef()
  // useGSAP(()=>{
  //   gsap.from(ref.current,{
  //     x:-750,
  //     duration:2,
  //     repeat:-1,
  //     scrollTrigger:{
  //       trigger:'body',
  //       scroller:'.scroll-element',
  //       markers:true,
  //       start:'top 50%',
  //       end:'top 60%',
  //       scrub:2,
  //       pin:true
  //     }

  //   })
  // })

  return (
    <>
       <div className='bg-slate-900 h-[100vh] w-full flex items-center justify-around pt-[150px] px-[50px] overflow-hidden relative'>
          {/* <img className='h-[60%] w-[20%] object-cover bg-center rounded-2xl' src="/dolly.jpg" alt="" /> */}
          <div className=' profile w-[300px] h-[400px] rounded-2xl overflow-hidden'>
            <div className='hello h-full w-full bg-[#D4AF37] text-slate-900 font-bold flex flex-col items-center justify-center opacity-0 duration-[0.3s] ease-linear'>
              <div className='text-[30px]'>
              <PiHandWavingBold   />
              </div>
           
              <p className='text-[30px] tracking-wider'>HELLO THERE</p>
            </div>
          </div>
          <div className='scroll-element w-[35%] relative'>
          <h2 className='text-[35px] font-bold mb-4'>About</h2>
          <p className='border-2 shadow-2xl shadow-slate-800 h-[100%] text-[18px] tracking-wide py-2 px-4 rounded-2xl'>As an enthusiastic and motivated IT Developer, I am eager to apply my knowledge of programming languages, problem-solving skills, and passion for technology in a dynamic development environment. I am proficient in languages such as HTML, CSS, JavaScript, and Python, and have experience with web development frameworks and database management. Always committed to continuous learning and improvement, I am looking to contribute to a collaborative team and grow my skills in software development.</p>
          </div>
          
        </div>
    </>
  )
}

export default About