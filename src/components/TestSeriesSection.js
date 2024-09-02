import React, { useState } from 'react';
import './TestSeriesSection.css';
import SubscriptionPopup from './SubscriptionPopup'; // Import the SubscriptionPopup component
import testSeriesImage from './images/learning.svg'; 
import qrCode1 from './images/SOS.jpg';
import qrCode2 from './images/AP.jpg';
import qrCode3 from './images/EP.jpg';
import qrCode4 from './images/titan.jpg';
import qrCode5 from './images/EP1.jpg'; // Installment QR code for EP
import qrCode6 from './images/TITAN1.jpg'; // Installment QR code for TITAN

const TestSeriesSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedQrCodes, setSelectedQrCodes] = useState([]);
  const [isSingleQrCode, setIsSingleQrCode] = useState(true);

  const handleButtonClick = (qrCodes, isSingleQrCode) => {
    setSelectedQrCodes(qrCodes);
    setIsSingleQrCode(isSingleQrCode);
    setPopupOpen(true);
  };

  return (
    <div className="test-series-container">
      <div className="test-series-content">
        <h2>Enroll in On-Job-Training for upgrading your skills with <span>TREx </span></h2>
        <p>Get unlimited access to the most relevant Mock Tests</p>
        <h3>What you get with Us:</h3>
        <ul className="benefits-list">
          <li onClick={() => handleButtonClick([qrCode3, qrCode5], false)}>
            <span className="icon">&#x1F3C6;</span>
            <p><strong>On-Job-Training</strong></p>
          </li>
          <li onClick={() => handleButtonClick([qrCode2], true)}>
            <span className="icon">&#x1F310;</span>
            <p><strong>Internship/Guidance</strong></p>
          </li>
          <li onClick={() => handleButtonClick([qrCode4, qrCode6], false)}>
            <span className="icon">&#x1F4DD;</span>
            <p><strong>Live Projects</strong></p>
          </li>
          <li onClick={() => handleButtonClick([qrCode1], true)}>
            <span className="icon">&#x1F4C8;</span>
            <p><strong>Interview Preparation</strong></p>
          </li>
        </ul>
        <h3>For more information check our PLAN section above 👍</h3>

        <a href=" " className="explore-btn">
          For more Information click here!
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
