import React, { useState } from "react";
import "./Navbar.css";
import Ham from "../assets/Hamburger.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav>
        <div className="first-nav">
          <div className="navbar-left">
            <a href="#" class="social-icon" aria-label="Facebook">
              <svg viewBox="0 0 24 24">
                <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.88v-6.99h-2.54v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.89h-2.3v6.99C18.34 21.2 22 17.06 22 12.07z"></path>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <svg viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.59-2.46.7a4.28 4.28 0 001.88-2.37c-.82.49-1.73.84-2.7 1.03A4.24 4.24 0 0016.07 4c-2.34 0-4.24 1.9-4.24 4.24 0 .33.04.65.1.96C8.5 8.97 5.55 7.38 3.56 4.88c-.36.62-.56 1.33-.56 2.09 0 1.44.73 2.71 1.83 3.46a4.24 4.24 0 01-1.92-.53v.05c0 2.01 1.43 3.7 3.32 4.08a4.25 4.25 0 01-1.91.07c.54 1.68 2.1 2.91 3.95 2.94A8.52 8.52 0 012 19.54 11.99 11.99 0 008.29 21c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.18 8.18 0 0022.46 6z"></path>
              </svg>
            </a>
            <a href="#" class="social-icon" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.75s.78-1.73 1.75-1.73c.96 0 1.75.77 1.75 1.73s-.79 1.75-1.75 1.75zm13.5 11.27h-3v-5.45c0-3.26-4-3.02-4 0v5.45h-3v-10h3v1.41c1.4-2.59 7-2.78 7 2.47v6.12z"></path>
              </svg>
            </a>
            <a href="#" class="social-icon" aria-label="Instagram">
              <svg viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.96.24 2.416.41a4.91 4.91 0 011.73 1.13 4.91 4.91 0 011.13 1.73c.17.455.354 1.246.41 2.415.058 1.267.07 1.652.07 4.852s-.012 3.584-.07 4.85c-.056 1.17-.24 1.96-.41 2.416a4.91 4.91 0 01-1.13 1.73 4.91 4.91 0 01-1.73 1.13c-.455.17-1.246.354-2.415.41-1.267.058-1.652.07-4.852.07s-3.584-.012-4.85-.07c-1.17-.056-1.96-.24-2.416-.41a4.91 4.91 0 01-1.73-1.13 4.91 4.91 0 01-1.13-1.73c-.17-.455-.354-1.246-.41-2.415C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.96.41-2.416a4.91 4.91 0 011.13-1.73 4.91 4.91 0 011.73-1.13c.455-.17 1.246-.354 2.415-.41C8.416 2.212 8.8 2.2 12 2.2zm0 1.8c-3.145 0-3.507.012-4.74.068-1.03.049-1.588.222-1.957.37a3.11 3.11 0 00-1.12.73 3.11 3.11 0 00-.73 1.12c-.148.369-.321.927-.37 1.957C3.412 8.493 3.4 8.855 3.4 12s.012 3.507.068 4.74c.049 1.03.222 1.588.37 1.957.158.384.37.73.73 1.12.384.384.73.572 1.12.73.369.148.927.321 1.957.37 1.233.056 1.595.068 4.74.068s3.507-.012 4.74-.068c1.03-.049 1.588-.222 1.957-.37a3.11 3.11 0 001.12-.73 3.11 3.11 0 00.73-1.12c.148-.369.321-.927.37-1.957.056-1.233.068-1.595.068-4.74s-.012-3.507-.068-4.74c-.049-1.03-.222-1.588-.37-1.957a3.11 3.11 0 00-.73-1.12 3.11 3.11 0 00-1.12-.73c-.369-.148-.927-.321-1.957-.37C15.507 4.012 15.145 4 12 4zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.8a3.2 3.2 0 100 6.4 3.2 3.2 0 000-6.4zm6.4-2.9a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
              </svg>
            </a>
          </div>

          <div class="navbar-right">
            <div class="contact-item">
              <svg class="contact-icon" viewBox="0 0 24 24">
                <path d="M6.62 10.79C8.06 13.21 10.79 15.94 13.21 17.38l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.28 21.5 2.5 13.72 2.5 4A1 1 0 013.5 3h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z"></path>
              </svg>
              <span class="contact-text">020 8715 0745</span>
            </div>
            <div class="contact-item">
              <svg class="contact-icon" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
              <span class="contact-text">info@drawingandtalking.com</span>
            </div>
          </div>
        </div>

        <div className="second-nav">
          <div class="top-row">
            <div class="left-content">
              <div class="icon"></div>
              <div class="text">
                <p class="line1">
                  <strong>Drawing</strong> and <strong>Talking</strong>
                </p>
                <p class="line2">
                  <strong>Membership</strong>
                </p>
              </div>
            </div>

            <div class="right-content">
              <button class="search-btn">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="black"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="7"
                    stroke="black"
                    stroke-width="2"
                    fill="none"
                  />
                  <line
                    x1="16"
                    y1="16"
                    x2="22"
                    y2="22"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
              </button>
              <button class="btn">
                Logout <span class="arrow-circle">&gt;</span>
              </button>
              <button className="mobBtn">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.16055 10.87C9.06055 10.86 8.94055 10.86 8.83055 10.87C6.45055 10.79 4.56055 8.84 4.56055 6.44C4.56055 3.99 6.54055 2 9.00055 2C11.4505 2 13.4405 3.99 13.4405 6.44C13.4305 8.84 11.5405 10.79 9.16055 10.87Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    opacity="0.4"
                    d="M16.4093 4C18.3493 4 19.9093 5.57 19.9093 7.5C19.9093 9.39 18.4093 10.93 16.5393 11C16.4593 10.99 16.3693 10.99 16.2793 11"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.1607 14.56C1.7407 16.18 1.7407 18.82 4.1607 20.43C6.9107 22.27 11.4207 22.27 14.1707 20.43C16.5907 18.81 16.5907 16.17 14.1707 14.56C11.4307 12.73 6.9207 12.73 4.1607 14.56Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    opacity="0.4"
                    d="M18.3398 20C19.0598 19.85 19.7398 19.56 20.2998 19.13C21.8598 17.96 21.8598 16.03 20.2998 14.86C19.7498 14.44 19.0798 14.16 18.3698 14"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button class="btn">
                {" "}
                My Profile <span class="arrow-circle">&gt;</span>
              </button>
              <button className="mobBtn">
                <svg
                  fill="#000000"
                  height="20px"
                  width="20px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 384.971 384.971"
                  xml:space="preserve"
                >
                  <g>
                    <g id="Sign_Out">
                      <path
                        d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03
			C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03
			C192.485,366.299,187.095,360.91,180.455,360.91z"
                      />
                      <path
                        d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279
			c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179
			c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"
                      />
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </g>
                </svg>
              </button>
            </div>
          </div>

          <div class="bottom-row">
            <button class="tab">Supervision</button>
            <button class="tab">Resources</button>
            <button class="tab">CPD/Courses</button>
            <button class="tab">Masterclass</button>
            <button className="ham" onClick={toggleMenu}>
              <img src={Ham} alt="" srcset="" />
            </button>

            <div className={`dropdown-menu ${isOpen ? "active" : ""}`}>
              <a href="#" onClick={toggleMenu}>
                Home
              </a>
              <a href="#" onClick={toggleMenu}>
                Training
              </a>
              <a href="#" onClick={toggleMenu}>
                {" "}
                Research
              </a>
              <a href="#" onClick={toggleMenu}>
                Resources
              </a>
              <a href="#" onClick={toggleMenu}>
                About Us
              </a>
              <a href="#" onClick={toggleMenu}>
                News
              </a>
              <a href="#" onClick={toggleMenu}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
