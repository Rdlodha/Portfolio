import React from "react";
import './IntroWelcome.css';
import ClickSpark from "../../Reactbits/ClickSpark/ClickSpark";
import ProfileCard from "../../Reactbits/ProfileCard/ProfileCard"
import Particles from "../../Reactbits/Particles/Particles";
export default function IntroWelcom() {


    return (

        <div class="absolute w-full h-lvh flex  justify-around items-center z-20" id="home">
            <Particles
    particleColors={['white', 'blue']}
    particleCount={1} //200
    particleSpread={0 }  //9
    speed={1.5}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={true}
    disableRotation={true}
    
    />

    <section name="intro-text" class="inline-block z-0">
                <div class="w-full">
                    <h3 class="text-5xl">
                        Hello,
                    </h3>

                    <h1 class="text-6xl">
                        My Name Is Lodha Rishi
                    </h1>
                </div>
            </section>


            
    <section name="profile-card" class="inline-block z-100">
                
                <ProfileCard
  name="R.D LODHA"
  title="Full stack,React,CyberSecurity"
  handle="javicodes"
  status="Online"
  contactText="Contact Me"
  avatarUrl="./avatar-removebg-preview.png"
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={true}
  onContactClick={() => console.log('Contact clicked')}
/>

            </section>


            









        </div>
    )
}