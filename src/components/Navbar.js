import React from 'react'
import MenuBtn from './MenuBtn'
import Logo from './Logo'
import ContactBtn from './ContactBtn'
import SignupBtn from './SignupBtn'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='left-btn'>
            <MenuBtn/>
        </div>
        <div className='logo'>
            <Logo/>
        </div>
        <div className='right-btn'>
            <ContactBtn/>
            <SignupBtn/>
        </div>
    </div>
  )
}

export default Navbar