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
        <div class="w-full h-[300px] flex justify-between items-center mt-2 px-22" id="contact">
            <div class="w-full" >
              <h4>
                Contact me 
              </h4>
              

            </div>
            <div class="w-full flex  justify-center " >
                <form 
                // action="http://localhost:4000/submit"  method="POST" 
                onSubmit={(e)=>handleSubmit(e.preventDefault())}
                class="w-1/2">
                <div class="flex border-2 py-1 my-2">
                    <label htmlFor="name" class=" block text-[18px] w-20 ">Name:</label>
                    <input type="text" name="name" id="name" onChange={(e)=>setForm({...form,name: e.target.value})} class= " outline-2 w- outline-neutral-400 focus:outline-blue-500 w-full inline-block rounded-md mr-1 " /> 
                </div>
                <div class="flex border-2 my-2 focus:outline-0">
                    <label htmlFor="email" class="block text-[18px] w-19" >Email:</label>
                    <input type="email" name="email" id="email" onChange={(e)=>{setForm({...form,email:e.target.value})}} class= "outline-2 outline-neutral-400 focus:outline-blue-500 focus:invalid:outline-orange-700 w-full inline-block rounded-md my-1 mr-1 "/>  
                </div>
                
                
                <textarea name="message" id="message" onChange={(e)=>setForm({...form,message:e.target.value})}class="w-full h-22 border-2" ></textarea>
                <button type="submit"  
                
                 class="bg-green-500 w-fit p-2 rounded-md">send</button>
                </form>
            </div>
        </div>
        </>
    )
}