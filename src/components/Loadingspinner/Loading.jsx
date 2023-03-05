import React from 'react'
import "./loading.css"
function Loading() {
  return (
    <div className='portfolio-loader'>
        <span className="loader"></span>
        <p className='font-poppins text-center font-black'>Loading your portfolio...</p>
    </div>
  )
}

export default Loading