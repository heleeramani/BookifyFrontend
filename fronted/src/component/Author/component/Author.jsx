import React from 'react';
import '../style/Author.css';
import Author1 from '../images/author1.jpg'

const Authors = () => {
  // Author data
  const authors = [
    {
      id: 1,
      name: 'Amy Stevens',
      role: 'Author',
      image: Author1, // Replace with actual image path
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
      },
    },
    {
      id: 2,
      name: 'Steven Moore',
      role: 'Author',
      image: Author1, // Replace with actual image path
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
      },
    },
    {
      id: 3,
      name: 'Jenny',
      role: 'Author',
      image: Author1, // Replace with actual image path
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
      },
    },
    {
      id: 4,
      name: 'Andrew Woods',
      role: 'Editor',
      image: Author1, // Replace with actual image path
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
      },
    },
    {
        id: 5,
        name: 'Andrew Woods',
        role: 'Editor',
        image: Author1, // Replace with actual image path
        social: {
          facebook: '#',
          twitter: '#',
          instagram: '#',
        },
      },
      {
        id: 6,
        name: 'Andrew Woods',
        role: 'Editor',
        image: Author1, // Replace with actual image path
        social: {
          facebook: '#',
          twitter: '#',
          instagram: '#',
        },
      }
  ];

  return (
    <section className="authors-section">
      <div className="container1">
        <h2 className="section-title">Authors</h2>
        <div className="row">
          {authors.map((author) => (
            <div key={author.id} className="col-md-3 col-sm-6">
              <div className="author-card mb-5">
                <img src={author.image} alt={author.name} className="author-image" />
                <h3 className="author-name">{author.name}</h3>
                <p className="author-role">{author.role}</p>
                <div className="social-links">
                  <a href={author.social.facebook} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href={author.social.twitter} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href={author.social.instagram} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Authors;
