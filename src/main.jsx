import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx"

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
