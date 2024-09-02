import React from 'react';
import './Footer.css';
import sts from './images/sts.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Footer = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <footer className="footer">
      <div className="footer-container">
        
      <div className="footer-logo">
  <div style={{ textAlign: 'left' }}>
    <a href="https://www.saanvitechs.com" target="_blank" rel="noopener noreferrer">
      <img src={sts} alt="Your Company Logo" style={{ cursor: 'pointer' }} />
    </a>
    <p>SAANVI TECHNOLOGY SOLUTIONS.</p>
    <p>Email: info@saanvitechs.com</p>
  </div>
</div>


        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="https://saanvitechs.com/about.php">About Us</a></li>
            <li><a href="https://careers.saanvitechs.com/">Careers</a></li>
            <li><a href="https://www.instagram.com/saanvitechs?utm_source=qr&igsh=MXEydGlrNnQ3Mm1xaQ==">Media</a></li>
            <li><a href="/#" onClick={handleOpen}>Refund Policy</a></li>
          </ul>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            Refund Policy
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            
              
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
              <Button onClick={handleClose} className="close-button">Close</Button>
            </Typography>
          </Box>
        </Modal>

        <div className="footer-section">
          <h4>Products</h4>
          <ul>
            <li><a href="/comingsoon">Test Series</a></li>
            <li><a href="/comingsoon">Practice</a></li>
            <li><a href="https://saanvitechs.com/">Know more</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <div className="app-buttons">
          <div className="social-icons">
          
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com/company/saanvi-technology-solution/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://www.instagram.com/saanvitechs/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div></div>
          <h4>Follow us on</h4>
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/company/saanvi-technology-solution/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/saanvitechs/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © {new Date().getFullYear()} All rights reserved</p>
        <p>TREx by SAANVI TECHNOLOGY SOLUTIONS</p>
        <ul>
          <Link to="/terms-of-use" style={{ textDecoration: 'none', color: '#fff' }}>Terms of Use</Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;