import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  const handleContact = () => {
    const element = document.getElementById("contact-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="navBar bg-[#2f2c2c] text-white font-poppins">
      <div className="topNavbar p-4">
        <Link to="/Blog">
          <span className="navlinks">Blog</span>
        </Link>
        <a
          href="https://github.com/ishan249/design-folio-frontend"
          target="_blank"
        >
          <span className="navlinks">Github</span>
        </a>
        <button onClick={handleContact} className="navlinks">
          Contact
        </button>
      </div>
    </div>
  );
}

export default Navbar;
