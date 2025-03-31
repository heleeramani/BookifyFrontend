// import React, { useEffect, useState } from "react";
// import "../../about/style/Authors.css";
// import img1 from '../images/team1.jpg';
// import img2 from '../images/team2.jpg';
// import img3 from '../images/team3.jpg';
// import img4 from '../images/team4.jpg';
// import Button from "../../buttons/Button";
// import axios from "axios";
// const authors = [
//   {
//     id: 1,
//     name: "Amy Stevens",
//     role: "Author",
//     imgSrc: img1,
//     socialLinks: {
//       facebook: "#",
//       twitter: "#",
//       instagram: "#",
//     },
//   },
//   {
//     id: 2,
//     name: "Steven Moore",
//     role: "Author",
//     imgSrc: img2,
//     socialLinks: {
//       facebook: "#",
//       twitter: "#",
//       instagram: "#",
//     },
//   },
//   {
//     id: 3,
//     name: "Jenny Sanders",
//     role: "Author",
//     imgSrc: img3,
//     socialLinks: {
//       facebook: "#",
//       twitter: "#",
//       instagram: "#",
//     },
//   },
//   {
//     id: 4,
//     name: "Andrew Woods",
//     role: "Editor",
//     imgSrc: img4,
//     socialLinks: {
//       facebook: "#",
//       twitter: "#",
//       instagram: "#",
//     },
//   },
// ];

// const Author = () => {
//   const [loading, setLoading] = useState();
//   const [alert, setAlert] = useState();
//   const fetchBooks = async () => {
//     try {
//       const authToken = localStorage.getItem("authToken");
//       setLoading(true);
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/user/author/get`,
//         {
//           headers: {
//             "Authorization": authToken, 
//           },
//         }
//       );

//       // Check if response.data is an array or wrapped inside another object
//       // const faqsArray = Array.isArray(response.data)
//       //   ? response.data
//       //   : response.data?.data || [];
//       // console.log(faqsArray, "faqsArray");

//       // const formattedFaqs = faqsArray.map((faq) => ({
//       //   ...faq,
//       //   id: faq._id,
//       // }));

//       // setFaqs(formattedFaqs);
//       // console.log(formattedFaqs, "formattedFaqs");
//       console.log(response, "response");
      
//     } catch (error) {
//       console.error("Error fetching FAQs:", error);
//       setAlert({
//         open: true,
//         message:
//           "Failed to fetch FAQs: " +
//           (error.response?.data?.message || error.message),
//         severity: "error",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     console.log("useEffect triggered");
//     fetchBooks();
//   }, []); 
//   console.log(process.env.REACT_APP_BASE_URL, "process.env.REACT_APP_BASE_URL");
  
//   return (
//     <div className="author-container py-5 bg-change">
//       <h2 className="text-center mb-4">Most Popular Authors</h2>
//       <hr className="author-centered-hr" />

//       <div className="row g-4">
//         {authors.map((author) => (
//           <div className="col-md-6 col-lg-3" key={author.id}>
//             <div className="author-author-card">
//               <img
//                 src={author.imgSrc}
//                 alt={author.name}
//                 className="author-author-img"
//               />
//               <h5 className="mb-1">{author.name}</h5>
//               <p className="text-muted">{author.role}</p>
//               <div className="author-author-social-icons">
//                 <a href={author.socialLinks.facebook}>
//                   <i className="fab fa-facebook"></i>
//                 </a>
//                 <a href={author.socialLinks.twitter}>
//                   <i className="fab fa-twitter"></i>
//                 </a>
//                 <a href={author.socialLinks.instagram}>
//                   <i className="fab fa-instagram"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* View More Button */}
//       {/* <a href="#" className="author-view-more-btn">
//         View More
//       </a> */}
//       <div className="btn-wrap">
//         <Button title="View More" name="more"></Button>
//       </div>
//     </div>
//   );
// };

// export default Author;


// import React, { useEffect, useState } from "react";
// import "../../about/style/Authors.css";
// import Button from "../../buttons/Button";
// import axios from "axios";

// Default placeholder images (use these as fallbacks)
// import defaultImg from '../images/default-author.jpg'; // You would need to create this file
import defaultImg from '../images/team1.jpg';


// const Author = () => {
//   const [authors, setAuthors] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [alert, setAlert] = useState(null);

//   const fetchAuthors = async () => {
//     try {
//       const authToken = localStorage.getItem("authToken");
//       setLoading(true);
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/user/author/get`,
//         {
//           headers: {
//             "Authorization": authToken, 
//           },
//         }
//       );

