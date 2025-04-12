import React from 'react';
import Logo from "../Images/IMG_20241020_112530.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div name="About" className="h-auto bg-[#0a192f] flex items-center justify-center px-[10%] pb-20 pt-10 md:py-16 lg:py-24 xl:pb-36">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                    duration: 1.8, // Slightly longer duration for smoother effect
                    ease: [0.25, 0.8, 0.25, 1], // Custom easing for smoothness
                    delay: 0.2, // Slight delay for smoother trigger
                }}
                className="container mx-auto px-4 lg:px-16 xl:px-20"
            >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
                    {/* Left Section - Text */}
                    <div className="flex-1 text-[#ccd6f6] space-y-6">
                        {/* Header */}
                        <div className="flex items-center font-mono text-xl md:text-2xl font-bold">
                            <span className='text-[#64ffda]'>01.</span>
                            <h1 className="ml-2 text-2xl md:text-3xl lg:text-4xl">About Me</h1>
                            <div className="flex-grow h-[1px] bg-[#233554] ml-4"></div>
                        </div>

                        {/* Introduction */}
                        <div className="text-[15px] md:text-[17px] leading-relaxed text-[#8892b0]">
                            <p>
                                Hey there! I'm <span className="text-[#64ffda]">Abhinandan Daksh</span>, a curious and creative Full Stack Developer specializing in the MERN stack. I’m all about blending technology with innovation, crafting web applications that not only function seamlessly but are a joy to use. Whether it's diving into backend logic with <span className="text-[#64ffda]">Node.js</span> or designing user-centric interfaces with <span className="text-[#64ffda]">React.js</span>, I thrive on solving complex problems with simple, elegant solutions.
                            </p>
                            <p className="mt-4">
                                I believe in constant learning and pushing boundaries, whether it’s exploring new <span className="text-[#64ffda]">frameworks</span> or <span className="text-[#64ffda]">optimizing</span> existing systems. Outside of code, I’m passionate about exploring the intersection of technology and design, always seeking out new ways to enhance the digital experience.
                            </p>
                            {/* Skills */}
                            <p className="mt-6">
                                Here are a few technologies I’ve been working with recently:
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <ul className="list-disc ml-4">
                                    <li>Javascript (ES6)</li>
                                    <li>React.js</li>
                                    <li>Express.js</li>
                                    <li>Next.js</li>
                                </ul>
                                <ul className="list-disc ml-4">
                                    <li>Node.js</li>
                                    <li>MongoDB</li>
                                    <li>Tailwind CSS</li>
                                    <li>MUI</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                            duration: 1.8,
                            ease: [0.25, 0.8, 0.25, 1],
                            delay: 0.4, // Delay for smoother transition on image
                        }}
                        className="flex justify-center items-center my-10"
                    >
                        <div
                            className="relative group w-[250px] sm:w-[275px] md:w-[300px] lg:w-[350px] h-[300px] sm:h-[325px] md:h-[350px] lg:h-[400px]"
                            tabIndex="0"
                        >
                            <div className="absolute top-4 left-4 w-full h-full border-2 rounded-sm border-[#64ffda] transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:translate-y-2"></div>
                            <div className="relative">
                                <img
                                    src={Logo}
                                    alt="Abhinandan Daksh - Full Stack Developer"
                                    loading="lazy"
                                    className="w-full h-full object-cover rounded-sm transition-transform duration-300 ease-in-out group-hover:-translate-x-2 group-hover:-translate-y-2"
                                />
                                <div className="absolute inset-0 bg-[#64ffda] opacity-80 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
