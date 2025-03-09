import React, { useState } from 'react';
import './Review.css';

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
      className={`star-icon ${filled ? 'star-filled' : 'star-empty'} ${small ? 'small' : ''}`}
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

const Review = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  // Sample review data
  const reviews = [
    {
      id: 1,
      name: 'Helee',
      date: 'January 18, 2024',
      rating: 5,
      comment: 'Amazing Book',
      avatar: '👤'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Review submitted!');
    setReviewText('');
    setRating(0);
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
              required
            ></textarea>
            <button
              type="submit"
              className="send-button"
              disabled={!rating || !reviewText}
            >
              <SendIcon />
            </button>
          </div>
          
          <div className="submit-container">
            <button
              type="submit"
              className="submit-button"
              disabled={!rating || !reviewText}
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
      
      {/* Existing reviews section */}
      <div className="reviews-section">
        <h3 className="section-title">Customer Reviews</h3>
        
        {reviews.map((review) => (
          <div key={review.id} className="review-item">
            <div className="review-header">
              <div className="avatar-container">
                {review.avatar}
              </div>
              <div className="reviewer-info">
                <h4 className="reviewer-name">{review.name}</h4>
                <div className="review-date">{review.date}</div>
              </div>
              <div className="review-rating">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    filled={i < review.rating}
                    small={true}
                  />
                ))}
              </div>
            </div>
            <p className="review-comment">{review.comment}</p>
          </div>
        ))}
        
        {reviews.length > 3 && (
          <div className="view-all-container">
            <button className="view-all-button">
              View All Reviews
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Review;