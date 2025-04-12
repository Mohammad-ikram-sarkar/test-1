import React from 'react'
import {motion} from 'motion/react'
import { filter } from 'motion/react-client';


export default function HeroSectionUI1() {

  const lines = [
   "Hi ,I 'm ikram ",
   "I am a web developer",

  "build modern, responsive websites with clean code and great user experience.",
 
  ];

  const container = {
    hidden: {opacity: 0},
    visible:{
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  }
  const child = {
    hidden:{opacity:0 , x:-10 ,y:20 , filter:"blur(20px)"}, 
    visible:{
      opacity:1,
      x:0,
      y:0,
      filter:'blur(0px)',
      transition: {
        duration: 0.8,
        ease:'easeOut',
      },
    }, 
  };

  return (
    <>
    <motion.div variants={container} initial="hidden" animate="visible" className='space-y-6 text-left flex justify-center items-center flex-col'>
       {lines.map((line ,index ) => (
        <motion.p className='text-[40px] font-bold bg-gradient-to-r from-slate-200 to-slate-700 text-transparent bg-clip-text' variants={child} key={index}>{line}</motion.p>
       ))}
    </motion.div>
    
    </>
  )
}
