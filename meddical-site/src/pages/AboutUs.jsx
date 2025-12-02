// src/pages/AboutUs.jsx
import React from "react";
import "./AboutUs.css"; // Import the CSS file
import welcomeImg from "../assets/welcome.svg";
import doc1 from "../assets/doctor1.svg";
import doc2 from "../assets/doctor2.svg";
import doc3 from "../assets/doctor3.svg";

export default function AboutUs() {
  return (
    <div className="about-us">
      {/* Top Info / Emergency Bar */}
      <div className="info-bar">
        <div className="info-item emergency">
          <strong>Meddical Emergency</strong>
          <span>(237) 681-812-255</span>
        </div>
        <div className="info-item hours">
          <strong>Work Hour</strong>
          <span>09:00 - 20:00 Everyday</span>
        </div>
        <div className="info-item location">
          <strong>Location</strong>
          <span>0123 Some Place</span>
        </div>
      </div>

      {/* Hero Section (banner background) */}
      <section
  className="hero"
  style={{
    backgroundImage: "url('/your-banner-image.jpg')", // <-- put your About banner image here
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "260px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    paddingLeft: "60px"
  }}
>
  {/* Light White Blur Overlay */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "rgba(255,255,255,0.45)",
      backdropFilter: "blur(3px)"
    }}
  ></div>

  {/* Text Content */}
  <div style={{ position: "relative", zIndex: 2 }}>
    <p style={{ fontSize: "20px", margin: 0, color: "#0a1d4d" }}>Home / About</p>
    <h1 style={{ fontSize: "52px", fontWeight: 700, marginTop: "5px", color: "#0a1d4d" }}>
      About us
    </h1>
  </div>
</section>
      {/* Navigation Shortcuts (visual only) */}
      <nav className="shortcut-nav">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Doctors</li>
          <li>News</li>
          <li>Contact</li>
          <li>Appointment</li>
        </ul>
      </nav>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-content">
          <h2>Welcome to Hospital name</h2>
          <h3>Best Care for Your<br/>Good Health</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.
          </p>
          <ul>
            <li>A Passion for Healing</li>
            <li>5-Star Care</li>
            <li>All our best</li>
            <li>Believe in Us</li>
            <li>Always Caring</li>
            <li>A Legacy of Excellence</li>
          </ul>
        </div>
        <div className="welcome-image">
          <img src={welcomeImg} alt="Doctor and patient" />
        </div>
      </section>

      {/* Trusted / Tagline */}
      <section className="trusted-section">
        <div className="trusted-content">
          <h3>Trusted Care</h3>
          <p>Better information, Better health</p>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="doctors-section">
        <h2>Our Doctors</h2>
        <div className="doctors-grid">
          <div className="doctor-card">
            <img src={doc1} alt="Doctor's Name" />
            <h4>Doctor’s Name</h4>
            <p>Neurology</p>
            <a href="/profile">View Profile</a>
          </div>
          <div className="doctor-card">
            <img src={doc2} alt="Doctor's Name" />
            <h4>Doctor’s Name</h4>
            <p>Neurology</p>
            <a href="/profile">View Profile</a>
          </div>
          <div className="doctor-card">
            <img src={doc3} alt="Doctor's Name" />
            <h4>Doctor’s Name</h4>
            <p>Neurology</p>
            <a href="/profile">View Profile</a>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section">
        <h2>News</h2>
        <div className="news-grid">
          <div className="news-card">
            <p>Monday 05, September 2021 | By Author</p>
            <h4>This Article’s Title goes Here, but not too long.</h4>
            <div className="meta"><span>68</span><span>86</span></div>
          </div>
          <div className="news-card">
            <p>Monday 05, September 2021 | By Author</p>
            <h4>This Article’s Title goes Here, but not too long.</h4>
            <div className="meta"><span>68</span><span>86</span></div>
          </div>
        </div>
      </section>

      {/* Contact / Get in touch */}
      <section className="contact-section">
        <h2>Get in touch</h2>
        <div className="contact-grid">
          <div className="contact-card">
            <h4>Contact</h4>
            <p><strong>Emergency:</strong> (237) 681-812-255</p>
            <p><strong>Location:</strong> 0123 Some place</p>
            <p><strong>Email:</strong> fildineeesoe@gmil.com</p>
            <p><strong>Working Hours:</strong> Mon-Sat 09:00-20:00</p>
          </div>
          <div className="contact-card">
            <h4>Additional</h4>
            <p>(237) 666-331-894</p>
            <p>9876 Some country</p>
            <p>myebstudios@gmail.com</p>
            <p>Sunday Emergency only</p>
          </div>
          <div className="contact-card newsletter">
            <h4>Newsletter</h4>
            <p>Leading the Way in Medical Execellence, Trusted Care.</p>
            <p>Appointment Call: (237) 681-812-255</p>
            <label>
              Enter your email address
              <input type="email" placeholder="you@example.com" />
            </label>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <h4>About Us</h4>
            <p>Some country</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>Email: fildineesoe@gmail.com</p>
            <p>Address: 0123 Some place</p>
          </div>
          <div>
            <h4>Important Links</h4>
            <p>Contact Us | Doctors | Services | Appointment</p>
          </div>
        </div>
        <div className="copyright">© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</div>
      </footer>
    </div>
  );
}
