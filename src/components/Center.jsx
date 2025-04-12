import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Center = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1.8, // Slightly longer duration for smoother effect
        ease: [0.25, 0.8, 0.25, 1], // Custom easing for smoothness
        delay: 0.2, // Slight delay for smoother trigger
      }} name="Center" className="h-screen w-[100%] m-[auto] flex justify-start py-48 px-[17%]">
      <div className="space-y-2 md:space-y-4">
        {/* Introduction Text */}
        <p className="text-[#64ffda] font-mono text-sm md:text-lg font-normal">
          Hi, my name is
        </p>

        {/* Main Heading */}
        <div className=' text-3xl sm:text-3xl md:text-5xl lg:text-7xl font-bold space-y-2 md:space-y-4 '>
          <h1 className="text-[#ccd6f6]">
            Abhinandan Daksh.
          </h1>
          <h1 className="text-[#8892b0] ">
            I build things for the web.
          </h1>

        </div>


        {/* Subtext */}
        <p className="text-[#8892b0] text-sm sm:text-base md:text-lg leading-relaxed max-w-[570px]">
          I’m a MERN stack developer dedicated to creating robust and engaging web applications.
          Using MongoDB, Express.js, React, and Node.js, I build end-to-end solutions that are both
          responsive and efficient. My focus is on delivering high-quality digital experiences with
          a seamless blend of frontend and backend expertise.
        </p>

        {/* Button */}
        <div>
          <button className="mt-8 flex justify-center items-center h-10 bg-transparent rounded border-2 px-8 py-2 lg:px-14 lg:py-6 border-[#64ffda] text-[#64ffda] font-mono text-sm sm:text-base hover:translate-y-[-2px] duration-300 hover:bg-[#64ffda] transition-all hover:text-[#0a192f]">
            <a href="mailto:Abhinandandaksh@gmail.com" aria-label="Hire me via email">
              Hire Me!
            </a>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Center;
