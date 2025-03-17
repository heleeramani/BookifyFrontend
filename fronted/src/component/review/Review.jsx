// // // // import React, { useState } from 'react';
// // // // import './Review.css';

// // // // // Custom Star icon component
// // // // const StarIcon = ({ filled, onClick, onMouseEnter, onMouseLeave, small }) => {
// // // //   return (
// // // //     <svg
// // // //       width={small ? "16" : "24"}
// // // //       height={small ? "16" : "24"}
// // // //       viewBox="0 0 24 24"
// // // //       fill={filled ? "#ffc107" : "none"}
// // // //       stroke="#ffc107"
// // // //       strokeWidth="2"
// // // //       strokeLinecap="round"
// // // //       strokeLinejoin="round"
// // // //       onClick={onClick}
// // // //       onMouseEnter={onMouseEnter}
// // // //       onMouseLeave={onMouseLeave}
// // // //       className={`star-icon ${filled ? 'star-filled' : 'star-empty'} ${small ? 'small' : ''}`}
// // // //     >
// // // //       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
// // // //     </svg>
// // // //   );
// // // // };

// // // // // Custom Send icon component
// // // // const SendIcon = () => {
// // // //   return (
// // // //     <svg
// // // //       width="20"
// // // //       height="20"
// // // //       viewBox="0 0 24 24"
// // // //       fill="none"
// // // //       stroke="currentColor"
// // // //       strokeWidth="2"
// // // //       strokeLinecap="round"
// // // //       strokeLinejoin="round"
// // // //     >
// // // //       <line x1="22" y1="2" x2="11" y2="13" />
// // // //       <polygon points="22 2 15 22 11 13 2 9 22 2" />
// // // //     </svg>
// // // //   );
// // // // };

// // // // const Review = () => {
// // // //   const [rating, setRating] = useState(0);
// // // //   const [hoveredRating, setHoveredRating] = useState(0);
// // // //   const [reviewText, setReviewText] = useState('');

// // // //   // Sample review data
// // // //   const reviews = [
// // // //     {
// // // //       id: 1,
// // // //       name: 'Helee',
// // // //       date: 'January 18, 2024',
// // // //       rating: 5,
// // // //       comment: 'Amazing Book',
// // // //       avatar: '👤'
// // // //     }
// // // //   ];

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     alert('Review submitted!');
// // // //     setReviewText('');
// // // //     setRating(0);
// // // //   };

// // // //   return (
// // // //     <div className="review-container">
// // // //       <h2 className="review-title">Reviews ({reviews.length} reviews)</h2>

// // // //       {/* Write a review section */}
// // // //       <div className="write-review-section">
// // // //         <h3 className="section-title">Share Your Experience</h3>
// // // //         <form onSubmit={handleSubmit}>
// // // //           <div className="star-rating">
// // // //             {[1, 2, 3, 4, 5].map((star) => (
// // // //               <StarIcon
// // // //                 key={star}
// // // //                 filled={(hoveredRating || rating) >= star}
// // // //                 onClick={() => setRating(star)}
// // // //                 onMouseEnter={() => setHoveredRating(star)}
// // // //                 onMouseLeave={() => setHoveredRating(0)}
// // // //               />
// // // //             ))}
// // // //           </div>

// // // //           <div className="textarea-container">
// // // //             <textarea
// // // //               className="review-textarea"
// // // //               placeholder="Share your thoughts about your experience..."
// // // //               value={reviewText}
// // // //               onChange={(e) => setReviewText(e.target.value)}
// // // //               required
// // // //             ></textarea>
// // // //             <button
// // // //               type="submit"
// // // //               className="send-button"
// // // //               disabled={!rating || !reviewText}
// // // //             >
// // // //               <SendIcon />
// // // //             </button>
// // // //           </div>

// // // //           <div className="submit-container">
// // // //             <button
// // // //               type="submit"
// // // //               className="submit-button"
// // // //               disabled={!rating || !reviewText}
// // // //             >
// // // //               Submit Review
// // // //             </button>
// // // //           </div>
// // // //         </form>
// // // //       </div>

// // // //       {/* Existing reviews section */}
// // // //       <div className="reviews-section">
// // // //         <h3 className="section-title">Customer Reviews</h3>

// // // //         {reviews.map((review) => (
// // // //           <div key={review.id} className="review-item">
// // // //             <div className="review-header">
// // // //               <div className="avatar-container">
// // // //                 {review.avatar}
// // // //               </div>
// // // //               <div className="reviewer-info">
// // // //                 <h4 className="reviewer-name">{review.name}</h4>
// // // //                 <div className="review-date">{review.date}</div>
// // // //               </div>
// // // //               <div className="review-rating">
// // // //                 {[...Array(5)].map((_, i) => (
// // // //                   <StarIcon
// // // //                     key={i}
// // // //                     filled={i < review.rating}
// // // //                     small={true}
// // // //                   />
// // // //                 ))}
// // // //               </div>
// // // //             </div>
// // // //             <p className="review-comment">{review.comment}</p>
// // // //           </div>
// // // //         ))}

// // // //         {reviews.length > 3 && (
// // // //           <div className="view-all-container">
// // // //             <button className="view-all-button">
// // // //               View All Reviews
// // // //             </button>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Review;

// // // // import React, { useState, useEffect } from 'react';
// // // // import axios from 'axios';
// // // // import './Review.css';

