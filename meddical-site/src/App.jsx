import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/Services";
import DoctorsPage from "./pages/DoctorsPage";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";

export default function App() {
  return (
    <Router>
      <TopBar />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>

      <Footer />
    </Router>
  );
}
