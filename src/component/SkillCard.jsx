import React from "react";
import './SkillCard.css';

export default function SkillCard({ technologie, name }) {
    return (
        <div
            className="group w-full sm:w-3/4 md:w-2/5 lg:w-1/5 min-h-[220px] md:min-h-[300px] border-2 flex flex-col overflow-hidden rounded-2xl shadow-2xl hover:shadow-gray-700 hover:scale-105 transition-all duration-300 transform animation-name skill-card"
        >
            <header className="w-full flex justify-center items-center h-12 md:h-14 text-lg md:text-xl text-black group-hover:text-white px-4">
                {name}
            </header>
            <div className="w-full flex-1 flex justify-center rounded-2xl flex-wrap gap-2 p-3 md:p-4">
                {technologie.map((prop, index) => (
                    <div
                        key={index}
                        className="w-1/2 md:min-w-auto md:max-w-2/5   flex  "
                    >
                        <div
                            name="skillname"
                            className="min-w-full  h-8 md:min-h-fit flex items-center  justify-center text-sm md:text-base mx-1 bg-white hover:scale-105 border-2 border-transparent hover:border-blue-500 shadow-sm hover:shadow-blue-500 rounded-xl text-center transition"
                        >
                           {prop}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}