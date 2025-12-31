import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Service from './pages/Service'
import About from './pages/About'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Booking from './Booking'
import DataShow from './DataShow'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/> 
          <Route path='/about' element={<About/>}/> 
          <Route path='/service' element={<Service/>}/> 
         <Route path="/book/:name" element={<Booking/>}/>
         <Route path="/admin" element={<DataShow/>}/>
        </Route>
        
         <Route path='/signup' element={<SignUp/>}/> 
          <Route path='/login' element={<Login/>}/> 
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
