import React from 'react';
import '../style/AuthorBanner.css';
import Button from '../../buttons/Button';

const AuthorBanner = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <h1 className="hero-title">Inspire Daily Reading</h1>
        <div className="hero-underline"></div>
        <p className="hero-text">
          Visit Our Blog and Page Find Out Daily Inspiration Quotes from the Best Authors
        </p>
        <Button title="View Our Blog"/>
      </div>
    </section>
  );
};

export default AuthorBanner;
