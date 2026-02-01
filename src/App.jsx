import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Sections/Nav.jsx";
import Footer from "./Sections/Footer.jsx";
import MainPage from "./pages/MainPage.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
