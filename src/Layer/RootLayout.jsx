import React from 'react'
import Navbar from '../Component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer'

const RootLayout = () => {
  return (
    <div className='font-DM'>

        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout