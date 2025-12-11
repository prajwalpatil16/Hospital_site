import { Link } from "react-router-dom";

export default function ServicesSection() {
  const services = [
    {
      key: "free-checkup",
      title: "Free Health Checkup",
      desc: "Annual preventive checkups including vitals, BMI, blood tests, and doctor consultation.",
      icon: "/icons/checkup.svg",
    },
    {
      key: "cardiology",
      title: "Cardiology & Heart Care",
      desc: "Advanced ECG, ECHO, stress tests, and specialist consultations for heart diseases.",
      icon: "/icons/heart.svg",
    },
    {
      key: "orthopedics",
      title: "Orthopedics & Joint Care",
      desc: "Bone, spine, and joint treatments with digital X-rays and physiotherapy support.",
      icon: "/icons/bone.svg",
    },
    {
      key: "pediatrics",
      title: "Pediatrics & Child Care",
      desc: "Comprehensive care for infants, children, and teens including vaccinations.",
      icon: "/icons/baby.svg",
    },
    {
      key: "neurology",
      title: "Neurology & Brain Care",
      desc: "Diagnosis of migraines, epilepsy, stroke, and nerve disorders using advanced imaging.",
      icon: "/icons/brain.svg",
    },
    {
      key: "blood-bank",
      title: "24/7 Blood Bank",
      desc: "Safe blood collection, processing, and emergency supply of all blood groups.",
      icon: "/icons/blood.svg",
    },
    {
      key: "diagnostics",
      title: "Diagnostics & Imaging",
      desc: "CT scan, MRI, ultrasound, digital X-ray, and lab services under one roof.",
      icon: "/icons/scan.svg",
    },
    {
      key: "maternity",
      title: "Maternity & Women’s Health",
      desc: "Pregnancy care, deliveries, fertility services, and gynecology consultations.",
      icon: "/icons/mother.svg",
    },
    {
      key: "oncology",
      title: "Cancer Care (Oncology)",
      desc: "Chemotherapy, radiation therapy, and specialized cancer consultations.",
      icon: "/icons/ribbon.svg",
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      
      {/* Title */}
      <div className="text-center mb-12">
        <p className="text-blue-600 font-semibold tracking-wide">OUR MEDICAL SERVICES</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2B6C]">
          Comprehensive Healthcare for Every Need
        </h2>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((item) => (
          <Link
            to={`/services/${item.key}`}
            key={item.key}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl p-7 border border-gray-100 transition group"
          >
            <div className="flex justify-center">
              <img src={item.icon} className="w-16 mb-4 group-hover:scale-110 transition" />
            </div>

            <h3 className="text-xl font-semibold text-[#1F2B6C] text-center">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm mt-2 text-center leading-relaxed">
              {item.desc}
            </p>

            <div className="text-center mt-4">
              <span className="text-blue-600 font-semibold hover:underline">
                Learn More →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
