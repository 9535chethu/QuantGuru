import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleUser,
  faUser,
  faUserTie,
  faUserGraduate,
  faUserNinja,
  faUserAstronaut
} from '@fortawesome/free-solid-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import './Reviews.css';

const reviewsData = [
  { name: "Chethan", icon: faCircleUser, number: 5 },
  { name: "Emma", icon: faUser, number: 4.8 },
  { name: "Alex", icon: faUserTie, number: 4.7 },
  { name: "Sophie", icon: faUserGraduate, number: 5 },
  { name: "Liam", icon: faUserNinja, number: 4 },
  { name: "Olivia", icon: faUserAstronaut, number: 4.5 }
];

const Reviews = () => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const scrollWidth = container.scrollWidth;
      const animationDuration = scrollWidth / 50; // Adjust speed as needed

      container.style.setProperty('--scroll-width', `${scrollWidth}px`);
      container.style.setProperty('--animation-duration', `${animationDuration}s`);
    }
  }, []);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="reviews-section">
      <h2 className="headline">Customer Feedback</h2>
      <div 
        className={`reviews-container ${isPaused ? 'paused' : ''}`}
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="reviews-slider">
          {[...reviewsData, ...reviewsData].map((review, index) => (
            <div key={index} className="review-box">
              <div className="review-content">
                <div className="icon-row">
                  <FontAwesomeIcon icon={review.icon} className="icon" />
                </div>
                <div className="info-row">
                  <div className="pic-container">{review.name}</div>
                  <FontAwesomeIcon icon={fasStar} className="star" />
                  <div className="number">{review.number}</div>
                </div>
                <div className="text">
                  "Exploring QuantGuru has been an enlightening experience. The content is well-structured, covering essential topics comprehensively. The interactive quizzes and practical assignments enhance learning, ensuring a deeper understanding.
                </div>
              </div>
              <div className="logo-container">
                <img
                 src="https://img.icons8.com/color/48/google-logo.png"
                />
                <div className="logo-info">
                  <div className="text">posted on</div>
                  <div className='Google'>Google</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;