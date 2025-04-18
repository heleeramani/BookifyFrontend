// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./Review.css";

// // Custom Star icon component
// const StarIcon = ({ filled, onClick, onMouseEnter, onMouseLeave, small }) => {
//   return (
//     <svg
//       width={small ? "16" : "24"}
//       height={small ? "16" : "24"}
//       viewBox="0 0 24 24"
//       fill={filled ? "#ffc107" : "none"}
//       stroke="#ffc107"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       onClick={onClick}
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//       className={`star-icon ${filled ? "star-filled" : "star-empty"} ${
//         small ? "small" : ""
//       }`}
//     >
//       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//     </svg>
//   );
// };

// // Custom Send icon component
// const SendIcon = () => {
//   return (
//     <svg
//       width="20"
//       height="20"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="22" y1="2" x2="11" y2="13" />
//       <polygon points="22 2 15 22 11 13 2 9 22 2" />
//     </svg>
//   );
// };

// const Review = ({ bId }) => {
//   // Default ObjectId (24-character hex string) for guest user
//   const DEFAULT_USER_ID = "000000000000000000000000";

//   const [rating, setRating] = useState(0);
//   const [hoveredRating, setHoveredRating] = useState(0);
//   const [reviewText, setReviewText] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   // const [userId, setUserId] = useState(DEFAULT_USER_ID);
//   const [reviews, setReviews] = useState([]);

//   // Get user ID from localStorage when component mounts
//   useEffect(() => {
//     // Fetch reviews when component mounts
//     fetchReviews();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Basic validation - use default values if not provided
//     const finalRating = rating || 1;
//     const finalReviewText = reviewText || "Great product!";

//     setIsSubmitting(true);

//     try {
//       // Prepare the review data - only include necessary fields
//       const reviewData = {
//         description: finalReviewText,
//         rating: finalRating,
//       };

//       console.log("Submitting review data:", reviewData);

//       // Make the API call with the bookId in the URL params as expected by controller
//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}/user/review/create/${bId}`,
//         reviewData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `${localStorage.getItem("authToken")}`,
//           },
//         }
//       );

//       console.log("Review submitted successfully:", response.data);

//       // Refresh the reviews list
//       fetchReviews();

//       // Reset form
//       setReviewText("");
//       setRating(0);
//     } catch (error) {
//       console.error("Error submitting review:", error);
//       alert("Failed to submit review. Please try again or log in.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const fetchReviews = async () => {
//     try {
//       // Ideally we would fetch reviews for a specific book
//       // If your API supports it, use a URL like:
//       // `${process.env.REACT_APP_BASE_URL}/user/review/get/${bId}`
//       const authToken = localStorage.getItem("authToken");
//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/user/review/getAll/${bId}`,
//         {
//           headers: {
//             Authorization: authToken,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       console.log("Fetched reviews:", response?.data?.data);

//       if (response?.data?.data) {
//         // For now, we're getting all reviews, but ideally would filter by book
//         const allReviews = response.data.data;

//         // Format reviews for display
//         const formattedReviews = allReviews.map((review) => ({
//           id: review._id,
//           name: review.user || "Anonymous",
//           date: new Date(review.createdAt).toLocaleDateString("en-US", {
//             year: "numeric",
//             month: "long",
//             day: "numeric",
//           }),
//           rating: review.rating,
//           comment: review.description,
//           avatar: "👤",
//         }));

//         setReviews(formattedReviews);
//       }
//     } catch (error) {
//       console.error("Error fetching reviews:", error);
//     }
//   };

//   return (
//     <div className="review-container">
//       <h2 className="review-title">Reviews ({reviews.length} reviews)</h2>

//       {/* Write a review section */}
//       <div className="write-review-section">
//         <h3 className="section-title">Share Your Experience</h3>

//         <form onSubmit={handleSubmit}>
//           <div className="star-rating">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <StarIcon
//                 key={star}
//                 filled={(hoveredRating || rating) >= star}
//                 onClick={() => setRating(star)}
//                 onMouseEnter={() => setHoveredRating(star)}
//                 onMouseLeave={() => setHoveredRating(0)}
//               />
//             ))}
//           </div>

//           <div className="textarea-container">
//             <textarea
//               className="review-textarea"
//               placeholder="Share your thoughts about your experience..."
//               value={reviewText}
//               onChange={(e) => setReviewText(e.target.value)}
//             ></textarea>
//             <button
//               type="submit"
//               className="send-button"
//               disabled={isSubmitting}
//             >
//               <SendIcon />
//             </button>
//           </div>

//           <div className="submit-container">
//             <button
//               type="submit"
//               className="submit-button"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? "Submitting..." : "Submit Review"}
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Existing reviews section */}
//       <div className="reviews-section">
//         <h3 className="section-title">Customer Reviews</h3>

