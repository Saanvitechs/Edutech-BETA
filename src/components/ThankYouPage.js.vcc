import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ThankYouPage.css'; // Optional: create a CSS file for custom styles

const ThankYouPage = () => {
  const navigate = useNavigate();

  const handleExploreMore = () => {
    navigate('/'); // Redirect to the home page
  };

  return (
    <div className="thank-you-page">
      <h1>Thank You for Taking the Test!</h1>
      <p>Your responses have been submitted successfully.</p>
      <button className="explore-more-button" onClick={handleExploreMore}>
        Explore More
      </button>
    </div>
  );
};

export default ThankYouPage;