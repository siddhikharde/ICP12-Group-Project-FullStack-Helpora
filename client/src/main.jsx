import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import  Home  from './views/Home.jsx'
import  Login  from './views/Login.jsx'
import Register from './views/Register.jsx'
import User from './views/user/User.jsx'
import Provider from './views/serviceProvider/Provider.jsx'
import Service from './views/Service.jsx'
import Contact from './views/Contact.jsx'
import About from './views/About.jsx'
import Profile from './views/Profile.jsx'



const root=createRoot(document.getElementById('root'))
root.render(
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/user' element={<User/>}/>
  <Route path='/service-provider' element={<Provider/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/service' element={<Service/>}/>
  <Route path='/contact' element={<Contact/>}/>
</Routes>
</BrowserRouter>
)
