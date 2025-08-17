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

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: "01.", name: "About" },
    { id: "02.", name: "Experience" },
    { id: "03.", name: "Projects" },
    { id: "04.", name: "Education" },
    { id: "05.", name: "Contact" },
  ];

  return (
    <nav className="w-full fixed top-0 z-50 bg-[#0a192f]/80 backdrop-blur-md shadow-lg">
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

        {/* Hamburger Menu */}
        <div className="block md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#64ffda] focus:outline-none"
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

        {/* Navigation Links */}
        <div
          className={`absolute md:static top-[100%] left-0 w-full md:w-auto bg-[#0a192f]/95 md:bg-transparent md:flex md:items-center transition-all duration-500 ease-in-out 
            ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 md:opacity-100 md:translate-y-0"}
          `}
        >
          <ul className="flex flex-col md:flex-row items-center md:gap-x-6 font-mono text-[14px] tracking-[0.1em] text-center">
            {navLinks.map((navLink, index) => (
              <li key={index} className="my-3 md:my-0 group">
                <Link
                  to={navLink.name}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  className="text-[#64ffda] transition-all"
                >
                  {navLink.id}
                  <span className="ml-1 text-[#a8b2d1] relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#64ffda] after:transition-all after:duration-300 group-hover:after:w-full">
                    {navLink.name}
                  </span>
                </Link>
              </li>
            ))}

            {/* Resume Button */}
            <li className="my-3 md:my-0">
              <a
                href="https://drive.google.com/file/d/1-3jJMWRSabhvxKFKrZQYUfGogA_CXbPC/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-28 h-9 flex items-center justify-center rounded-md border-2 border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f] hover:shadow-md transition-all duration-300"
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
