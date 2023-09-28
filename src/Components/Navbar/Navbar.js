import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='nav-container-left'>
        <h2 className='nav-container-left-logo'>
          Logo
        </h2>
        <h2 className='nav-container-left-name'>
          Cool Products 4U
        </h2>
      </div>
      <div className='nav-container-right'>
        <h2><a>Our Product</a></h2>
        <h2><a>Sign Up</a></h2>
        <h2><a>About</a></h2>
      </div>
    </div>
  )
}

export default Navbar
