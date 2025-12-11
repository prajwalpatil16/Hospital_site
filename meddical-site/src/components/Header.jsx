import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const searchRef = useRef(null);

  // Close search on outside click
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
    <header className="w-full bg-[#01075C] text-white shadow-md z-40">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="text-2xl font-bold">
          <Link to="/">🏥</Link>
        </div>

        {/* NAV LINKS — DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-white">
          <Link className="hover:text-blue-300" to="/">Home</Link>
          <Link className="hover:text-blue-300" to="/about">About</Link>
          <Link className="hover:text-blue-300" to="/services">Services</Link>
          <Link className="hover:text-blue-300" to="/doctors">Doctors</Link>
          <Link className="hover:text-blue-300" to="/news">News</Link>
          <Link className="hover:text-blue-300" to="/contact">Contact</Link>
        </nav>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">

          {/* Search */}
          <div className="relative flex items-center" ref={searchRef}>
            <img
              src="/icons/search.png"
              alt="search"
              className="w-5 cursor-pointer"
              onClick={() => setShowSearch(!showSearch)}
            />

            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 px-3 py-1 rounded-md text-black text-sm w-40 border border-gray-300 focus:outline-none"
                autoFocus
              />
            )}
          </div>

          {/* Appointment Button */}
          <Link to="/appointment">
            <button className="hidden md:block bg-blue-500 px-5 py-2 rounded-full hover:bg-blue-600 transition">
              Appointment
            </button>
          </Link>

           <Link to="/login">
            <button className="hidden md:block bg-blue-500 px-5 py-2 rounded-full hover:bg-blue-600 transition">
             Login
           </button>
          </Link>

          {/* Hamburger Menu */}
          <div
            className="md:hidden text-3xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>
        </div>
      </div>

      {/* MOBILE NAV */}
      {menuOpen && (
        <div className="md:hidden bg-[#020A70] text-white flex flex-col px-6 py-4 space-y-3">

          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/doctors" onClick={() => setMenuOpen(false)}>Doctors</Link>
          <Link to="/news" onClick={() => setMenuOpen(false)}>News</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

          <Link to="/appointment">
            <button className="mt-2 w-full bg-blue-500 py-2 rounded-full hover:bg-blue-600 transition">
              Appointment
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
