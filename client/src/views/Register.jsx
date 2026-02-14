import React from 'react'
import Input from '../component/Input'
import Button from '../component/Button'
import { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import axios from 'axios'
import RegisterBg from "../assets/register-bg.jpg"
import Navbar from '../component/Navbar'
import { Eye, EyeClosed } from 'lucide-react'
function Register() {

  const [showPassword, setShowPassword]=useState(false);
  const [newUser, setNewUser]=useState({
    fullName:"",
    email:"",
    password:"",
    phoneNo:"",
    service:""
  
  })
  const saveUser=async ()=>{
    const {fullName,email,password,phoneNo,service}=newUser;
    if(!fullName || !email || !password || !phoneNo || !service){
      toast.error("All fields are required", {id:"registerFailed"});
      return;
    }

    try{
      const res= await axios.post("http://localhost:8800/register", newUser)
      console.log(res.data);
      if(res.data.success){
        toast.success("Registration successful! Please login.", {id:"registerSuccess"});
        window.location.href="/login";
      }else{
        toast.error(res.data.message, {id:"registerFailed"});
      }
    }catch(error){
      toast.error("Registration failed. Please try again.", {id:"registerFailed"});
    }
  }
  return (<>
     <Navbar/>
    <div className='min-h-screen bg-cover bg-center relative  px-4 flex justify-center pt-20'
     style={{ backgroundImage: `url(${RegisterBg})` }}>
     
       <div className="absolute inset-0 bg-black opacity-[60%]"></div>
      <div className='relative  flex justify-center flex-col items-center mx-auto my-10 w-[95%] md:w-[450px] p-5 bg-white opacity-[95%] shadow-lg rounded-lg gap-4 '>
       <div className='flex flex-col items-center justify-center gap-3'>
         <h1 className='text-3xl text-center font-bold text-[#2b92f3]'>Welcome to Helpora</h1>
        <p className='text-lg text-center text-[#554d47]'>Find and book trusted local service providers</p>
       </div>
        <div className='w-full p-3 flex flex-col gap-5  '>
          <div className='flex flex-col gap-2'>
            <label className=' text-[15px] text-gray-700' >Full Name</label>
            <Input placeholder='Full Name' type='text' onChange={(e)=>{
              setNewUser({...newUser , fullName:e.target.value})
            }} />
          </div>
           <div className='flex flex-col gap-2'>
            <label className=' text-[15px] text-gray-700 ' >Email</label>
            <Input placeholder='Email' type='email'  onChange={(e)=>{
              setNewUser({...newUser , email:e.target.value})
            }} />
          </div>
          <div className='flex flex-col gap-2'>
            <label className=' text-[15px] text-gray-700' >Password</label>
           <div className='w-full relative'>
             <Input placeholder='Password' type={showPassword ? "text" : "password"} onChange={(e)=>{
              setNewUser({...newUser , password:e.target.value})
            }} />
            {showPassword ? <Eye size={20} className='absolute text-[#2b92f3] right-3 top-[50%] translate-y-[-50%]  cursor-pointer' onClick={()=>{
              setShowPassword(false);
            }
            } /> : <EyeClosed size={20} className='absolute text-gray-400 right-3 top-[50%] translate-y-[-50%]  cursor-pointer' onClick={()=>{
              setShowPassword(true);
            }}/>}
           </div>
  </div>
            <div className='flex flex-col gap-2'> 
            <label className=' text-[15px] text-gray-700' >Phone Number</label>
            <Input placeholder='Phone Number' type='text' onChange={(e)=>{
              setNewUser({...newUser , phoneNo:e.target.value})
            }} />
          </div>
           <div className='flex flex-col gap-2'> 
            <label className=' text-[15px] text-gray-700' >Service Type</label>
          <select className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          onChange={(e)=>{
            setNewUser({...newUser , service:e.target.value})
            console.log(e.target.value)
          }}>
            <option value="">I want to </option>
            <option value="Book">Book Service</option>
            <option value="Provide">Provide Service</option>
          </select>
        </div>
      </div>

     <Button title="Register" size="lg" color="primary" onClick={()=>{
        saveUser();
     }} />
       <div className='text-sm text-gray-600'>
        Already have an account? <a href="/login" className='text-blue-500 hover:underline'>Login here</a>
     </div>
    </div>
    <Toaster/>
    </div>
    </>
  )
}

export default Register
