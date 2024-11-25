import React from 'react'
import '../App.css'

const Project = () => {

  return (
    <>
      <div className='h-[200vh] w-full bg-slate-900 pt-[100px]'>
        <h2 className='text-[50px] p-4 font-semibold text-center tracking-wider rotate-[-5deg] duration-[0.4s] linear hover:rotate-[0deg]'>PROJECTS</h2>
        <div className="grid grid-cols-3 justify-items-center min-h-[100vh] w-full px-[100px]">
          <div className='card h-[400px] w-[300px] rounded-3xl border-2   overflow-hidden mt-[90px] rotate-[-5deg] duration-[0.4s] linear hover:rotate-[0deg] '>
            <a href="https://shanta1996.github.io/sid-cup-golf-clone/" target='_blank' className=''>
              <img className='back h-[80%] w-[100%] object-cover ' src="/sidcup.avif" alt="sidcupclone" />
              <div className='yellowcard font-bold text-[20px] w-[100%] h-[100%] bg-maincolor px-[50px] py-[180px] text-slate-900 hidden duration-[0.3s] ease-linear'>CLICK TO VISIT SITE</div>
              <h2 className='back h-[20%] flex items-center justify-center text-[20px] font-semibold tracking-widest '>SIDCUP-GOLF-CLONE</h2>
            </a>
          </div>
          <div className='card h-[400px] w-[300px] rounded-3xl border-2   overflow-hidden mt-[90px] rotate-[-5deg] duration-[0.4s] linear hover:rotate-[0deg]'>
            <a href="https://shanta1996.github.io/insta_love_react/" target='_blank' >
              <img className='back h-[80%] w-[100%] object-cover' src="/insta.webp" alt="intalovereact" />
              <div className='yellowcard font-bold text-[20px] w-[100%] h-[100%] bg-maincolor px-[50px] py-[180px] text-slate-900 hidden'>CLICK TO VISIT SITE</div>
              <h2 className='h-[20%] flex items-center justify-center text-[20px] font-semibold tracking-widest '>SIDCUP-GOLF-CLONE</h2>
            </a>
          </div>
          <div className='card h-[400px] w-[300px] rounded-3xl border-2   overflow-hidden mt-[90px] rotate-[-5deg] duration-[0.4s] linear hover:rotate-[0deg]'>
            <a href="https://shanta1996.github.io/story_box/" target='_blank' >
              <img className='back h-[80%] w-[100%] object-cover' src="/story.jpeg" alt="storybox" />
              <div className='yellowcard font-bold text-[20px] w-[100%] h-[100%] bg-maincolor px-[50px] py-[180px] text-slate-900 hidden'>CLICK TO VISIT SITE</div>
              <h2 className='h-[20%] flex items-center justify-center text-[20px] font-semibold tracking-widest '>SOCIAL-MEDIA-STORY</h2>
            </a>
          </div>
          <div className='card h-[400px] w-[300px] rounded-3xl border-2   overflow-hidden mt-[150px] rotate-[-5deg] duration-[0.4s] linear hover:rotate-[0deg]'>
            <a href="https://www.codehim.com/wp-content/uploads/2024/03/Elastic-Custom-Cursor-in-Vanilla-JavaScript.png" target='_blank' >
              <img className='back h-[80%] w-[100%] object-cover' src="https://www.codehim.com/wp-content/uploads/2024/03/Elastic-Custom-Cursor-in-Vanilla-JavaScript.png" alt="cursor" />
              <div className='yellowcard font-bold text-[20px] w-[100%] h-[100%] bg-maincolor px-[50px] py-[180px] text-slate-900 hidden'>CLICK TO VISIT SITE</div>
              <h2 className='h-[20%] flex items-center justify-center text-[20px] font-semibold tracking-widest '>AMIMATED-CURSOR</h2>
            </a>
          </div>
          <div className='card h-[400px] w-[300px] rounded-3xl border-2   overflow-hidden mt-[150px] rotate-[-5deg] duration-[0.4s] linear hover:rotate-[0deg]'>
            <a href="https://shanta1996.github.io/Add-remove-button/" target='_blank' >
              <img className='back h-[80%] w-[100%] object-cover' src="/addding.webp" alt="addbtn" />
              <div className='yellowcard font-bold text-[20px] w-[100%] h-[100%] bg-maincolor px-[50px] py-[180px] text-slate-900 hidden'>CLICK TO VISIT SITE</div>
              <h2 className='h-[20%] flex items-center justify-center text-[20px] font-semibold tracking-widest '>SIDCUP-GOLF-CLONE</h2>
            </a>
          </div>
          <div className='card h-[400px] w-[300px] rounded-3xl border-2   overflow-hidden mt-[150px] rotate-[-5deg] duration-[0.4s] linear hover:rotate-[0deg]'>
            <a href="https://shanta1996.github.io/analog-clock/" target='_blank' >
              <img className='back h-[80%] w-[100%] object-cover' src="/analog.png" alt="analogclock" />
              <div className='yellowcard font-bold text-[20px] w-[100%] h-[100%] bg-maincolor px-[50px] py-[180px] text-slate-900 hidden'>CLICK TO VISIT SITE</div>
              <h2 className='h-[20%] flex items-center justify-center text-[20px]font-semibold tracking-widest '>SIDCUP-GOLF-CLONE</h2>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project