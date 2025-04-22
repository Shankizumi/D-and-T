import React from "react";
import "./New.css";
import n1 from "../assets/n1.png";
import n2 from "../assets/newcard2.svg";
import n3 from "../assets/newcard3.svg";
import masterclass from "../assets/masterclass.svg";

const New = () => {
  return (
    <div className="container-comp container-main">
      <div className="new-container">
        <div className="new-text-section">
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
                Learn more <span>⟶</span>
              </a>
            </div>
          </div>

          <div className="card-new">
            <img src={n2} alt="Older adults smiling" className="card-image" />
            <h1 className="new-type1">
              <img src={masterclass} alt="" />
              Masterclass
            </h1>
            <div className="card-content">
              <span className="badge">Masterclass</span>
              <h2 className="card-title">
                A safe and gentle therapeutic approach – how to excel
              </h2>
              <a href="#" className="learn-more">
                Learn more <span>⟶</span>
              </a>
            </div>
          </div>

          <div className="card-new">
            <img src={n3} alt="Older adults smiling" className="card-image" />
            <div className="new-type2">
              <ul>
                <li>Using the SDQ</li>
                <li>Identifying who can <br /> be supported by D&T</li>
                <li>What happens next?</li>
              </ul>
            </div>
            <div className="card-content">
              <span className="badge">Coaching Call</span>
              <h2 className="card-title">
                12th February 2025 - What to Come Next
              </h2>
              <a href="#" className="learn-more">
                Learn more <span className="arrow-icon">⟶</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
