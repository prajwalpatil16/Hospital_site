import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Specialties() {
  const specialties = [
    "Neurology", "Bones", "Oncology", "Otorhinolaryngology",
    "Ophthalmology", "Cardiovascular", "Pulmonology", "Renal Medicine",
    "Gastroenterology", "Urology", "Dermatology", "Gynaecology"
  ];

  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -250 : 250, behavior: "smooth" });
  };

  return (
    <section className="w-full py-16 bg-white">
      <h2 className="text-center text-3xl font-bold text-blue-700 mb-10">
        World-Class Medical Specialties
      </h2>

      {/* DESKTOP GRID */}
      <div className="hidden sm:grid max-w-6xl mx-auto grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border border-gray-200">
        {specialties.map((name, i) => (
          <Link
            key={i}
            to={`/specialty/${name.toLowerCase().replace(/\s+/g, "-")}`}
            className="flex flex-col items-center justify-center py-10 border border-gray-200 hover:bg-blue-100 transition"
          >
            <img src="/icons/specialties.svg" className="w-10 mb-3" />
            <p className="text-[15px] font-medium text-[#1F2B6C]">{name}</p>
          </Link>
        ))}
      </div>

      {/* MOBILE CAROUSEL */}
      <div className="sm:hidden relative">

        <button onClick={() => scroll("left")} className="absolute left-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full">
          ❮
        </button>

        <button onClick={() => scroll("right")} className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full">
          ❯
        </button>

        <div ref={scrollRef} className="flex gap-4 overflow-x-auto px-4 py-4 no-scrollbar">
          {specialties.map((name, i) => (
            <Link
              key={i}
              to={`/specialty/${name.toLowerCase().replace(/\s+/g, "-")}`}
              className="min-w-[140px] flex flex-col items-center bg-white border rounded-xl py-6 px-4 shadow hover:bg-blue-100"
            >
              <img src="/icons/specialties.svg" className="w-10 mb-3" />
              <p className="text-sm font-medium text-[#1F2B6C]">{name}</p>
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}
