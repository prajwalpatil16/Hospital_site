import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left">
          <p className="hero-subtitle">CARING FOR LIFE</p>

          <h1 className="hero-title">
            Leading the Way <br />
            in Medical Excellence
          </h1>

          <button className="hero-btn">Our Services</button>

          {/* TEAM + APPOINTMENT BOXES */}
          <div className="hero-bottom-row">

            {/* Team wide image */}
            <img 
              src="/images/team.png"
              alt="team"
              className="hero-team-img"
            />

            {/* Appointment box 1 */}
            <div className="hero-box light-box">
              <p>Book an Appointment</p>
            </div>

            {/* Appointment box 2 */}
            <div className="hero-box dark-box">
              <p>Book an Appointment</p>
              <img src="/icons/appointment.png" alt="icon" />
            </div>

          </div>

        </div>

        {/* RIGHT DOCTOR IMAGE */}
        <div className="hero-right">
          <img src="/images/doctor.png" alt="doctor" />
        </div>

      </div>

    </section>
  );
}
