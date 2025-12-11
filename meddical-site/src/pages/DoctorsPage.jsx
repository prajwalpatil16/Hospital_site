import QuoteSection from "../components/QuoteSection";
import DoctorsGrid from "../components/DoctorsGrid";
import NewsSection from "../components/NewsSection";
import PageBanner from "../components/PageBanner";



export default function DoctorsPage() {
  return (
    <>
      <PageBanner
              title="Our Doctors"
              breadcrumb="Home / Doctors"
              image="/images/i.jpg"
      />
      <DoctorsGrid />
      <QuoteSection 
        text="Great doctors treat more than just symptoms—they treat people."
        author="Dr. Smith"
      />

      <NewsSection />
    </>
  );
}
