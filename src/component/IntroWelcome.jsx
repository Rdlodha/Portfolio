import React from "react";
import './IntroWelcome.css';
import ClickSpark from "../../Reactbits/ClickSpark/ClickSpark";
import ProfileCard from "../../Reactbits/ProfileCard/ProfileCard"
import Particles from "../../Reactbits/Particles/Particles";
export default function IntroWelcom() {


    return (

        <div class="absolute w-full h-lvh flex flex-col-reverse items-center justify-around lg:flex-row text-amber-50 " id="home">
            <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200} //200
    particleSpread={9 }  //9
    speed={1.5}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={true}
    disableRotation={true}
    
    
    />

    <section name="intro-text" class="inline-flex w-full z-0 px-4">
                <div class="w-full">
                    <h3 class="text-5xl">
                        Hello,
                    </h3>

                    <h1 class="text-6xl">
                        MY NAME IS RISHI
                    </h1>
                </div>
            </section>


            
    <section name="profile-card" class="inline-flex w-full justify-center top-10 z-100">
                
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