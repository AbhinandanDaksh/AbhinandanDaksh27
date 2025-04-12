import React from 'react'
import  {email}  from '../config/config';
import { motion } from 'framer-motion';


const SideViewRight = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      duration: 1.4,
      ease: [0.25, 0.8, 0.25, 1],
      delay: 0.2,
    }} className="hidden fixed bottom-0 right-12 md:flex lg:flex flex-col items-center text-[#a8b2d1] bg-transparent">
      <a href={`mailto:${email}`}  rel="noopener noreferrer" className=' flex justify-center items-center  hover:-translate-y-[2px] duration-300 hover:text-[#64ffda] transition-all mb-12  font-mono tracking-[0.1em] [writing-mode:vertical-rl] text-[15px] '>{email}</a>
      <div className="w-[2px] h-[90px] bg-[#a8b2d1]"></div>
    </motion.div>
  )
}

export default SideViewRight

