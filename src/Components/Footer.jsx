import React from "react";
import "./Footer.css";
import Logo from "../assets/Footer Logo.png";

const Footer = () => {
  return (
    <div className="footer-compt container-main">
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
                <span>4 Langdale Avenue, Mitcham,</span>
              </div>
              <div class="icon-text">
                <span id="next-line">Surrey, CR4 4AE</span>
              </div>

              <div class="social-icons">
                <div class="social-icon">
                  <i class="fa-brands fa-facebook fa-2x"></i>
                </div>
                <div class="social-icon-type2">
                  <i class="fa-brands fa-twitter"></i>
                </div>
                <div class="social-icon-type2">
                  <i class="fa-brands fa-linkedin-in"></i>
                </div>
                <div class="social-icon-type2">
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </div>
            </div>

            <div class="footer-column">
              <div class="footer-heading">Learning</div>
              <div className="fData">Coaching & Supervision</div>
              <div className="fData">Courses / CPD</div>
              <div className="fData">My Profit</div>
            </div>
          </div>

          <div class="footer-section">
            <div class="footer-column">
              <div class="footer-heading">Courses / CPD</div>
              <div className="fData">Masterclasses</div>
              <div className="fData">Wellbeing</div>
              <div className="fData">Recommended</div>
              <div className="fData">CORDS / Mental Health Hub</div>
            </div>
            <div class="footer-column left-sided">
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
