import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' w-full items-center justify-around h-16 bg-slate-600 flex text-white z-50 relative top-0'>
      <Link to='/'><div>Home</div></Link>
      <Link to='/About'><div>About</div></Link>
      <Link to='/Internship'><div>Internships</div></Link>
      <Link to='/Contact'><div>Contact us</div></Link>
      <Link to='/Tutorials'><div>Tutorials</div></Link>
    </div>
  )
}

export default Navbar