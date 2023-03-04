import React from 'react'
import "./Dashboard.css";
import { NavLink } from 'react-router-dom';
function Contact() {
  return (
    <div id='contact-section' className='mt-4 py-4 text-center text-white font-poppins'>
        <p>Want to contact or Any suggestions, mail me - <span >249patelishan@gmail.com</span> </p>
        <p className='pt-4'>Made with 💖 by <span className='underline'><NavLink  target="_blank" to="https://ishanpatel.me">Ishan</NavLink></span></p>
    </div>
  )
}

export default Contact