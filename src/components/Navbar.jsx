import React from 'react'
import '../App.css'
const Navbar = () => {
  return (
    
      <div className='navs'>
        <div className='logo'>Logo</div>
        <div className='search'>
          <input type="text" placeholder='Search' />
          <button id='a'>Search</button>
        </div>
        <div className='login'>Login</div>
      </div>
       

  
    
  )
}

export default Navbar