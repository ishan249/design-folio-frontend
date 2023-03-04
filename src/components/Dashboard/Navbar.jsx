import React from 'react'
import "./Navbar.css";

function Navbar() {

  const handleContact = () =>{
    const element = document.getElementById('contact-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (

    <div className='navBar bg-[#2f2c2c] text-white font-poppins'>
        <div className='topNavbar p-4'>
        <span className='navlinks'>Blog</span>
        <span className='navlinks'>Github</span>
        <button onClick={handleContact} className='navlinks'>Contact</button>
        </div>
    </div>

  )
}

export default Navbar