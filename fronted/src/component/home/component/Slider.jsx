// import React from "react";
// import '../style/Slider.css';
// import Button from '../../buttons/Button';
// import Slider1 from '../images/slider1.jpeg';
// import Slider2 from '../images/slider2 (2).jpeg';
// import Slider3 from '../images/slider3.jpeg';
// import { Link } from "react-router-dom";
// // Array of carousel data
// const carouselData = [
//   {
//     image: Slider1,
//     title: "Choose Your Book",
//     subtitle: "Find Books For All Ages",
//     buttonLabel: "Discover Your Next Book",
//   },
//   {
//     image: Slider2,
//     title: "Choose Your Book",
//     subtitle: "Meet Favorite Authors",
//     buttonLabel: "Discover Your Next Book",
//   },
//   {
//     image: Slider3,
//     title: "Choose Your Book",
//     subtitle: "Books That Really Matter",
//     buttonLabel: "Discover Your Next Book",
//   },
// ];

// const Slider = () => {
//   return (
//     <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
//       <div className="carousel-indicators">
//         {carouselData.map((_, index) => (
//           <button
//             key={index}
//             type="button"
//             data-bs-target="#carouselExampleCaptions"
//             data-bs-slide-to={index}
//             className={index === 0 ? "active" : ""}
//             aria-current={index === 0 ? "true" : undefined}
//             aria-label={`Slide ${index + 1}`}
//           ></button>
//         ))}
//       </div>
//       <div className="carousel-inner slider-text">
//         {carouselData.map((item, index) => (
//           <div
//             key={index}
//             className={`carousel-item ${index === 0 ? "active" : ""}`}
//           >
//             <img
//               src={item.image}
//               className="d-block w-100 image"
//               alt={item.subtitle}
//             />
//             <div className="carousel-caption d-none d-md-block">
//               <h5>{item.title}</h5>
//               <h1>{item.subtitle}</h1>

//               <Link to="/category">
//         <button>{item.buttonLabel}</button>
//       </Link>
//               {/* <Button title={item.buttonLabel}/> */}
              
//             </div>
//           </div>
//         ))}
//       </div>
//       <button
//         className="carousel-control-prev"
//         type="button"
//         data-bs-target="#carouselExampleCaptions"
//         data-bs-slide="prev"
//       >
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button
//         className="carousel-control-next"
//         type="button"
//         data-bs-target="#carouselExampleCaptions"
//         data-bs-slide="next"
//       >
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// };

// export default Slider;


import React from "react";
import '../style/Slider.css';
import Button from '../../buttons/Button';
import Slider1 from '../images/slider1.jpeg';
import Slider2 from '../images/slider2 (2).jpeg';
import Slider3 from '../images/slider3.jpeg';

// Array of carousel data
const carouselData = [
  {
    image: Slider1,
    title: "Choose Your Book",
    subtitle: "Find Books For All Ages",
    buttonLabel: "Discover Your Next Book",
  },
  {
    image: Slider2,
    title: "Choose Your Book",
    subtitle: "Meet Favorite Authors",
    buttonLabel: "Discover Your Next Book",
  },
  {
    image: Slider3,
    title: "Choose Your Book",
    subtitle: "Books That Really Matter",
    buttonLabel: "Discover Your Next Book",
  },
];

const Slider = () => {
  // Function to Scroll to the BookCategory Section
  const scrollToCategory = () => {
    const categorySection = document.getElementById("book-category");
    if (categorySection) {
      categorySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {carouselData.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner slider-text">
        {carouselData.map((item, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img src={item.image} className="d-block w-100 image" alt={item.subtitle} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{item.title}</h5>
              <h1>{item.subtitle}</h1>

              {/* Button to scroll to BookCategory */}
              <button onClick={scrollToCategory}>{item.buttonLabel}</button>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
