import { Link } from "react-router-dom";
export default function DoctorsGrid() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      specialty: "Neurology",
      experience: "12 Years Experience",
      img: "/images/doc1.svg",
    },
    {
      id: 2,
      name: "Dr. Kevin Rogers",
      specialty: "Cardiology",
      experience: "15 Years Experience",
      img: "/images/doc2.svg",
    },
    {
      id: 3,
      name: "Dr. Priya Sharma",
      specialty: "Orthopedics",
      experience: "10 Years Experience",
      img: "/images/doc3.svg",
    },
    {
      id: 4,
      name: "Dr. Ana Rodriguez",
      specialty: "Dermatology",
      experience: "8 Years Experience",
      img: "/images/doc1.svg",
    },
    {
      id: 5,
      name: "Dr. Mark Wilson",
      specialty: "Urology",
      experience: "11 Years Experience",
      img: "/images/doc2.svg",
    },
    {
      id: 6,
      name: "Dr. Emily Carter",
      specialty: "Oncology",
      experience: "9 Years Experience",
      img: "/images/doc3.svg",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <p className="text-center text-blue-600 tracking-wide font-semibold">
        MEET OUR EXPERTS
      </p>

      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#1F2B6C] mt-2 mb-10">
        Our Medical Specialists
      </h2>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {doctors.map((doc) => (
          <Link
            key={doc.id}
            to={`/doctors/${doc.id}`}
            className="bg-white rounded-xl shadow-md hover:shadow-2xl transition duration-300"
          >
            <img src={doc.img} className="w-full h-72 object-cover rounded-t-xl" />

            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-[#1F2B6C]">{doc.name}</h3>

              <p className="text-blue-600 text-sm tracking-widest mt-1">
                {doc.specialty}
              </p>

              <p className="text-gray-600 text-sm mt-2">{doc.experience}</p>

              <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition">
                View Profile
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
