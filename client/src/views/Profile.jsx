import React from 'react'
import Navbar from '../component/Navbar'
import UserImg from '../assets/user.png'

function Profile() {
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

               </div>
            </div>

        </div>
      
    </div>
  )
}

export default Profile
