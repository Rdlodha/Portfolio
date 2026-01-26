import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClickSpark from '../Reactbits/ClickSpark/ClickSpark'
import Particles from '../Reactbits/Particles/Particles'
import IntroWelcome from './component/IntroWelcome'
import Project from '../public/Projects.jsx'
import Skills from './component/Skills'
import Contactme from './component/Contactme'
import Nav from './component/Nav'
import Footer from './component/Footer.jsx'
// import prj21 from '../src/assets/prj21.png'
// import prj22 from '../src/assets/prj22.png'
// import prj23 from '../src/assets/prj23.png'
// import prj24 from '../src/assets/prj24.png'
// import prj1 from '../src/assets/prj1.png'
// import prj2 from '../src/assets/prj2.png'
// import prj3 from '../src/assets/prj3.png'
// import prj4 from '../src/assets/prj4.png'

 

const project2 = {
  description: {
    title: "🕒 LineUp – A Smart Virtual Queue Management System",
    desc: "LineUp is a MERN stack web application designed to simplify waiting experiences through virtual queueing. Users can book appointments for services like salons, banks, or cafes and receive real-time updates on their position in the queue. Operators manage bookings efficiently using an admin dashboard with live status updates. The platform also supports OTP-based login for secure and seamless access."
  },
  img:[
  {
    img: "./prj1.png",
    id: 1,
    // title: "Text Animations",
    // description: "Cool text animations for your projects.",
    // id: 1,
    // icon: <FiFileText className="carousel-icon" />,
  },
  {

    img: "./prj2.png",
    id: 2,
  },
  {
    img: "./prj3.png",
    id: 3,
  },
  {
    img: "./prj4.png",
    id: 4,
  },

]
}

const project1 = {
  description: {
    title: "Let’sTour – Travel Vehicle & Hotel Rental Platform",
    desc: "Designed and implemented a full-stack web application for vehicle rentals and hotel bookings using Django (Python) for backend development, MySQL for data management, and HTML, CSS, Bootstrap for a responsive user interface."
  },
  img: [
  {
    img: "./prj21.png",
    id: 1,
    // title: "Text Animations",
    // description: "Cool text animations for your projects.",
    // id: 1,
    // icon: <FiFileText className="carousel-icon" />,
  },
  {

    img: "./prj22.png",
    id: 2,
  },
  {
    img: "./prj23.png",
    id: 3,
  },
  {
    img: "./prj24.png",
    id: 4,
  },

]


  
}

function App() {



  return (
    <>

      <ClickSpark
        sparkColor='white'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}

      >

        <div id='introwel-container' className='w-full h-dvh relative z-99' >

          <IntroWelcome name="introweb"></IntroWelcome>


        </div>

        <Skills></Skills>
        <div className='project-container' id='project'>
          <header className="text-amber-100 text-center text-5xl my-20" id="project-header" >PROJECTS</header>

          <Project direction={1} prj_details={project1}></Project>
          <Project direction={2} prj_details={project2}></Project>



        </div>
        <Contactme></Contactme>
        <Nav></Nav>
        <Footer></Footer>
      </ClickSpark>
    </>
  )
}

export default App;
