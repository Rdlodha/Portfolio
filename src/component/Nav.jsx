import React from "react";
export default function Nav(){
    return(
        <nav>
            
            
            <div name='navcontainer'className="flex w-1/3 justify-self-center h-fit my-5  fixed text-white top-0 border   text-center rounded-2xl z-1000">
            
            <div className=" flex-1 hover:animate-bounce py-2 w-full h-full hover:text-cyan-300 " ><a href="#home" className="py-4">HOME</a></div>
            <div className=" flex-1 hover:animate-bounce w-full h-full py-2 hover:text-cyan-300"><a href="#skill" className="py-4">SKILLS</a></div>
            <div className=" flex-1 hover:animate-bounce w-full h-full py-2 hover:text-cyan-300"><a href="#project" className="py-4">PROJECTS</a></div>

            <div className=" flex-1 hover:animate-bounce py-2 hover:text-cyan-300 h-full w-full"><a href="#contact" className="py-4">CONTACT</a></div>

            </div>
            
        </nav>




    )
}