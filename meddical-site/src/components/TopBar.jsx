import "../styles/topbar.css";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-container">

        {/* LEFT — LOGO */}
        <div className="topbar-logo">
          <img src="/images/Meddical.svg" alt="Logo" />
        </div>

        {/* RIGHT — INFO BLOCKS */}
        <div className="topbar-info">

          {/* Emergency */}
          <div className="info-block">
            <img src="/icons/phone.png" alt="phone" className="info-icon" />
            <div>
              <p className="info-title">Emergency</p>
              <p className="info-value">(237) 681-812-255</p>
            </div>
          </div>

          {/* Work Hour */}
          <div className="info-block">
            <img src="/icons/clock.png" alt="clock" className="info-icon" />
            <div>
              <p className="info-title">Work Hour</p>
              <p className="info-value">09:00 - 20:00 Everyday</p>
            </div>
          </div>

          {/* Location */}
          <div className="info-block">
            <img src="/icons/location.png" alt="location" className="info-icon" />
            <div>
              <p className="info-title">Location</p>
              <p className="info-value">0123 Some Place</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