// // // // // Custom Star icon component
// // // // const StarIcon = ({ filled, onClick, onMouseEnter, onMouseLeave, small }) => {
// // // //   return (
// // // //     <svg
// // // //       width={small ? "16" : "24"}
// // // //       height={small ? "16" : "24"}
// // // //       viewBox="0 0 24 24"
// // // //       fill={filled ? "#ffc107" : "none"}
// // // //       stroke="#ffc107"
// // // //       strokeWidth="2"
// // // //       strokeLinecap="round"
// // // //       strokeLinejoin="round"
// // // //       onClick={onClick}
// // // //       onMouseEnter={onMouseEnter}
// // // //       onMouseLeave={onMouseLeave}
// // // //       className={`star-icon ${filled ? 'star-filled' : 'star-empty'} ${small ? 'small' : ''}`}
// // // //     >
// // // //       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
// // // //     </svg>
// // // //   );
// // // // };

// // // // // Custom Send icon component
// // // // const SendIcon = () => {
// // // //   return (
// // // //     <svg
// // // //       width="20"
// // // //       height="20"
// // // //       viewBox="0 0 24 24"
// // // //       fill="none"
// // // //       stroke="currentColor"
// // // //       strokeWidth="2"
// // // //       strokeLinecap="round"
// // // //       strokeLinejoin="round"
// // // //     >
// // // //       <line x1="22" y1="2" x2="11" y2="13" />
// // // //       <polygon points="22 2 15 22 11 13 2 9 22 2" />
// // // //     </svg>
// // // //   );
// // // // };

// // // // const Review = ({ productId }) => {
// // // //   const [rating, setRating] = useState(0);
// // // //   const [hoveredRating, setHoveredRating] = useState(0);
// // // //   const [reviewText, setReviewText] = useState('');
// // // //   const [reviews, setReviews] = useState([]);
// // // //   const [isSubmitting, setIsSubmitting] = useState(false);
// // // //   const [submitError, setSubmitError] = useState('');
// // // //   const [submitSuccess, setSubmitSuccess] = useState('');
// // // //   const [userId, setUserId] = useState(''); // Should be set from your auth context or local storage

// // // //   // Fetch existing reviews
// // // //   useEffect(() => {
// // // //     // Sample data for now
// // // //     setReviews([
// // // //       {
// // // //         id: 1,
// // // //         name: 'Helee',
// // // //         date: 'January 18, 2024',
// // // //         rating: 5,
// // // //         comment: 'Amazing Book',
// // // //         avatar: '👤'
// // // //       }
// // // //     ]);

// // // //     // Get user ID from local storage or your auth context
// // // //     const storedUserId = localStorage.getItem('userId'); // Adjust based on how you store user info
// // // //     if (storedUserId) {
// // // //       setUserId(storedUserId);
// // // //     }
// // // //   }, [productId]);

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();

// // // //     if (!rating || !reviewText) {
// // // //       setSubmitError('Please provide both a rating and review text');
// // // //       return;
// // // //     }

// // // //     if (!productId) {
// // // //       setSubmitError('Product ID is missing');
// // // //       return;
// // // //     }

// // // //     if (!userId) {
// // // //       setSubmitError('User not authenticated. Please log in first.');
// // // //       return;
// // // //     }

// // // //     setIsSubmitting(true);
// // // //     setSubmitError('');
// // // //     setSubmitSuccess('');

// // // //     try {
// // // //       // Prepare the data to match your backend schema requirements
// // // //       const reviewData = {
// // // //         id: productId,           // Book or product ID
// // // //         user: userId,            // The authenticated user's ID
// // // //         description: reviewText, // The review text content
// // // //         rating: rating           // The star rating (1-5)
// // // //       };

// // // //       console.log('Submitting review data:', reviewData);

// // // //       // Make the API call using axios.post
// // // //       const response = await axios.post(
// // // //         `${process.env.REACT_APP_BASE_URL}/user/review/create`,
// // // //         reviewData,
// // // //         {
// // // //           headers: {
// // // //             'Content-Type': 'application/json',
// // // //             // Include authorization header if needed
// // // //             'Authorization': `Bearer ${localStorage.getItem('token')}`
// // // //           }
// // // //         }
// // // //       );

// // // //       console.log('Review submission response:', response.data);

// // // //       // Handle successful submission
// // // //       setSubmitSuccess('Your review has been submitted successfully!');

// // // //       // Reset form
// // // //       setReviewText('');
// // // //       setRating(0);

// // // //       // Add the new review to the reviews list
// // // //       const newReview = {
// // // //         id: Date.now(),
// // // //         name: 'You',
// // // //         date: new Date().toLocaleDateString('en-US', {
// // // //           year: 'numeric',
// // // //           month: 'long',
// // // //           day: 'numeric'
// // // //         }),
// // // //         rating: rating,
// // // //         comment: reviewText,
// // // //         avatar: '👤'
// // // //       };

// // // //       setReviews([newReview, ...reviews]);

// // // //     } catch (error) {
// // // //       console.error('Error submitting review:', error);
// // // //       setSubmitError(
// // // //         error.response?.data?.message ||
// // // //         'Failed to submit review. Please try again later.'
// // // //       );
// // // //     } finally {
// // // //       setIsSubmitting(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="review-container">
// // // //       <h2 className="review-title">Reviews ({reviews.length} reviews)</h2>

// // // //       {/* Write a review section */}
// // // //       <div className="write-review-section">
// // // //         <h3 className="section-title">Share Your Experience</h3>

// // // //         {submitSuccess && (
// // // //           <div className="success-message">{submitSuccess}</div>
// // // //         )}

// // // //         {submitError && (
// // // //           <div className="error-message">{submitError}</div>
// // // //         )}

// // // //         <form onSubmit={handleSubmit}>
// // // //           <div className="star-rating">
// // // //             {[1, 2, 3, 4, 5].map((star) => (
// // // //               <StarIcon
// // // //                 key={star}
// // // //                 filled={(hoveredRating || rating) >= star}
// // // //                 onClick={() => setRating(star)}
// // // //                 onMouseEnter={() => setHoveredRating(star)}
// // // //                 onMouseLeave={() => setHoveredRating(0)}
// // // //               />
// // // //             ))}
// // // //           </div>

