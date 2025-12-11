import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Doctors() {
  const doctors = [
    { id: 1, name: "Dr. Sarah Mitchell", specialty: "Neurology", img: "/images/doc1.svg" },
    { id: 2, name: "Dr. Kevin Rogers", specialty: "Cardiology", img: "/images/doc2.svg" },
    { id: 3, name: "Dr. Priya Sharma", specialty: "Orthopedics", img: "/images/doc3.svg" },
    { id: 4, name: "Dr. Ana Rodriguez", specialty: "Dermatology", img: "/images/doc1.svg" },
    { id: 5, name: "Dr. Mark Wilson", specialty: "Urology", img: "/images/doc2.svg" },
    { id: 6, name: "Dr. Emily Carter", specialty: "Oncology", img: "/images/doc3.svg" },
  ];

  return (
    <section className="w-full py-5 bg-white">
      <p className="text-center text-blue-600 tracking-wide font-semibold">
        TRUSTED CARE
      </p>

      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#1F2B6C] mt-2 mb-10">
        Our Doctors
      </h2>

      <div className="max-w-6xl mx-auto px-6">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {doctors.map((doc) => (
            <SwiperSlide key={doc.id}>
              <Link to={`/doctors`}>
                <div className="bg-white shadow-lg rounded-xl hover:shadow-2xl duration-300 overflow-hidden">
                  <img src={doc.img} className="w-full h-72 object-fit" />

                  <div className="bg-white text-center">
                    <h3 className="text-xl font-bold text-[#1F2B6C]">{doc.name}</h3>
                    <p className="text-blue-600 text-sm tracking-widest mt-1">
                      {doc.specialty}
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
