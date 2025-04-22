import React, { useRef, useState } from "react";
import "./Home.css";
import Video from "../assets/Video.mp4";
import CP from "../assets/CP.png";
import s1 from "../assets/card1.svg";
import s2 from "../assets/card2.svg";
import s3 from "../assets/card3.svg";
import s4 from "../assets/card4.svg";
import s5 from "../assets/card5.svg";
import s6 from "../assets/card6.svg";
import s7 from "../assets/card7.svg";
import s8 from "../assets/event8.svg";
import s9 from "../assets/card9.svg";
import coaching from "../assets/coaching.svg";
import course from "../assets/courses.svg";
import resource from "../assets/resources.svg";
import masterclass from "../assets/masterclass.svg";
import wellbeing from "../assets/wellbeing.svg";
import recommend from "../assets/recommended.svg";
import question from "../assets/questions.svg";

const Home = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
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
            onClick={handlePlayPause} // 🔁 This line allows video click to toggle
          >
            <source src={Video} type="video/mp4" />
          </video>

          {!isPlaying && (
            <div className="play-button" onClick={handlePlayPause}>
              <div className="play-icon"></div>
            </div>
          )}

          <div className="overlay-text">
            <h1>Welcome-</h1>
            <p>Exclusive and curated skill learning</p>
          </div>
        </div>
      </div>

      <div className="outer-section container-main">
        <div className="outer-container">
          <div className="infosection">
            <div className="text-div">
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
            <div className="image-div">
              <img src={CP} alt="Sample Image" />
            </div>
          </div>

          <div className="cardsection">
            <div className="card">
              <img src={s1} alt="Card Image" />
              <h1 className="type-one">My Profile</h1>
              <p className="type-one-para">Duncan Marshall</p>
              <p className="type-one-para">Consultants in Design</p>
              <p className="type-one-para">Total CPD: 6 points</p>
              <button className="card-type-one-btn">Update</button>
            </div>

            <div className="card">
              <img src={s2} alt="Card Image" />
              <h1 className="type-two">
                <img src={coaching} alt="" />
                Coaching & Supervision
              </h1>
            </div>

            <div className="card">
              <img src={s3} alt="Card Image" />
              <h1 className="type-three">
                <img src={course} alt="" />
                Courses / CPD
              </h1>
            </div>

            <div className="card">
              <img src={s4} alt="Card Image" />
              <h1 className="type-two">
                <img src={resource} alt="" />
                Resources
              </h1>
            </div>

            <div className="card">
              <img src={s5} alt="Card Image" />
              <h1 className="type-three">
                <img src={masterclass} alt="" />
                Masterclasses
              </h1>
            </div>

            <div className="card">
              <img src={s6} alt="Card Image" />
              <h1 className="type-two">
                <img src={wellbeing} alt="" />
                Wellbeing
              </h1>
            </div>

            <div className="card">
              <img src={s7} alt="Card Image" />
              <h1 className="type-three">
                <img src={recommend} alt="" id="recom" />
                Recommended
              </h1>
            </div>

            <div className="card">
              <img src={s8} alt="Card Image" />
              <h1 className="type-two">
                <img src={question} alt="" />
                Questionnaires
              </h1>
            </div>

            <div className="card">
              <img src={s9} alt="Card Image" />
              <h1 className="type-two">CORDS / Mental Health</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
