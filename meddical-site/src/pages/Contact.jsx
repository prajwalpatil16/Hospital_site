import PageBanner from "../components/PageBanner";
import NewsSection from "../components/NewsSection";

export default function Contact() {
  return (
    <>
      <PageBanner
                    title="Contact Us"
                    breadcrumb="Home / Contact"
                    image="/images/team-large1.svg"
      />
      <div className="w-1/2 mt-10 align-middle mx-auto">
        <iframe
          className="w-full h-[450px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24156.09023262827!2d-74.011276!3d40.721786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598b6b9cb49f%3A0xc80b8f06e177fe62!2sNew%20York!5e0!3m2!1sen!2sus!4v1700000000000"
          loading="lazy"
          allowFullScreen=""
        ></iframe>
      </div>
      <NewsSection />
    </>
  );
}
