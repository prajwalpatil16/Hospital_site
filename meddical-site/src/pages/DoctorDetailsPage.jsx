import { useParams } from "react-router-dom";

export default function DoctorDetailsPage() {
  const { id } = useParams();

  //  fetched from backend once the api isready 
  const doctor = {
    id,
    name: "Dr. Sarah Mitchell",
    specialty: "Neurology",
    experience: "12 Years Experience",
    education: "MBBS, MD (Neuro Sciences)",
    bio: "Dr. Sarah is a highly experienced neurologist known for her precision diagnosis and compassionate treatment methodology.",
    img: "/images/doc1.svg",
  };

  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          {/* IMAGE */}
          <div>
            <img src={doctor.img} className="w-full rounded-xl shadow" />
          </div>

          {/* DETAILS */}
          <div className="md:col-span-2 space-y-4">
            <h1 className="text-3xl font-bold text-[#1F2B6C]">
              {doctor.name}
            </h1>

            <p className="text-blue-600 font-semibold text-lg">
              {doctor.specialty}
            </p>

            <p className="text-gray-700">{doctor.experience}</p>

            <h3 className="text-xl font-bold text-[#1F2B6C] mt-6">About</h3>
            <p className="text-gray-600">{doctor.bio}</p>

            <h3 className="text-xl font-bold text-[#1F2B6C] mt-6">Education</h3>
            <p className="text-gray-600">{doctor.education}</p>

            <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
              Book Appointment
            </button>
          </div>

        </div>

      </section>
    </>
  );
}
