import React from "react";

function Navbar() {
    return (
        <nav className="navbar">
        <ul className="navbar-nav">
           <li className="nav-item"><a href="#home">Home</a></li>
           <li className="nav-item"><a href="#about">About</a></li>
           <li className="nav-item"><a href="#services">Services</a></li>
           <li className="nav-item"><a href="#contact">Contact</a></li>
        </ul>
       </nav>
       
    )
}

export default Navbar;