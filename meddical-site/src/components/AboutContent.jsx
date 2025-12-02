export default function AboutContent() {
  return (
    <section className="about-content">

      {/* LEFT IMAGE */}
      <div className="about-left">
        <img src="/images/about-doctors.svg" alt="Doctors" />
      </div>

      {/* RIGHT TEXT */}
      <div className="about-right">
        <p className="section-subtitle">WELCOME TO HOSPITAL NAME</p>

        <h2 className="section-title">
          Best Care for Your <br /> Good Health
        </h2>

        <div className="about-points">
          <ul>
            <li>🔵 A Passion for Healing</li>
            <li>🔵 All our best</li>
            <li>🔵 Always Caring</li>
          </ul>

          <ul>
            <li>🔵 5-Star Care</li>
            <li>🔵 Believe in Us</li>
            <li>🔵 A Legacy of Excellence</li>
          </ul>
        </div>

        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat
          scelerisque tortor ornare ornare. Convallis felis vitae tortor augue.
        </p>

        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat
          scelerisque. Convallis felis vitae tortor augue.
        </p>

      </div>
    </section>
  );
}
