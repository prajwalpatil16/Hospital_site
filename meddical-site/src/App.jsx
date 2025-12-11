import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import DoctorsPage from "./pages/DoctorsPage";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import SpecialtyPage from "./pages/SpecialtyPage";
import NewsPage from "./pages/NewsPage";
import Login from "./pages/Login";
import Register from "./pages/Register";










// -------------- LAYOUT WRAPPER (HIDE HEADER/FOOTER FOR LOGIN/REGISTER) ----------------
function LayoutWrapper({ children }) {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {!hideLayout && <TopBar />}
      {!hideLayout && <Header />}

      {/* Page content */}
      {children}

      {!hideLayout && <Footer />}
    </>
  );
}


// ---------------------- MAIN APP COMPONENT ----------------------
export default function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/specialty/:name" element={<SpecialtyPage />} />
          <Route path="/news/:id" element={<NewsPage />} />

          {/* AUTH PAGES */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
    
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}
