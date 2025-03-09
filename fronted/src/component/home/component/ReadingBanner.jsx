import React from 'react';
import '../style/ReadingBanner.css';
import Button from '../../buttons/Button';
import { useNavigate } from "react-router-dom";

const ReadingBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content container2">
        <h1 className="hero-title">Inspire Daily Reading</h1>
        <div className="hero-underline"></div>
        <p className="hero-text">
          Visit Our Blog and Page Find Out Daily Inspiration Quotes from the Best Authors
        </p>
        

        <div className='btn-wrap'>
        <Button title="View Our Blog" name="more" onClick={() => navigate("/blog")}/>
        </div>
      </div>
    </section>
  );
};

export default ReadingBanner;
