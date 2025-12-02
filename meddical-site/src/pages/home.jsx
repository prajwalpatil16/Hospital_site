import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import Specialties from "../components/Specialties";
import Services from "../components/Services";

import Doctors from "../components/Doctors";
import NewsSection from "../components/NewsSection";
import AppointmentForm from "../components/AppointmentForm";

export default function Home() {
  return (
<<<<<<< Updated upstream
    <>
      <Hero />
      <Welcome />
      <Specialties />
      <Services />
      <Doctors />
      <NewsSection />
      <AppointmentForm />
    </>
=======
    <div style={{ fontFamily: "Arial, sans-serif", padding: "40px" }}>

      {/* Hero Section */}
      <section style={{ textAlign: "center", marginBottom: "50px" }}>
        
        {/* Add Image Here */}
        <img 
          src="/your-image.jpg" 
          alt="Hospital Banner" 
          style={{
            width: "100%",
            maxWidth: "900px",
            borderRadius: "10px",
            marginBottom: "20px"
          }}
        />

        <h1 style={{ fontSize: "36px", color: "#0056b3" }}>
          Welcome to Our Hospital
        </h1>
        <p style={{ fontSize: "18px", color: "#444", maxWidth: "700px", margin: "20px auto 0 auto" }}>
          Providing world-class healthcare services with compassion and advanced technology.
        </p>
      </section>

      {/* Services Section */}
      <section style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center", marginBottom: "50px" }}>
        <div style={{ flex: 1, minWidth: "250px", padding: "20px", border: "1px solid #ddd", borderRadius: "10px", textAlign: "center" }}>
          <h2 style={{ color: "#0056b3" }}>24/7 Emergency</h2>
          <p>Quick response and emergency care whenever you need it.</p>
        </div>
        <div style={{ flex: 1, minWidth: "250px", padding: "20px", border: "1px solid #ddd", borderRadius: "10px", textAlign: "center" }}>
          <h2 style={{ color: "#0056b3" }}>Expert Doctors</h2>
          <p>Highly qualified and experienced medical professionals.</p>
        </div>
        <div style={{ flex: 1, minWidth: "250px", padding: "20px", border: "1px solid #ddd", borderRadius: "10px", textAlign: "center" }}>
          <h2 style={{ color: "#0056b3" }}>Advanced Technology</h2>
          <p>Modern equipment and innovative treatments for all patients.</p>
        </div>
      </section>

      {/* About Preview Section */}
      <section style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
        <h2 style={{ color: "#0056b3" }}>About Our Hospital</h2>
        <p>
          We are committed to providing the highest quality healthcare with compassion and professionalism.
          <br />
          <a href="/about" style={{ color: "#0056b3", textDecoration: "underline" }}>Learn more about us →</a>
        </p>
      </section>

    </div>
>>>>>>> Stashed changes
  );
}