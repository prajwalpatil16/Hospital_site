import "../styles/appointment.css";

export default function AppointmentForm() {
  return (
    <section className="appointment-wrapper">

      {/* LEFT CONTENT */}
      <div className="appointment-left">

        <h2>Book an Appointment</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Quisque placerat scelerisque tortor ornare ornare. Convallis 
          felis vitae tortor augue. Velit nascetur proin massa in. 
          Consequat faucibus porttitor enim et.
        </p>

      </div>

      {/* RIGHT FORM */}
      <form className="appointment-card">

        {/* 2 column grid */}
        <div className="appointment-grid">

          <input type="text" placeholder="Name" />
          <select><option>Gender</option></select>

          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone" />

          <input type="text" placeholder="Date" />
          <select><option>Time</option></select>

          <select><option>Doctor</option></select>
          <select><option>Department</option></select>

        </div>

        {/* Message field */}
        <textarea placeholder="Message"></textarea>

        {/* Submit button */}
        <button type="submit" className="submit-btn">SUBMIT</button>

      </form>

    </section>
  );
}
