// // // // import React from "react";
// // // // import '../style/FeaturesSection.css';

// // // // // Data for cards
// // // // const cardsData = [
// // // //   {
// // // //     id: 1,
// // // //     iconClass: "fa-solid fa-gift",
// // // //     title: "Make the Best Present",
// // // //     text: "A book is still one of the best presents.",
// // // //     link: "#",
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     iconClass: "fa-solid fa-feather-pointed",
// // // //     title: "Unleash Creativity",
// // // //     text: "Books inspire creativity and unlock a world of imagination.",
// // // //     link: "#",
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     iconClass: "fa-solid fa-gift",
// // // //     title: "Gift of Knowledge",
// // // //     text: "Give the gift of wisdom and learning through books.",
// // // //     link: "#",
// // // //   },
// // // // ];

// // // // const FeaturesSection = () => (
// // // //   <div className="elementor-section">
// // // //     <div className="elementor-container d-flex flex-wrap justify-content-center">
// // // //       {cardsData.map((card) => (
// // // //         <div className="card" key={card.id}>
// // // //           <i className={`${card.iconClass} elementor-icon`}></i>
// // // //           <div className="card-body text-center">
// // // //             <h5 className="card-title">{card.title}</h5>
// // // //             <p className="card-text">{card.text}</p>
// // // //             <a href={card.link} className="read-more">
// // // //               Read More
// // // //             </a>
// // // //           </div>
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   </div>
// // // // );

// // // // export default FeaturesSection;

// // // import React from "react";
// // // import "../style/FeaturesSection.css";

// // // const cardsData = [
// // //   {
// // //     id: 1,
// // //     iconClass: "fa-solid fa-gift",
// // //     title: "Make the Best Present",
// // //     text: "A book is still one of the best presents for anyone on any occasion.",
// // //     link: "#",
// // //   },
// // //   {
// // //     id: 2,
// // //     iconClass: "fa-solid fa-feather",
// // //     title: "Find Your Favorite Authors",
// // //     text: "Great writers are pretty inspiring, so we offer the widest selection.",
// // //     link: "#",
// // //   },
// // //   {
// // //     id: 3,
// // //     iconClass: "fa-solid fa-clipboard",
// // //     title: "Read Reader’s Reviews",
// // //     text: "You will find reviews of magazines, online sources and favorite books.",
// // //     link: "#",
// // //   },
// // // ];

// // // const FeaturesSection = () => (
// // //   <section className="features-section">
// // //     <div className="features-container">
// // //       {cardsData.map((card) => (
// // //         <div className="feature-card" key={card.id}>
// // //           <i className={`feature-icon ${card.iconClass}`}></i>
// // //           <h3 className="feature-title">{card.title}</h3>
// // //           <p className="feature-text">{card.text}</p>
// // //           <a href={card.link} className="feature-read-more">
// // //             <span className="arrow-icon">→</span>
// // //           </a>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   </section>
// // // );

// // // export default FeaturesSection;
// // import React from "react";
// // import "../style/FeaturesSection.css";

// // const cardsData = [
// //   {
// //     id: 1,
// //     iconClass: "fa-solid fa-gift",
// //     title: "Make the Best Present",
// //     text: "A book is still one of the best presents for anyone on any occasion.",
// //     link: "#",
// //   },
// //   {
// //     id: 2,
// //     iconClass: "fa-solid fa-feather",
// //     title: "Find Your Favorite Authors",
// //     text: "Great writers are pretty inspiring, so we offer the widest selection.",
// //     link: "#",
// //   },
// //   {
// //     id: 3,
// //     iconClass: "fa-solid fa-clipboard",
// //     title: "Read Reader’s Reviews",
// //     text: "You will find reviews of magazines, online sources and favorite books.",
// //     link: "#",
// //   },
// // ];

// // const FeaturesSection = () => (
// //   <section className="features-section">
// //     <div className="features-container">
// //       {cardsData.map((card) => (
// //         <div className="feature-card" key={card.id}>
// //           <i className={`feature-icon ${card.iconClass}`}></i>
// //           <h3 className="feature-title">{card.title}</h3>
// //           <p className="feature-text">{card.text}</p>
// //           <a href={card.link} className="feature-read-more">
// //             <span className="arrow-icon">→</span>
// //             <span className="read-more-text">Read More</span>
// //           </a>
// //         </div>
// //       ))}
// //     </div>
// //   </section>
// // );

// // export default FeaturesSection;

// import React from "react";
// import "../style/FeaturesSection.css";

// const cardsData = [
//   {
//     id: 1,
//     iconClass: "fa-solid fa-gift",
//     title: "Make the Best Present",
//     text: "A book is still one of the best presents for anyone on any occasion.",
//     link: "#",
//   },
//   {
//     id: 2,
//     iconClass: "fa-solid fa-feather",
//     title: "Find Your Favorite Authors",
//     text: "Great writers are pretty inspiring, so we offer the widest selection.",
//     link: "#",
//   },
//   {
//     id: 3,
//     iconClass: "fa-solid fa-clipboard",
//     title: "Read Reader’s Reviews",
//     text: "You will find reviews of magazines, online sources and favorite books.",
//     link: "#",
//   },
// ];

// const FeaturesSection = () => (
//   <section className="features-section">
//     <div className="features-container">
//       {cardsData.map((card) => (
//         <div className="feature-card" key={card.id}>
//           <i className={`feature-icon ${card.iconClass}`}></i>
//           <h3 className="feature-title">{card.title}</h3>
//           <p className="feature-text">{card.text}</p>
//           <a href={card.link} className="feature-read-more">
//             <span className="read-more-text">Read More</span>
//             <span className="arrow-icon">→</span>
//           </a>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// export default FeaturesSection;

import React from "react";
import "../style/FeaturesSection.css";

const cardsData = [
  {
    id: 1,
    iconClass: "fa-solid fa-gift",
    title: "Make the Best Present",
    text: "A book is still one of the best presents for anyone on any occasion.",
    link: "#",
  },
  {
    id: 2,
    iconClass: "fa-solid fa-feather",
    title: "Find Your Favorite Authors",
    text: "Great writers are pretty inspiring, so we offer the widest selection.",
    link: "#",
  },
  {
    id: 3,
    iconClass: "fa-solid fa-clipboard",
    title: "Read Reader’s Reviews",
    text: "You will find reviews of magazines, online sources and favorite books.",
    link: "#",
  },
];

const FeaturesSection = () => (
  <section className="features-section">
    <div className="features-container">
      {cardsData.map((card) => (
        <div className="feature-card" key={card.id}>
          <i className={`feature-icon ${card.iconClass}`}></i>
          <h3 className="feature-title">{card.title}</h3>
          <p className="feature-text">{card.text}</p>
          <a href={card.link} className="feature-read-more">
            <span className="read-more-text">Read More</span>
            <span className="arrow-icon">→</span>
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
