import React, { useRef, useEffect } from "react";
console.log("Footer.jsx loaded successfully");
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          
          {/* Left Column */}
          <div className="footer-col about">
            <img src="../images/parwaz-logo.svg" alt="Logo" className="logo" />
            <p>
              Empowering exceptional students to soar to new heights through comprehensive 
              educational scholarships, mentorship, and opportunities.
            </p>
            <ul className="contact-info">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-mail h-4 w-4 text-primary" aria-hidden="true">
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
                <i className="fa-solid fa-envelope footer-logo"></i>
                parwaazscholars@gmail.com
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-phone h-4 w-4 text-primary" aria-hidden="true">
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                </svg>
                <i className="fa-solid fa-phone footer-logo"></i>
                03349865396
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-phone h-4 w-4 text-primary" aria-hidden="true">
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                </svg>
                <i className="fa-solid fa-phone footer-logo"></i>
                +92 333 3255814
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-map-pin h-4 w-4 text-primary" aria-hidden="true">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <i className="fa-solid fa-location-dot footer-logo"></i>
                Quetta Alamdar Road
              </li>
            </ul>
          </div>

          {/* Middle Column */}
          <div className="footer-col links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="about-us.html">About Us</a></li>
              <li><a href="programs.html">Programs</a></li>
              <li><a href="apply-now.html">Apply Now</a></li>
              <li><a href="success-stories.html">Success Stories</a></li>
              <li><a href="resources.html">Resources</a></li>
              <li><a href="news-events.html">News & Events</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="footer-col links">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Get Involved</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="footer-col subscribe">
            <h4>Stay Connected</h4>
            <p>Subscribe to our newsletter for updates on programs, events, and success stories.</p>
            <form className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
            <div className="social-icons">
              <a href="https://www.facebook.com/people/Parwaaz-scholars/61578077714885/?mibextid=wwXIfr">
                <i className="fab fa-facebook-f"></i>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide-social h-4 w-4" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/parwaaz_scholars">
                <i className="fab fa-instagram"></i>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide-social h-4 w-4" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://www.linkedin.com">
                <i className="fab fa-linkedin-in"></i>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide-social h-4 w-4" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
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
    </>
  );
}
