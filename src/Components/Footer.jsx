import React from "react";
import "./Footer.css";
import Logo from "../assets/Footer Logo.png";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="footer-container">
          <div class="footer-section">
            <div class="footer-column">
              <div class="footer-icon-heading">
                <img src={Logo} alt="" srcset="" />
              </div>
              <div class="icon-text">
                <svg width="20" height="20" fill="#CAA54D" viewBox="0 0 24 24">
                  <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1.3.5 2.8.8 4.3.8.7 0 1.2.5 1.2 1.2V21c0 .7-.5 1.2-1.2 1.2C10.3 22.2 1.8 13.7 1.8 3.2 1.8 2.5 2.3 2 3 2h3.6c.7 0 1.2.5 1.2 1.2 0 1.5.3 3 .8 4.3.1.4 0 .9-.3 1.2l-2.3 2.1Z" />
                </svg>
                <span>020 8715 0745</span>
              </div>
              <div class="icon-text">
                <svg width="20" height="20" fill="#CAA54D" viewBox="0 0 24 24">
                  <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.2l-10 6.3L2 5.2V4Zm0 3.8V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7.8l-10 6.2L2 7.8Z" />
                </svg>
                <span>info@drawingandtalking.com</span>
              </div>
              <div class="icon-text">
                <svg width="20" height="20" fill="#CAA54D" viewBox="0 0 24 24">
                  <path d="M12 2a7 7 0 0 0-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
                </svg>
                <span>
                  4 Langdale Avenue, Mitcham, <br></br>Surrey, CR4 4AE
                </span>
              </div>

              <div class="social-icons">
                <div class="social-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5v-2.3c0-2.4 1.5-3.7 3.6-3.7 1 0 1.9.1 1.9.1v2.1h-1.1c-1.1 0-1.4.7-1.4 1.4V12H17l-.5 3h-2.4v7A10 10 0 0 0 22 12Z" />
                  </svg>
                </div>
                <div class="social-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M8 19c7.5 0 11.6-6.2 11.6-11.6v-.5A8.3 8.3 0 0 0 22 4.6a8.1 8.1 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.1 8.1 0 0 1-2.6 1 4.1 4.1 0 0 0-7 3.7A11.7 11.7 0 0 1 3.1 3.1a4 4 0 0 0 1.3 5.5A4 4 0 0 1 3 8v.1a4.1 4.1 0 0 0 3.3 4 4.2 4.2 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.8A8.3 8.3 0 0 1 2 18.6 11.6 11.6 0 0 0 8 19Z" />
                  </svg>
                </div>
                <div class="social-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm4.5-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div class="social-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 8.98h4v12H3v-12Zm6.5 0h3.6v1.64h.05c.5-.95 1.7-1.95 3.5-1.95 3.5 0 4.3 2.3 4.3 5.2v7.1h-4v-6.3c0-1.5-.1-3.4-2.1-3.4s-2.5 1.6-2.5 3.3v6.4h-4v-12Z" />
                  </svg>
                </div>
              </div>
            </div>

            <div class="footer-column" id="hiddenFooterTwo">
              <div class="footer-heading">Learning</div>
              <div className="fData">Coaching & Supervision</div>
              <div className="fData">Courses / CPD</div>
              <div className="fData">My Profit</div>
            </div>
          </div>

          <div class="footer-section" id="hiddenFooter">
            <div class="footer-column">
              <div class="footer-heading">Courses / CPD</div>
              <div className="fData">Masterclasses</div>
              <div className="fData">Wellbeing</div>
              <div className="fData">Recommended</div>
              <div className="fData">CORDS / Mental Health Hub</div>
            </div>
            <div class="footer-column">
              <div class="footer-heading">Resources</div>
              <div className="fData">Questionnaires</div>
              <div className="fData">Foundation</div>
              <div className="fData">Advanced</div>
              <div className="fData">Older Adults</div>
              <div className="fData">Other</div>
            </div>
          </div>
        </div>
        <div className="finalLine">
          Drawing and Talking Ltd. Registered company number: 05941697. Sitemap
          | Privacy & Cookie Policy | Accessibility | Terms and Conditions
        </div>
      </footer>
    </div>
  );
};

export default Footer;
