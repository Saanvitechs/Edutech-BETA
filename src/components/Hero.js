import React from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Hero = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Handle the apply button click to navigate to the membership plan page
  const handleApplyClick = () => {
    navigate('/membership-plan');
  };

  return (
    <section className="super-hero-section">
      <div className="super-hero-content">
        <h1>TREx - Get Experienced</h1>
        <p>
          Exclusive programs like On-Job-Training, designed to make you industry ready right from development, practices & Aptitude to grab your dream job.
        </p>
        <p className="super-batch-starts">Join Now - New Batch Starting Soon...</p>
        <button className="super-apply-button" onClick={handleApplyClick}>
          Apply
        </button>
      </div>
      <div className="super-hero-animation">
        <iframe
          src="https://lottie.host/embed/3dcc0262-32be-431b-9894-af0c5a3d681d/xCwuQgZwG8.json"
          style={{ border: 'none', width: '600px', height: '400px' }}
          title="Lottie Animation"
        ></iframe>
      </div>
    </section>
  );
};

export default Hero;
