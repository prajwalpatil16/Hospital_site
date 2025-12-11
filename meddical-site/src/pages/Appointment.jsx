import PageBanner from "../components/PageBanner";
import ScheduleHours from "../components/ScheduleHours";
import AppointmentForm from "../components/AppointmentForm";

export default function Appointment() {
  return (
    <>
      {/* Banner */}
      <PageBanner
        title="Book an Appointment"
        breadcrumb="Home / Appointment"
        image="/images/about-doctors.svg"
      />

      {/* Main Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F2B6C]">
            Book an Appointment
          </h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Schedule your visit with our expert doctors. Choose your preferred
            date, time, doctor, and department to get started. We ensure
            compassionate and timely medical care.
          </p>

          <div className="mt-6 sm:mt-10">
            <AppointmentForm />
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:pt-10">
          <ScheduleHours />
        </div>

      </section>

      {/* MAP */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-10">
        <iframe
          className="w-full h-[300px] sm:h-[400px] md:h-[450px] rounded-xl shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0026086453495!2d77.57272387538285!3d13.035505613473328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85f08b1f69847657%3A0x46dddcbeb749ff81!2sMINE%20-%20IT!5e0!3m2!1sen!2sin!4v1765266745786!5m2!1sen!2sin"
          loading="lazy"
        ></iframe>
      </section>

      <div className="my-16"></div>
    </>
  );
}
