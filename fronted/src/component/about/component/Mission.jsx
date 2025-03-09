import React from "react";
import "../../about/style/Mission.css"; 

const Mission = () => {
  return (
    <>
      <div className="mission-main">
      <section className="mission-section-mission">
        <div className="mission-container">
          <h2>Our Mission</h2>
          <p>
            Our mission is to bring the passion and love for reading books back. Whether it's a regular paper book,
            or an online edition, we want our readers to know that we appreciate quality and artful storytelling.
            Join our community and enjoy multiple genres, modern and classic authors, reviews, critics, and more!
          </p>
        </div>
      </section>

      <section className="mission-video-section">
        <div className="mission-container">
          <video controls autoPlay muted loop>
            <source src="https://cdn.pixabay.com/video/2015/11/11/1310-145386665_large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      </div>
    </>
  );
};

export default Mission;
