import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full bg-blue-50 py-16 overflow-hidden">

      {/* Background Image for Mobile */}
      <img 
        src="/images/doctor.png"
        alt="doctor bg"
        className="absolute inset-0 w-full h-full object-cover opacity-20 md:hidden" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 
                      flex flex-col md:flex-row items-center justify-between">

        {/* LEFT CONTENT */}
        <div className="md:w-1/2 w-full space-y-5">
          <p className="text-blue-600 tracking-widest font-semibold">
            CARING FOR LIFE
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#1F2B6C] leading-tight">
            Leading the Way <br /> in Medical Excellence
          </h1>

          <p className="text-gray-600 leading-relaxed">
            Trusted healthcare powered by expert doctors, modern technology,
            and compassionate care for you and your family.
          </p>

          <Link to="/appointment">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full mt-4 shadow-md hover:bg-blue-700">
              Book an Appointment
            </button>
          </Link>

          <img
            src="/images/team.png"
            alt="team"
            className="w-64 md:w-72 rounded-lg mt-6"
          />
        </div>

        {/* RIGHT DOCTOR IMAGE - DESKTOP */}
        <div className="hidden md:flex md:w-1/2 justify-center">
          <img
            src="/images/doctor.png"
            alt="doctor"
            className="w-80 md:w-[420px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
