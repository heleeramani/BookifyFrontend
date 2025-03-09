import React from "react";
import "../../about/style/Authors.css";
import img1 from '../images/team1.jpg';
import img2 from '../images/team2.jpg';
import img3 from '../images/team3.jpg';
import img4 from '../images/team4.jpg';
import Button from "../../buttons/Button";
const authors = [
  {
    id: 1,
    name: "Amy Stevens",
    role: "Author",
    imgSrc: img1,
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Steven Moore",
    role: "Author",
    imgSrc: img2,
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "Jenny Sanders",
    role: "Author",
    imgSrc: img3,
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 4,
    name: "Andrew Woods",
    role: "Editor",
    imgSrc: img4,
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
];

const Author = () => {
  return (
    <div className="author-container py-5 bg-change">
      <h2 className="text-center mb-4">Most Popular Authors</h2>
      <hr className="author-centered-hr" />

      <div className="row g-4">
        {authors.map((author) => (
          <div className="col-md-6 col-lg-3" key={author.id}>
            <div className="author-author-card">
              <img
                src={author.imgSrc}
                alt={author.name}
                className="author-author-img"
              />
              <h5 className="mb-1">{author.name}</h5>
              <p className="text-muted">{author.role}</p>
              <div className="author-author-social-icons">
                <a href={author.socialLinks.facebook}>
                  <i className="fab fa-facebook"></i>
                </a>
                <a href={author.socialLinks.twitter}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={author.socialLinks.instagram}>
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      {/* <a href="#" className="author-view-more-btn">
        View More
      </a> */}
      <div className="btn-wrap">
        <Button title="View More" name="more"></Button>
      </div>
    </div>
  );
};

export default Author;
