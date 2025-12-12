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
<div
  id="project"
  className={`relative flex flex-col md:flex-row items-center md:justify-center w-full text-white overflow-x-hidden border p-2 rounded-2xl md:border-0  md:mb-0 mb-20 ${
    direction % 2 === 0 ? 'md:flex-row flex-col' : 'md:flex-row-reverse flex-col'
  }`}
>
        
        <div name="prj-slider" className="flex justify-center md:justify-around w-full md:py-10 min-h-full "><Carousel
        items = {DEFAULT_I}
    baseWidth={300}
    autoplay={true}
    autoplayDelay={3000}
    pauseOnHover={true}
    loop={true}
    round={false} 
    
  /> </div>
              <hr className='w-5/6 mt-2.5 md:hidden'/>
    <TimeLine direction={direction}></TimeLine>
    <section name='prj-info' className='box-border w-full px-10  md:px-24 justify-center min-h-full mt-10 md:mt-0 '>
        <h1 className='text-[20px]'>🕒 LineUp – A Smart Virtual Queue Management System</h1>
        <br />
        <p>LineUp is a MERN stack web application designed to simplify waiting experiences through virtual queueing. Users can book appointments for services like salons, banks, or cafes and receive real-time updates on their position in the queue. Operators manage bookings efficiently using an admin dashboard with live status updates. The platform also supports OTP-based login for secure and seamless access.</p>

    </section>
        
    </div>
    );
}