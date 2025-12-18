import React from "react";
import './IconSliderR.css';
import bootstrap from '../assets/icon/bootstrap.png'
import css from '../assets/icon/css-3.png'
import html from '../assets/icon/html-5.png'
import js from '../assets/icon/js.png'
import mysql from '../assets/icon/mysql.png'
import programing from '../assets/icon/programing.png'
import computernetwork from '../assets/icon/computer.png'
import science from '../assets/icon/science.png'


export default function IconSlider() {
    return(
        <div className="icon-slider-track text-amber-50 flex justify-around items-center ">
                <div className="icon-slide-2">
                    <i className="fab fa-html5"><img src={bootstrap} alt={bootstrap} className="size-10" /></i>
                </div>
                <div className="icon-slide-2">
                    <i className="fab fa-css3-alt"><img src={css} alt={css} className="size-10" /></i>
                </div>
                <div className="icon-slide-2">
                    <i className="fab fa-js"><img src={js} alt={js} className="size-10" /></i>
                </div>
                <div className="icon-slide-2">
                    <i className="fab fa-react"><img src={html} alt={html} className="size-10" /></i>
                </div>
                <div className="icon-slide-2">
                    <i className="fas fa-database"><img src={mysql} alt={mysql} className="size-10" /></i>
                </div>
                <div className="icon-slide-2">
                    <i className="fas fa-network-wired"><img src={computernetwork} alt={computernetwork} className="size-10" /></i>
                </div>
                <div className="icon-slide-2">
                    <i className="fas fa-flask"><img src={science} alt={science} className="size-10" /></i>
                </div>
                 <div className="icon-slide-2">
                    <i className="fab fa-css3-alt"><img src={programing} alt={programing} className="size-10" /></i>
                </div>
            </div>
    );
}


