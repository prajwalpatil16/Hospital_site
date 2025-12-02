import "../styles/doctors.css";

export default function Doctors() {
  const doctors = [
    { name: "Doctor's Name", specialty: "NEUROLOGY", img: "/images/doc1.svg" },
    { name: "Doctor's Name", specialty: "NEUROLOGY", img: "/images/doc2.svg" },
    { name: "Doctor's Name", specialty: "NEUROLOGY", img: "/images/doc3.svg" }
  ];

  return (
    <section className="doctors-section">

      <p className="doctors-subtitle">TRUSTED CARE</p>
      <h2 className="doctors-title">Our Doctors</h2>

      <div className="doctors-grid">
        {doctors.map((doc, i) => (
          <div key={i} className="doctor-card">

            <img src={doc.img} alt={doc.name} className="doctor-img" />

            <div className="doctor-info">
              <h3>{doc.name}</h3>
              <p className="speciality">{doc.specialty}</p>

              <div className="social-icons">
                <img src="/icons/linkedin.svg" />
                <img src="/icons/facebook.svg" />
                <img src="/icons/insta.svg" />
              </div>

              <button className="profile-btn">View Profile</button>
            </div>

          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

    </section>
  );
}
