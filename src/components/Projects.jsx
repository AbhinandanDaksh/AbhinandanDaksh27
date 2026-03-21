import React from "react";
import image from "../Images/VediCode.png";
import jas from "../Images/jas.png";
import weatherApp from "../Images/weatherApp.png";
import Connectify from "../Images/Connectify.png";
import RitmicoImg from "../Images/image copy.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

// Project data array

const Projects = () => {
  return (
    <div
      name="Projects"
      className="h-auto bg-[var(--bg-primary)] flex items-center transition-colors duration-300 justify-center px-4 md:px-[10%] pb-20 pt-10 md:pb-20 lg:pb-28 xl:pb-36"
    >
      <div className="container mx-auto px-4 lg:px-16 xl:px-24">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          <div className="flex-1 text-[var(--text-primary)] space-y-20 relative">
            {/* Heading */}
            <div className="flex items-center font-mono text-xl md:text-2xl font-bold">
              <span className="text-[var(--accent)]">03.</span>
              <h1 className="ml-2 text-xl md:text-3xl lg:text-4xl whitespace-nowrap">
                Some Things I’ve Built
              </h1>
              <div className="flex-grow h-[1px] bg-[var(--border)] ml-4"></div>
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
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative group w-[85%] lg:w-[700px] mx-auto"
                >
                  <div className="absolute top-4 -left-6 hidden lg:block w-full h-[380px] border-2 border-[var(--accent)] transition-transform duration-300 ease-in-out group-hover:-translate-x-2 group-hover:translate-y-2"></div>
                  <img
                    src={RitmicoImg}
                    alt="Ritmico"
                    className="relative h-[250px] lg:h-[370px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:-translate-y-2"
                  />
                  <div className="absolute inset-0 bg-[var(--accent)] opacity-100 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-300"></div>
                </motion.div>
              </div>

              {/* Text Section */}
              <div
                className={`
                absolute max-w-[600px] lg:ml-[45%]
                bg-[var(--bg-secondary)] lg:bg-transparent opacity-95 lg:opacity-100
                text-center lg:text-right
              `}
              >
                <div className="flex relative lg:text-right text-center bg-[var(--bg-secondary)] lg:bg-transparent opacity-95 lg:opacity-100 mt-12">
                  <div className="flex flex-col px-6 lg:px-0">
                    <p className="text-[var(--accent)]">Featured Project</p>
                    <h1 className="text-3xl font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] mt-4">
                      Ritmico
                    </h1>
                    <div className="h-auto bg-[var(--bg-secondary)] mt-6 shadow-md lg:shadow-[#020d1eb2]">
                      <p className="text-[var(--text-muted)] p-6">
                        <span className="text-[var(--accent)]">Ritmico</span> is
                        a habit tracker app built with the{" "}
                        <span className="text-[var(--accent)]">MERN stack</span>
                        , helping you track daily habits and build streaks. It
                        offers an intuitive,{" "}
                        <span className="text-[var(--accent)]">responsive</span>{" "}
                        interface to stay consistent and build better habits.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 lg:justify-end justify-center mt-4">
                      {["React.js", "Node.js", "Express.js", "MongoDB"].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="text-[var(--text-muted)] text-xs font-mono border border-[var(--border)] px-2.5 py-1 rounded hover:border-[var(--accent)]/50 hover:text-[var(--accent)]/90 transition-colors"
                          >
                            {tech}
                          </span>
                        ),
                      )}
                    </div>
                    <div className="text-[var(--text-muted)] gap-4 flex lg:justify-end justify-center items-center mt-4 mb-2">
                      <a
                        href="https://github.com/AbhinandanDaksh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--accent)] text-[22px] transition-colors"
                      >
                        <FiGithub />
                      </a>
                      <a
                        href="https://www.getritmico.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--accent)] text-xl transition-colors"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Divider between projects */}
            <div
              className="w-full py-8 flex items-center gap-4"
              aria-hidden="true"
            >
              <div className="flex-1 h-px bg-[var(--border)]" />
              <span className="text-[var(--text-muted)] font-mono text-xs uppercase tracking-widest">
                Project
              </span>
              <div className="flex-1 h-px bg-[var(--border)]" />
            </div>
            {/* project 02 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20 pb-48 sm:pb-10 md:pb-10 lg:pb-10 relative"
            >
              {/* Image Section */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative group w-[85%] lg:w-[700px] mx-auto"
                >
                  {/* Border Box */}
                  <div className="absolute top-4 -left-6 hidden lg:block w-full h-[380px] border-2 border-[var(--accent)] transition-transform duration-300 ease-in-out group-hover:-translate-x-2 group-hover:translate-y-2"></div>
                  {/* Image */}
                  <img
                    src={image}
                    alt="VediCode"
                    className="relative h-[250px] lg:h-[370px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:-translate-y-2"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[var(--accent)] opacity-100 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-300"></div>
                </motion.div>
              </div>

              {/* Text Section */}
              <div
                className={`
                absolute max-w-[600px] lg:ml-[45%]
                bg-[var(--bg-secondary)] lg:bg-transparent opacity-95 lg:opacity-100
                text-center lg:text-right
           
              `}
              >
                <div className="flex relative lg:text-right text-center bg-[var(--bg-secondary)] lg:bg-transparent opacity-95 lg:opacity-100 mt-12">
                  <div className="flex flex-col px-6 lg:px-0">
                    <p className="text-[var(--accent)]">Featured Project</p>
                    <h1 className="text-3xl font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] mt-4">
                      VediCode
                    </h1>
                    <div className="h-auto bg-[var(--bg-secondary)] mt-6 shadow-md lg:shadow-[#020d1eb2]">
                      <p className="text-[var(--text-muted)] p-6">
                        <span className="text-[var(--accent)]">VediCode</span>{" "}
                        is a comprehensive educational platform developed with
                        the{" "}
                        <span className="text-[var(--accent)]">MERN stack</span>
                        , offering interactive{" "}
                        <span className="text-[var(--accent)]">
                          coding tutorials
                        </span>
                        ,{" "}
                        <span className="text-[var(--accent)]">
                          progress tracking
                        </span>
                        , and a{" "}
                        <span className="text-[var(--accent)]">
                          user-friendly
                        </span>{" "}
                        interface to enhance learning experiences.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 lg:justify-end justify-center mt-4">
                      {[
                        "React.js",
                        "Node.js",
                        "Express.js",
                        "MongoDB",
                        "Razorpay",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="text-[var(--text-muted)] text-xs font-mono border border-[var(--border)] px-2.5 py-1 rounded hover:border-[var(--accent)]/50 hover:text-[var(--accent)]/90 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="text-[var(--text-muted)] gap-4 flex lg:justify-end justify-center items-center mt-4 mb-2">
                      <a
                        href="https://github.com/AbhinandanDaksh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--accent)] text-[22px] transition-colors"
                      >
                        <FiGithub />
                      </a>
                      <a
                        href="https://github.com/AbhinandanDaksh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--accent)] text-xl transition-colors"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Divider */}
            <div
              className="w-full py-8 flex items-center gap-4"
              aria-hidden="true"
            >
              <div className="flex-1 h-px bg-[var(--border)]" />
              <span className="text-[var(--text-muted)] font-mono text-xs uppercase tracking-widest">
                Project
              </span>
              <div className="flex-1 h-px bg-[var(--border)]" />
            </div>

            {/* Project 03 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 pb-56 sm:pb-10 md:pb-10 lg:pb-10 relative"
            >
              {/* Image Section */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative group w-[85%] lg:w-[700px] mx-auto "
                >
                  {/* Border Box */}
                  <div className="absolute  top-4 left-6 hidden lg:block w-full h-[380px] border-2 border-[var(--accent)] transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:translate-y-2"></div>
                  {/* Image */}
                  <img
                    src={Connectify}
                    alt="Connectify"
                    className="relative h-[250px] lg:h-[370px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:-translate-x-2 group-hover:-translate-y-2"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[var(--accent)] opacity-100 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-300"></div>
                </motion.div>
              </div>

              {/* Text Section */}
              <div
                className={`
                absolute max-w-[600px] lg:mr-[45%]
                bg-[var(--bg-secondary)] lg:bg-transparent opacity-95 lg:opacity-100
                text-center lg:text-right
           
              `}
              >
                <div className="flex relative lg:text-left text-center bg-[var(--bg-secondary)] lg:bg-transparent opacity-95 lg:opacity-100 mt-12">
                  <div className="flex flex-col px-6 lg:px-0">
                    <p className="text-[var(--accent)]">Featured Project</p>
                    <h1 className="text-3xl font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] mt-4">
                      Connectify
                    </h1>
                    <div className="h-auto bg-[var(--bg-secondary)] mt-6 shadow-md lg:shadow-[#020d1eb2]">
                      <p className="text-[var(--text-muted)] p-6 ">
                        <span className="text-[var(--accent)]">Connectify</span>{" "}
                        is a modern communication platform built with the{" "}
                        <span className="text-[var(--accent)]">MERN stack</span>
                        , offering seamless messaging, real-time and
                        notifications. With intuitive navigation and secure data
                        handling, it enhances connectivity and delivers a smooth
                        user experience.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 lg:justify-start justify-center mt-4">
                      {["React.js", "Node.js", "Express.js", "MongoDB"].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="text-[var(--text-muted)] text-xs font-mono border border-[var(--border)] px-2.5 py-1 rounded hover:border-[var(--accent)]/50 hover:text-[var(--accent)]/90 transition-colors"
                          >
                            {tech}
                          </span>
                        ),
                      )}
                    </div>
                    <div className="text-[var(--text-muted)] gap-4 flex lg:justify-start justify-center items-center mt-4 mb-2">
                      <a
                        href="https://github.com/AbhinandanDaksh/Connectify"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--accent)] text-[22px] transition-colors"
                      >
                        <FiGithub />
                      </a>
                      <a
                        href="https://connectify-xi-plum.vercel.app/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--accent)] text-xl transition-colors"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Divider */}
            <div
              className="w-full py-8 flex items-center gap-4"
              aria-hidden="true"
            >
              <div className="flex-1 h-px bg-[var(--border)]" />
              <span className="text-[var(--text-muted)] font-mono text-xs uppercase tracking-widest">
                Project
              </span>
              <div className="flex-1 h-px bg-[var(--border)]" />
            </div>
            {/* Project 04 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20 pb-40 sm:pb-10 md:pb-10 lg:pb-10 relative"
            >
              {/* Image Section */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative group w-[85%] lg:w-[700px] mx-auto"
                >
                  {/* Border Box */}
                  <div className="absolute top-4 -left-6 hidden lg:block w-full h-[380px] border-2 border-[var(--accent)] transition-transform duration-300 ease-in-out group-hover:-translate-x-2 group-hover:translate-y-2"></div>
                  {/* Image */}
                  <img
                    src={weatherApp}
                    alt="weatherApp"
                    className="relative h-[250px] lg:h-[370px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:-translate-y-2"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[var(--accent)] opacity-100 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-300"></div>
                </motion.div>
              </div>

              {/* Text Section */}
              <div
                className={`
                absolute max-w-[600px] lg:ml-[45%]
                bg-[var(--bg-secondary)] lg:bg-transparent opacity-95 lg:opacity-100
                text-center lg:text-right
           
              `}
              >
                <div className="flex relative lg:text-right text-center bg-[var(--bg-secondary)] lg:bg-transparent opacity-95 lg:opacity-100 mt-12">
                  <div className="flex flex-col px-6 lg:px-0">
                    <p className="text-[var(--accent)]">Featured Project</p>
                    <h1 className="text-3xl font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] mt-4">
                      Weather App
                    </h1>
                    <div className="h-auto bg-[var(--bg-secondary)] mt-6 shadow-md lg:shadow-[#020d1eb2]">
                      <p className="text-[var(--text-muted)] p-6 ">
                        {" "}
                        A responsive weather application built with ReactJS,
                        offering real-time{" "}
                        <span className="text-[var(--accent)]">
                          weather updates
                        </span>
                        , a{" "}
                        <span className="text-[var(--accent)]">
                          5-day forecast
                        </span>
                        , and{" "}
                        <span className="text-[var(--accent)]">
                          location-based
                        </span>{" "}
                        weather data. It features a toggle between{" "}
                        <span className="text-[var(--accent)]">Celsius</span>{" "}
                        and{" "}
                        <span className="text-[var(--accent)]">Fahrenheit</span>{" "}
                        and includes{" "}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 lg:justify-end justify-center mt-4">
                      {["React.js", "Node.js", "HTML", "CSS"].map((tech) => (
                        <span
                          key={tech}
                          className="text-[var(--text-muted)] text-xs font-mono border border-[var(--border)] px-2.5 py-1 rounded hover:border-[var(--accent)]/50 hover:text-[var(--accent)]/90 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="text-[var(--text-muted)] gap-4 flex lg:justify-end justify-center items-center mt-4 mb-2">
                      <a
                        href="https://github.com/AbhinandanDaksh/Weather-App"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--accent)] text-[22px] transition-colors"
                      >
                        <FiGithub />
                      </a>
                      <a
                        href="https://weather-app-eight-black-10.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--accent)] text-xl transition-colors"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Divider */}
            <div
              className="w-full py-8 flex items-center gap-4"
              aria-hidden="true"
            >
              <div className="flex-1 h-px bg-[var(--border)]" />
              <span className="text-[var(--text-muted)] font-mono text-xs uppercase tracking-widest">
                Project
              </span>
              
              <div className="flex-1 h-px bg-[var(--border)]" />
            </div>
            {/* Project 05 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 pb-56 sm:pb-10 md:pb-10 lg:pb-10 relative"
            >
              {/* Image Section */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative group w-[85%] lg:w-[700px] mx-auto "
                >
                  {/* Border Box */}
                  <div className="absolute  top-4 left-6 hidden lg:block w-full h-[380px] border-2 border-[var(--accent)] transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:translate-y-2"></div>
                  {/* Image */}
                  <img
                    src={jas}
                    alt="jas Store"
                    className="relative h-[250px] lg:h-[370px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:-translate-x-2 group-hover:-translate-y-2"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[var(--accent)] opacity-100 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-300"></div>
                </motion.div>
              </div>

              {/* Text Section */}
              <div
                className={`
                absolute max-w-[600px] lg:mr-[45%]
                bg-[var(--bg-secondary)] lg:bg-transparent opacity-95 lg:opacity-100
                text-center lg:text-right
           
              `}
              >
                <div className="flex relative lg:text-left text-center bg-[var(--bg-secondary)] lg:bg-transparent opacity-95 lg:opacity-100 mt-12">
                  <div className="flex flex-col px-6 lg:px-0">
                    <p className="text-[var(--accent)]">Featured Project</p>
                    <h1 className="text-3xl font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] mt-4">
                      Jas Store
                    </h1>
                    <div className="h-auto bg-[var(--bg-secondary)] mt-6  shadow-md lg:shadow-[#020d1eb2]">
                      <p className="text-[var(--text-muted)] p-6">
                        <span className="text-[var(--accent)]">Jas Store</span>{" "}
                        is an e-commerce platform built with{" "}
                        <span className="text-[var(--accent)]">
                          HTML, CSS & JavaScript
                        </span>
                        , offering product listing, cart management, and
                        responsive design. It features intuitive navigation,{" "}
                        <span className="text-[var(--accent)]">
                          user-friendly
                        </span>{" "}
                        checkout flow, and a clean interface for online
                        shopping.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 lg:justify-start justify-center mt-4">
                      {["HTML", "CSS", "JavaScript"].map((tech) => (
                        <span
                          key={tech}
                          className="text-[var(--text-muted)] text-xs font-mono border border-[var(--border)] px-2.5 py-1 rounded hover:border-[var(--accent)]/50 hover:text-[var(--accent)]/90 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="text-[var(--text-muted)] gap-4 flex lg:justify-start justify-center items-center mt-4 mb-2">
                      <a
                        href="https://github.com/AbhinandanDaksh/JasStoreProject"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--accent)] text-[22px] transition-colors"
                      >
                        <FiGithub />
                      </a>
                      <a
                        href="https://abhinandandaksh.github.io/JasStoreProject/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[var(--accent)] text-xl transition-colors"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Divider */}
            {/* <div className="w-full py-8 flex items-center gap-4" aria-hidden="true">
              <div className="flex-1 h-px bg-[var(--border)]" />
              <span className="text-[var(--text-muted)] font-mono text-xs uppercase tracking-widest">Project</span>
              <div className="flex-1 h-px bg-[var(--border)]" />
            </div> */}

            {/* View more on GitHub */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center pt-8 md:pt-12"
            >
              <a
                href="https://github.com/AbhinandanDaksh?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded border-2 border-[var(--accent)] text-[var(--accent)] font-mono text-sm hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] transition-all duration-300"
              >
                <FiGithub className="text-lg" />
                View more on GitHub
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
