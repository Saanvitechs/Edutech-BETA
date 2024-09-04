import React, { useState, useContext } from 'react';
import './TestSeriesSection.css';
import SubscriptionPopup from './SubscriptionPopup'; // Import the SubscriptionPopup component
import testSeriesImage from './images/learning.svg'; 
import qrCode1 from './images/SOS.jpg';
import qrCode2 from './images/AP.jpg';
import qrCode3 from './images/EP.jpg';
import qrCode4 from './images/titan.jpg';
import qrCode5 from './images/EP1.jpg'; // Installment QR code for EP
import qrCode6 from './images/TITAN1.jpg'; // Installment QR code for TITAN
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../hooks/AuthContext'; 
import { faUserGraduate, faChalkboardTeacher, faLaptopCode, faBriefcase } from '@fortawesome/free-solid-svg-icons'; // Importing different icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TestSeriesSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedQrCodes, setSelectedQrCodes] = useState([]);
  const [isSingleQrCode, setIsSingleQrCode] = useState(true);
  
  const { isAuthenticated } = useContext(AuthContext); 
  const navigate = useNavigate();

  const [hoverTextIndex, setHoverTextIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverTextIndex(index);  // Set the index of the hovered button
  };

  const handleMouseLeave = () => {
    setHoverTextIndex(null);   // Reset the index when mouse leaves
  };

  const handleButtonClick = (qrCodes, isSingleQrCode) => {
    if (!isAuthenticated) {
      navigate('/login'); // Redirect to login if user is not authenticated
      return;
    }
    setSelectedQrCodes(qrCodes);
    setIsSingleQrCode(isSingleQrCode);
    setPopupOpen(true);
  };

  const buttonData = [
    { defaultText: ' On-Job-Training', hoverText: 'Check Titan Plan', qrCodes: [qrCode3, qrCode5], isSingleQrCode: false, icon: faBriefcase },
    { defaultText: ' Internship/Guidance', hoverText: 'Check Apprentice Plan', qrCodes: [qrCode2], isSingleQrCode: true, icon: faUserGraduate },
    { defaultText: ' Live Projects', hoverText: 'Check Executive Plan', qrCodes: [qrCode4, qrCode6], isSingleQrCode: false, icon: faLaptopCode },
    { defaultText: ' Interview Preparation', hoverText: 'Check SOS Plan', qrCodes: [qrCode1], isSingleQrCode: true, icon: faChalkboardTeacher }
  ];

  return (
    <div className="test-series-container">
      <div className="test-series-content">
        <h2>Enroll in On-Job-Training for upgrading your skills with <span>TREx </span></h2>
        <p>Get unlimited access to the most relevant Mock Tests</p>
        <h3>What you get with Us:</h3>
        <ul className="benefits-list">
          {buttonData.map((button, index) => (
            <li key={index} 
                onClick={() => handleButtonClick(button.qrCodes, button.isSingleQrCode)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}>
              <span className="icon">
                <FontAwesomeIcon icon={button.icon} />
              </span>
              <p>
                <strong>
                  {hoverTextIndex === index ? button.hoverText : button.defaultText}
                </strong>
              </p>
            </li>
          ))}
        </ul>
        <a href=" /Brochure.pdf" className="explore-btn" target="_blank" rel="noopener noreferrer">
          Know More!
        </a>
      </div>
      <div className="test-series-image">
        <img src={testSeriesImage} alt="Test Series" />
      </div>

      {/* Subscription Popup */}
      <SubscriptionPopup
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        qrCodes={selectedQrCodes}
        isSingleQrCode={isSingleQrCode}
      />
    </div>
  );
};

export default TestSeriesSection;
