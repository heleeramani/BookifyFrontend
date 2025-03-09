// import React, { useState, useEffect } from "react";
// import "../../about/style/Testimonial.css"; 
// import testimonial1 from '../images/196-1961404_lauren-testimonial-testimonial-png-transparent-png.png';
// import testimonial2 from '../images/images.jpg';
// import testimonial3 from '../images/images (2).jpg';

// const testimonials = [
//   {
//     text: "If it wasn’t for your young team of professionals. We have developed a re-branding strategy that has been working to my advantage so far.",
//     author: "George Gordon",
//     role: "Business Owner",
//     image: testimonial2
//   },
//   {
//     text: "The expertise and dedication of your team are unmatched. I am thrilled with the results!",
//     author: "Anna Lee",
//     role: "Entrepreneur",
//     image: testimonial1,
//   },
//   {
//     text: "Your team has been a game changer for our business. Highly recommend!",
//     author: "Mark Johnson",
//     role: "CEO",
//     image: testimonial3,
//   },
// ];

// const Testimonial = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextTestimonial = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(nextTestimonial, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="testimonial-testimonial-container">
//       <div className="testimonial-testimonial-wrapper">
//         <div className="testimonial-testimonial-card">
//           <div className="testimonial-carousel-inner">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 className={`testimonial-carousel-item ${
//                   index === currentIndex ? "active" : ""
//                 }`}
//                 key={index}
//               >
//                 <div className="testimonial-testimonial">
//                   <p className="testimonial-quote">“</p>
//                   <p className="testimonial-text">{testimonial.text}</p>
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.author}
//                     className="testimonial-profile-image"
//                   />
//                   <p className="testimonial-author">{testimonial.author}</p>
//                   <p className="testimonial-role">{testimonial.role}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Navigation */}
//         <button className="carousel-control-prev" onClick={prevTestimonial}>
//           ‹
//         </button>
//         <button className="carousel-control-next" onClick={nextTestimonial}>
//           ›
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;

import React, { useState, useEffect } from "react";
import "../../about/style/Testimonial.css";
import testimonial1 from "../images/196-1961404_lauren-testimonial-testimonial-png-transparent-png.png";
import testimonial2 from "../images/images.jpg";
import testimonial3 from "../images/images (2).jpg";

const testimonials = [
  {
    text: "If it wasn’t for your young team of professionals. We have developed a re-branding strategy that has been working to my advantage so far.",
    author: "George Gordon",
    role: "Business Owner",
    image: testimonial2,
  },
  {
    text: "The expertise and dedication of your team are unmatched. I am thrilled with the results!",
    author: "Anna Lee",
    role: "Entrepreneur",
    image: testimonial1,
  },
  {
    text: "Your team has been a game changer for our business. Highly recommend!",
    author: "Mark Johnson",
    role: "CEO",
    image: testimonial3,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000); // Autoplay every 5 seconds
    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">What Our Clients Say</h2>
      <div className="testimonial-wrapper">
        <button className="testimonial-arrow left" onClick={prevTestimonial}>
          ‹
        </button>
        <div className="testimonial-slider">
          <div
            className="testimonial-slider-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-slide" key={index}>
                <p className="testimonial-quote">“</p>
                <p className="testimonial-text">{testimonial.text}</p>
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="testimonial-profile-image"
                />
                <p className="testimonial-author">{testimonial.author}</p>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="testimonial-arrow right" onClick={nextTestimonial}>
          ›
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
