import React, { useState } from "react";
import axios from "axios";
import resume from '../assets/cv_PNG30.png';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import { faInstagram,faLinkedin } from "@fortawesome/free-brands-svg-icons";



export default function Contactme() {
    const handleSubmit = (e) => {
        const res = axios.post("http://localhost:4000/submit", form);
        console.log(res);
        alert("formsubmit succesfully...");
    }
    const [form, setForm] = useState({ name: "", email: "", message: "" })
    return (
        <>
        <h1 className="text-amber-50 text-center text-5xl  my-20">LETS CONNECT</h1>
        <div className="w-5/6 mx-auto mt-10 text-gray-500"><hr /></div>
    
       
   <div id="social-media" className="w-1/2 flex mx-auto my-2 justify-around items-center text-white  "  >

 <a href="#name" target="_self" className="group "> <span className="invisible text-transparent text-no group-hover:visible absolute group-hover:text-white group-hover:translate-x-[-200px] duration-400 fade-out  ">
                    rdlodha007@gmail.com
                </span><FontAwesomeIcon icon={faEnvelope} className="scale-150 hover:scale-170 "/></a>
      <a href="tel:+919023697300" target="_blank" className="group"><span className="invisible text-transparent text-no group-hover:visible absolute group-hover:text-white group-hover:translate-x-[-150px] duration-400 fade-out  ">
                    +919023697300
                </span><FontAwesomeIcon icon={faPhone} className="scale-150 hover:scale-170" /> </a>
<FontAwesomeIcon icon={faInstagram} className="scale-150 hover:scale-170"/>
<a href="http://www.linkedin.com/in/rishi-lodha-aa75412b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=all" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="scale-150 hover:scale-170"/></a>
                </div>
                <div className="w-5/6 mx-auto text-gray-500"><hr /></div>
        
       
            <div className="w-full h-[40vh]  mt-2  flex flex-col  md:flex-row text-white" id="contact">
               
               
                
 

                <section className="w-1/2 md:w-full  self-center  my-5" id="resume-container">

                    <div className="w-full h-full flex justify-center items-center  ">
                        
                        <a href="https://drive.usercontent.google.com/uc?id=1RzJc83VrqLRMocEKrBThL-9iDhzcwsbe&export=download" target="_self" type="file" rel="noopener noreferrer"><i className=" md:text-2xl border p-4 hover:bg-amber-50 hover:text-black transition-all ease-in duration-300   "> download resume</i></a>
                        

                    </div>

                </section>


<div className="w-5/6 mx-auto md:hidden my-5"><hr />

</div>
                <section className=" w-full flex flex-col justify-center items-center text-amber-50" id="form-container" >
                    <h4>
                        CONNECT WITH ME
                    </h4>
                    <form
                        // action="http://localhost:4000/submit"  method="POST" 
                        onSubmit={(e) => handleSubmit(e.preventDefault())}
                        className="w-5/6 md:w-full flex items-center flex-col">
                        <div className="w-full md:w-1/2 flex justify-center items-center   my-2">
                            <label htmlFor="name" className=" block text-[20px] w-20 ">Name:</label>
                            <input type="text"  name="name" id="name" onChange={(e) => setForm({ ...form, name: e.target.value })} className=" p-2 border transition-all duration-2000 w-full inline-block rounded-sm mr-1 " />
                        </div>
                        <div className="w-full md:w-1/2 flex items-center justify-center  my-2 focus:outline-0">
                            <label htmlFor="email" className="block text-[20px] w-20" >Email:</label>
                            <input type="email" name="email" id="email" onChange={(e) => { setForm({ ...form, email: e.target.value }) }} className=" p-2  border transition-all duration-2000 focus:invalid:outline-3 focus:invalid:border-0 focus:invalid:duration-75 focus:invalid:outline-orange-700 w-full inline-block rounded-sm my-1 mr-1 " />
                        </div>


                      <textarea name="message" placeholder="enter your messege here.." id="message" onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full md:w-1/2 h-22 p-2 border placeholder-gray-400 transition-all duration-2000" ></textarea>

                        <button type="submit"

                            className= "block bg-green-500 w-full md:w-1/2 mt-4 mx-auto p-2 rounded-md">send</button>
                    </form>
                </section>

            </div>
        </>
    )
}