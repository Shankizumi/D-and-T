import React from "react";
import "./Popular.css";
import P1 from "../assets/P1.png";
import P2 from "../assets/P2.png";
import P3 from "../assets/P3.png";

const Popular = () => {
  return (
    <div>
      <div className="outer-popular">
        <div className="text-section">
          <h1>Popular</h1>
          <p>
            We work in affiliatio wit th Menta Healt Hu t provid additiona
            courses{" "}
          </p>
          <p>See some of the MHH training courses below:</p>
        </div>

        <div className="card-section-popular">
          <div className="card-popular">
            <img src={P1} alt="Older adults smiling" className="card-image" />
            <div className="card-content">
              <h2 className="card-title">
                The importance of safe and secure attachments
              </h2>
              <a href="#" className="learn-more">
                Learn more →
              </a>
            </div>
          </div>

          <div className="card-popular">
            <img src={P2} alt="Older adults smiling" className="card-image" />
            <div className="card-content">
              <h2 className="card-title">
                What happens during trauma - A Deep Study
              </h2>
              <a href="#" className="learn-more">
                Learn more →
              </a>
            </div>
          </div>

          <div className="card-popular">
            <img src={P3} alt="Older adults smiling" className="card-image" />
            <div className="card-content">
              <h2 className="card-title">
                What is attachment theory and how can help in my practice
              </h2>
              <a href="#" className="learn-more">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