// // // //           <div className="textarea-container">
// // // //             <textarea
// // // //               className="review-textarea"
// // // //               placeholder="Share your thoughts about your experience..."
// // // //               value={reviewText}
// // // //               onChange={(e) => setReviewText(e.target.value)}
// // // //               required
// // // //             ></textarea>
// // // //             <button
// // // //               type="submit"
// // // //               className="send-button"
// // // //               disabled={isSubmitting || !rating || !reviewText || !userId}
// // // //             >
// // // //               <SendIcon />
// // // //             </button>
// // // //           </div>

// // // //           <div className="submit-container">
// // // //             <button
// // // //               type="submit"
// // // //               className="submit-button"
// // // //               disabled={isSubmitting || !rating || !reviewText || !userId}
// // // //             >
// // // //               {isSubmitting ? 'Submitting...' : 'Submit Review'}
// // // //             </button>
// // // //           </div>
// // // //         </form>
// // // //       </div>

// // // //       {/* Existing reviews section */}
// // // //       <div className="reviews-section">
// // // //         <h3 className="section-title">Customer Reviews</h3>

// // // //         {reviews.length === 0 ? (
// // // //           <p className="no-reviews">No reviews yet. Be the first to share your experience!</p>
// // // //         ) : (
// // // //           reviews.map((review) => (
// // // //             <div key={review.id} className="review-item">
// // // //               <div className="review-header">
// // // //                 <div className="avatar-container">
// // // //                   {review.avatar}
// // // //                 </div>
// // // //                 <div className="reviewer-info">
// // // //                   <h4 className="reviewer-name">{review.name}</h4>
// // // //                   <div className="review-date">{review.date}</div>
// // // //                 </div>
// // // //                 <div className="review-rating">
// // // //                   {[...Array(5)].map((_, i) => (
// // // //                     <StarIcon
// // // //                       key={i}
// // // //                       filled={i < review.rating}
// // // //                       small={true}
// // // //                     />
// // // //                   ))}
// // // //                 </div>
// // // //               </div>
// // // //               <p className="review-comment">{review.comment}</p>
// // // //             </div>
// // // //           ))
// // // //         )}

// // // //         {reviews.length > 3 && (
// // // //           <div className="view-all-container">
// // // //             <button className="view-all-button">
// // // //               View All Reviews
// // // //             </button>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Review;

// // // import React, { useState } from 'react';
// // // import './Review.css';

// // // // Custom Star icon component
// // // const StarIcon = ({ filled, onClick, onMouseEnter, onMouseLeave, small }) => {
// // //   return (
// // //     <svg
// // //       width={small ? "16" : "24"}
// // //       height={small ? "16" : "24"}
// // //       viewBox="0 0 24 24"
// // //       fill={filled ? "#ffc107" : "none"}
// // //       stroke="#ffc107"
// // //       strokeWidth="2"
// // //       strokeLinecap="round"
// // //       strokeLinejoin="round"
// // //       onClick={onClick}
// // //       onMouseEnter={onMouseEnter}
// // //       onMouseLeave={onMouseLeave}
// // //       className={`star-icon ${filled ? 'star-filled' : 'star-empty'} ${small ? 'small' : ''}`}
// // //     >
// // //       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
// // //     </svg>
// // //   );
// // // };

// // // // Custom Send icon component
// // // const SendIcon = () => {
// // //   return (
// // //     <svg
// // //       width="20"
// // //       height="20"
// // //       viewBox="0 0 24 24"
// // //       fill="none"
// // //       stroke="currentColor"
// // //       strokeWidth="2"
// // //       strokeLinecap="round"
// // //       strokeLinejoin="round"
// // //     >
// // //       <line x1="22" y1="2" x2="11" y2="13" />
// // //       <polygon points="22 2 15 22 11 13 2 9 22 2" />
// // //     </svg>
// // //   );
// // // };

// // // const Review = ({ productId }) => {
// // //   const [rating, setRating] = useState(0);
// // //   const [hoveredRating, setHoveredRating] = useState(0);
// // //   const [reviewText, setReviewText] = useState('');
// // //   const [reviews, setReviews] = useState([
// // //     {
// // //       id: 1,
// // //       name: 'Helee',
// // //       date: 'January 18, 2024',
// // //       rating: 5,
// // //       comment: 'Amazing Book',
// // //       avatar: '👤'
// // //     }
// // //   ]);

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();

// // //     // Simply add the new review to the reviews list without validation
// // //     const newReview = {
// // //       id: Date.now(),
// // //       name: 'You',
// // //       date: new Date().toLocaleDateString('en-US', {
// // //         year: 'numeric',
// // //         month: 'long',
// // //         day: 'numeric'
// // //       }),
// // //       rating: rating || 1, // Default to 1 if no rating selected
// // //       comment: reviewText || 'Great product!', // Default comment if empty
// // //       avatar: '👤'
// // //     };

// // //     setReviews([newReview, ...reviews]);

// // //     // Reset form
// // //     setReviewText('');
// // //     setRating(0);
// // //   };

// // //   return (
// // //     <div className="review-container">
// // //       <h2 className="review-title">Reviews ({reviews.length} reviews)</h2>

// // //       {/* Write a review section */}
// // //       <div className="write-review-section">
// // //         <h3 className="section-title">Share Your Experience</h3>

// // //         <form onSubmit={handleSubmit}>
// // //           <div className="star-rating">
// // //             {[1, 2, 3, 4, 5].map((star) => (
// // //               <StarIcon
// // //                 key={star}
// // //                 filled={(hoveredRating || rating) >= star}
// // //                 onClick={() => setRating(star)}
// // //                 onMouseEnter={() => setHoveredRating(star)}
// // //                 onMouseLeave={() => setHoveredRating(0)}
// // //               />
// // //             ))}
// // //           </div>

