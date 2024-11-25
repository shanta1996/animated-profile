import { useState, useEffect, useRef } from 'react';
import Title from './components/Title'
import About from './components/About'
import Project from './components/Project'
import './App.css'
import { motion } from "motion/react"


import Social from './components/Social'

const App = () => {

const[cursor,setCursor]=useState({x:0,y:0})
 console.log(cursor)

useEffect(()=>{
  const mouseMove=e=>{
    setCursor({
      x:e.clientX,
      y:e.clientY
    })
  }
window.addEventListener("mousemove",mouseMove)
return()=>{
  window.removeEventListener("mousemove",mouseMove)
}
},[])
const variants={
  default:{
    x:cursor.x,
    y:cursor.y
  }
}

  return (
    <>
      <div id='maindiv' className='h-screen w-full bg-slate-900 text-white'>
      <motion.div variants={variants} animate="default" id='cursor' className='fixed z-10 duration-[0.2s] linear h-[25px] w-[25px] bg-[#D4AF37] rounded-[50%]'></motion.div>
        <Title />
        <About />
        <Project/>
        <Social/>

     
   


      </div>
    </>
  )
}

export default App