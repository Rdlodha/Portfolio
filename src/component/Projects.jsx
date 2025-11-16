import React from 'react'
import TimeLine from './TimeLine';
import './Projects.css'
import Carousel from '../../Reactbits/Carousel/Carousel';
import prj1 from '../assets/prj1.png';
import prj2 from '../assets/prj2.png';
import prj3 from '../assets/prj3.png';
import prj4 from '../assets/prj4.png';
 

// const asd = JSON.parse(prj1)
// console.log(asd)


export default function Projects({direction}=props){


   const DEFAULT_I =[
  {
    img:prj1,
    id:1,
    // title: "Text Animations",
    // description: "Cool text animations for your projects.",
    // id: 1,
    // icon: <FiFileText className="carousel-icon" />,
  },
  {
    img:prj2,
    id:2,
  },
  {
    img:prj3,
    id:3,
  },
  {
    img:prj4,
    id:4,
  },
  
];


    console.log(direction)
    return(
        <div className='project overflow-x-hidden ' 
        style={{ flexDirection: direction%2 == 0 ? "" : "row-reverse"}}
        >
        <div className="prj-slider py-10 min-h-full "><Carousel
        items = {DEFAULT_I}
    baseWidth={300}
    autoplay={true}
    autoplayDelay={3000}
    pauseOnHover={true}
    loop={true}
    round={false} 
    
  /> </div>
               
    <TimeLine direction={direction}></TimeLine>
    <div className='prj-info min-h-full '>
        <h3>🕒 LineUp – A Smart Virtual Queue Management System</h3>
        <p>LineUp is a MERN stack web application designed to simplify waiting experiences through virtual queueing. Users can book appointments for services like salons, banks, or cafes and receive real-time updates on their position in the queue. Operators manage bookings efficiently using an admin dashboard with live status updates. The platform also supports OTP-based login for secure and seamless access.</p>

    </div>
        
    </div>
    );
}