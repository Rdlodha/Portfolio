import React from "react";
import './IntroWelcome.css';
import ClickSpark from "../../Reactbits/ClickSpark/ClickSpark";
import ProfileCard from "../../Reactbits/ProfileCard/ProfileCard"
import Particles from "../../Reactbits/Particles/Particles";
import TextType from "../../Reactbits/TextType";
export default function IntroWelcom() {


    return (

        <div className="absolute w-full  h-full flex flex-col-reverse items-center justify-center md:justify-around lg:flex-row text-amber-50 mt-0 md:border-8 md:border-[#f5f1f7] box-border " id="home">
            <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200} //200 particles
    particleSpread={9}
    speed={1.5}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={true}
    disableRotation={true}
    />

    <section name="intro-text" className=" inline-flex relative  z-0 px-4 w-fit md:border-gray-50 md:border-2 align-middle justify-center flex-col gap-4 md:gap-8 lg:gap-12 py-4 md:py-8 lg:py-12  bg-opacity-50  shadow-lg">
                <div className="w-full mx-5 mb:mx-0 relative mb-[-100px] md:mb-0">
                    <h1 className="text-5xl w-full">
                        HELLO,
                    </h1>
                    <h2 className="text-4xl">
                        MY NAME IS RISHI LODHA  
                    </h2>
                    <h1 className="text-3xl mt-2 text-gray-300">
                        <TextType 
  text={["Full stack developer", "REACT developer", "cyber security enthusiast"]}
  typingSpeed={75}
  pauseDuration={2000}
  showCursor={true}
  cursorCharacter="|"
/>
                    </h1>
                </div>
               
            </section>


            
    <section name="profile-card" className="inline-flex mb-10 z-100">
                
                <ProfileCard
  name="R.D LODHA"
  title="Full stack,React,CyberSecurity"
  handle="RDlodha007"
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