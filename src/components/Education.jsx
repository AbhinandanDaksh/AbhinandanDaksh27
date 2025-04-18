import React from "react";
import image from "../Images/VediCode.png";
import jas from "../Images/jas.png";
import weatherApp from "../Images/weatherApp.png";
import Connectify from "../Images/Connectify.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { LiaSalesforce } from "react-icons/lia";
import { PiCertificate } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Project data array

const Projects = () => {
  return (
    <div name="Education" className="h-auto bg-[#0a192f] flex items-center justify-center px-4 md:px-[10%] pb-20 pt-10 md:pb-20 lg:pb-28 xl:pb-36">
      <div className="container mx-auto px-4 lg:px-16 xl:px-24">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 text-[#ccd6f6] space-y-20 relative">
            {/* Heading */}
            <div className="flex items-center font-mono text-xl md:text-2xl font-bold">
              <span className="text-[#64ffda]">03.</span>
              <h1 className="ml-2 text-xl md:text-3xl lg:text-4xl ">
                {/* <span className="text-[#64ffda]">03.</span> */}
                Academic Background & Milestones
              </h1>
              <div className="flex-grow h-[1px] bg-[#233554] ml-4"></div>
            </div>
            {/* Description Section */}
            <div>
              <ul>



                {[
                  {
                    title: "Bachelor's Degree in Computer Science",
                    desc: "I have completed my Bachelor's of Technology(Computer Science) from Dr. APJ Abdul Kalam Technical University in the year 2024 and scored 7.8 CGPA.",
                  },
                  {
                    title: "Class XII",
                    desc: "I have completed my Intermediate from Dr K N Modi Sci & Com College (Up board) with Science Stream in the year 2019 and scored 68%.",
                  },
                  {
                    title: "Class X",
                    desc: "I have completed my High School from Dr K N Modi Sci & Com College (Up board) in the year 2017 and scored 7.5 CGPA.",
                  },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-2xl font-semibold text-[#ccd6f6] hover:text-[#64ffda]">
                      {item.title}
                    </h2>
                    <p className="text-[15px] md:text-[17px] leading-relaxed text-[#8892b0]">
                      {item.desc}
                    </p>
                  </motion.li>
                ))}


                <motion.li
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="mt-20 text-2xl font-semibold text-[#ccd6f6] hover:text-[#64ffda]">
                    Achievements & Awards
                  </h2>
                  <ul className="space-y-2 text-[#8892b0] mt-4">
                    <li className="flex items-center space-x-2">
                      <a
                        href="https://www.credly.com/badges/a88660c9-c565-40e3-ba5d-f44e47e0b31f/public_url"
                        target="_blank"
                        className="flex items-center space-x-2"
                      >
                        <FaAws className="text-2xl cursor-pointer" />
                        <span>
                          AWS Academy Graduate - AWS Academy Cloud Architecting
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.salesforce.com/trailblazer/adaksh9"
                        target="_blank"
                        className="flex items-center space-x-2"
                      >
                        <LiaSalesforce className="text-2xl cursor-pointer" />
                        <span>SalesForce (Ranger)</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://drive.google.com/file/d/1pARYyIn7aJe6pgqqct7JT4rihES50FVL/view?usp=sharing"
                        target="_blank"
                        className="flex items-center space-x-2"
                      >
                        <PiCertificate className="text-2xl cursor-pointer" />
                        <span>
                          Virtual Internship Program - Web Development
                        </span>
                      </a>
                    </li>
                  </ul>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
