import "../styles/news.css";

export default function NewsSection() {
  const news = [
    { img: "/images/news1.svg", title: "This Article's Title goes Here, but not too long." },
    { img: "/images/news1.svg", title: "This Article's Title goes Here, but not too long." },
    { img: "/images/news1.svg", title: "This Article's Title goes Here, but not too long." },
    { img: "/images/news1.svg", title: "This Article's Title goes Here, but not too long." }
  ];

  return (
    <section className="news-section">

      <p className="news-subtitle">BETTER INFORMATION, BETTER HEALTH</p>
      <h2 className="news-title">News</h2>

      <div className="news-grid">
        {news.map((item, i) => (
          <div key={i} className="news-card">
            
            <img src={item.img} className="news-img" />

            <div className="news-info">
              <p className="news-date">Monday 05, September 2021 | By Author</p>
              <h3>{item.title}</h3>

              <div className="news-meta">
                <span>👁 68</span>
                <span>❤ 86</span>
              </div>
            </div>

          </div>
        ))}
      </div>

      <div className="dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

    </section>
  );
}
