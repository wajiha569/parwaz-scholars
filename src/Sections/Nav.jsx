import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  // menuStatus can be: 'closed', 'open', or 'closing'
  const [menuStatus, setMenuStatus] = useState("closed");

  const openMenu = () => {
    setMenuStatus("open");
    document.body.style.overflow = "hidden"; // Prevent scrolling when open
  };

  const closeMenu = () => {
    setMenuStatus("closing");
    document.body.style.overflow = "unset";

    // This matches your 0.4s CSS transition
    setTimeout(() => {
      setMenuStatus("closed");
    }, 400);
  };

  const toggleMenu = () => {
    menuStatus === "open" ? closeMenu() : openMenu();
  };

  // Helper booleans for the JSX classes
  const isOpen = menuStatus === "open";
  const isClosing = menuStatus === "closing";
  const isVisible = isOpen || isClosing;

  return (
    <nav className="nav-bar" role="navigation" aria-label="Main navigation">
      {/* Logo */}
      <Link to="/" onClick={menuStatus === "open" ? closeMenu : undefined}>
        <img
          src="/parwaz-logo.png"
          alt="Parwaz Scholars Logo"
          className="parwaz-logo"
        />
      </Link>

      {/* Hamburger Toggle */}
      <div
        className={`mobile-menu-toggle ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
      >
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </div>

      {/* Dark Overlay */}
      {isVisible && (
        <div
          className={`overlay ${isOpen ? "show" : ""}`}
          onClick={closeMenu}
        ></div>
      )}

      {/* Navigation Menu */}
      <div
        className={`center-nav ${isOpen ? "show" : ""} ${isClosing ? "closing" : ""}`}
        id="mobile-menu"
      >
        <div className="pages">
          <Link to="/" className="page-link" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about-us" className="page-link" onClick={closeMenu}>
            About Us
          </Link>
          <Link to="/programs" className="page-link" onClick={closeMenu}>
            Programs
          </Link>
          <Link
            to="/success-stories"
            className="page-link hide1"
            onClick={closeMenu}
          >
            Success Stories
          </Link>
          <Link to="/resources" className="page-link hide3" onClick={closeMenu}>
            Resources
          </Link>
          <Link to="/news" className="page-link hide2" onClick={closeMenu}>
            News & Events
          </Link>
          <Link to="/get-involved" className="page-link" onClick={closeMenu}>
            Get Involved
          </Link>
          <Link to="/contact" className="page-link" onClick={closeMenu}>
            Contact Us
          </Link>
          <Link to="/faq" className="page-link" onClick={closeMenu}>
            FAQs
          </Link>
          <Link to="/apply" className="page-link apply-btn" onClick={closeMenu}>
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
