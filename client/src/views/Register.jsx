import React from 'react'
import Input from '../component/Input'

function Register() {
  return (
    <div className='min-h-screen '>
      <div className='flex justify-center flex-col items-center mx-auto my-10 w-[90%] md:w-[450px] p-5 bg-[rgb(250 205 71)] shadow-lg rounded-lg gap-5 '>
       <div className='flex flex-col items-center justify-center gap-3'>
         <h1 className='text-3xl font-bold text-[#2b92f3]'>Welcome to Helpora</h1>
        <p className='text-lg text-[#554d47]'>Find and book trusted local service providers</p>
       </div>
        <div className='w-full p-3 flex flex-col gap-5  '>
          <div className='flex flex-col gap-2'>
            <label className=' text-[15px] text-gray-700' >Full Name</label>
            <Input placeholder='Full Name' type='text' />
          </div>
           <div className='flex flex-col gap-2'>
            <label className=' text-[15px] text-gray-700 ' >Email</label>
            <Input placeholder='Email' type='email' />
          </div>
           <div className='flex flex-col gap-2'>
            <label className=' text-[15px] text-gray-700' >Password</label>
            <Input placeholder='Password' type='password' />
          </div>
            <div className='flex flex-col gap-2'> 
            <label className=' text-[15px] text-gray-700' >Phone Number</label>
            <Input placeholder='Phone Number' type='text' />
          </div>
           <div className='flex flex-col gap-2'> 
            <label className=' text-[15px] text-gray-700' >Service Type</label>
          <select className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
            <option value="">I want to </option>
            <option value="Book">Book Service</option>
            <option value="Provide">Provide Service</option>
          </select>
        </div>
      </div>

     </div>
    </div>
  )
}

export default Register
