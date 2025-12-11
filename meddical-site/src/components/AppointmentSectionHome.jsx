import AppointmentForm from "./AppointmentForm";
export default function AppointmentSectionHome() {
  return (
    <section
      className="relative w-full py-20 px-4"
    >
      {/* ==== Background Image ==== */}
      <div className="absolute inset-0">
        <img
          src="/images/doctor-blur.svg" 
          alt="hospital background"
          className="w-full h-full object-cover"
        />

        {/* Blur + Dark Overlay */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-md"></div>
      </div>

      {/* ==== FOREGROUND CONTENT ==== */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row gap-10">

        {/* LEFT CONTENT */}
        <div className="md:w-1/2 w-full space-y-5">
          <h2 className="text-3xl font-bold text-[#1F2B6C]">
            Book an Appointment
          </h2>

          <p className="text-gray-900 leading-relaxed">
            Schedule your visit with our expert doctors. We provide timely,
            compassionate, and professional care for all your medical needs.
            Choose your department, doctor, and preferred time to get started.
          </p>
        </div>

        {/* RIGHT FORM */}
        <AppointmentForm />   
      </div>
    </section>
  );
}
