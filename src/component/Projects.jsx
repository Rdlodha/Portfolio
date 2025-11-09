import React from 'react'
import TimeLine from './TimeLine';
import './Projects.css'
import Carousel from '../../Reactbits/Carousel/Carousel';
export default function Projects({direction}=props){
    console.log(direction)
    return(
        <div className='project ' 
        style={{ flexDirection: direction%2 == 0 ? "" : "row-reverse"}}
        >
        <div className="prj-slider py-10  "><Carousel
    baseWidth={300}
    autoplay={true}
    autoplayDelay={3000}
    pauseOnHover={true}
    loop={true}
    round={false}
  /> </div>
               
    <TimeLine direction={direction}></TimeLine>
    <div className='prj-info'>
        <h3>🕒 LineUp – A Smart Virtual Queue Management System</h3>
        <p>LineUp is a MERN stack web application designed to simplify waiting experiences through virtual queueing. Users can book appointments for services like salons, banks, or cafes and receive real-time updates on their position in the queue. Operators manage bookings efficiently using an admin dashboard with live status updates. The platform also supports OTP-based login for secure and seamless access.</p>

    </div>
        
    </div>
    );
}