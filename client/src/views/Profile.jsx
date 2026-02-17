import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import UserImg from '../assets/user.png'
import Button from '../component/Button';
import Input from '../component/Input';
import axios from 'axios';
import { Plus } from 'lucide-react';

function Profile() {
    const [isEditing, setIsEditing] = useState(false)
    const user = JSON.parse(localStorage.getItem("user"));
    const token= localStorage.getItem("token");
    const [userData, setUserData] = useState({
        name: user.fullName,
        email: user.email,
        phone: user.phoneNo

    })

    const editUser=async ()=>{
      const res=await axios.put("http://localhost:8800/user", {
        id: user._id,
        fullName: userData.name,
        email: userData.email,
        phoneNo: userData.phone,},
    {
        headers:{Authorization:`Bearer ${token}`}
    })  
     console.log(res.data)
     localStorage.setItem("user", JSON.stringify(res.data.data));
    setIsEditing(false);            
    }
    useEffect(() => {
        console.log(userData)
    }, [])
    return (
        <div className='min-h-screen bg-gray-50 text-[#2a2e32]'>
            <Navbar />
            <div className=' max-w-full mx-auto mt-16 px-6'>
                <div className='bg-white rounded-2xl shadow-xl p-10 mt-20'>
                    <div className='flex flex-col md:flex-row items-center gap-8'>
                        <div className="relative">
                           <div className='absolute bottom-2 p-0.5 border  border-[#2b92f3] right-3 bg-white rounded-full cursor-pointer' >
                             <Plus size={20} />  
                           </div>
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
                                        onClick={() => {
                                            setIsEditing(true)
                                        }} />
                                )
                            }
                        </div>
                    </div>
                    
                     <div className="border-t my-8"></div>
                     <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                             <label className="font-semibold">Full Name</label>
                             <Input value={userData.name}
                             onChange={(e)=>{
                                setUserData({
                                    ...userData, name:e.target.value
                                })
                             }}
                disabled={!isEditing}/>
                        </div>

                         <div className="flex flex-col gap-2">
                             <label className="font-semibold">Email</label>
                             <Input value={userData.email}  onChange={(e)=>{
                                setUserData({
                                    ...userData, email:e.target.value
                                })
                             }}
                disabled={!isEditing}/>
                        </div>

                         <div className="flex flex-col gap-2">
                             <label className="font-semibold">Phone Number</label>
                             <Input value={userData.phone}  onChange={(e)=>{
                                setUserData({
                                    ...userData, phone:e.target.value
                                })
                             }}
                disabled={!isEditing}/>
                        </div>

                     </div>
                     {isEditing && (
                        <div className='mt-8 text-righ'>
                            <Button title="Save Changes"
                               onClick={editUser}/>
                            </div>
                     )}
                </div>

            </div>

        </div>
    )
}

export default Profile
