import { useRef } from "react";
import { Link } from "react-router-dom";

export default function NewsSection() {
  const news = [
    {
      id: 1,
      img: "/images/news1.svg",
      title: "Breakthrough Surgery Saves Patient's Life",
      date: "Mon • 05 Sep 2021",
      author: "Admin",
      views: 68,
      likes: 86,
    },
    {
      id: 2,
      img: "/images/news1.svg",
      title: "Hospital Introduces New MRI Technology",
      date: "Wed • 15 Sep 2021",
      author: "Medical Team",
      views: 102,
      likes: 142,
    },
    {
      id: 3,
      img: "/images/news1.svg",
      title: "How We’re Improving Cardiovascular Care",
      date: "Fri • 20 Sep 2021",
      author: "Dr. Smith",
      views: 88,
      likes: 63,
    },
    {
      id: 4,
      img: "/images/news1.svg",
      title: "New Child Care Unit Launched",
      date: "Tue • 25 Sep 2021",
      author: "Admin",
      views: 74,
      likes: 52,
    },
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="w-full py-10 bg-white">
      {/* Subtitle */}
      <p className="text-center text-blue-600 tracking-wide font-semibold">
        BETTER INFORMATION, BETTER HEALTH
      </p>

      {/* Title */}
      <h2 className="text-center text-4xl font-bold text-[#1F2B6C] mt-2 mb-12">
        News
      </h2>

      {/* Slider Wrapper */}
      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
        >
          ❮
        </button>

        {/* Cards Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {news.map((item) => (
            <Link
              to={`/news/${item.id}`}
              key={item.id}
              className="min-w-[280px] md:min-w-[320px] bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 cursor-pointer"
            >
              <img src={item.img} className="w-full rounded-lg" />

              <p className="text-gray-500 text-sm mt-3">
                {item.date} • By {item.author}
              </p>

              <h3 className="font-semibold text-lg text-[#1F2B6C] mt-2">
                {item.title}
              </h3>

              <div className="flex justify-between mt-3 text-gray-600 text-sm">
                <span>👁 {item.views}</span>
                <span>❤ {item.likes}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
        >
          ❯
        </button>
      </div>

    </section>
  );
}
