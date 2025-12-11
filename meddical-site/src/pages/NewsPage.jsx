import { useParams } from "react-router-dom";

export default function NewsPage() {
  const { id } = useParams();

  const newsData = {
    1: {
      title: "Breakthrough Surgery Saves Patient's Life",
      img: "/images/news1.svg",
      content: `
        Our surgical team successfully performed a complex operation that
        restored full mobility to the patient. This breakthrough highlights
        the hospital’s excellence in advanced medical care.
      `,
    },
    2: {
      title: "Hospital Introduces New MRI Technology",
      img: "/images/news1.svg",
      content: `
        The latest MRI scanner provides 3D imaging with 40% faster results,
        improving diagnosis accuracy and reducing wait times for patients.
      `,
    },
    3: {
      title: "How We’re Improving Cardiovascular Care",
      img: "/images/news1.svg",
      content: `
        Our cardiology department now offers advanced non-invasive testing
        and personalized treatment plans for heart patients.
      `,
    },
    4: {
      title: "New Child Care Unit Launched",
      img: "/images/news1.svg",
      content: `
        Our new pediatric unit includes state-of-the-art equipment and a
        child-friendly environment to ensure better care.
      `,
    },
  };

  const article = newsData[id];

  if (!article)
    return <h2 className="text-center text-3xl py-20">Article Not Found</h2>;

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <img src={article.img} className="w-full rounded-xl mb-6" />
      <h1 className="text-4xl font-bold text-[#1F2B6C] mb-6">{article.title}</h1>

      <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
        {article.content}
      </p>
    </section>
  );
}
