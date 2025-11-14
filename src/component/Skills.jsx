import React from "react";
import SkillCard from "./SkillCard";
import './Skills.css'
export default function Skills() {

    const technologies = {
        frontend: ["HTML5", "CSS3", "JAVASCRIPT", "ES6", "BOOTSTRAP", "REACT"],
        backend: ["NODE.JS", "EXPRESS.JS"],
        database: ["MONGODB", "MONGOOSE", "MYSQL"],
        core: ["COMPUTER_NETWORK"]
    };
    return (
        <>

            <div className="flex justify-around my-20 " id="skill">
            <SkillCard technologie={technologies.frontend} name={"FRONTEND"}></SkillCard>
            <SkillCard technologie={technologies.backend} name={"BACKEND"}></SkillCard>
            <SkillCard technologie={technologies.core} name={"CORE"}></SkillCard>
            <SkillCard technologie={technologies.database} name={"DATABASE"}></SkillCard>

            </div>
           
            
            
        </>
    )
}