import React from "react";
import './SkillCard.css';
export default function SkillCard({ technologie, name }) {
    console.log(technologie)
    return (
        <div
            className="group w-1/5 h-[300px] border-2 flex flex-col overflow-clip rounded-2xl bg-gray-700 shadow-2xl transition-all delay-5 duration-300 transform hover:shadow-blue-500 hover:scale-105 animation-name"
        >
            <header className="w-full flex-1 flex justify-center h-1/6 text-3xl text-amber-50 group-hover:text-blue-400">
                {name}
            </header>
            <div className="w-full flex-5 flex justify-center items-center rounded-2xl flex-wrap px-3">
                {technologie && technologie.map((e, key) => {
                    console.log('this is e:', e, '\nthis is key:', key)
                    return (
                        <div
                            key={key}
                            className="max-w-fit min-w-1/2 flex transition"
                        >
                            <div
                                className="w-full h-10 flex items-center justify-center px-2 text-sm mx-1.5 bg-white hover:scale-110 border-2 border-transparent hover:border-blue-500 shadow-lg hover:shadow-blue-500 rounded-2xl text-center transition"
                            >
                                {e}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}   