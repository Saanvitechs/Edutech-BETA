import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './TestSeriesSection.css';
import briefcase from './images/briefcase.png';
import bachelor from './images/bachelor.png';
import codings from './images/codings.png';
import interview from './images/interview.png';

const TestSeriesSection = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [hoverTextIndex, setHoverTextIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverTextIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverTextIndex(null);
  };

  // Navigate to NewPageComponent and pass the plan index via URL parameters
  const handleButtonClick = (planIndex) => {
    navigate(`/course?plan=${planIndex}`); // Navigate to NewPageComponent with the selected plan index
  };

  const buttonData = [

    {
      defaultText: 'Live Projects & OJT',
      hoverText: 'Check Titan Plan',
      icon: codings,
      isImageIcon: true,
      planIndex: 0,
    },
    {
      defaultText: 'On-Job-Training',
      hoverText: 'Check Executive Plan',
      icon: briefcase,
      isImageIcon: true,
      planIndex: 1,
    },
    {
      defaultText: 'Internship/Guidance',
      hoverText: 'Check Apprentice Plan',
      icon: bachelor,
      isImageIcon: true,
      planIndex: 2,
    },
    {
      defaultText: 'Interview Preparation',
      hoverText: 'Check SOS Plan',
      icon: interview,
      isImageIcon: true,
      planIndex: 3,
    },
  ];

  return (
    <div className="test-series-container">
      <div className="test-series-content">
        <h2>Enroll in On-Job-Training for upgrading your skills with <span>TREx</span></h2>
        <p>Get unlimited access to the most relevant Mock Tests</p>
        <h3>Click below to know more:</h3>
        <ul className="benefits-list">
          {buttonData.map((button, index) => (
            <li
              key={index}
              onClick={() => handleButtonClick(index)} // Navigate on button click
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="icon">
                <img src={button.icon} alt="icon" style={{ width: '24px', height: '24px' }} />
              </span>
              <p>
                <strong>{hoverTextIndex === index ? button.hoverText : button.defaultText}</strong>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="test-series-lottie">
        <iframe
          src="https://lottie.host/embed/74e639e5-6b5c-428b-9a61-a94e13ecc3f8/4WjPekyD72.json"
          style={{ border: 'none', width: '300px', height: '300px' }}
          title="Lottie Animation"
        ></iframe>
      </div>
    </div>
  );
};

export default TestSeriesSection;
