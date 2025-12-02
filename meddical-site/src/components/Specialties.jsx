import "../styles/specialties.css";

export default function Specialties() {
  const data = [
    "Neurology", "Bones", "Oncology", "Otorhinolaryngology",
    "Ophthalmology", "Cardiovascular", "Pulmonology", "Renal Medicine",
    "Gastroenterology", "Urology", "Dermatology", "Gynaecology"
  ];

  return (
    <section className="specialties-section">

      <h2 className="section-title">Our Specialties</h2>

      <div className="specialties-grid">
        {data.map((name, i) => (
          <div
            key={i}
            className={`specialty-card ${name === "Bones" ? "active" : ""}`}
          >
            <img src="/icons/specialties.svg" alt={name} className="specialty-icon" />
            <p>{name}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
