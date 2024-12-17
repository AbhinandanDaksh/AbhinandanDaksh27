import logo from './logo.svg';
import './App.css';
import SideView from './components/SideViewLeft';
import SideViewRight from './components/SideViewRight';
import Center from './components/Center';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
// import About from '../src/components/sections/about';
// import Contact from '../src/components/sections/contact';
// import Projects from '../src/components/sections/projects';
// import Home from './Home';

function App() {
  return (
    <div className=' w-auto bg-[#0a192f] '>
      <div className='relative'>
        <NavBar/>
      </div>
      <div className=' flex flex-row '>
        <div className='fixed top-[90px] left-0 h-screen w-[8%]'>
          <SideView/>
        </div>
        <div className='flex-grow ' >
            <Center/>
            <About />
            <Projects />
            <Education/>
            <Contact/>
            <Footer/>
        </div>
        <div className='fixed top-[90px] right-0 h-screen w-[8%]'>
          <SideViewRight/>/
        </div>
      </div>
    </div>
  );
}

export default App;
