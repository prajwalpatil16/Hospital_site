export default function AppointmentForm() {
  return (
    <div className="bg-[#1F2B6C] text-white p-10 rounded-xl shadow-xl w-full">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {/* Patient Name */}
        <input
          type="text"
          name="patient_name"
          placeholder="Full Name"
          className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg
                     placeholder-white/80 focus:outline-none focus:border-white"
        />

        {/* Gender */}
        <select
          name="gender"
          className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg
                     text-white focus:outline-none focus:border-white"
        >
          <option className="text-black">Select Gender</option>
          <option className="text-black" value="male">Male</option>
          <option className="text-black" value="female">Female</option>
          <option className="text-black" value="other">Other</option>
        </select>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg
                     placeholder-white/80 focus:outline-none focus:border-white"
        />

        {/* Phone */}
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg
                     placeholder-white/80 focus:outline-none focus:border-white"
        />

        {/* Date */}
        <input
          type="date"
          name="date"
          className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg
                     text-white focus:outline-none focus:border-white"
        />

        {/* Time */}
        <select
          name="time"
          className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg
                     text-white focus:outline-none focus:border-white"
        >
          <option className="text-black">Select Time Slot</option>
          <option value="10:00 AM" className="text-black">10:00 AM</option>
          <option value="11:00 AM" className="text-black">11:00 AM</option>
          <option value="01:00 PM" className="text-black">01:00 PM</option>
          <option value="03:00 PM" className="text-black">03:00 PM</option>
        </select>

        {/* Doctor */}
        <select
          name="doctor_id"
          className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg
                     text-white focus:outline-none focus:border-white"
        >
          <option className="text-black">Select Doctor</option>
          <option value="1" className="text-black">Dr. Sarah Mitchell</option>
          <option value="2" className="text-black">Dr. Kevin Rogers</option>
          <option value="3" className="text-black">Dr. Priya Sharma</option>
        </select>

        {/* Department */}
        <select
          name="department_id"
          className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg
                     text-white focus:outline-none focus:border-white"
        >
          <option className="text-black">Select Department</option>
          <option value="1" className="text-black">Neurology</option>
          <option value="2" className="text-black">Cardiology</option>
          <option value="3" className="text-black">Orthopedics</option>
          <option value="4" className="text-black">Dermatology</option>
        </select>

      </div>

      {/* Message */}
      <textarea
        name="message"
        placeholder="Describe your symptoms or reason for appointment"
        className="w-full h-32 mt-6 px-4 py-3 bg-transparent border border-white/30 rounded-lg 
                   placeholder-white/80 text-white focus:outline-none focus:border-white resize-none"
      ></textarea>

      <button
        className="w-full mt-6 bg-white text-[#1F2B6C] font-semibold py-3 rounded-lg
                   hover:bg-gray-200 transition"
      >
        SUBMIT APPOINTMENT
      </button>

    </div>
  );
}
