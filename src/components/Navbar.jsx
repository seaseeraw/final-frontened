import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
const Navbar = () => {
  return (
    <div className='navs'>
      <div className='logo'><img src="./src/assets/logo.jpg" alt="Logo" width="80" height="50"/></div>
      {/* <div className='search'>
        <input type="text" placeholder='Search' />
        <button id='a'>Search</button>
      </div> */}
      <div className='login'><Link to="/login">Login</Link></div>
    </div>
  )
}

export default Navbar