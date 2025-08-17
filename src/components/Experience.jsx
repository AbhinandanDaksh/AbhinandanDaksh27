"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "JIT",
    role: "Full Stack Developer",
    time: "December 2024 - Present",
    link: "https://www.jewarinternational.com/",
    description: [
      {
        point:
          "Developed a responsive UI using React.js, Tailwind CSS, and managed state with Context API delivering a smooth user experience across devices.",
      },
      {
        point:
          "Implemented real-time chat with Socket.io, added push notifications using OneSignal, and integrated data scraping from 7 countries via Puppeteer, visualized using Chart.js.",
      },
      {
        point:
          "Built and connected RESTful APIs with Node.js, Express.js, and MongoDB, optimizing performance, reducing load time by 20%, and improving data rendering efficiency.",
      },
    ],
  },
  {
    id: 2,
    title: "Innovixion Tech",
    role: "Full Stack Developer",
    time: "August 2024 - November 2024",
    link:"https://www.innovixiontech.in/",
    description: [
      {
        point:
          "Developed a full-stack, responsive learning platform using React.js, Node.js, Express.js, and Tailwind CSS, featuring seamless video playback, course tracking, and a modern UI/UX experience.",
      },
      {
        point:
          "Integrated Razorpay for secure payments and Cloudinary for media upload, storage, and optimized content delivery, enhancing the platform's performance and user interaction.",
      },
      {
        point: "Collaborated with team for scalable deployment.",
      },
    ],
  },
  {
    id: 3,
    title: "ICT Academy",
    role: "Full Stack Developer (Internship)",
    time: "August 2023 - September 2023",
    link:"#",
    description: [
      {
        point:
          "Assisted in software development tasks, contributing to the implementation of React.js projects.",
      },
      {
        point:
          "Collaborated with the team to optimize database queries, improving data retrieval speed.",
      },
      {
        point:
          "Gained hands-on experience in back-end development and API integrations.",
      },
    ],
  },
];

const Experience = () => {
  const [active, setActive] = useState(1);
  const activeExp = experiences.find((item) => item.id === active);

  // Optional safety guard (shouldn't be necessary, but best practice)
  if (!activeExp) return null;
  const { role, title, time, description,link } = activeExp;

  return (
    <div name="Experience" className="h-auto flex items-center justify-center px-4 md:px-[10%] pb-20 pt-10 md:pb-20 lg:pb-28 xl:pb-36 text-[#ccd6f6]">
      <div className="w-full md:w-[60%] md:h-[60vh] h-auto">
        {/* Heading */}
        <div className="flex items-center font-mono text-xl md:text-2xl font-bold">
          <span className="text-[#64ffda]">02.</span>
          <h1 className="ml-2 text-xl md:text-3xl lg:text-4xl">
            Where I’ve Worked
          </h1>
          <div className="flex-grow h-[1px] bg-[#233554] ml-4"></div>
        </div>

        {/* Content */}
        <div className="my-10 flex">
          <div
            className="w-[30%] md:w-[20%] flex flex-col border-l border-[#233554] relative"
            role="tablist"
            aria-orientation="vertical"
          >
            {experiences.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                role="tab"
                aria-selected={active === item.id}
                tabIndex={0}
                className={`px-4 py-3 text-left font-mono text-sm md:text-base transition-all duration-300 border-l-2 relative overflow-hidden
        ${
          active === item.id
            ? "text-[#64ffda] border-[#64ffda] bg-[#112240] font-semibold"
            : "text-[#8892b0] border-transparent hover:text-[#64ffda] hover:bg-[#112240]/50"
        }`}
              >
                <span className="relative z-10">{item.title}</span>
                {active === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#64ffda]/10 rounded-md"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Details */}
          <div className="w-full pl-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="bg-[#112240] p-5 rounded-lg shadow-md"
              >
                <h2 className="group text-lg md:text-xl font-semibold inline-block">
                  {role}{" "}
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative text-[#64ffda] cursor-pointer transition"
                  >
                    @ {title}
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#64ffda] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </h2>

                <p className="text-sm text-[#8892b0] my-2">{time}</p>
                <ul className="space-y-3">
                  {description.map((desc, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-2 text-[#8892b0] leading-relaxed"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <span className="text-[#64ffda]">▹</span>
                      <span>{desc.point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
