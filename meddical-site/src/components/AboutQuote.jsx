export default function AboutQuote() {
  return (
    <section className="about-quote">
      <div className="quote-overlay"></div>

      <div className="quote-content">
        <p className="quote-text">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat
          scelerisque tortor ornare ornare. Convallis felis vitae tortor augue.”
        </p>

        <h4 className="quote-author">John Doe</h4>

        <div className="quote-dots">
          <span></span>
          <span className="active"></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}
