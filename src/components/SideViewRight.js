import React from 'react'
import  {email}  from '../config/config';


const SideViewRight = () => {
  return (
    <div className="hidden fixed bottom-0 right-12 md:flex lg:flex flex-col items-center text-[#a8b2d1] bg-transparent">
      <a href={`mailto:${email}`} className=' flex justify-center items-center  hover:-translate-y-[2px] duration-300 hover:text-[#64ffda] transition-all mb-12  font-mono tracking-[0.1em] [writing-mode:vertical-rl] text-[15px] '>{email}</a>
      <div className="w-[2px] h-[90px] bg-[#a8b2d1]"></div>
    </div>
  )
}

export default SideViewRight

