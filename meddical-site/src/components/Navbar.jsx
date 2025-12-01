// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Brand */}
      <div className="navbar-brand">
        <Link to="/">Meddical</Link>
      </div>

      {/* Links */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/doctors">Doctors</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Appointment Button */}
      <Link to="/appointment" className="appointment-button">
        Appointment
      </Link>
    </nav>
  );
}