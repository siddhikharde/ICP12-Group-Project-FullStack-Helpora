import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import UserImg from '../assets/user.png'
import Button from '../component/Button';

function Profile() {
    const [isEditing, setIsEditing]=useState(false)
      const user=JSON.parse(localStorage.getItem("user"));
      const [userData, setUserData]=useState({
        name:user.fullName,
        email:user.email,
        phoneNo:user.phoneNo

      })
 useEffect(()=>{
 console.log(userData)
 },[])
  return (
    <div className='min-h-screen bg-gray-50 text-[#2a2e32]'>
        <Navbar/>
        <div className=' max-w-full mx-auto mt-16 px-6'>
            <div className='bg-white rounded-2xl shadow-xl p-10 mt-20'>
               <div className='flex flex-col md:flex-row items-center gap-8'>
                 <div className="relative">
              <img
                src={`${UserImg}`}
                alt="Profile"
                className="w-36 h-36 rounded-full object-cover border-4 border-[#2b92f3]"
              />
            </div>

            <div className='flex-col text-center md:text-left'>
                <h2 className="text-3xl font-bold text-[#2b92f3]"> 
                    {userData.name}
                </h2>
                <p className="text-[#554d47] mt-2">
                Manage your personal information
              </p>
            </div>
            <div>
             {
                !isEditing && (
                    <Button title="Edit Profile" variant="primary"
                    onClick={()=>{
                        setIsEditing(true)
                    }}/>
                )
               }
            </div>
               </div>
            </div>

        </div>
      
    </div>
  )
}

export default Profile
