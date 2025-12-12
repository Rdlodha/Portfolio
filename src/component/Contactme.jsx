import React, { useState } from "react";
import axios from "axios";
import resume from '../assets/cv_PNG30.png';
import ProfileCard from "../../Reactbits/ProfileCard/ProfileCard"



export default function Contactme() {
    const handleSubmit = (e) => {
        const res = axios.post("http://localhost:4000/submit", form);
        console.log(res);
        alert("formsubmit succesfully...");
    }
    const [form, setForm] = useState({ name: "", email: "", message: "" })
    return (
        <>
       
            <div className="w-full h-[300px]  mt-2  flex flex-col  md:flex-row text-white" id="contact">

                <section className="w-1/2 md:w-full  self-center" id="resume-container">

                    <div className="w-full h-full flex justify-center items-center">
                        
                        <a href="https://drive.usercontent.google.com/uc?id=1RzJc83VrqLRMocEKrBThL-9iDhzcwsbe&export=download" target="_self" type="file" rel="noopener noreferrer"><img className="size-20 md:size-50"  src={resume} alt="doens" /></a>
                        

                    </div>

                </section>


                <section className=" w-full flex flex-col justify-center items-center text-amber-50" id="form-container" >
                    <h4>
                        Contact me
                    </h4>
                    <form
                        // action="http://localhost:4000/submit"  method="POST" 
                        onSubmit={(e) => handleSubmit(e.preventDefault())}
                        className="w-5/6 md:w-full flex items-center flex-col">
                        <div className="w-full md:w-1/2 flex  py-1 my-2">
                            <label htmlFor="name" className=" block text-[18px] w-20 ">Name:</label>
                            <input type="text" className="" name="name" id="name" onChange={(e) => setForm({ ...form, name: e.target.value })} className=" outline-2 w- outline-neutral-400 focus:outline-blue-500 w-full inline-block rounded-md mr-1 " />
                        </div>
                        <div className="w-full md:w-1/2 flex  my-2 focus:outline-0">
                            <label htmlFor="email" className="block text-[18px] w-19" >Email:</label>
                            <input type="email" name="email" id="email" onChange={(e) => { setForm({ ...form, email: e.target.value }) }} className="outline-2 outline-neutral-400 focus:outline-blue-500 focus:invalid:outline-orange-700 w-full inline-block rounded-md my-1 mr-1 " />
                        </div>


                        //why this clg not working here///////// <textarea name="message" onClick={(e)=>{ }} placeholder="enter your messege here.." id="message" onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full md:w-1/2 h-22 border placeholder-gray-400 transition-all duration-2000" ></textarea>

                        <button type="submit"

                            className= "block mx-[50%] bg-green-500 w-fit p-2 rounded-md">send</button>
                    </form>
                </section>

            </div>
        </>
    )
}