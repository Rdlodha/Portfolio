import React from "react";
import './IntroWelcome.css';
import ClickSpark from "../../Reactbits/ClickSpark/ClickSpark";
import ProfileCard from "../../Reactbits/ProfileCard/ProfileCard"
import Particles from "../../Reactbits/Particles/Particles";
export default function IntroWelcom() {


    return (

        <div className="absolute w-full h-full flex flex-col-reverse items-center justify-center md:justify-around lg:flex-row text-amber-50 mb-4 border-4 mt-0 md:border-8 sm:border-purple-600 box-border " id="home">
            <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={50}
    particleSpread={9}
    speed={1.5}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={true}
    disableRotation={true}
    />

    <section name="intro-text" className="inline-flex z-0 px-4 w-fit border-purple-500 border-2 align-middle justify-center flex-col gap-4 md:gap-8 lg:gap-12 py-4 md:py-8 lg:py-12 bg-black bg-opacity-50  shadow-lg">
                <div className="w-full">
                    <h3 className="text-5xl">
                        Hello,
                    </h3>

                    <h1 className="text-6xl">
                        MY NAME IS RISHI
                    </h1>
                </div>
            </section>


            
    <section name="profile-card" className="inline-flex z-100">
                
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