import React from 'react'
import Input from '../component/Input'
import Button from '../component/Button'
import { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import axios from 'axios'
import Navbar from '../component/Navbar'
import RegisterBg from "../assets/register-bg.jpg"

function Login() {
  return (
    <div className='min-h-screen bg-cover bg-center relative flex justify-center px-4 py-10'
     style={{ backgroundImage: `url(${RegisterBg})` }}>
      <Navbar/>
       <div className="absolute inset-0 bg-black opacity-[60%]"></div>
      <div className='relative  flex justify-center h-auto flex-col items-center mx-auto my-10 w-[90%] md:w-[450px] p-5 bg-white opacity-[95%] shadow-lg rounded-lg gap-5 '>
       <div className='flex flex-col items-center justify-center gap-3'>
         <h1 className='text-3xl text-center font-bold text-[#2b92f3]'>Welcome to Helpora</h1>
        <p className='text-lg text-center text-[#554d47]'>Find and book trusted local service providers</p>
       </div>
        <div className='w-full p-3 flex flex-col gap-5  '>
       
           <div className='flex flex-col gap-2'>
            <label className=' text-[15px] text-gray-700 ' >Email</label>
            <Input placeholder='Email' type='email'  onChange={(e)=>{
              setNewUser({...newUser , email:e.target.value})
            }} />
          </div>
           <div className='flex flex-col gap-2'>
            <label className=' text-[15px] text-gray-700' >Password</label>
            <Input placeholder='Password' type='password' onChange={(e)=>{
              setNewUser({...newUser , password:e.target.value})
            }} />
  </div>
      </div>

     <Button title="Login" size="lg" color="primary" onClick={()=>{
        saveUser();
     }} />
       <div className='text-sm text-gray-600'>
                 Don’t have an account? 
          <a href="/register" className='text-blue-500 hover:underline'>
             Register here
          </a>
        </div>
    </div>
    <Toaster/>
    </div>
  )
}


export default Login
