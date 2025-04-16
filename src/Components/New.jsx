import React from "react";
import "./New.css";
import n1 from "../assets/n1.png";
import n2 from "../assets/n2.png";
import n3 from "../assets/n3.png";

const New = () => {
  return (
    <div>
      <div className="outer-new">
        <div className="text-section">
          <h1>New</h1>
          <p>
            We work in affiliatio wit th Menta Healt Hu t provid additiona
            courses{" "}
          </p>
          <p>See some of the MHH training courses below:</p>
        </div>

        <div className="card-section">
          <div className="card-new">
            <img src={n1} alt="Older adults smiling" className="card-image" />
            <div className="card-content">
              <span className="badge">Resource</span>
              <h2 className="card-title">
                10 Top Tips for working with Older Adults
              </h2>
              <a href="#" className="learn-more">
                Learn more →
              </a>
            </div>
          </div>

          <div className="card-new">
            <img src={n2} alt="Older adults smiling" className="card-image" />
            <div className="card-content">
              <span className="badge">Masterclass</span>
              <h2 className="card-title">
                A safe and gentle therapeutic approach – how to excel
              </h2>
              <a href="#" className="learn-more">
                Learn more →
              </a>
            </div>
          </div>

          <div className="card-new">
            <img src={n3} alt="Older adults smiling" className="card-image" />
            <div className="card-content">
              <span className="badge">Coaching Call</span>
              <h2 className="card-title">
                12th February 2025 - What to Come Next
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

export default New;
