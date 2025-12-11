import { useState } from "react";

export default function ServicesHome() {
  const menu = [
    { key: "free-checkup", name: "Free Checkup", icon: "/icons/free.svg" },
    { key: "cardiogram", name: "Cardiogram", icon: "/icons/heart.svg" },
    { key: "dna-testing", name: "DNA Testing", icon: "/icons/dna.svg" },
    { key: "blood-bank", name: "Blood Bank", icon: "/icons/blood.svg" },
  ];

  // Dynamic content for each service
  const content = {
    "free-checkup": {
      title: "Free Health Checkup",
      bullets: [
        "Full Body Health Assessment",
        "Blood Pressure, BMI & Sugar Test",
        "Preventive Care Consultation",
      ],
      desc1:
        "Our Free Health Checkup Program helps patients detect early-stage health issues before they become serious. Conducted by experienced physicians using advanced equipment.",
      desc2:
        "The checkup covers essential diagnostics and provides personalized advice to maintain long-term wellness.",
      img1: "/images/services1.svg",
      img2: "/images/services2.svg",
    },

    cardiogram: {
      title: "Advanced Cardiogram Testing",
      bullets: [
        "24/7 Heart Monitoring",
        "Digital ECG Analysis",
        "Cardiologist Consultation",
      ],
      desc1:
        "Our cardiology department uses state-of-the-art ECG and ECHO machines to diagnose heart rhythm problems with high accuracy.",
      desc2:
        "Each patient receives a full report analyzed by a senior cardiologist, ensuring precise and reliable care.",
      img1: "/images/services2.svg",
      img2: "/images/services1.svg",
    },

    "dna-testing": {
      title: "DNA & Genetic Testing",
      bullets: [
        "Ancestry & Trait Analysis",
        "Genetic Disease Prediction",
        "Advanced Lab Processing",
      ],
      desc1:
        "Our DNA testing lab uses next-generation sequencing (NGS) technology to deliver accurate genetic insights.",
      desc2:
        "We help patients understand hereditary risks and take preventive medical decisions for long-term health.",
      img1: "/images/services1.svg",
      img2: "/images/services2.svg",
    },

    "blood-bank": {
      title: "24/7 Blood Bank Services",
      bullets: [
        "Safe & Certified Blood Storage",
        "All Blood Groups Available",
        "Emergency Blood Delivery",
      ],
      desc1:
        "Our blood bank follows strict WHO standards for blood collection, processing, and storage.",
      desc2:
        "We ensure availability of all major blood groups at all times, with priority support for emergency cases.",
      img1: "/images/services1.svg",
      img2: "/images/services2.svg",
    },
  };

  const [active, setActive] = useState("cardiogram");

  return (
    <section className="w-full py-5 bg-white">

      {/* Section Title */}
      <div className="text-center mb-10">
        <p className="text-blue-600 font-semibold tracking-wide">CARE YOU CAN BELIEVE IN</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2B6C]">Our Services</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* LEFT MENU */}
        <div className="space-y-4">
          {menu.map((item) => (
            <div
              key={item.key}
              onClick={() => setActive(item.key)}
              className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition 
              ${
                active === item.key
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white hover:bg-blue-50"
              }`}
            >
              <img
                src={item.icon}
                alt={item.name}
                className={`w-7 ${active === item.key ? "invert" : ""}`}
              />
              <span className="font-semibold">{item.name}</span>
            </div>
          ))}
        </div>

        {/* MIDDLE CONTENT */}
        <div>
          <h3 className="text-xl font-bold text-[#1F2B6C] mb-4">
            {content[active].title}
          </h3>

          {/* Bullet grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <ul className="space-y-2">
              {content[active].bullets.slice(0, 3).map(( b, i) => (
                <li key={i} className="text-gray-700">• {b}</li>
              ))}
            </ul>
          </div>

          {/* Paragraphs */}
          <p className="text-gray-600 mb-4 leading-relaxed">
            {content[active].desc1}
          </p>

          <p className="text-gray-600 leading-relaxed">
            {content[active].desc2}
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="flex flex-col gap-6">
          <img src={content[active].img1} className="rounded-xl shadow" />
          <img src={content[active].img2} className="rounded-xl shadow" />
        </div>

      </div>

    </section>
  );
} 