import React from "react";
import './TimeLine.css'
export default function TimeLine({direction}=props){
    console.log("from time line :",direction)
    return<>
    <div className='timeline h-full my-1 '>
        <div className="vl ">
            <div className="dot" 
            // style={{justifyContent:direction==='right'?'flex-end':flex-start}}
            style={{ justifyContent: direction%2 == 0 ? "flex-end" :"flex-start"}}
            ><div className="direction" ></div></div>
        </div>
    </div>
    </>
}