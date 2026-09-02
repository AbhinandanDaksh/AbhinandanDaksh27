import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiSend, FiCode } from "react-icons/fi";

// Dynamic Typewriter Roles (defined outside component to satisfy useEffect dependency rules)
const roles = [
  "I build things for the web.",
  "MERN Stack Developer.",
  "Full-Stack Web Architect.",
  "Building Modern Web App.",
  "Scalable & Responsive UI."
];

const Center = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.15 });

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(80);

        // Finished typing full word
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000); // Wait 2s before backspacing
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(45);

        // Finished deleting
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(300);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  // Framer Motion Variants for Staggered Fade Up
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  };

  return (
    <section
      id="Center"
      name="Center"
      className="min-h-screen w-full flex items-center justify-start py-32 md:py-40 px-6 sm:px-12 md:px-[12%] lg:px-[17%] relative overflow-hidden bg-[var(--bg-primary)]"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[var(--accent)] opacity-[0.07] rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[var(--accent)] opacity-[0.04] rounded-full blur-3xl pointer-events-none -z-0" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="space-y-5 md:space-y-6 max-w-4xl relative z-10"
      >
        {/* Introduction Text */}
        <motion.p
          variants={itemVariants}
          className="text-[var(--accent)] font-mono text-sm sm:text-base md:text-lg font-normal tracking-wide flex items-center gap-2"
        >
          <FiCode className="text-[var(--accent)] text-lg animate-pulse" />
          <span>Hi, my name is</span>
        </motion.p>

        {/* Main Heading with Animated Gradient and Typewriter */}
        <motion.div
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight space-y-2 md:space-y-3"
        >
          <h1 className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-300">
            Abhinandan Daksh.
          </h1>

          {/* Typewriter Text Row */}
          <div className="text-[var(--text-muted)] min-h-[1.3em] flex items-center flex-wrap">
            <span>{currentText}</span>
            <span className="inline-block w-[3px] md:w-[4px] h-[0.85em] bg-[var(--accent)] ml-2 animate-pulse align-middle" />
          </div>
        </motion.div>

        {/* Subtext / Summary */}
        <motion.p
          variants={itemVariants}
          className="text-[var(--text-muted)] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl"
        >
          I’m a passionate <span className="text-[var(--text-primary)] font-semibold">MERN Stack Developer</span> specializing
          in building high-performance, responsive, and aesthetically pleasing web applications. From intuitive frontends in{" "}
          <span className="text-[var(--accent)] font-mono font-medium">React</span> &{" "}
          <span className="text-[var(--accent)] font-mono font-medium">Tailwind CSS</span> to scalable REST APIs with{" "}
          <span className="text-[var(--accent)] font-mono font-medium">Node.js</span> &{" "}
          <span className="text-[var(--accent)] font-mono font-medium">MongoDB</span>, I turn ideas into clean, functional code.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="pt-4 flex flex-wrap items-center gap-4 sm:gap-5"
        >
          {/* Hire Me Email Button */}
          <a
            href="mailto:Abhinandandaksh@gmail.com"
            aria-label="Hire me via email"
            className="group relative inline-flex items-center justify-center gap-2.5 px-7 sm:px-9 py-3 sm:py-3.5 rounded border-2 border-[var(--accent)] text-[var(--accent)] font-mono text-sm sm:text-base font-medium overflow-hidden transition-all duration-300 hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] hover:shadow-[0_0_25px_rgba(100,255,218,0.3)] hover:-translate-y-1"
          >
            <FiSend className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            <span>Hire Me!</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Center;
