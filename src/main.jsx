import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "react-dom/client";
import NavBar  from "./NavBar.jsx";
import Footer from "./Footer.jsx"
console.log("Main.jsx loaded successfully");



const root = ReactDOM.createRoot(document.getElementById("nav-bar"));
  root.render(
      <NavBar />
  );


  const footerRoot = ReactDOM.createRoot(document.getElementById("footer"));
  footerRoot.render(
      <Footer />
  );
console.log("Main.jsx loaded successfully");
console.log("NavBar:", NavBar);
console.log("Footer:", Footer);