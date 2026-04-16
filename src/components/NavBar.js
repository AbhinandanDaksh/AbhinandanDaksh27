// import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// import Logo from "../Images/code(1).png";
// import { Link } from "react-scroll";

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { id: "01.", name: "About" },
//     { id: "02.", name: "Experience" },
//     { id: "03.", name: "Projects" },
//     { id: "04.", name: "Education" },
//     { id: "05.", name: "Contact" },
//   ];

//   return (
//     <nav className="w-full fixed top-0 z-50 bg-[#0a192f] shadow-md">
//       <div className="flex items-center justify-between px-6 py-4 md:px-14">
//         {/* Logo */}
//         <div>
//           <Link
//             to="Center"
//             smooth={true}
//             duration={500}
//             offset={-70}
//             activeClass="active"
//             className="text-[#64ffda] hover:text-[#64ffda] transition-all"
//           >
//             <img
//               src={Logo}
//               alt="Logo"
//               className="h-10 w-12 hover:-translate-y-[2px] duration-300 transition-all cursor-pointer"
//             />
//           </Link>
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <div className="block md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-[#64ffda] focus:outline-none"
//           >
//             {isOpen ? (
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Navigation Links */}
//         <div
//           className={`absolute md:static top-[100%] left-0 w-full md:w-auto bg-[#0a192f] md:flex md:items-center transition-all duration-300 ease-in-out ${
//             isOpen ? "block" : "hidden"
//           }`}
//         >
//           <ul className="flex flex-col md:flex-row items-center md:gap-x-6 font-mono text-[14px] leading-[var(--fz-lg)] tracking-[0.1em] cursor-pointer text-center">
//             {navLinks.map((navLink, index) => (
//               <li key={index} className="my-2 md:my-0">
//                 <Link
//                   to={navLink.name}
//                   smooth={true}
//                   duration={500}
//                   offset={-70}
//                   activeClass="active"
//                   className="text-[#64ffda] hover:text-[#64ffda] transition-all"
//                 >
//                   {navLink.id}
//                   <span className="ml-1 text-[#a8b2d1] hover:text-[#64ffda] transition-all">
//                     {navLink.name}
//                   </span>
//                 </Link>
//                 {/* <a
//                   href={navLink.url}
//                   className="text-[#64ffda] hover:text-[#64ffda] transition-all"
//                 >
//                   {navLink.id}
//                   <span className="ml-1 text-[#a8b2d1] hover:text-[#64ffda] transition-all">
//                     {navLink.name}
//                   </span>
//                 </a> */}
//               </li>
//             ))}

//             {/* Resume Button */}
//             <li className="my-2 md:my-0">
//               <button className="w-24 h-9 bg-transparent rounded border-2 border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f] transition-all">
//                 {/* Resume */}
//                 <a
//                   href="https://drive.google.com/file/d/1-3jJMWRSabhvxKFKrZQYUfGogA_CXbPC/view?usp=sharing"
//                   download="Abhinandan_Resume.pdf"
//                 >
//                   Resume
//                 </a>
//               </button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
import React, { useState } from "react";
import Logo from "../Images/code(1).png";
import { Link } from "react-scroll";
import { useTheme } from "../context/ThemeContext";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { id: "01.", name: "About" },
    { id: "02.", name: "Experience" },
    { id: "03.", name: "Projects" },
    { id: "04.", name: "Education" },
    { id: "05.", name: "Contact" },
  ];

  return (
    <nav className="w-full fixed top-0 z-[100] bg-[var(--bg-primary)]/80 backdrop-blur-md shadow-lg transition-colors duration-300">
      <div className="flex items-center justify-between px-6 py-4 md:px-14">
        {/* Logo */}
        <div>
          <Link
            to="Center"
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active"
          >
            <img
              src={Logo}
              alt="Logo"
              className="h-10 w-12 hover:-translate-y-[2px] duration-300 transition-all cursor-pointer"
            />
          </Link>
        </div>

        {/* Theme Toggle */}
      

        {/* Hamburger Menu */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 text-[var(--accent)] focus:outline-none"
          >
            {theme === "dark" ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[var(--accent)] focus:outline-none"
          >
            {isOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links - mobile: full overlay with solid bg so links stay on top */}
        <div
          className={`absolute md:static top-[100%] left-0 w-full md:w-auto min-h-[calc(100vh-4rem)] md:min-h-0 bg-[var(--bg-primary)] md:bg-transparent md:flex items-start md:items-center pt-6 md:pt-0 shadow-xl md:shadow-none transition-all duration-500 ease-in-out
            ${isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-5 invisible md:opacity-100 md:translate-y-0 md:visible"}
          `}
        >
            <div className="hidden md:flex items-center mr-4">
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-lg text-[var(--accent)] hover:bg-[var(--bg-secondary)] transition-colors duration-200"
          >
            {theme === "dark" ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>
        </div>
          <ul className="flex flex-col md:flex-row items-center md:gap-x-6 font-mono text-[14px] tracking-[0.1em] text-center">
            {navLinks.map((navLink, index) => (
              <li key={index} className="my-3 md:my-0 group">
                <Link
                  to={navLink.name}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  className="text-[var(--accent)] transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {navLink.id}
                  <span className="ml-1 text-[var(--text-muted-2)] relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[var(--accent)] after:transition-all after:duration-300 group-hover:after:w-full">
                    {navLink.name}
                  </span>
                </Link>
              </li>
            ))}

            {/* Resume Button */}
            <li className="my-3 md:my-0">
              <a
                href="https://drive.google.com/file/d/1br6I0immkLzZSipGXAl54F2dYmabzxec/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-28 h-9 flex items-center justify-center rounded-md border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] hover:shadow-md transition-all duration-300"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
