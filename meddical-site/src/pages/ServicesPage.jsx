import PageBanner from "../components/PageBanner";
import ServicesSection from "../components/ServicesSection";

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our Services"
        breadcrumb="Home / Services"
        image="/images/services-banner.webp"
      />
      <ServicesSection />
    </>
  );
}
