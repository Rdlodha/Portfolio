import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClickSpark from '../Reactbits/ClickSpark/ClickSpark'
import Particles from '../Reactbits/Particles/Particles'
import IntroWelcome from './component/IntroWelcome'
import Project from './component/Projects'
import Skills from './component/Skills'
import Contactme from './component/Contactme'
import Nav from './component/Nav'
import Footer from './component/Footer.jsx'
import prj21 from '../src/assets/prj21.png'
import prj22 from '../src/assets/prj22.png'
import prj23 from '../src/assets/prj23.png'
import prj24 from '../src/assets/prj24.png'
import prj1 from '../src/assets/prj1.png'
import prj2 from '../src/assets/prj2.png'
import prj3 from '../src/assets/prj3.png'
import prj4 from '../src/assets/prj4.png'

const images=[
    {
      img:prj21,
      id:1,
      // title: "Text Animations",
      // description: "Cool text animations for your projects.",
      // id: 1,
      // icon: <FiFileText className="carousel-icon" />,
    },
    {

      img:prj22,
      id:2,
    },
    {
      img:prj23,
      id:3,
    },
    {
      img:prj24,
      id:4,
    },
    
  ];
  const images2=[
    {
      img:prj1,
      id:1,
      // title: "Text Animations",
      // description: "Cool text animations for your projects.",
      // id: 1,
      // icon: <FiFileText className="carousel-icon" />,
    },
    {

      img:prj2,
      id:2,
    },
    {
      img:prj3,
      id:3,
    },
    {
      img:prj4,
      id:4,
    },
    
  ];

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

<div id='introwel-container'  className='w-full h-dvh relative z-99' >
    
     <IntroWelcome name="introweb"></IntroWelcome>
  

</div>

<Skills></Skills>
<div className='project-container' id='project'>
  <header className="text-amber-100 text-center text-5xl my-20" id="project-header" >PROJECTS</header>
  
<Project direction={1} DEFAULT_ITEMS={images} onclic={()=>console.log(images)}></Project>
<Project direction={2} DEFAULT_ITEMS={images2}></Project>



</div>
<Contactme></Contactme>
<Nav></Nav>
<Footer></Footer>
</ClickSpark>
    </>
  )
}

export default App;
