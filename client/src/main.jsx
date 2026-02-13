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



const root=createRoot(document.getElementById('root'))
root.render(
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/user' element={<User/>}/>
  <Route path='/service-provider' element={<Provider/>}/>
</Routes>
</BrowserRouter>
)
