import React, { useState } from 'react';
import './Footer.css';
import sts from './images/sts.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

// RefundPolicyPopup component
const RefundPolicyPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Refund Policy</h2>
        <p>Thank you for tuning with us at TREx</p>
        <p>
          We do not issue refunds for non-tangible irrevocable goods such as training and guidance once the process is confirmed.
        </p>
        <p>
          We recommend contacting us for assistance if you experience any issues receiving in our services.
        </p>
        <p>Contact us:</p>
        <ul>
          <li>By email:  info@saanvitechs.com</li>
        </ul>
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>
  );
};

const Footer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-logo">
        <div style={{textAlign: 'left'}}>
          <img src={sts} alt="Your Company Logo" />
          <p>SAANVI TECHNOLOGY SOLUTIONS.</p>
          <p> Lucknow, Uttar Pradesh, 226001</p>
          <p>Email: info@saanvitechs.com</p>
          
          </div>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="https://saanvitechs.com/about.php">About Us</a></li>
            <li><a href="https://careers.saanvitechs.com/">Careers</a></li>
            <li><a href="https://www.instagram.com/saanvitechs?utm_source=qr&igsh=MXEydGlrNnQ3Mm1xaQ==">Media</a></li>
            <li><a href="/#" onClick={openPopup}>Refund Policy</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Products</h4>
          <ul>
            <li><a href="/mocks">Test Series</a></li>
            <li><a href="/mocks">Practice</a></li>
            <li><a href="https://saanvitechs.com/">Know more</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <div className="app-buttons">
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div></div>
          <h4>Follow us on</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/company/saanvi-technology-solution/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/saanvitechs/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SAANVI TECHNOLOGY SOLUTIONS All rights reserved</p>
        <ul>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms</a></li>
        </ul>
      </div>
      <RefundPolicyPopup isOpen={isPopupOpen} onClose={closePopup} />
    </footer>
  );
};

export default Footer;
