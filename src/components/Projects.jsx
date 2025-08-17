import React from "react";
import image from "../Images/VediCode.png";
import jas from "../Images/jas.png";
import weatherApp from "../Images/weatherApp.png";
import Connectify from "../Images/Connectify.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


// Project data array

const Projects = () => {
  return (
    <div name="Projects" className="h-auto bg-[#0a192f] flex items-center justify-center px-4 md:px-[10%] pb-20 pt-10 md:pb-20 lg:pb-28 xl:pb-36">
      <div className="container mx-auto px-4 lg:px-16 xl:px-24">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          <div className="flex-1 text-[#ccd6f6] space-y-20 relative">
            {/* Heading */}
            <div className="flex items-center font-mono text-xl md:text-2xl font-bold">
              <span className="text-[#64ffda]">03.</span>
              <h1 className="ml-2 text-xl md:text-3xl lg:text-4xl whitespace-nowrap">
                Some Things I’ve Built
              </h1>
              <div className="flex-grow h-[1px] bg-[#233554] ml-4"></div>
            </div>
            {/* Description Section */}

            {/* Project 01 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20 pb-48 sm:pb-10 md:pb-10 lg:pb-10 relative"
            >

              {/* Image Section */}
              <div
                className="relative">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative group w-[85%] lg:w-[700px] mx-auto"
                >
                  {/* Border Box */}
                  <div className="absolute top-4 -left-6 hidden lg:block w-full h-[380px] border-2 border-[#64ffda] transition-transform duration-300 ease-in-out group-hover:-translate-x-2 group-hover:translate-y-2"></div>
                  {/* Image */}
                  <img
                    src={image}
                    alt="VediCode"
                    className="relative h-[250px] lg:h-[370px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:-translate-y-2"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#64ffda] opacity-100 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-300"></div>
                </motion.div>
              </div>

              {/* Text Section */}
              <div
                className={`
                absolute max-w-[600px] lg:ml-[45%]
                bg-[#112240] lg:bg-transparent opacity-95 lg:opacity-100
                text-center lg:text-right
           
              `}
              >
                <div className="flex relative lg:text-right text-center bg-[#112240] lg:bg-transparent opacity-95 lg:opacity-100 mt-12">
                  <div className="flex flex-col px-6 lg:px-0">
                    <p className="text-[#64ffda]">Featured Project</p>
                    <h1 className="text-3xl font-semibold text-[#ccd6f6] hover:text-[#64ffda] mt-4">
                      VediCode
                    </h1>
                    <div className="h-auto bg-[#112240] mt-6 shadow-md lg:shadow-[#020d1eb2]">
                      <p className="text-[#8892b0] p-6">
                        <span className="text-[#64ffda]">VediCode</span> is a
                        comprehensive educational platform developed with the{" "}
                        <span className="text-[#64ffda]">MERN stack</span>,
                        offering interactive{" "}
                        <span className="text-[#64ffda]">coding tutorials</span>
                        ,{" "}
                        <span className="text-[#64ffda]">
                          progress tracking
                        </span>
                        , and a{" "}
                        <span className="text-[#64ffda]">user-friendly</span>{" "}
                        interface to enhance learning experiences.
                      </p>
                    </div>
                    <div className=" text-[#8892b0] gap-4 flex lg:justify-end justify-center whitespace-break-spaces">
                      <h1>React.js Node.js Express.js MongoDB Razorpay</h1>
                    </div>
                    <div className="text-[#8892b0] gap-4 flex lg:justify-end justify-center items-center mt-4 mb-2">
                      {/* Uncomment if needed */}
                      <p className=" hover:text-[#64ffda] text-[22px] ">
                        <Link to="https://github.com/AbhinandanDaksh"><FiGithub /></Link>

                      </p>
                      <p className=" hover:text-[#64ffda] text-xl">
                        <Link to="https://github.com/AbhinandanDaksh"><FaExternalLinkAlt /></Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Project 02*/}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }} className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 pb-56 sm:pb-10  md:pb-10 lg:pb-10 relative">
              {/* Image Section */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative group w-[85%] lg:w-[700px] mx-auto ">
                  {/* Border Box */}
                  <div className="absolute  top-4 left-6 hidden lg:block w-full h-[380px] border-2 border-[#64ffda] transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:translate-y-2"></div>
                  {/* Image */}
                  <img
                    src={Connectify}
                    alt="Connectify"
                    className="relative h-[250px] lg:h-[370px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:-translate-x-2 group-hover:-translate-y-2"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#64ffda] opacity-100 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-300"></div>
                </motion.div>
              </div>

              {/* Text Section */}
              <div
                className={`
                absolute max-w-[600px] lg:mr-[45%]
                bg-[#112240] lg:bg-transparent opacity-95 lg:opacity-100
                text-center lg:text-right
           
              `}
              >
                <div className="flex relative lg:text-left text-center bg-[#112240] lg:bg-transparent opacity-95 lg:opacity-100 mt-12">
                  <div className="flex flex-col px-6 lg:px-0">
                    <p className="text-[#64ffda]">Featured Project</p>
                    <h1 className="text-3xl font-semibold text-[#ccd6f6] hover:text-[#64ffda] mt-4">
                      Conectify
                    </h1>
                    <div className="h-auto bg-[#112240] mt-6 shadow-md lg:shadow-[#020d1eb2]">
                      <p className='text-[#8892b0] p-6 '>
                        <span className='text-[#64ffda]'>Conectify</span> is a modern communication platform built with the <span className='text-[#64ffda]'>MERN stack</span>, offering seamless messaging, real-time notifications, and a responsive design. With intuitive navigation and secure data handling, it enhances connectivity and delivers a smooth user experience.
                      </p>
                    </div>
                    <div className=" text-[#8892b0] gap-4 flex lg:justify-start justify-center whitespace-break-spaces">
                      <h1>React.js Node.js Express.js MongoDB</h1>
                    </div>
                    <div className="text-[#8892b0] gap-4 flex lg:justify-start justify-center items-center mt-4 mb-2">
                      {/* Uncomment if needed */}
                      <p className=" hover:text-[#64ffda] text-[22px] ">
                        <Link to="https://github.com/AbhinandanDaksh/Connectify"><FiGithub /></Link>
                      </p>
                      <p className=" hover:text-[#64ffda] text-xl">
                        <Link to="https://connectify-xi-plum.vercel.app/login"> <FaExternalLinkAlt /></Link>

                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Project 03 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20  pb-40 sm:pb-10  md:pb-10 lg:pb-10 relative">
              {/* Image Section */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative group w-[85%] lg:w-[700px] mx-auto">
                  {/* Border Box */}
                  <div className="absolute top-4 -left-6 hidden lg:block w-full h-[380px] border-2 border-[#64ffda] transition-transform duration-300 ease-in-out group-hover:-translate-x-2 group-hover:translate-y-2"></div>
                  {/* Image */}
                  <img
                    src={weatherApp}
                    alt="weatherApp"
                    className="relative h-[250px] lg:h-[370px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:-translate-y-2"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#64ffda] opacity-100 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-300"></div>
                </motion.div>
              </div>

              {/* Text Section */}
              <div
                className={`
                absolute max-w-[600px] lg:ml-[45%]
                bg-[#112240] lg:bg-transparent opacity-95 lg:opacity-100
                text-center lg:text-right
           
              `}
              >
                <div className="flex relative lg:text-right text-center bg-[#112240] lg:bg-transparent opacity-95 lg:opacity-100 mt-12">
                  <div className="flex flex-col px-6 lg:px-0">
                    <p className="text-[#64ffda]">Featured Project</p>
                    <h1 className="text-3xl font-semibold text-[#ccd6f6] hover:text-[#64ffda] mt-4">
                      Weather App
                    </h1>
                    <div className="h-auto bg-[#112240] mt-6 shadow-md lg:shadow-[#020d1eb2]">
                      <p className='text-[#8892b0] p-6 '> A responsive weather application built with ReactJS, offering real-time <span className='text-[#64ffda]'>weather updates</span>, a <span className='text-[#64ffda]'>5-day forecast</span>, and <span className='text-[#64ffda]'>location-based</span> weather data. It features a toggle between <span className='text-[#64ffda]'>Celsius</span> and <span className='text-[#64ffda]'>Fahrenheit</span> and includes error handling</p>

                    </div>
                    <div className=" text-[#8892b0] gap-4 flex lg:justify-end justify-center whitespace-break-spaces">
                      <h1>React.js Node.js HTML CSS</h1>
                    </div>
                    <div className="text-[#8892b0] gap-4 flex lg:justify-end justify-center items-center mt-4 mb-2">
                      {/* Uncomment if needed */}
                      <p className=" hover:text-[#64ffda] text-[22px] ">
                        <Link to="https://github.com/AbhinandanDaksh/Weather-App"><FiGithub /></Link>

                      </p>
                      <p className=" hover:text-[#64ffda] text-xl">
                        <Link to="https://weather-app-eight-black-10.vercel.app/"><FaExternalLinkAlt /></Link>

                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Project 04 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 pb-56 sm:pb-10  md:pb-10 lg:pb-10 relative">
              {/* Image Section */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative group w-[85%] lg:w-[700px] mx-auto ">
                  {/* Border Box */}
                  <div className="absolute  top-4 left-6 hidden lg:block w-full h-[380px] border-2 border-[#64ffda] transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:translate-y-2"></div>
                  {/* Image */}
                  <img
                    src={jas}
                    alt="jas Store"
                    className="relative h-[250px] lg:h-[370px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:-translate-x-2 group-hover:-translate-y-2"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#64ffda] opacity-100 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-300"></div>
                </motion.div>
              </div>

              {/* Text Section */}
              <div
                className={`
                absolute max-w-[600px] lg:mr-[45%]
                bg-[#112240] lg:bg-transparent opacity-95 lg:opacity-100
                text-center lg:text-right
           
              `}
              >
                <div className="flex relative lg:text-left text-center bg-[#112240] lg:bg-transparent opacity-95 lg:opacity-100 mt-12">
                  <div className="flex flex-col px-6 lg:px-0">
                    <p className="text-[#64ffda]">Featured Project</p>
                    <h1 className="text-3xl font-semibold text-[#ccd6f6] hover:text-[#64ffda] mt-4">
                      Jas Store
                    </h1>
                    <div className="h-auto bg-[#112240] mt-6  shadow-md lg:shadow-[#020d1eb2]">
                      <p className='text-[#8892b0] p-6'>
                        <span className='text-[#64ffda]'>Jas Store</span> is an e-commerce platform built with modern web technologies, offering secure payment processing, intuitive navigation, and responsive design. Built with the <span className='text-[#64ffda]'>MERN stack</span>, it features interactive <span className='text-[#64ffda]'>coding tutorials</span>, <span className='text-[#64ffda]'>progress tracking</span>, and a <span className='text-[#64ffda]'>user-friendly</span> interface to enhance learning.
                      </p>

                    </div>
                    <div className=" text-[#8892b0] gap-4 flex lg:justify-start justify-center whitespace-break-spaces">
                      <h1>HTML CSS Javascript</h1>
                    </div>
                    <div className="text-[#8892b0] gap-4 flex lg:justify-start justify-center items-center mt-4 mb-2">
                      {/* Uncomment if needed */}
                      <p className=" hover:text-[#64ffda] text-[22px] ">
                        <Link to="https://github.com/AbhinandanDaksh/JasStoreProject"><FiGithub /></Link>

                      </p>
                      <p className=" hover:text-[#64ffda] text-xl">
                        <Link to="https://abhinandandaksh.github.io/JasStoreProject/"><FaExternalLinkAlt /></Link>

                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
