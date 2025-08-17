// import logo from './logo.svg';
// import './App.css';
// import SideView from './components/SideViewLeft';
// import SideViewRight from './components/SideViewRight';
// import Center from './components/Center';
// import About from './components/About';
// import Projects from './components/Projects';
// import Education from './components/Education';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import NavBar from './components/NavBar';
// // import About from '../src/components/sections/about';
// // import Contact from '../src/components/sections/contact';
// // import Projects from '../src/components/sections/projects';
// // import Home from './Home';

// function App() {
//   return (
//     <div className=' w-auto bg-[#0a192f] '>
//       <div className='relative'>
//         <NavBar/>
//       </div>
//       <div className=' flex flex-row '>
//         <div className='fixed top-[90px] left-0 h-screen w-[8%]'>
//           <SideView/>
//         </div>
//         <div className='flex-grow ' >
//             <Center/>
//             <About />
//             <Projects />
//             <Education/>
//             <Contact/>
//             <Footer/>
//         </div>
//         <div className='fixed top-[90px] right-0 h-screen w-[8%]'>
//           <SideViewRight/>/
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



import React, { useEffect, useState } from "react";
import "./App.css";
import SideView from "./components/SideViewLeft";
import SideViewRight from "./components/SideViewRight";
import Center from "./components/Center";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import logo from "../src/Images/code(1).png";
import Experience from "./components/Experience";

function App() {
  const [loadingStage, setLoadingStage] = useState(1); // 1 = first loader, 2 = second loader, 3 = main content

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setLoadingStage(2); // Show second loader after 2s
    }, 2000);

    const timer2 = setTimeout(() => {
      setLoadingStage(3); // Show main content after another 2s
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (loadingStage === 1) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#0a192f] text-white">
      <img src={logo} className="w-20 h-20 animate-pulse" alt="logo" />
      <p className="mt-4 text-lg typing-text">Loading your experience...</p>
    </div>
    
    );
  }

  // if (loadingStage === 2) {
  //   return (
  //     <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#0a192f] text-white">
  //     <p className="text-xl mb-2">Almost there</p>
  //     <div className="flex space-x-2 mt-2">
  //       <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
  //       <div className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:.2s]"></div>
  //       <div className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:.4s]"></div>
  //     </div>
  //   </div>

  //   );
  // }

  // Main content after loading
  return (
  <div className="w-auto bg-[#0a192f] overflow-x-hidden overflow-y-auto">
    <div className="relative">
      <NavBar />
    </div>
    <div className="flex flex-row">
      <div className="fixed top-[90px] left-0 h-screen w-[8%]">
        <SideView />
      </div>
      <div className="flex-grow">
        <Center />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
      <div className="fixed top-[90px] right-0 h-screen w-[8%]">
        <SideViewRight />
      </div>
    </div>
  </div>
);

}

export default App;
