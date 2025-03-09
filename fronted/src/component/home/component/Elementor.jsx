import React from "react";
import "../style/Elementor.css";
import Elementor1 from '../images/elemetor1.jpeg';
import Elementor2 from '../images/eleementor2.jpeg';
import Elementor3 from '../images/elementor3.jpeg';


const cardData = [
  {
    image: Elementor1,
    title: "20 Books",
    description: "to Help You Bring Up a Child",
    link: "#",
  },
  {
    image: Elementor2,
    title: "15 Books",
    description: "to Help You Learn Cooking",
    link: "#",
  },
  {
    image: Elementor3,
    title: "50 Books",
    description: "to Help You Stay Positive",
    link: "#",
  },
];

const Elementor = () => {
  return (
    <div className="container-fluid">
      <div className="row card-container">
        {cardData.map((card, index) => (
          <div key={index} className="col-md-4 p-0">
            <a href={card.link}>
              <div className="custom-card">
                <img
                  src={card.image}
                  alt={card.title}
                  className="img-fluid"
                />
                <div className="card-overlay">
                  <h5>{card.title}</h5>
                  <p>{card.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Elementor;
