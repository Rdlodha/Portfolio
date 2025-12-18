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
  
<Project direction={1}></Project>
<Project direction={2}></Project>



</div>
<Contactme></Contactme>
<Nav></Nav>
<Footer></Footer>
</ClickSpark>
    </>
  )
}

export default App;