// // //           <div className="textarea-container">
// // //             <textarea
// // //               className="review-textarea"
// // //               placeholder="Share your thoughts about your experience..."
// // //               value={reviewText}
// // //               onChange={(e) => setReviewText(e.target.value)}
// // //             ></textarea>
// // //             <button
// // //               type="submit"
// // //               className="send-button"
// // //             >
// // //               <SendIcon />
// // //             </button>
// // //           </div>

// // //           <div className="submit-container">
// // //             <button
// // //               type="submit"
// // //               className="submit-button"
// // //             >
// // //               Submit Review
// // //             </button>
// // //           </div>
// // //         </form>
// // //       </div>

// // //       {/* Existing reviews section */}
// // //       <div className="reviews-section">
// // //         <h3 className="section-title">Customer Reviews</h3>

// // //         {reviews.length === 0 ? (
// // //           <p className="no-reviews">No reviews yet. Be the first to share your experience!</p>
// // //         ) : (
// // //           reviews.map((review) => (
// // //             <div key={review.id} className="review-item">
// // //               <div className="review-header">
// // //                 <div className="avatar-container">
// // //                   {review.avatar}
// // //                 </div>
// // //                 <div className="reviewer-info">
// // //                   <h4 className="reviewer-name">{review.name}</h4>
// // //                   <div className="review-date">{review.date}</div>
// // //                 </div>
// // //                 <div className="review-rating">
// // //                   {[...Array(5)].map((_, i) => (
// // //                     <StarIcon
// // //                       key={i}
// // //                       filled={i < review.rating}
// // //                       small={true}
// // //                     />
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //               <p className="review-comment">{review.comment}</p>
// // //             </div>
// // //           ))
// // //         )}

// // //         {reviews.length > 3 && (
// // //           <div className="view-all-container">
// // //             <button className="view-all-button">
// // //               View All Reviews
// // //             </button>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Review;

// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import './Review.css';

// // // Custom Star icon component
// // const StarIcon = ({ filled, onClick, onMouseEnter, onMouseLeave, small }) => {
// //   return (
// //     <svg
// //       width={small ? "16" : "24"}
// //       height={small ? "16" : "24"}
// //       viewBox="0 0 24 24"
// //       fill={filled ? "#ffc107" : "none"}
// //       stroke="#ffc107"
// //       strokeWidth="2"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //       onClick={onClick}
// //       onMouseEnter={onMouseEnter}
// //       onMouseLeave={onMouseLeave}
// //       className={`star-icon ${filled ? 'star-filled' : 'star-empty'} ${small ? 'small' : ''}`}
// //     >
// //       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
// //     </svg>
// //   );
// // };

// // // Custom Send icon component
// // const SendIcon = () => {
// //   return (
// //     <svg
// //       width="20"
// //       height="20"
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       stroke="currentColor"
// //       strokeWidth="2"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     >
// //       <line x1="22" y1="2" x2="11" y2="13" />
// //       <polygon points="22 2 15 22 11 13 2 9 22 2" />
// //     </svg>
// //   );
// // };

