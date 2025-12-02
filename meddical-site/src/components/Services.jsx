import "../styles/services.css";

export default function Services() {
  const menu = [
    { name: "Free Checkup", icon: "/icons/free.svg" },
    { name: "Cardiogram", icon: "/icons/heart.svg", active: true },
    { name: "Dna Testing", icon: "/icons/dna.svg" },
    { name: "Blood Bank", icon: "/icons/blood.svg" }
  ];

  return (
    <section className="services-section">

      {/* Section Title */}
      <p className="services-subtitle">CARE YOU CAN BELIEVE IN</p>
      <h2 className="services-title">Our Services</h2>

      <div className="services-content">

        {/* LEFT MENU */}
        <div className="services-menu">
          {menu.map((item, i) => (
            <div
              key={i}
              className={`menu-item ${item.active ? "active" : ""}`}
            >
              <img src={item.icon} alt={item.name} />
              <span>{item.name}</span>
            </div>
          ))}

          <button className="view-all-btn">View All</button>
        </div>

        {/* MIDDLE CONTENT */}
        <div className="services-text">
          <h3>A passion for putting patients first.</h3>

          <div className="bullet-grid">

            <ul>
              <li>A Passion for Healing</li>
              <li>All our best</li>
              <li>A Legacy of Excellence</li>
            </ul>

            <ul>
              <li>5-Star Care</li>
              <li>Believe in Us</li>
              <li>Always Caring</li>
            </ul>

          </div>

          <p className="service-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat
            scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare 
            ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. 
            Consequat faucibus porttitor enim et.
          </p>

          <p className="service-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque.
            Convallis felis vitae tortor augue. Velit nascetur proin massa in.
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="services-images">
          <img src="/images/services1.svg" className="services-img" />
          <img src="/images/services2.svg" className="services-img" />
        </div>

      </div>

    </section>
  );
}
