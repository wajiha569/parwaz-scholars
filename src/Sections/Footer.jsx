import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col about">
          <img src="/images/parwaz-logo1.png" alt="Logo" className="logo" />
          <p>
            Empowering exceptional students to soar to new heights through
            comprehensive educational scholarships, mentorship, and
            opportunities.
          </p>
          <ul className="contact-info">
            <li>
              <i className="fa-solid fa-envelope footer-logo"></i>
              parwaazscholars@gmail.com
            </li>
            <li>
              <i className="fa-solid fa-phone footer-logo"></i>
              +92 334-9865396
            </li>
            <li>
              <i className="fa-solid fa-phone footer-logo"></i>
              +92 333-3255814
            </li>
            <li>
              <i className="fa-solid fa-location-dot footer-logo"></i>
              Quetta Alamdar Road
            </li>
          </ul>
        </div>

        <div className="footer-col links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="about-us.html">About Us</a>
            </li>
            <li>
              <a href="programs.html">Programs</a>
            </li>
            <li>
              <a href="apply-now.html">Apply Now</a>
            </li>
            <li>
              <a href="success-stories.html">Success Stories</a>
            </li>
            <li>
              <a href="resources.html">Resources</a>
            </li>
            <li>
              <a href="news-events.html">News & Events</a>
            </li>
          </ul>
        </div>

        <div className="footer-col links">
          <h4>Support</h4>
          <ul>
            <li>
              <a href="#">Get Involved</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
          </ul>
        </div>

        <div className="footer-col subscribe">
          <h4>Stay Connected</h4>
          <p>Join our instagram family to get more updates.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/199ymmrJHq/?mibextid=wwXIfr">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/parwaaz_scholars?igsh=OGtsYmNzYTNwZGE3">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/pakhazara/">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Parwaaz Scholars. All rights reserved.</p>
        <div className="bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
