import "../styles/welcome.css";

export default function Welcome() {
  return (
    <section className="welcome-section">

      {/* TOP TEXT AREA */}
      <div className="welcome-content">

        <p className="welcome-subtitle">WELCOME TO MEDDICAL</p>

        <h2 className="welcome-title">
          A Great Place to Receive Care
        </h2>

        <p className="welcome-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Quisque placerat scelerisque tortor ornare ornare. Convallis felis 
          vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus 
          porttitor enim et.
        </p>

        {/* LEARN MORE BUTTON */}
        <button className="learn-btn">
          Learn More →
        </button>

      </div>

      {/* IMAGE BELOW */}
      <div className="welcome-image">
        <img src="/images/team-large1.svg" alt="Medical Team" />
      </div>

    </section>
  );
}
