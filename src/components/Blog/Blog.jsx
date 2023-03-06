import React from 'react'
import "./Blog.css";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import skillImg from "../../images/WhatsApp Image 2023-03-06 at 10.56.32 PM.jpeg"
function Blog() {
  return (
    <div className='blog-main-div font-poppins flex justify-center'>
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.4}}
        className='main-div'>
            <Link to="/">
                <div className='text-white font-poppins backtohome-btn hover:underline'>Back to home</div>
            </Link>
            <br />
            <h1 className='text-white text-3xl'>Update</h1>
            <div className='Description-text'>There is no feature to update your portfolio so please make sure that you fill all the information correctly while creating your portfolio.</div>
            <div className='Description-text'>Right now it is working only for @gmail.com email ids. Any other company email id or organisation email id will not work.</div>
            <br />
            <h1 className='text-white text-3xl'>Verification</h1>
            <div className='Description-text'>Your Email Id Verification is necessary to create your portfolio as we are giving everyone their unique URL. Verification will help in assigning routes and portfolio easily.</div>
            <br />
            <h1 className='text-white text-3xl'>Skills</h1>
            <div className='Description-text'>On the Skills selection page if you notice there are around 50 skills that are there in options to select because I have added the skills that I know in Design, Development, DevOps, Cloud Computing and other fields. If there are any more to add, you can add or tell me to add.</div>
            <div style={{border:"1px #272727 solid", paddingTop:"16px",marginTop:"10px", borderRadius:"20px", boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <img src={skillImg} alt="" />
            </div>
            <br />
            <h1 className='text-white text-3xl'>Projects</h1>
            <div className='Description-text'>Projects are the proof of work, it shows what you can do and whatever work you have done in the past so make sure you put valid url to your projects. And also make sure that you add your best 4 projects because more than that may not look good </div>
            <br />
            <div className='Description-text'>You want to suggest anything, feel free to ping me at - 249patelishan@gmail.com</div>
        </motion.div>
    </div>
  )
}

export default Blog