//       if (response.data && response.data.success) {
//         // Log the full response to inspect profile structure
//         console.log("Full API response:", response.data);
        
//         const formattedAuthors = response.data.data.map((author) => {
//           console.log("Author profile:", author.profile);
          
//           // Try to find image in profile - check all possible image field names
//           // Note: Update these field names based on your actual API response
//           let profileImage = null;
//           if (author.profile) {
//             profileImage = author.profile.url;
//           }
          
//           return {
//             id: author._id,
//             name: `${author.firstName} ${author.lastName}`,
//             role: author.role || "Author",
//             imgSrc: profileImage || defaultImg,
//             socialLinks: {
//               facebook: "#",
//               twitter: "#",
//               instagram: "#",
//             },
//           };
//         });
        
//         setAuthors(formattedAuthors);
//       }
//     } catch (error) {
//       console.error("Error fetching authors:", error);
//       setAlert({
//         open: true,
//         message: "Failed to fetch authors: " + (error.response?.data?.message || error.message),
//         severity: "error",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAuthors();
//   }, []); 
  
//   return (
//     <div className="author-container py-5 bg-change">
//       <h2 className="text-center mb-4">Most Popular Authors</h2>
//       <hr className="author-centered-hr" />

//       {loading ? (
//         <div className="text-center py-4">Loading authors...</div>
//       ) : alert ? (
//         <div className={`alert alert-${alert.severity} text-center`}>{alert.message}</div>
//       ) : (
//         <div className="row g-4">
//           {authors.length > 0 ? (
//             authors.map((author) => (
//               <div className="col-md-6 col-lg-3" key={author.id}>
//                 <div className="author-author-card">
//                   <img
//                     src={author.imgSrc}
//                     alt={author.name}
//                     className="author-author-img"
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       // Fall back to a default image that you've imported
//                       e.target.src = defaultImg;
//                     }}
//                   />
//                   <h5 className="mb-1">{author.name}</h5>
//                   <p className="text-muted">{author.role}</p>
//                   <div className="author-author-social-icons">
//                     <a href={author.socialLinks.facebook}>
//                       <i className="fab fa-facebook"></i>
//                     </a>
//                     <a href={author.socialLinks.twitter}>
//                       <i className="fab fa-twitter"></i>
//                     </a>
//                     <a href={author.socialLinks.instagram}>
//                       <i className="fab fa-instagram"></i>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="col-12 text-center py-4">No authors found</div>
//           )}
//         </div>
//       )}

//       <div className="btn-wrap">
//         <Button title="View More" name="more"></Button>
//       </div>
//     </div>
//   );
// };

// export default Author;


import React, { useEffect, useState } from "react";
import "../../about/style/Authors.css";
import Button from "../../buttons/Button";
import axios from "axios";

const Author = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4); // Initially show 4 authors

  const fetchAuthors = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user/author/get`,
        {
          headers: {
            Authorization: authToken,
          },
        }
      );

      if (response.data && response.data.success) {
        const formattedAuthors = response.data.data.map((author) => ({
          id: author._id,
          name: `${author.firstName} ${author.lastName}`,
          role: author.role || "Author",
          imgSrc: author.profile?.url || defaultImg,
          socialLinks: {
            facebook: "#",
            twitter: "#",
            instagram: "#",
          },
        }));

        setAuthors(formattedAuthors);
      }
    } catch (error) {
      console.error("Error fetching authors:", error);
      setAlert({
        open: true,
        message: "Failed to fetch authors: " + (error.response?.data?.message || error.message),
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  return (
    <div className="author-container py-5 bg-change">
      <h2 className="text-center mb-4">Most Popular Authors</h2>
      <hr className="author-centered-hr" />

      {loading ? (
        <div className="text-center py-4">Loading authors...</div>
      ) : alert ? (
        <div className={`alert alert-${alert.severity} text-center`}>{alert.message}</div>
      ) : (
        <div className="row g-4">
          {authors.length > 0 ? (
            authors.slice(0, visibleCount).map((author) => (
              <div className="col-md-6 col-lg-3" key={author.id}>
                <div className="author-author-card">
                  <img
                    src={author.imgSrc}
                    alt={author.name}
                    className="author-author-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = defaultImg;
                    }}
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
            ))
          ) : (
            <div className="col-12 text-center py-4">No authors found</div>
          )}
        </div>
      )}

      {/* Show View More button only if there are more authors to display */}
      {visibleCount < authors.length && (
        <div className="btn-wrap text-center mt-4">
          <Button title="View More" name="more" onClick={() => setVisibleCount(visibleCount + 4)} />
        </div>
      )}
    </div>
  );
};

export default Author;
