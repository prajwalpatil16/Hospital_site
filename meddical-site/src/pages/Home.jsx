import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import Specialties from "../components/Specialties";
import Services from "../components/ServicesHome";

import Doctors from "../components/Doctors";
import NewsSection from "../components/NewsSection";
import AppointmentSectionHome from "../components/AppointmentSectionHome";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Specialties />
      <Services />
      <Doctors />
      <NewsSection />
      <AppointmentSectionHome />
    </>
  );
}
