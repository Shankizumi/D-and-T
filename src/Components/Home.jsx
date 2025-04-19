import React, { useRef, useState } from "react";
import "./Home.css";
import Video from "../assets/Video.mp4";
import CP from "../assets/CP.png";
import s1 from "../assets/ss1.png";
import s2 from "../assets/ss2.png";
import s3 from "../assets/ss3.png";
import s4 from "../assets/ss4.png";
import s5 from "../assets/ss5.png";
import s6 from "../assets/ss6.png";
import s7 from "../assets/ss7.png";
import s8 from "../assets/ss8.png";
import s9 from "../assets/ss9.png";

const Home = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <div className="video-section">
        <div className="video-wrapper">
          <video
            ref={videoRef}
            className="custom-video"
            preload="none"
            muted
            loop
            playsInline
          >
            <source src={Video} type="video/mp4" />
          </video>

          {!isPlaying && (
            <div className="play-button" onClick={handlePlay}>
              <div className="play-icon"></div>
            </div>
          )}

          <div className="overlay-text">
            <h1>Welcome-</h1>
            <p>Exclusive and curated skill learning</p>
          </div>
        </div>
      </div>

      <div class="outer-section">
        <div class="outer-container">
          <div class="infosection">
            <div class="text-div">
              <h2>Supporting your professional journey</h2>
              <p>
                To maintain best practice and consistency, Practitioners must
                complete{" "}
              </p>
              <p>
                <strong>six hours</strong> f PD nnually o etain heir fficial
                title.
              </p>
            </div>
            <div class="image-div">
              <img src={CP} alt="Sample Image" />
            </div>
          </div>

          <div class="cardsection">
            <div class="card">
              <img src={s1} alt="Card Image" />
            </div>
            <div class="card">
              <img src={s2} alt="Card Image" />
            </div>
            <div class="card">
              <img src={s3} alt="Card Image" />
            </div>
            <div class="card">
              <img src={s4} alt="Card Image" />
            </div>
            <div class="card">
              <img src={s5} alt="Card Image" />
            </div>
            <div class="card">
              <img src={s6} alt="Card Image" />
            </div>
            <div class="card">
              <img src={s7} alt="Card Image" />
            </div>
            <div class="card">
              <img src={s8} alt="Card Image" />
            </div>
            <div class="card">
              <img src={s9} alt="Card Image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
