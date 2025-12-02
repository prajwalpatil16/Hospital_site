import Doctors from '../components/Doctors';
import AboutBanner from '../components/AboutBanner';
import AboutContent from '../components/AboutContent';
import AboutQuote from '../components/AboutQuote';
import News from '../components/NewsSection';
import NewsSection from '../components/NewsSection';

export default function About() {
  return (
      <>
      <AboutBanner />
      <AboutContent />
      <AboutQuote />
      <Doctors />
      <NewsSection />
      </>
  );
}
