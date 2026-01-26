import React from 'react'
import TimeLine from '../src/component/TimeLine';

import Carousel from '../Reactbits/Carousel/Carousel';

 

// const asd = JSON.parse(prj1)
// console.log(asd)


export default function Projects({direction,prj_details}=props){
const {title,desc}=prj_details.description;
const {img}=prj_details;
console.log("these is prjdetails:",{...prj_details})


  


    
    return(
<div
  id="project"
  className={`relative flex flex-col md:flex-row items-center md:justify-center w-full text-white overflow-x-hidden border p-2 rounded-2xl md:border-0  md:mb-0 mb-20 ${
    direction % 2 === 0 ? 'md:flex-row flex-col' : 'md:flex-row-reverse flex-col'
  }`}
>
        
        <div name="prj-slider" className="flex justify-center md:justify-around w-full md:py-10 min-h-full "><Carousel
        items = {img}
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
        <h1 className='text-[20px]'>{title}</h1>
        <br />
        <p>{desc}</p>

    </section>
        
    </div>
    );
}