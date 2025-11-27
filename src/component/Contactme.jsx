import React, { useState } from "react";
import axios from "axios";
import ProfileCard from "../../Reactbits/ProfileCard/ProfileCard"



export default function Contactme(){
const handleSubmit= (e)=> {
    const res=axios.post("http://localhost:4000/submit",form);
    console.log(res);
    alert("formsubmit succesfully...");
}
const [form, setForm] = useState({name:"",email:"",message:""})
    return(
        <>
        <div className="w-full h-[300px] flex justify-between items-center mt-2 px-22" id="contact">
            <div className="w-full" >
              <h4>
                Contact me 
              </h4>
              

            </div>
            <div className="w-full flex  justify-center " >
                <form 
                // action="http://localhost:4000/submit"  method="POST" 
                onSubmit={(e)=>handleSubmit(e.preventDefault())}
                className="w-1/2">
                <div className="flex border-2 py-1 my-2">
                    <label htmlFor="name" className=" block text-[18px] w-20 ">Name:</label>
                    <input type="text" name="name" id="name" onChange={(e)=>setForm({...form,name: e.target.value})} className= " outline-2 w- outline-neutral-400 focus:outline-blue-500 w-full inline-block rounded-md mr-1 " /> 
                </div>
                <div className="flex border-2 my-2 focus:outline-0">
                    <label htmlFor="email" className="block text-[18px] w-19" >Email:</label>
                    <input type="email" name="email" id="email" onChange={(e)=>{setForm({...form,email:e.target.value})}} className= "outline-2 outline-neutral-400 focus:outline-blue-500 focus:invalid:outline-orange-700 w-full inline-block rounded-md my-1 mr-1 "/>  
                </div>
                
                
                <textarea name="message" id="message" onChange={(e)=>setForm({...form,message:e.target.value})}className="w-full h-22 border-2" ></textarea>
                <button type="submit"  
                
                 className="bg-green-500 w-fit p-2 rounded-md">send</button>
                </form>
            </div>
        </div>
        </>
    )
}