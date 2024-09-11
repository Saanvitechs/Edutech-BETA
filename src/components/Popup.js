import React from 'react';
import './Popup.css';

const Popup = ({ onClose }) => {
  return (
    <div className="custom-popup-overlay">
      <div className="custom-popup-content">
        {/* Red Cross Button */}
        <button className="custom-close-icon" onClick={onClose}>&times;</button>

        <h2>Join Our Webinar!</h2>
        <p>
          Get exclusive insights, tips, and tricks from industry experts in our upcoming webinar. Don't miss out on this opportunity to expand your knowledge!
        </p>
        <p>Click the button below to book your spot now:</p>
        <a 
          href="https://forms.gle/8FbbS3bzckijRXnAA" // Replace with your actual Google Form link
          target="_blank" 
          rel="noopener noreferrer"
          className="custom-book-webinar-btn"
        >
          Book a Webinar for free
        </a>
      </div>
    </div>
  );
};

export default Popup;
