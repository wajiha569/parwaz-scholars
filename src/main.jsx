import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx"
import "../html/footer.css";
import "../html/nav-bar.css";

const root = ReactDOM.createRoot(document.getElementById("nav-bar"));
const footer = ReactDOM.createRoot(document.getElementById("footer"));
root.render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>
);

footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
)
