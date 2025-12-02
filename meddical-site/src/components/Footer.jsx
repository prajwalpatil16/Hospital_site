import "../styles/footer.css";

export default function Footer() {
  return (
    <footer>

        <div className="footer-contact-heading-container">
           <spam>Get in Touch </spam>
           <h4 id="footer-contact-subheading">
             Contact 
            </h4>
        </div>

      {/* ===== TOP INFO CARDS ===== */}
      <div className="footer-info-cards">

        {/* Emergency */}
        <div className="info-card">
          <img src="/icons/phone.png" alt="Emergency" />
          <h4>EMERGENCY</h4>
          <p>(237) 681-812-255</p>
          <p>(237) 666-331-894</p>
        </div>

        {/* Location */}
        <div className="info-card dark-card">
          <img src="/icons/location.png" alt="Location" />
          <h4>LOCATION</h4>
          <p>0123 Some place</p>
          <p>9876 Some country</p>
        </div>

        {/* Email */}
        <div className="info-card">
          <img src="/icons/email.png" alt="Email" />
          <h4>EMAIL</h4>
          <p>fildineeesoe@gmail.com</p>
          <p>myebstudios@gmail.com</p>
        </div>

        {/* Working Hours */}
        <div className="info-card">
          <img src="/icons/clock.png" alt="Clock" />
          <h4>WORKING HOURS</h4>
          <p>Mon–Sat 09:00–20:00</p>
          <p>Sunday Emergency only</p>
        </div>
      </div>

      {/* ===== BLUE MAIN FOOTER ===== */}
      <div className="footer-main">

        {/* LEFT — LOGO + TEXT */}
        <div className="footer-col">
          <h2 className="footer-logo">MEDDICAL</h2>
          <p>
            Leading the Way in Medical <br />
            Excellence, Trusted Care.
          </p>
        </div>

        {/* Important Links */}
        <div className="footer-col">
          <h4>Important Links</h4>
          <a href="#">Appointment</a>
          <a href="#">Doctors</a>
          <a href="#">Services</a>
          <a href="#">About Us</a>
        </div>

        {/* Contact Us */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>Call: (237) 681-812-255</p>
          <p>Email: fildineeesoe@gmail.com</p>
          <p>Address: 0123 Some place</p>
          <p>Some country</p>
        </div>

        {/* Newsletter */}
        <div className="footer-col">
          <h4>Newsletter</h4>

          <div className="newsletter-box">
            <input type="email" placeholder="Enter your email address" />
            <button>
              <img src="/icons/send.svg" alt="Send" />
            </button>
          </div>

          <div className="social-icons">
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
            <img src="/icons/facebook.svg" alt="Facebook" />
            <img src="/icons/insta.svg" alt="Instagram" />
          </div>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © 2021 Hospital’s name All Rights Reserved by PNTEC-LTD
      </div>
    </footer>
  );
}
