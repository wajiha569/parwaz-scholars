import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./Sections/Nav.jsx";
import Footer from "./Sections/Footer.jsx";
import MainPage from "./pages/MainPage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Apply from "./pages/Apply.jsx";
import Contact from "./pages/Contact.jsx";
import "./App.css";

export default function App() {
  return (
    // Use HashRouter so the app works on static file hosts without server-side rewrites.
    // This avoids 404s on refresh for routes like /about when deploying to static hosts.
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/contact" element={<Contact />} />
        {/* Fallback: redirect any unknown route to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
