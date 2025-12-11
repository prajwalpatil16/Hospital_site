import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full mt-5">

      {/* ===================== CONTACT HEADER ===================== */}
      <div className="text-center mb-10 px-4">
        <span className="text-blue-600 font-semibold tracking-wide block text-sm sm:text-base">
          Get in Touch
        </span>
        <h4 className="text-2xl sm:text-3xl font-bold text-[#1F2B6C] mt-1">
          Contact
        </h4>
      </div>

      {/* ===================== TOP INFO CARDS ===================== */}
      <div className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
        gap-6 max-w-6xl mx-auto px-4 mb-16 
      ">

        {/* Emergency */}
        <div className="
          flex flex-col items-center bg-blue-100 shadow-md 
          p-6 rounded-xl text-center sm:p-6 p-8
        ">
          <img src="/icons/phone.png" className="w-10 mb-4" />
          <h4 className="text-lg font-bold text-blue-700">EMERGENCY</h4>
          <p className="text-gray-600 mt-1">(237) 681-812-255</p>
          <p className="text-gray-600">(237) 666-331-894</p>
        </div>

        {/* Location */}
        <a
          href="https://maps.app.goo.gl/yUkTI9Xdwvc0797mn"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex flex-col items-center bg-blue-100 shadow-md 
            p-6 rounded-xl text-center cursor-pointer 
            hover:shadow-lg transition sm:p-6 p-8
          "
        >
          <img src="/icons/location.png" className="w-10 mb-4" />
          <h4 className="text-lg font-bold text-blue-700">LOCATION</h4>
          <p className="text-gray-600 mt-1">0123 Some place</p>
          <p className="text-gray-600">9876 Some country</p>
        </a>

        {/* Email */}
        <a
          href="mailto:prajwalgpatil2002@gmail.com"
          className="
            flex flex-col items-center bg-blue-100 shadow-md 
            p-6 rounded-xl text-center cursor-pointer 
            hover:shadow-lg transition sm:p-6 p-8
          "
        >
          <img src="/icons/email.png" className="w-10 mb-4" />
          <h4 className="text-lg font-bold text-blue-700">EMAIL</h4>
          <p className="text-gray-600 mt-1">prajwalgpatil2002@gmail.com</p>
          <p className="text-gray-600">support@hospital.com</p>
        </a>

        {/* Working Hours */}
        <div className="
          flex flex-col items-center bg-blue-100 shadow-md 
          p-6 rounded-xl text-center sm:p-6 p-8
        ">
          <img src="/icons/clock.png" className="w-10 mb-4" />
          <h4 className="text-lg font-bold text-blue-700">WORKING HOURS</h4>
          <p className="text-gray-600 mt-1">Mon–Sat 09:00–20:00</p>
          <p className="text-gray-600">Sunday Emergency only</p>
        </div>

      </div>

      {/* ===================== MAIN BLUE FOOTER ===================== */}
      <div className="bg-[#1F2B6C] text-white py-14">
        <div className="
          max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 
          gap-10 px-6 text-center md:text-left
        ">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold mb-3">MEDDICAL</h2>
            <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
              Leading the Way in Medical <br />
              Excellence, Trusted Care.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xl font-semibold mb-3">Important Links</h4>
            <ul className="space-y-2 text-gray-200 text-sm sm:text-base">
              <li><Link className="hover:text-blue-300" to="/appointment">Appointment</Link></li>
              <li><Link className="hover:text-blue-300" to="/doctors">Doctors</Link></li>
              <li><Link className="hover:text-blue-300" to="/services">Services</Link></li>
              <li><Link className="hover:text-blue-300" to="/about">About Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-3">Contact Us</h4>
            <p className="text-gray-200 text-sm sm:text-base">Call: (237) 681-812-255</p>
            <p className="text-gray-200 text-sm sm:text-base">Email: prajwalgpatil2002@gmail.com</p>
            <p className="text-gray-200 text-sm sm:text-base">Address: 0123 Some place</p>
            <p className="text-gray-200 text-sm sm:text-base">Some country</p>
          </div>

          {/* Feedback */}
          <div>
            <h4 className="text-xl font-semibold mb-3">Patient Feedback</h4>
            <p className="text-gray-200 text-sm mb-3">
              Your feedback helps us improve our services.
            </p>

            <div className="flex bg-white rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Write your feedback..."
                className="flex-grow bg-blue-100 px-3 py-2 text-black outline-none"
              />
              <button className="bg-blue-100 p-3 hover:bg-blue-700 transition">
                <img src="/icons/send.svg" className="w-5" />
              </button>
            </div>

            <p className="text-gray-300 text-xs mt-2">
              We appreciate your time and suggestions 
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4 mt-5">
              <a href="https://www.linkedin.com/in/prajwal-patil16/" target="_blank">
                <img src="/icons/linkedin.svg" className="w-6 cursor-pointer" />
              </a>
              <a href="https://www.facebook.com/">
                <img src="/icons/facebook.svg" className="w-6 cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/prajwal.patil._/" target="_blank">
                <img src="/icons/insta.svg" className="w-6 cursor-pointer" />
              </a>
            </div>
          </div>
                  </div>
                </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-600 text-xs sm:text-sm py-6">
        © 2021 Hospital’s name – All Rights Reserved by PNTEC-LTD
      </div>
    </footer>
  );
}
