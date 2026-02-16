import { useState } from "react";
import Navbar from "../component/Navbar";
import {Mail, MapPinHouse, Phone } from "lucide-react";
import Input from "../component/Input";
import Button from "../component/Button";
function Contact() {
const [user, setUser]=useState({
  email:"",
  password:""
})

  return (
    <div className="min-h-screen bg-gray-50 text-textMain px-6 py-16">
      <Navbar/>
      <div className="text-center mb-12 mt-7">
        <h1 className="text-4xl font-bold text-[#2b92f3] mb-3">
          Contact Us
        </h1>
        <p className="text-[#554d47] text-lg">
          We're here to help you anytime
        </p>
      </div>

      <div className="max-w-full  md:px-10 mx-auto flex  flex-col md:flex-row  gap-10">
        <div className="bg-white p-8 h-auto rounded-2xl md:w-1/2 w-full shadow-lg">
          <h2 className="text-2xl font-semibold text-[#2b92f3] mb-6">
            Get In Touch
          </h2>

          <div className="space-y-5 ">
            <p className=" flex items-center gap-2 cursor-pointer">
              <span className="font-semibold flex items-center gap-1 "><MapPinHouse size={17} strokeWidth={2.5} className="text-red-800" /> Address:</span> Loni Pravara, India
            </p>

            <p className=" flex items-center gap-2 cursor-pointer">
              <a href="tel:+919876543210" className="flex gap-2"><span className="font-semibold flex items-center gap-1 "><Phone size={17} strokeWidth={2.5} className="text-red-800" /> Phone:</span> +91 98765 43210</a>
            </p>

            <p className=" flex items-center gap-2 cursor-pointer">
            <a href="mailto:support@helpora.com" className="flex gap-2">   <span className="font-semibold flex items-center gap-1 "><Mail size={17} strokeWidth={2.5} className="text-red-800" />Email:</span> support@helpora.com</a>
            </p>
          </div>
        </div>


        <div className="bg-white p-8 rounded-2xl md:w-1/2 w-full shadow-lg">
        <h3 className="text-2xl font-semibold mb-6  text-[#2b92f3] ">Send a Message</h3>
       <div className='w-full p-3 flex flex-col gap-5  '>
         <div className='flex flex-col gap-2'>
            <label className=' text-[15px] text-gray-700 ' >Name</label>
            <Input placeholder='Your Name' type='text'  onChange={(e)=>{
              
            }} />
          </div>
          <div className='flex flex-col gap-2'>
            <label className=' text-[15px] text-gray-700 ' >Email</label>
            <Input placeholder='you@example.com' type='email'  onChange={(e)=>{
              
            }} />
          </div>

          <div className='flex flex-col gap-2'>
            <label className=' text-[15px] text-gray-700 ' >Subject</label>
            <Input placeholder='How can we help you ?' type='email'  onChange={(e)=>{
              
            }} />
          </div>
           <div className='flex flex-col gap-2 mb-3'>
            <label className=' text-[15px] text-gray-700 ' >Message</label>
            <textarea
            placeholder="Your Message" rows="4" required      className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <Button title={" Send Message"} />
       </div>
          
       </div>
       </div>

       

      </div>
    
 
  );
}

export default Contact;