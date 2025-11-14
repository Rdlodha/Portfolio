import React from "react";
export default function Nav(){
    return(
        <nav>
            
            
            <div className="flex w-1/3 justify-self-center h-fit my-5 py-2 fixed text-white top-0 border-2 bg-linear-to-b from-gray-700 to-blue-500 border-black  text-center rounded-2xl z-1000">
            
            <div className=" flex-1" ><a href="#home">HOME</a></div>
            <div className=" flex-1   "><a href="#skill">SKILLS</a></div>
            <div className=" flex-1   "><a href="#project">PROJECTS</a></div>

            <div className=" flex-1 "><a href="#contact">CONTACT</a></div>

            </div>
            
        </nav>




    )
}