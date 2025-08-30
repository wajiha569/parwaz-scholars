import React, { useRef, useEffect } from "react";
console.log("NavBar.jsx loaded successfully")
export default function NavBar() {
  const mobileMenuToggleRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const toggleButton = mobileMenuToggleRef.current;
    const menu = mobileMenuRef.current;

    if (!toggleButton || !menu) return;

    const handleClick = () => {
      const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
      toggleButton.setAttribute('aria-expanded', !isExpanded);
      toggleButton.classList.toggle('active');
      menu.classList.toggle('show');
    };

    toggleButton.addEventListener('click', handleClick);

    return () => {
      toggleButton.removeEventListener('click', handleClick);
    };
  }, []);


  return (
    <>
      <nav 
        className="nav-bar" 
        role="navigation" 
        aria-label="Main navigation"
      >
        <img 
          src="../images/parwaz-logo.svg" 
          alt="Parwaz Scholars Logo" 
          className="logo" 
          onError={(e) => e.target.style.display = "none"} 
        />

        <button 
          ref={mobileMenuToggleRef}
          className="mobile-menu-toggle" 
          aria-expanded="false" 
          aria-controls="mobile-menu" 
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>

        <div ref={mobileMenuRef} className="center-nav" id="mobile-menu">
          <div className="pages">
            <a href="home.html" className="page-link" aria-current="page">Home</a>
            <a href="about-us.html" className="page-link">About Us</a>
            <a href="programs.html" className="page-link">Programs</a>
            <a href="apply-now.html" className="page-link">Apply Now</a>
            <a href="success-stories.html" className="page-link">Success Stories</a>
            <a href="resources.html" className="page-link">Resources</a>
            <a href="news-events.html" className="page-link">News & Events</a>
            <a href="get-involved.html" className="page-link">Get Involved</a>
            <a href="contact.html" className="page-link">Contact Us</a>
            <a href="FAQ.html" className="page-link">FAQs</a>
          </div>
        </div>
      </nav>
    </>
  );
}
