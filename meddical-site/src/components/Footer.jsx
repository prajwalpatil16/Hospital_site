// src/components/Footer.jsx
import React from "react";
import "./Footer.css"; // Import the CSS file

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3>Meddical</h3>
          <p>
            Leading the Way in Medical Excellence, Trusted Care.
          </p>
        </div>

        {/* Important Links */}
        <div className="footer-section">
          <h3>Important Links</h3>
          <a href="/appointment">Appointment</a>
          <br />
          <a href="/doctors">Doctors</a>
          <br />
          <a href="/services">Services</a>
          <br />
          <a href="/about">About Us</a>
        </div>

        {/* Contact Us */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Call: (237) 681-812-255</p>
          <p>Email: fildineesoe@gmail.com</p>
          <p>Address: 0123 Some place, Some country</p>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3>Newsletter</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email address" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</p>
      </div>
    </footer>
  );
}
