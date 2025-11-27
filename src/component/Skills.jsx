import React from "react";
import SkillCard from "./SkillCard";
import './Skills.css'
export default function Skills() {

    const technologies = {
        frontend: ["HTML5", "CSS3", "JAVASCRIPT", "ES6", "BOOTSTRAP", "REACT"],
        backend: ["NODE.JS", "EXPRESS.JS"],
        database: ["MONGODB", "MONGOOSE", "MYSQL"],
        core: ["COMPUTER NETWORK"]
    };
    return (
        <>
        <header className="text-amber-100 text-center text-5xl mt-20" id="skill" >SKILLS</header>

            <div className="flex justify-around my-20 flex-wrap mx-3 gap-3 md:gap-5 z-100">
                
            <SkillCard technologie={technologies.frontend} name={"FRONTEND"}></SkillCard>
            <SkillCard technologie={technologies.backend} name={"BACKEND"}></SkillCard>
            <SkillCard technologie={technologies.core} name={"CORE"}></SkillCard>
            <SkillCard technologie={technologies.database} name={"DATABASE"}></SkillCard>

            </div>
           
            
            
        </>
    )
}