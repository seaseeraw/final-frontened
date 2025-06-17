import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css';
const Navbar = () => {
  return (
    <div className='nav'>
      <img src="./src/assets/logo.jpg" width="40" height="40" style={{ borderRadius: "5px" }} alt="Logo" />
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Navbar;