//         {reviews.length === 0 ? (
//           <p className="no-reviews">
//             No reviews yet. Be the first to share your experience!
//           </p>
//         ) : (
//           reviews.map((review) => (
//             <div key={review.id} className="review-item">
//               <div className="review-header">
//                 <div className="avatar-container">{review.avatar}</div>
//                 <div className="reviewer-info">
//                   <h4 className="reviewer-name">{review.name}</h4>
//                   <div className="review-date">{review.date}</div>
//                 </div>
//                 <div className="review-rating">
//                   {[...Array(5)].map((_, i) => (
//                     <StarIcon key={i} filled={i < review.rating} small={true} />
//                   ))}
//                 </div>
//               </div>
//               <p className="review-comment">{review.comment}</p>
//             </div>
//           ))
//         )}

//         {reviews.length > 3 && (
//           <div className="view-all-container">
//             <button className="view-all-button">View All Reviews</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Review;


import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Review.css";

// Custom Star icon component
const StarIcon = ({ filled, onClick, onMouseEnter, onMouseLeave, small }) => {
  return (
    <svg
      width={small ? "16" : "24"}
      height={small ? "16" : "24"}
      viewBox="0 0 24 24"
      fill={filled ? "#ffc107" : "none"}
      stroke="#ffc107"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`star-icon ${filled ? "star-filled" : "star-empty"} ${
        small ? "small" : ""
      }`}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};

// Custom Send icon component
const SendIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
};

const Review = ({ bId }) => {
  // Default ObjectId (24-character hex string) for guest user
  const DEFAULT_USER_ID = "000000000000000000000000";

  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reviews, setReviews] = useState([]);

  // Get user ID from localStorage when component mounts
  useEffect(() => {
    // Fetch reviews when component mounts
    fetchReviews();
  }, [bId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation - use default values if not provided
    const finalRating = rating || 1;
    const finalReviewText = reviewText || "Great product!";

    setIsSubmitting(true);

    try {
      // Prepare the review data - only include necessary fields
      const reviewData = {
        description: finalReviewText,
        rating: finalRating,
      };

      console.log("Submitting review data:", reviewData);

      // Make the API call with the bookId in the URL params as expected by controller
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/review/create/${bId}`,
        reviewData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("authToken")}`,
          },
        }
      );

      console.log("Review submitted successfully:", response.data);

      // Refresh the reviews list
      fetchReviews();

      // Reset form
      setReviewText("");
      setRating(0);
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Failed to submit review. Please try again or log in.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fetchReviews = async () => {
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user/review/getAll/${bId}`,
        {
          headers: {
            Authorization: authToken,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Fetched reviews:", response?.data?.data);

      if (response?.data?.data) {
        // Format reviews for display
        const formattedReviews = response.data.data.map((review) => ({
          id: review._id,
          name: review.user 
            ? `${review.user.firstName} ${review.user.lastName}`.trim() 
            : "Anonymous",
          date: new Date(review.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          rating: review.rating || 0,
          comment: review.description || "No comment provided",
          avatar: "👤",
        }));

        setReviews(formattedReviews);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
      alert("Failed to fetch reviews. Please try again.");
    }
  };

  return (
    <div className="review-container">
      <h2 className="review-title">Reviews ({reviews.length} reviews)</h2>

      {/* Write a review section */}
      <div className="write-review-section">
        <h3 className="section-title">Share Your Experience</h3>

        <form onSubmit={handleSubmit}>
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon
                key={star}
                filled={(hoveredRating || rating) >= star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
              />
            ))}
          </div>

          <div className="textarea-container">
            <textarea
              className="review-textarea"
              placeholder="Share your thoughts about your experience..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="send-button"
              disabled={isSubmitting}
            >
              <SendIcon />
            </button>
          </div>

          <div className="submit-container">
            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </button>
          </div>
        </form>
      </div>

      {/* Existing reviews section */}
      <div className="reviews-section">
        <h3 className="section-title">Customer Reviews</h3>

        {reviews.length === 0 ? (
          <p className="no-reviews">
            No reviews yet. Be the first to share your experience!
          </p>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="review-item">
              <div className="review-header">
                <div className="avatar-container">{review.avatar}</div>
                <div className="reviewer-info">
                  <h4 className="reviewer-name">{review.name}</h4>
                  <div className="review-date">{review.date}</div>
                </div>
                <div className="review-rating">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled={i < review.rating} small={true} />
                  ))}
                </div>
              </div>
              <p className="review-comment">{review.comment}</p>
            </div>
          ))
        )}

        {reviews.length > 3 && (
          <div className="view-all-container">
            <button className="view-all-button">View All Reviews</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Review;