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


function App() {


  return (
    <>
    
<ClickSpark
  sparkColor='#f9ff'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>

<div style={{ width: '100%', height: '100vh ', 
  position: 'relative' ,zIndex:'99'
   }} >
    
     <IntroWelcome></IntroWelcome>
  {/* <Particles
    particleColors={['#ffffff6', '#00ffff']}
    particleCount={400}
    particleSpread={10}
    speed={1.5}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={true}
    disableRotation={true}
    
    /> */}
  

</div>

<Skills></Skills>
<div className='project-container' id='project'>
<Project direction={1}></Project>
<Project direction={2}></Project>

</div>
<Contactme></Contactme>
<Nav></Nav>
</ClickSpark>
    </>
  )
}

export default App
