import React from 'react';
import './ComingSoon.css';

const ComingSoon = () => {
  const whatsappGroupLink = 'https://chat.whatsapp.com/LQb2ZO8vlrt73TIbGnqzpQ'
  const homePageLink = '/'; // Replace with your actual home page route

  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <h1 className="coming-soon-title">Coming Soon</h1>
        <p className="coming-soon-description">We're working on something exciting. Stay tuned!</p>
        <p className="coming-soon-description">Join our WhatsApp group for the latest updates:</p>
        <a href={whatsappGroupLink} target="_blank" rel="noopener noreferrer">
          <button className="coming-soon-whatsapp-btn">
            Join WhatsApp Group
          </button>
        </a>
        <a href={homePageLink} className="coming-soon-continue-link">Continue browsing Trex</a>
      </div>
    </div>
  );
};

export default ComingSoon;