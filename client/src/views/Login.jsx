import React from 'react'
import Input from '../component/Input'
import Button from '../component/Button'
import { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import axios from 'axios'
import Navbar from '../component/Navbar'
import { useNavigate } from 'react-router'
import { Eye, EyeClosed } from 'lucide-react'
import Footer from '../component/Footer'

function Login() {
  const navigate=useNavigate();
const [user, setUser]=useState({
  email:"",
  password:""
})

const [showPassword, setShowPassword]=useState(false);

const checkUser=async ()=>{
  const {email, password}=user;
  if(!email || !password){
    toast.error("All fields are required", {id:"loginFailed"});
    return;
  }
 try{
  const res= await axios.post(`${import.meta.env.VITE_API_BASE_URL}/login`, user);
   if(res.data.success){
    toast.success("Login successful! ", {id:"loginSuccess"});
   
    localStorage.setItem("user", JSON.stringify(res.data.data));
    localStorage.setItem("token", res.data.token);
    setTimeout(()=>{
       navigate("/");
    },1000)

   }else{
    toast.error("Invalid Email or password", {id:"loginFailed"});
   }
 }catch(e){
  toast.error("Login failed. Please try again.", {id:"loginFailed"});
 }
}

  return (
    <>
   <Navbar/>
    <div className='min-h-screen relative px-4 flex justify-center  bg-gray-50 pt-20'
     >
      <div className=' flex justify-center flex-col m-auto items-center mx-auto  w-[90%] md:w-[450px]  bg-white px-5 py-8 h-auto rounded-2xl  shadow-lg rounded-lg gap-5 '>
       <div className='flex flex-col items-center justify-center gap-3'>
         <h1 className='text-3xl text-center font-bold text-[#2b92f3]'>Welcome to Helpora</h1>
        <p className='text-lg text-center text-[#554d47]'>Find and book trusted local service providers</p>
       </div>
        <div className='w-full p-3 flex flex-col gap-5  '>
       
           <div className='flex flex-col gap-2'>
            <label className=' text-[15px] text-gray-700 ' >Email</label>
            <Input placeholder='Email' type='email'  onChange={(e)=>{
              setUser({...user , email:e.target.value})
            }} />
          </div>
           <div className='flex flex-col gap-2'>
            <label className=' text-[15px] text-gray-700' >Password</label>
           <div className='w-full relative'>
             <Input placeholder='Password' type={showPassword ? "text" : "password"} onChange={(e)=>{
              setUser({...user , password:e.target.value})
            }} />
            {showPassword ? <Eye size={20} className='absolute text-[#2b92f3] right-3 top-[50%] translate-y-[-50%]  cursor-pointer' onClick={()=>{
              setShowPassword(false);
            }
            } /> : <EyeClosed size={20} className='absolute text-gray-400 right-3 top-[50%] translate-y-[-50%]  cursor-pointer' onClick={()=>{
              setShowPassword(true);
            }}/>}
           </div>
  </div>
      </div>

     <Button title="Login" size="lg" color="primary" onClick={()=>{
        checkUser();
     }} />
       <div className='text-sm text-gray-600'>
                 Don’t have an account? {" "}
          <a href="/register" className='text-blue-500 hover:underline'>
             Register here
          </a>
        </div>
    </div>
    <Toaster/>
    </div>
    <Footer/>
     </>
  )
}


export default Login