// // const Review = ({ productId }) => {
// //   const [rating, setRating] = useState(0);
// //   const [hoveredRating, setHoveredRating] = useState(0);
// //   const [reviewText, setReviewText] = useState('');
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [reviews, setReviews] = useState([
// //     {
// //       id: 1,
// //       name: 'Helee',
// //       date: 'January 18, 2024',
// //       rating: 5,
// //       comment: 'Amazing Book',
// //       avatar: '👤'
// //     }
// //   ]);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     // Basic validation - use default values if not provided
// //     const finalRating = rating || 1;
// //     const finalReviewText = reviewText || 'Great product!';

// //     setIsSubmitting(true);

// //     try {
// //       // Prepare the review data
// //       const reviewData = {
// //         id: productId,
// //         description: finalReviewText,
// //         rating: finalRating
// //       };

// //       console.log('Submitting review data:', reviewData);

// //       // Make the API call
// //       await axios.post(
// //         `${process.env.REACT_APP_BASE_URL}/user/review/create`,
// //         reviewData,
// //         {
// //           headers: {
// //             'Content-Type': 'application/json'
// //           }
// //         }
// //       );

// //       // Add the new review to the reviews list (optimistic update)
// //       const newReview = {
// //         id: Date.now(),
// //         name: 'You',
// //         date: new Date().toLocaleDateString('en-US', {
// //           year: 'numeric',
// //           month: 'long',
// //           day: 'numeric'
// //         }),
// //         rating: finalRating,
// //         comment: finalReviewText,
// //         avatar: '👤'
// //       };

// //       setReviews([newReview, ...reviews]);

// //       // Reset form
// //       setReviewText('');
// //       setRating(0);

// //     } catch (error) {
// //       console.error('Error submitting review:', error);
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   return (
// //     <div className="review-container">
// //       <h2 className="review-title">Reviews ({reviews.length} reviews)</h2>

// //       {/* Write a review section */}
// //       <div className="write-review-section">
// //         <h3 className="section-title">Share Your Experience</h3>

// //         <form onSubmit={handleSubmit}>
// //           <div className="star-rating">
// //             {[1, 2, 3, 4, 5].map((star) => (
// //               <StarIcon
// //                 key={star}
// //                 filled={(hoveredRating || rating) >= star}
// //                 onClick={() => setRating(star)}
// //                 onMouseEnter={() => setHoveredRating(star)}
// //                 onMouseLeave={() => setHoveredRating(0)}
// //               />
// //             ))}
// //           </div>

// //           <div className="textarea-container">
// //             <textarea
// //               className="review-textarea"
// //               placeholder="Share your thoughts about your experience..."
// //               value={reviewText}
// //               onChange={(e) => setReviewText(e.target.value)}
// //             ></textarea>
// //             <button
// //               type="submit"
// //               className="send-button"
// //               disabled={isSubmitting}
// //             >
// //               <SendIcon />
// //             </button>
// //           </div>

// //           <div className="submit-container">
// //             <button
// //               type="submit"
// //               className="submit-button"
// //               disabled={isSubmitting}
// //             >
// //               {isSubmitting ? 'Submitting...' : 'Submit Review'}
// //             </button>
// //           </div>
// //         </form>
// //       </div>

// //       {/* Existing reviews section */}
// //       <div className="reviews-section">
// //         <h3 className="section-title">Customer Reviews</h3>

// //         {reviews.length === 0 ? (
// //           <p className="no-reviews">No reviews yet. Be the first to share your experience!</p>
// //         ) : (
// //           reviews.map((review) => (
// //             <div key={review.id} className="review-item">
// //               <div className="review-header">
// //                 <div className="avatar-container">
// //                   {review.avatar}
// //                 </div>
// //                 <div className="reviewer-info">
// //                   <h4 className="reviewer-name">{review.name}</h4>
// //                   <div className="review-date">{review.date}</div>
// //                 </div>
// //                 <div className="review-rating">
// //                   {[...Array(5)].map((_, i) => (
// //                     <StarIcon
// //                       key={i}
// //                       filled={i < review.rating}
// //                       small={true}
// //                     />
// //                   ))}
// //                 </div>
// //               </div>
// //               <p className="review-comment">{review.comment}</p>
// //             </div>
// //           ))
// //         )}

// //         {reviews.length > 3 && (
// //           <div className="view-all-container">
// //             <button className="view-all-button">
// //               View All Reviews
// //             </button>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Review;

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import './Review.css';

// // // Custom Star icon component
// // const StarIcon = ({ filled, onClick, onMouseEnter, onMouseLeave, small }) => {
// //   return (
// //     <svg
// //       width={small ? "16" : "24"}
// //       height={small ? "16" : "24"}
// //       viewBox="0 0 24 24"
// //       fill={filled ? "#ffc107" : "none"}
// //       stroke="#ffc107"
// //       strokeWidth="2"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //       onClick={onClick}
// //       onMouseEnter={onMouseEnter}
// //       onMouseLeave={onMouseLeave}
// //       className={`star-icon ${filled ? 'star-filled' : 'star-empty'} ${small ? 'small' : ''}`}
// //     >
// //       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
// //     </svg>
// //   );
// // };

// // // Custom Send icon component
// // const SendIcon = () => {
// //   return (
// //     <svg
// //       width="20"
// //       height="20"
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       stroke="currentColor"
// //       strokeWidth="2"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     >
// //       <line x1="22" y1="2" x2="11" y2="13" />
// //       <polygon points="22 2 15 22 11 13 2 9 22 2" />
// //     </svg>
// //   );
// // };

// // const Review = ({ productId }) => {
// //   const [rating, setRating] = useState(0);
// //   const [hoveredRating, setHoveredRating] = useState(0);
// //   const [reviewText, setReviewText] = useState('');
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [userId, setUserId] = useState('');
// //   const [reviews, setReviews] = useState([
// //     {
// //       id: 1,
// //       name: 'Helee',
// //       date: 'January 18, 2024',
// //       rating: 5,
// //       comment: 'Amazing Book',
// //       avatar: '👤'
// //     }
// //   ]);

// //   // Get user ID from localStorage when component mounts
// //   useEffect(() => {
// //     const storedUserId = localStorage.getItem('userId');
// //     if (storedUserId) {
// //       setUserId(storedUserId);
// //     }
// //   }, []);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     // Basic validation - use default values if not provided
// //     const finalRating = rating || 1;
// //     const finalReviewText = reviewText || 'Great product!';

// //     // Check if userId is available
// //     if (!userId) {
// //       console.error('User ID is missing');
// //       return;
// //     }

// //     setIsSubmitting(true);

// //     try {
// //       // Prepare the review data including the user field
// //       const reviewData = {
// //         id: productId,
// //         user: userId,
// //         description: finalReviewText,
// //         rating: finalRating
// //       };

// //       console.log('Submitting review data:', reviewData);

// //       // Make the API call
// //       await axios.post(
// //         `${process.env.REACT_APP_BASE_URL}/user/review/create`,
// //         reviewData,
// //         {
// //           headers: {
// //             'Content-Type': 'application/json',
// //             'Authorization': `Bearer ${localStorage.getItem('token')}`
// //           }
// //         }
// //       );

// //       // Add the new review to the reviews list (optimistic update)
// //       const newReview = {
// //         id: Date.now(),
// //         name: 'You',
// //         date: new Date().toLocaleDateString('en-US', {
// //           year: 'numeric',
// //           month: 'long',
// //           day: 'numeric'
// //         }),
// //         rating: finalRating,
// //         comment: finalReviewText,
// //         avatar: '👤'
// //       };

// //       setReviews([newReview, ...reviews]);

// //       // Reset form
// //       setReviewText('');
// //       setRating(0);

// //     } catch (error) {
// //       console.error('Error submitting review:', error);
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   return (
// //     <div className="review-container">
// //       <h2 className="review-title">Reviews ({reviews.length} reviews)</h2>

// //       {/* Write a review section */}
// //       <div className="write-review-section">
// //         <h3 className="section-title">Share Your Experience</h3>

// //         <form onSubmit={handleSubmit}>
// //           <div className="star-rating">
// //             {[1, 2, 3, 4, 5].map((star) => (
// //               <StarIcon
// //                 key={star}
// //                 filled={(hoveredRating || rating) >= star}
// //                 onClick={() => setRating(star)}
// //                 onMouseEnter={() => setHoveredRating(star)}
// //                 onMouseLeave={() => setHoveredRating(0)}
// //               />
// //             ))}
// //           </div>

// //           <div className="textarea-container">
// //             <textarea
// //               className="review-textarea"
// //               placeholder="Share your thoughts about your experience..."
// //               value={reviewText}
// //               onChange={(e) => setReviewText(e.target.value)}
// //             ></textarea>
// //             <button
// //               type="submit"
// //               className="send-button"
// //               disabled={isSubmitting || !userId}
// //             >
// //               <SendIcon />
// //             </button>
// //           </div>

// //           <div className="submit-container">
// //             <button
// //               type="submit"
// //               className="submit-button"
// //               disabled={isSubmitting || !userId}
// //             >
// //               {isSubmitting ? 'Submitting...' : 'Submit Review'}
// //             </button>
// //           </div>
// //         </form>
// //       </div>

// //       {/* Existing reviews section */}
// //       <div className="reviews-section">
// //         <h3 className="section-title">Customer Reviews</h3>

// //         {reviews.length === 0 ? (
// //           <p className="no-reviews">No reviews yet. Be the first to share your experience!</p>
// //         ) : (
// //           reviews.map((review) => (
// //             <div key={review.id} className="review-item">
// //               <div className="review-header">
// //                 <div className="avatar-container">
// //                   {review.avatar}
// //                 </div>
// //                 <div className="reviewer-info">
// //                   <h4 className="reviewer-name">{review.name}</h4>
// //                   <div className="review-date">{review.date}</div>
// //                 </div>
// //                 <div className="review-rating">
// //                   {[...Array(5)].map((_, i) => (
// //                     <StarIcon
// //                       key={i}
// //                       filled={i < review.rating}
// //                       small={true}
// //                     />
// //                   ))}
// //                 </div>
// //               </div>
// //               <p className="review-comment">{review.comment}</p>
// //             </div>
// //           ))
// //         )}

// //         {reviews.length > 3 && (
// //           <div className="view-all-container">
// //             <button className="view-all-button">
// //               View All Reviews
// //             </button>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Review;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Review.css';

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
//       className={`star-icon ${filled ? 'star-filled' : 'star-empty'} ${small ? 'small' : ''}`}
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

// const Review = ({ productId }) => {
//   const [rating, setRating] = useState(0);
//   const [hoveredRating, setHoveredRating] = useState(0);
//   const [reviewText, setReviewText] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [userId, setUserId] = useState('guest-user'); // Default user ID
//   const [reviews, setReviews] = useState([
//     {
//       id: 1,
//       name: 'Helee',
//       date: 'January 18, 2024',
//       rating: 5,
//       comment: 'Amazing Book',
//       avatar: '👤'
//     }
//   ]);

//   // Get user ID from localStorage when component mounts
//   useEffect(() => {
//     const storedUserId = localStorage.getItem('userId');
//     if (storedUserId) {
//       setUserId(storedUserId);
//     } else {
//       // If no userId in localStorage, use the default
//       console.log('No user ID found in localStorage, using default guest-user ID');
//       // Optionally, you could save the default ID to localStorage
//       // localStorage.setItem('userId', 'guest-user');
//     }
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Basic validation - use default values if not provided
//     const finalRating = rating || 1;
//     const finalReviewText = reviewText || 'Great product!';

//     // userId will always be available now (either from localStorage or the default)

//     setIsSubmitting(true);

//     try {
//       // Prepare the review data including the user field
//       const reviewData = {
//         id: productId,
//         user: userId, // This will be either the stored ID or the default
//         description: finalReviewText,
//         rating: finalRating
//       };

//       console.log('Submitting review data:', reviewData);

//       // Make the API call
//       await axios.post(
//         `${process.env.REACT_APP_BASE_URL}/user/review/create`,
//         reviewData,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${localStorage.getItem('token') || 'guest-token'}` // Added fallback token
//           }
//         }
//       );

//       // Add the new review to the reviews list (optimistic update)
//       const newReview = {
//         id: Date.now(),
//         name: 'You',
//         date: new Date().toLocaleDateString('en-US', {
//           year: 'numeric',
//           month: 'long',
//           day: 'numeric'
//         }),
//         rating: finalRating,
//         comment: finalReviewText,
//         avatar: '👤'
//       };

//       setReviews([newReview, ...reviews]);

//       // Reset form
//       setReviewText('');
//       setRating(0);

//     } catch (error) {
//       console.error('Error submitting review:', error);
//     } finally {
//       setIsSubmitting(false);
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
//               {isSubmitting ? 'Submitting...' : 'Submit Review'}
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Existing reviews section */}
//       <div className="reviews-section">
//         <h3 className="section-title">Customer Reviews</h3>

//         {reviews.length === 0 ? (
//           <p className="no-reviews">No reviews yet. Be the first to share your experience!</p>
//         ) : (
//           reviews.map((review) => (
//             <div key={review.id} className="review-item">
//               <div className="review-header">
//                 <div className="avatar-container">
//                   {review.avatar}
//                 </div>
//                 <div className="reviewer-info">
//                   <h4 className="reviewer-name">{review.name}</h4>
//                   <div className="review-date">{review.date}</div>
//                 </div>
//                 <div className="review-rating">
//                   {[...Array(5)].map((_, i) => (
//                     <StarIcon
//                       key={i}
//                       filled={i < review.rating}
//                       small={true}
//                     />
//                   ))}
//                 </div>
//               </div>
//               <p className="review-comment">{review.comment}</p>
//             </div>
//           ))
//         )}

//         {reviews.length > 3 && (
//           <div className="view-all-container">
//             <button className="view-all-button">
//               View All Reviews
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Review;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Review.css';

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
//       className={`star-icon ${filled ? 'star-filled' : 'star-empty'} ${small ? 'small' : ''}`}
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

// const Review = ({ productId }) => {
//   // Default ObjectId (24-character hex string) for guest user
//   const DEFAULT_USER_ID = '000000000000000000000000';

//   const [rating, setRating] = useState(0);
//   const [hoveredRating, setHoveredRating] = useState(0);
//   const [reviewText, setReviewText] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [userId, setUserId] = useState(DEFAULT_USER_ID);
//   const [reviews, setReviews] = useState([
//     {
//       id: 1,
//       name: 'Helee',
//       date: 'January 18, 2024',
//       rating: 5,
//       comment: 'Amazing Book',
//       avatar: '👤'
//     }
//   ]);
//   const [review, setReview] = useState([]);

//   // Get user ID from localStorage when component mounts
//   useEffect(() => {
//     const storedUserId = localStorage.getItem('userId');
//     if (storedUserId) {
//       setUserId(storedUserId);
//     } else {
//       console.log('No user ID found in localStorage, using default guest user ID');
//       // Optionally save the default ID to localStorage
//       // localStorage.setItem('userId', DEFAULT_USER_ID);
//     }
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Basic validation - use default values if not provided
//     const finalRating = rating || 1;
//     const finalReviewText = reviewText || 'Great product!';

//     setIsSubmitting(true);

//     try {
//       // Prepare the review data including the user field
//       const reviewData = {
//         bId: productId,
//         user: userId, // This will be either the stored ID or the default ObjectId
//         description: finalReviewText,
//         rating: finalRating
//       };

//       console.log('Submitting review data:', reviewData);

//       // Make the API call
//       await axios.post(
//         `${process.env.REACT_APP_BASE_URL}/user/review/create`,
//         reviewData,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `${localStorage.getItem('authToken') || ''}`
//           }
//         }
//       );

//       // Add the new review to the reviews list (optimistic update)
//       const newReview = {
//         id: Date.now(),
//         name: 'You',
//         date: new Date().toLocaleDateString('en-US', {
//           year: 'numeric',
//           month: 'long',
//           day: 'numeric'
//         }),
//         rating: finalRating,
//         comment: finalReviewText,
//         avatar: '👤'
//       };

//       setReviews([newReview, ...reviews]);

//       // Reset form
//       setReviewText('');
//       setRating(0);

//     } catch (error) {
//       console.error('Error submitting review:', error);
//       alert('Failed to submit review. Please try again or log in.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const fetchReview = async () => {
//     try {
//             const authToken = localStorage.getItem("authToken");

//       const response = await axios.get(
//         `${process.env.REACT_APP_BASE_URL}/user/review/getAll`
//       );
//       console.log("response", response?.data?.data);

//       // Check if response.data is an array or wrapped inside another object
//       // const booksArray = Array.isArray(response.data)
//       //   ? response.data
//       //   : response.data?.data || [];
//       // console.log(booksArray,"shhrreeee");

//       // const formattedBooks = booksArray.map((book) => ({
//       //   ...book,
//       //   id: book._id,
//       //   image: book.image ? book.image.url : "" // Check if image exists // Ensure DataGrid has an id
//       // }));
//       // console.log(formattedBooks,"hellllll");

//       setReview(response?.data?.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchReview();
//     // console.log(book, "skjcskhc");
//   }, []);

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
//               {isSubmitting ? 'Submitting...' : 'Submit Review'}
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Existing reviews section */}
//       <div className="reviews-section">
//         <h3 className="section-title">Customer Reviews</h3>

//         {reviews.length === 0 ? (
//           <p className="no-reviews">No reviews yet. Be the first to share your experience!</p>
//         ) : (
//           reviews.map((review) => (
//             <div key={review.id} className="review-item">
//               <div className="review-header">
//                 <div className="avatar-container">
//                   {review.avatar}
//                 </div>
//                 <div className="reviewer-info">
//                   <h4 className="reviewer-name">{review.name}</h4>
//                   <div className="review-date">{review.date}</div>
//                 </div>
//                 <div className="review-rating">
//                   {[...Array(5)].map((_, i) => (
//                     <StarIcon
//                       key={i}
//                       filled={i < review.rating}
//                       small={true}
//                     />
//                   ))}
//                 </div>
//               </div>
//               <p className="review-comment">{review.comment}</p>
//             </div>
//           ))
//         )}

//         {reviews.length > 3 && (
//           <div className="view-all-container">
//             <button className="view-all-button">
//               View All Reviews
//             </button>
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

const Review = ({ productId }) => {
  // Default ObjectId (24-character hex string) for guest user
  const DEFAULT_USER_ID = "000000000000000000000000";

  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userId, setUserId] = useState(DEFAULT_USER_ID);
  const [reviews, setReviews] = useState([]);

  // Get user ID from localStorage when component mounts
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      console.log(
        "No user ID found in localStorage, using default guest user ID"
      );
    }

    // Fetch reviews when component mounts
    fetchReviews();
  }, [productId]);

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
        `${process.env.REACT_APP_BASE_URL}/user/review/create/${productId}`,
        reviewData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("authToken") || ""}`,
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
      // Ideally we would fetch reviews for a specific book
      // If your API supports it, use a URL like:
      // `${process.env.REACT_APP_BASE_URL}/user/review/get/${productId}`

      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user/review/getAll`
      );

      console.log("Fetched reviews:", response?.data?.data);

      if (response?.data?.data) {
        // For now, we're getting all reviews, but ideally would filter by book
        const allReviews = response.data.data;

        // Format reviews for display
        const formattedReviews = allReviews.map((review) => ({
          id: review._id,
          name: review.user?.name || "Anonymous",
          date: new Date(review.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          rating: review.rating,
          comment: review.description,
          avatar: "👤",
        }));

        setReviews(formattedReviews);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
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

// const Review = ({ productId }) => {
//   // Default ObjectId for user
//   const DEFAULT_USER_ID = "67ccab6ec2430f8187f1a4b3";

//   const [rating, setRating] = useState(0);
//   const [hoveredRating, setHoveredRating] = useState(0);
//   const [reviewText, setReviewText] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [userId, setUserId] = useState(DEFAULT_USER_ID);
//   const [reviews, setReviews] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Function to fetch reviews
//   const fetchReviews = async () => {
//     if (!productId) {
//       console.error("Missing productId, cannot fetch reviews");
//       setError("Cannot identify the book to fetch reviews.");
//       setIsLoading(false);
//       return;
//     }

//     setIsLoading(true);
//     setError(null);

//     try {
//       console.log(`Fetching reviews for book ID: ${productId}`);

//       // Try multiple possible API endpoints
//       // First try book-specific reviews endpoint
//       const response = await axios
//         .get(`${process.env.REACT_APP_BASE_URL}/user/book/${productId}/reviews`)
//         .catch(async () => {
//           // If that fails, try alternative endpoint format
//           return await axios
//             .get(
//               `${process.env.REACT_APP_BASE_URL}/user/review/book/${productId}`
//             )
//             .catch(async () => {
//               // If that fails too, try general reviews endpoint
//               return await axios.get(
//                 `${process.env.REACT_APP_BASE_URL}/user/review/get/${productId}`
//               );
//             });
//         });

//       console.log("Reviews API response:", response?.data);

//       if (!response || !response.data) {
//         throw new Error("Invalid response from server");
//       }

//       // Extract reviews from response - handle different possible data structures
//       let reviewsData = [];
//       if (Array.isArray(response.data)) {
//         reviewsData = response.data;
//       } else if (response.data.data && Array.isArray(response.data.data)) {
//         reviewsData = response.data.data;
//       } else if (
//         response.data.reviews &&
//         Array.isArray(response.data.reviews)
//       ) {
//         reviewsData = response.data.reviews;
//       }

//       // Transform the API response to match your review format
//       const fetchedReviews = reviewsData.map((review) => ({
//         id: review._id || review.id,
//         name: review.user?.name || review.userName || "User",
//         date: new Date(review.createdAt || review.date).toLocaleDateString(
//           "en-US",
//           {
//             year: "numeric",
//             month: "long",
//             day: "numeric",
//           }
//         ),
//         rating: review.rating || 5,
//         comment: review.description || review.comment || review.text,
//         avatar: "👤",
//       }));

//       console.log("Processed reviews:", fetchedReviews);
//       setReviews(fetchedReviews);
//     } catch (error) {
//       console.error("Error fetching reviews:", error);
//       setError("Could not load reviews. Please try again later.");
//       // If API fails completely, show a default review to test UI
//       setReviews([
//         {
//           id: "default",
//           name: "Sample Review",
//           date: "March 15, 2025",
//           rating: 5,
//           comment:
//             "This is a sample review. There was an issue loading actual reviews.",
//           avatar: "👤",
//         },
//       ]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Fetch reviews when component mounts or productId changes
//   useEffect(() => {
//     fetchReviews();
//   }, [productId]);

//   // Get user ID from localStorage when component mounts
//   useEffect(() => {
//     const storedUserId = localStorage.getItem("userId");
//     if (storedUserId) {
//       setUserId(storedUserId);
//     } else {
//       console.log("No user ID found in localStorage, using default user ID");
//     }
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!productId) {
//       alert("Error: Could not identify the book. Please try again later.");
//       return;
//     }

//     // Basic validation
//     if (rating === 0 && !reviewText.trim()) {
//       alert("Please provide a rating or comment before submitting");
//       return;
//     }

//     const finalRating = rating || 3;
//     const finalReviewText = reviewText.trim() || "Great book!";

//     setIsSubmitting(true);

//     try {
//       console.log(`Submitting review for book ID: ${productId}`);

//       // Prepare the review data
//       const reviewData = {
//         id: productId,
//         user: userId,
//         description: finalReviewText,
//         rating: finalRating,
//       };

//       console.log("Submitting review data:", reviewData);

//       // Try to submit the review
//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}/user/review/create`,
//         reviewData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
//           },
//         }
//       );

//       console.log("Review submission response:", response.data);

//       // Get the saved review from the response if available
//       const savedReview = response.data?.data;

//       // Add the new review to the UI
//       const newReview = {
//         id: savedReview?._id || Date.now().toString(),
//         name: "You",
//         date: new Date().toLocaleDateString("en-US", {
//           year: "numeric",
//           month: "long",
//           day: "numeric",
//         }),
//         rating: finalRating,
//         comment: finalReviewText,
//         avatar: "👤",
//       };

//       // Add the new review to the beginning of the reviews list
//       setReviews((prevReviews) => [newReview, ...prevReviews]);

//       // Reset form
//       setReviewText("");
//       setRating(0);

//       // Refresh reviews from server to ensure consistency
//       setTimeout(fetchReviews, 1000);
//     } catch (error) {
//       console.error("Error submitting review:", error);
//       alert("Failed to submit review. Please try again.");
//     } finally {
//       setIsSubmitting(false);
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
//               placeholder="Share your thoughts about this book..."
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

//         {isLoading ? (
//           <p className="loading-reviews">Loading reviews...</p>
//         ) : error ? (
//           <div className="error-message">
//             <p>{error}</p>
//             <button onClick={fetchReviews} className="retry-button">
//               Try Again
//             </button>
//           </div>
//         ) : reviews.length === 0 ? (
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
