import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import Features from "./Features";
import Contact from "./Contact";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-main-div">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}>
        <Navbar />
        <Intro />
        <div className="text-center">
          <button className="text-white font-poppins">
            <NavLink className="start-btn" to="/getstarted">Get Started</NavLink>
          </button>
        </div>
      </motion.div>
      <Features/>
      <Contact/>
    </div>
  );
}

export default Dashboard;
