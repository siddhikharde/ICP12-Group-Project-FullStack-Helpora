import React from 'react'
import Input from '../component/Input'
import Button from '../component/Button'
import { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import axios from 'axios'
import RegisterBg from "../assets/register-bg.jpg"
import Navbar from '../component/Navbar'
import { Eye, EyeClosed } from 'lucide-react'
import Footer from '../component/Footer'
import MultiSelect from '../component/MultiSelect'
function Register() {

  const [showPassword, setShowPassword] = useState(false);
  const [newUser, setNewUser] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNo: "",
    role: "",
    location: "",
  

  })

  const [providerData, setProviderData] = useState({
    field: "",
    experience: "",
    skills: [],
    certifications: "",
    professionalSummary: "",
    serviceAreas: [],
    price :0
  });
  const saveUser = async () => {
    const { fullName, email, password, phoneNo, role, location } = newUser;
    if (!fullName || !email || !password || !phoneNo || !role || !location) {
      toast.error("All fields are required", { id: "registerFailed" });
      return;
    }

    if (role === "Provide") {
      if (!providerData.field || !providerData.experience || !providerData.serviceAreas ) {
        toast.error("Please fill provider details");
        return;
      }
    }

    try {
      const userData = {
        ...newUser,
        field: providerData.field,
        experience: providerData.experience,
        price:providerData.price,
        skills: providerData.skills,
        serviceAreas: providerData.serviceAreas,
        professionalSummary: providerData.professionalSummary,
      }
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/register`, userData)
      console.log(res.data);
      if (res.data.success) {
        toast.success("Registration successful! Please login.", { id: "registerSuccess" });
        window.location.href = "/login";
      } else {
        toast.error(res.data.message, { id: "registerFailed" });
      }
    } catch (error) {
      toast.error("Registration failed. Please try again.", { id: "registerFailed" });
    }
  }
  return (<>
    <Navbar />
    <div className='min-h-screen bg-cover bg-center  bg-gray-50 relative  px-4 flex justify-center pt-20'>

      <div className=' flex justify-center flex-col items-center mx-auto my-15 w-[95%] md:w-[1000px] px-5 py-8 bg-white  shadow-lg rounded-lg gap-4 '>
        <div className='flex flex-col items-center justify-center gap-3'>
          <h1 className='text-3xl text-center font-bold text-[#2b92f3]'>Welcome to Helpora</h1>
          <p className='text-lg text-center text-[#554d47]'>Find and book trusted local service providers</p>
        </div>
        <div className='w-full p-3 flex flex-col md:flex-row md:flex-wrap gap-8'>
          <div className='flex flex-col gap-2 w-full md:w-[48%]'>
            <label className=' text-[15px] text-gray-700' >Full Name</label>
            <Input placeholder='Full Name' type='text' onChange={(e) => {
              setNewUser({ ...newUser, fullName: e.target.value })
            }} />
          </div>
          <div className='flex flex-col gap-2 w-full md:w-[48%]'>
            <label className=' text-[15px] text-gray-700 ' >Email</label>
            <Input placeholder='Email' type='email' onChange={(e) => {
              setNewUser({ ...newUser, email: e.target.value })
            }} />
          </div>
          <div className='flex flex-col gap-2 w-full md:w-[48%]'>
            <label className=' text-[15px] text-gray-700' >Password</label>
            <div className='w-full relative'>
              <Input placeholder='Password' type={showPassword ? "text" : "password"} onChange={(e) => {
                setNewUser({ ...newUser, password: e.target.value })
              }} />
              {showPassword ? <Eye size={20} className='absolute text-[#2b92f3] right-3 top-[50%] translate-y-[-50%]  cursor-pointer' onClick={() => {
                setShowPassword(false);
              }
              } /> : <EyeClosed size={20} className='absolute text-gray-400 right-3 top-[50%] translate-y-[-50%]  cursor-pointer' onClick={() => {
                setShowPassword(true);
              }} />}
            </div>
          </div>
          <div className='flex flex-col gap-2 w-full md:w-[48%]'>
            <label className=' text-[15px] text-gray-700' >Phone Number</label>
            <Input placeholder='Phone Number' type='text' onChange={(e) => {
              setNewUser({ ...newUser, phoneNo: e.target.value })
            }} />
          </div>
          <div className='flex flex-col gap-2 w-full md:w-[48%]'>
            <label className='text-[15px] text-gray-700'>Location</label>
            <Input
              placeholder='City / Area'
              type='text'
              onChange={(e) =>
                setNewUser({ ...newUser, location: e.target.value })
              }
            />
          </div>
          <div className='flex flex-col gap-2 w-full md:w-[48%]'>
            <label className=' text-[15px] text-gray-700' >Service Type</label>
            <select className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              onChange={(e) => {
                setNewUser({ ...newUser, role: e.target.value })
                console.log(e.target.value)
              }}>
              <option value="">I want to </option>
              <option value="Book">Book Service</option>
              <option value="Provide">Provide Service</option>
            </select>
          </div>
          {newUser.role === "Provide" && (
            <>
              <div className='flex flex-col gap-2 w-full md:w-[48%]'>
                <label className="text-[15px] text-gray-700">Service Field</label>
                <Input
                  placeholder="Electrician / Plumber"
                  type="text"
                  onChange={(e) =>
                    setProviderData({ ...providerData, field: e.target.value })
                  }
                />
              </div>

              <div className='flex flex-col gap-2 w-full md:w-[48%]'>
                <label className="text-[15px] text-gray-700">Experience (Years)</label>
                <Input
                  placeholder="Experience"
                  type="text"
                  onChange={(e) =>
                    setProviderData({ ...providerData, experience: e.target.value })
                  }
                />
              </div>
              <div className='flex flex-col gap-2 w-full md:w-[48%]'>
                <label className="text-[15px] text-gray-700">
                  Price (₹)
                </label>
                <Input
                  placeholder="500"
                  type="text"
                  onChange={(e) =>
                    setProviderData({
                      ...providerData,
                      price: e.target.value,
                    })
                  }
                />
              </div>

              <div className='flex flex-col gap-2 w-full md:w-[48%]'>
                <label className="text-[15px] text-gray-700">Skills</label>
                  <MultiSelect selectedItems={providerData.skills}
                placeholder={"Enter Skills"}
                onAddItem={(val)=>{
                  setProviderData({...providerData, skills:[...providerData.skills, val]})
                }}
                onRemoveItems={(val)=>{
                  setProviderData({...providerData,
                    skills:providerData.skills.filter((skill)=>skill!=val)
                  })
                }}
                 />
              </div>
              <div className='flex flex-col gap-2 w-full md:w-[48%]'>
                <label className="text-[15px] text-gray-700">
                  Service Areas
                </label>
               
                <MultiSelect selectedItems={providerData.serviceAreas}
                placeholder={"Enter Cites"}
                onAddItem={(val)=>{
                  setProviderData({...providerData, serviceAreas:[...providerData.serviceAreas, val]})
                }}
                onRemoveItems={(val)=>{
                  setProviderData({...providerData,
                    serviceAreas:providerData.serviceAreas.filter((city)=>city!=val)
                  })
                }}
                 />
              </div>

              <div className='flex flex-col gap-2 w-full '>
                <label className="text-[15px] text-gray-700">Professional Summary</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell about your experience"
                  rows={4}
                  onChange={(e) =>
                    setProviderData({
                      ...providerData,
                      professionalSummary: e.target.value,
                    })
                  }
                />
              </div>
            </>

          )}

        </div>

        <Button title="Register" size="lg" color="primary" onClick={() => {
          saveUser();
        }} />
        <div className='text-sm text-gray-600'>
          Already have an account? <a href="/login" className='text-blue-500 hover:underline'>Login here</a>
        </div>
      </div>
      <Toaster />
    </div>
    <Footer />
  </>
  )
}

export default Register
