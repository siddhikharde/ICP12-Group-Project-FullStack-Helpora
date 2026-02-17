import { useState } from "react";
import Navbar from "../component/Navbar";
import {Mail, MapPinHouse, Phone } from "lucide-react";
import Input from "../component/Input";
import Button from "../component/Button";
import toast, { Toaster } from "react-hot-toast";
import Footer from "../component/Footer"
function Contact() {
const [formData, setFormData]=useState({
   name: "",
   email: "",
   message: "",
})
const saveData=()=>{
  const {name, email, message}=formData;
  if(!name || !email || !message ){
    toast.error("All fields are required", {id:"submitFailed"});
    return;
  }

  toast.success("Message sent successfully!", {id:"savesuccess"});
setFormData({
  name: "",
  email: "",
  message: ""
});
}

  return (
    <>
     <Navbar/>
    <div className="min-h-screen bg-gray-50 px-6 py-16">
     
      <div className="text-center mb-12 mt-10">
        <h1 className="text-5xl md:text-7xl font-bold text-[#2b92f3] mb-3">
          Contact Us
        </h1>
        <p className="text-[#554d47] text-lg">
          We're here to help you anytime
        </p>
      </div>

      <div className="max-w-full  md:px-10 mx-auto flex  flex-col md:flex-row  gap-10">
        <div className=" md:p-8 h-auto rounded-2xl md:w-1/2 w-full">
          <h2 className="text-2xl font-semibold text-[#2b92f3] mb-6">
            Get In Touch
          </h2>

          <div className="space-y-5 ">
           <div className="flex items-center gap-5 bg-white p-8 h-auto rounded-2xl  shadow-lg">
           <p className=" flex items-center w-12 h-12 justify-center p-3 rounded-md cursor-pointer bg-[#d4ebff]">
             <MapPinHouse size={18} strokeWidth={2.5} className="text-[#2b92f3]" />
           </p>
             <div className=" flex flex-col gap-0.5 items-start  cursor-pointer">
              
              <span className="font-semibold flex items-center gap-1 "> Address:</span>
               <p className="text-sm">Loni Pravara, India</p>
               <p className="text-[12px] text-[#554d47]">Loni, 413 736 </p>
            </div>
           </div>
             <div className="flex items-center gap-5 bg-white p-8 h-auto rounded-2xl  shadow-lg">
               <a href="tel:+919876543210" className="flex gap-5 items-center justify-center">
                 <p className=" flex items-center w-12 h-12 justify-center p-3 rounded-md cursor-pointer bg-[#d4ebff]">
                  <Phone size={18} strokeWidth={2.5} className="text-[#2b92f3]"  /> </p>
                  <div className=" flex flex-col gap-0.5 items-start  cursor-pointer">
                      <span className="font-semibold flex items-center gap-1 ">Phone:</span> 
                      <p className="text-sm">  +91 98765 43210</p>
                      <p className="text-[12px] text-[#554d47]"> Mon-Fri,  9am-6pm</p>
                  </div>
               </a>
             </div>

             <div className="flex items-center gap-5 bg-white p-8 h-auto rounded-2xl  shadow-lg">
               <a href="mailto:support@helpora.com" className="flex gap-5 items-center justify-center">
                 <p className=" flex items-center w-12 h-12 justify-center p-3 rounded-md cursor-pointer bg-[#d4ebff]">
                  <Mail size={18} strokeWidth={2.5} className="text-[#2b92f3]" /> </p>
                  <div className=" flex flex-col gap-0.5 items-start  cursor-pointer">
                      <span className="font-semibold flex items-center gap-1 ">Email:</span> 
                      <p className="text-sm"> support@helpora.com</p>
                      <p className="text-[12px] text-[#554d47]">We reply within 24 hours</p>
                  </div>
               </a>
             </div>
          </div>
        </div>


        <div className="bg-white p-8 rounded-2xl md:w-1/2 w-full shadow-lg">
        <h3 className="text-2xl font-semibold mb-6  text-[#2b92f3] ">Send a Message</h3>
       <div className='w-full p-3 flex flex-col gap-5  '>
         <div className='flex flex-col gap-2'>
            <label className=' text-[15px] text-gray-700 ' >Name</label>
            <Input placeholder='Your Name' type='text' value={formData.name}  onChange={(e)=>{
               setFormData({
                ...formData, name:e.target.value
              })
            }} />
          </div>
          <div className='flex flex-col gap-2'>
            <label className=' text-[15px] text-gray-700 ' >Email</label>
            <Input placeholder='you@example.com' type='email' value={formData.email} onChange={(e)=>{
              setFormData({
                ...formData, email:e.target.value
              })
            }} />
          </div>

           <div className='flex flex-col gap-2 mb-3'>
            <label className=' text-[15px] text-gray-700 ' >Message</label>
            <textarea
            placeholder="Your Message" rows="4" required  
            value={formData.message}
           className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
           onChange={(e)=>{
             setFormData({
                ...formData, message:e.target.value
              })
           }}/>
          </div>
          <Button title={" Send Message"} variant="primary" size="lg"  onClick={saveData}/>
       </div>
          <Toaster/>
       </div>
       </div>
      </div>
      <Footer/>
    </>
 
  );
}

export default Contact;