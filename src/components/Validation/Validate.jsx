import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Validation.css"
function Validate(props) {
    const navigate = useNavigate();
    const [userOtp, setUserOtp] = useState(0);
    const [error, setError] = useState("");
    const handleVerification = (e)=>{
        e.preventDefault();
        if(userOtp == (props.otp)){
            navigate("/details")
        }
        else{
            setError("wrong otp please try again")
        }
    }
  return (
    <div className='validate-main-div'>
        <div className='flex justify-center items-center w-full min-h-screen'>
        <form className='font-poppins text-white otpForm' onSubmit={handleVerification}>
            <p className='py-4 px-4 text-center'>We have sent you otp in given mail id</p>
            <div className='flex justify-center'>
            <input className='otpBox' type="number" onChange={(e)=>setUserOtp(e.target.value)} placeholder="Enter Otp" />
            </div>
            <div className='text-center mt-4'>
            <button className='start-btn' type='submit'>submit</button>
            </div>
            <p className='text-white text-center font-poppins py-4'>{error}</p>
        </form>
        </div>
        
    </div>
  )
}

export default Validate