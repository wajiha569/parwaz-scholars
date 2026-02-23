import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./Sections/Nav.jsx";
import Footer from "./Sections/Footer.jsx";
import MainPage from "./pages/MainPage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Apply from "./pages/Apply.jsx";
import Contact from "./pages/Contact.jsx";
import Programs from "./pages/Programs.jsx";
import SuccessStories from "./pages/SuccessStories.jsx";
import Resources from "./pages/Resources.jsx";
import NewsEvent from "./pages/NewsEvent.jsx";
import "./App.css";

export default function App() {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/news-event" element={<NewsEvent />} />

        {/* Fallback: redirect any unknown route to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
