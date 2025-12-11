import PageBanner from "../components/PageBanner.jsx";
import AboutContent from "../components/AboutContent.jsx";
import QuoteSection from "../components/QuoteSection.jsx";
import Doctors from "../components/Doctors.jsx";
import NewsSection from "../components/NewsSection.jsx";

export default function About() {
  return (
    <>
      <PageBanner
        title="About Us"
        breadcrumb="Home / About"
        image="/images/about-bg.jpg"
      />
      <AboutContent />
      <QuoteSection 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare."
         author="John Doe"
      />
      <Doctors />
      <NewsSection />
    </>
  );
}
