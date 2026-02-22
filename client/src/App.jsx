import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import  Home  from './views/Home.jsx'
import  Login  from './views/Login.jsx'
import Register from './views/Register.jsx'
import Service from './views/Service.jsx'
import Contact from './views/Contact.jsx'
import About from './views/About.jsx'
import Profile from './views/Profile.jsx'
import ServicemenProfile from './views/ServicemenProfile.jsx'
import Serviceinfo from './views/Serviceinfo.jsx'

function App() {
  return (
   <BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/service' element={<Service/>}/>
  <Route path='/serviceinfo/:id' element={<Serviceinfo/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/profile' element={<Profile/>}/>
  <Route path='/servicemen-profile' element={<ServicemenProfile/>}/>
</Routes>
</BrowserRouter>
  )
}

export default App
