import React, { useState } from 'react';
import Logo from "../Images/IMG_20241020_112530.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Subtle floating developer workspace tokens
const floatingTokens = [
    { label: "< React />", position: "top-4 -left-6 sm:-left-10 md:-left-12", delay: 0, floatRange: [-3, 3, -3] },
    { label: "Node.js", position: "top-14 -right-4 sm:-right-8 md:-right-10", delay: 0.15, floatRange: [3, -3, 3] },
    { label: "{ MERN }", position: "bottom-24 -left-6 sm:-left-10 md:-left-12", delay: 0.3, floatRange: [-4, 2, -4] },
    { label: "Next.js", position: "bottom-12 -right-4 sm:-right-8 md:-right-10", delay: 0.1, floatRange: [2, -4, 2] },
    { label: "</>", position: "-bottom-4 right-8", delay: 0.25, floatRange: [-3, 3, -3] },
];

const About = () => {
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.15 });
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            id="About"
            name="About"
            className="h-auto bg-[var(--bg-primary)] flex items-center justify-center px-4 md:px-[10%] lg:px-[17%] pb-20 pt-16 md:py-20 lg:py-28 transition-colors duration-300 relative overflow-hidden"
        >
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                    duration: 1.8,
                    ease: [0.25, 0.8, 0.25, 1],
                    delay: 0.2,
                }}
                className="w-full relative z-10"
            >
                {/* Header */}
                <div className="flex items-center font-mono text-xl md:text-2xl font-bold mb-8 md:mb-12">
                    <span className="text-[var(--accent)]">01.</span>
                    <h1 className="ml-2 text-2xl md:text-3xl lg:text-4xl text-[var(--text-primary)]">About Me</h1>
                    <div className="flex-grow h-[1px] bg-[var(--border)] ml-4"></div>
                </div>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 lg:gap-14">
                    {/* Left Section - Text */}
                    <div className="flex-1 text-[var(--text-primary)] space-y-5">
                        <div className="text-[15px] md:text-[17px] leading-relaxed text-[var(--text-muted)] space-y-4">
                            <p>
                                Hey there! I'm <span className="text-[var(--accent)] font-semibold">Abhinandan Daksh</span>, a curious and creative Full Stack Developer specializing in the MERN stack. I’m all about blending technology with innovation, crafting web applications that not only function seamlessly but are a joy to use. Whether it's diving into backend logic with <span className="text-[var(--accent)] font-mono">Node.js</span> or designing user-centric interfaces with <span className="text-[var(--accent)] font-mono">React.js</span>, I thrive on solving complex problems with simple, elegant solutions.
                            </p>
                            <p>
                                I believe in constant learning and pushing boundaries, whether it’s exploring new <span className="text-[var(--accent)]">frameworks</span> or <span className="text-[var(--accent)]">optimizing</span> existing systems. Outside of code, I’m passionate about exploring the intersection of technology and design, always seeking out new ways to enhance the digital experience.
                            </p>

                            {/* Currently learning & Looking for */}
                            <div className="mt-6 p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border)] space-y-2">
                                <p><span className="text-[var(--accent)] font-medium">Currently learning:</span> System design, cloud (AWS), and advanced React patterns.</p>
                                <p><span className="text-[var(--accent)] font-medium">Looking for:</span> Full-time opportunities as a Full Stack / MERN developer where I can build impactful products and grow with the team.</p>
                            </div>

                            {/* Skills */}
                            <p className="mt-6 text-[var(--text-primary)] font-medium">
                                Here are a few technologies I’ve been working with recently:
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-4 font-mono text-sm">
                                <ul className="list-disc ml-4 space-y-1">
                                    <li>JavaScript (ES6)</li>
                                    <li>React.js</li>
                                    <li>Express.js</li>
                                    <li>Next.js</li>
                                </ul>
                                <ul className="list-disc ml-4 space-y-1">
                                    <li>Node.js</li>
                                    <li>MongoDB</li>
                                    <li>Tailwind CSS</li>
                                    <li>MUI</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Photo Wrapper with Clean Offset Border like Center */}
                    <div className="flex flex-col items-center justify-center pt-4 md:pt-2">
                        <div
                            className="relative group w-[240px] sm:w-[270px] md:w-[280px] lg:w-[320px] h-[290px] sm:h-[320px] md:h-[340px] lg:h-[380px]"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onFocus={() => setIsHovered(true)}
                            onBlur={() => setIsHovered(false)}
                            tabIndex="0"
                        >
                            {/* Floating Developer Badges on Hover */}
                            {floatingTokens.map((token, index) => (
                                <motion.div
                                    key={index}
                                    animate={
                                        isHovered
                                            ? { y: token.floatRange, opacity: 1, scale: 1 }
                                            : { y: 0, opacity: 0, scale: 0.8 }
                                    }
                                    transition={{
                                        opacity: { duration: 0.25, delay: isHovered ? token.delay : 0 },
                                        scale: { duration: 0.25, delay: isHovered ? token.delay : 0 },
                                        y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: token.delay }
                                    }}
                                    className={`absolute ${token.position} z-30 pointer-events-none select-none`}
                                >
                                    <div className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-[var(--bg-secondary)]/95 border-2 border-[var(--accent)]/60 backdrop-blur-md shadow-lg shadow-black/40">
                                        <span className="font-mono text-[10px] sm:text-xs text-[var(--accent)] font-medium tracking-tight">
                                            {token.label}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Clean Outer Accent Border matching Center.jsx button style */}
                            <div className="absolute top-4 left-4 w-full h-full border-2 rounded border-[var(--accent)] transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:translate-y-2"></div>

                            {/* Photo card */}
                            <div
                                className="relative w-full h-full rounded overflow-hidden
                                           border-2 border-[var(--accent)]/40
                                           bg-[var(--bg-secondary)]
                                           transition-all duration-300 ease-in-out
                                           group-hover:-translate-x-1 group-hover:-translate-y-1
                                           group cursor-pointer"
                            >
                                {/* Shimmer sweep on hover */}
                                <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/15 to-transparent z-10" />

                                {/* Image */}
                                <img
                                    src={Logo}
                                    alt="Abhinandan Daksh - Full Stack Developer"
                                    loading="lazy"
                                    className="w-full h-full object-cover rounded transition-all duration-300 filter grayscale group-hover:grayscale-0"
                                />

                                {/* Subtle tint overlay when not hovered */}
                                <div className="absolute inset-0 bg-[var(--accent)] opacity-40 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        </div>

                        {/* Animated "Available for opportunities" Status Indicator */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-secondary)]/90 border border-[var(--border)] shadow-[0_0_12px_rgba(100,255,218,0.12)] backdrop-blur-sm group hover:border-[var(--accent)]/40 transition-all duration-300 select-none cursor-default"
                        >
                            <div className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
                            </div>
                            <span className="font-mono text-[11px] sm:text-xs text-[var(--text-muted-2)] group-hover:text-[var(--text-primary)] transition-colors">
                                Available for opportunities
                            </span>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;


