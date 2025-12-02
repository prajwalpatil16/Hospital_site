import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const searchRef = useRef(null);

  // Close search when clicking outside
  useEffect(() => {
    function handleOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <header className="header">
      <div className="header-container">

        {/* LOGO */}
        <div className="logo">
          <Link to="/">🏥</Link>
        </div>

        {/* NAV LINKS — DESKTOP */}
        <nav className="desktop-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* RIGHT SIDE GROUP */}
        <div className="right-actions">

          {/* SEARCH */}
          <div className="search-wrapper" ref={searchRef}>
            <img
              src="/icons/search.png"
              className="search-icon"
              alt="search"
              onClick={() => setShowSearch(!showSearch)}
            />
            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
                autoFocus
              />
            )}
          </div>

          {/* APPOINTMENT */}
          <Link to="/appointment">
            <button className="appointment-btn">Appointment</button>
          </Link>

          {/* HAMBURGER (Mobile Only) */}
          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <nav className="mobile-nav">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/doctors" onClick={() => setMenuOpen(false)}>Doctors</Link>
          <Link to="/news" onClick={() => setMenuOpen(false)}>News</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

          <Link to="/appointment">
            <button className="mobile-appointment-btn">
              Appointment
            </button>
          </Link>
        </nav>
      )}
    </header>
  );
}
