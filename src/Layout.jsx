import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Comp/Navbar'

const Layout = () => {
  return (
    <div className=' min-h-screen text-white h-fit border-2 border-slate-950 '>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout