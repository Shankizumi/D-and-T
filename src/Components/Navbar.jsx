import React, { useState } from "react";
import "./Navbar.css";
import email from "../assets/email.svg";
import arrow from "../assets/arrow.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isExpanded, setIsExpanded] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    const savedValue = inputValue; // Store this value as needed
    console.log("Saved Input:", savedValue); //can be used to store for API uses.
    setInputValue("");
  };

  return (
    <>
      <nav>
        <div className="first-nav">
          <div className="navbar-left">
            <a href="#" class="social-icon" aria-label="Facebook">
              <i class="fa-brands fa-facebook fa-2x"></i>
            </a>
            <a href="#" className="social-icon-type2" aria-label="Twitter">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#" class="social-icon-type2" aria-label="LinkedIn">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="#" class="social-icon-type2" aria-label="Instagram">
              <i class="fa-brands fa-instagram"></i>
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
              <img src={email} alt="" />
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
              <div className="search-container">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="search-btn"
                >
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
                      strokeWidth="2"
                      fill="none"
                    />
                    <line
                      x1="16"
                      y1="16"
                      x2="22"
                      y2="22"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </svg>
                </button>

                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className={`search-input ${isExpanded ? "open" : ""}`}
                  placeholder="Search..."
                />
              </div>

              <button class="btn">
                Logout{" "}
                <span class="arrow-circle">
                  <img src={arrow} alt="" />
                </span>
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
                My Profile{" "}
                <span class="arrow-circle">
                  <img src={arrow} alt="" />
                </span>
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
              <i class="fa-solid fa-bars fa-3x"></i>
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
              <div className="search-dropdown">
                <input
                  className="dropdown-input"
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="btn-dropdown" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
