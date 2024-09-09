// import React, { useState, useContext } from 'react';
// import './TestSeriesSection.css';
// import PlanDetailsPopup from './PlanDetailsPopup'; // Import the PlanDetailsPopup component
// import SubscriptionPopup from './SubscriptionPopup'; // Import the SubscriptionPopup component
// import testSeriesImage from './images/learning.svg'; 
// import qrCode1 from './images/SOS.jpg';
// import qrCode2 from './images/AP.jpg';
// import qrCode3 from './images/EP.jpg';
// import qrCode4 from './images/titan.jpg';
// import qrCode5 from './images/EP1.jpg'; // Installment QR code for EP
// import qrCode6 from './images/TITAN1.jpg'; // Installment QR code for TITAN
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../hooks/AuthContext'; 
// import { faUserGraduate, faChalkboardTeacher, faLaptopCode, faBriefcase } from '@fortawesome/free-solid-svg-icons'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const TestSeriesSection = () => {
//   const [popupOpen, setPopupOpen] = useState(false);
//   const [detailsPopupOpen, setDetailsPopupOpen] = useState(false); // Track PlanDetailsPopup visibility
//   const [selectedQrCodes, setSelectedQrCodes] = useState([]);
//   const [isSingleQrCode, setIsSingleQrCode] = useState(true);
//   const [selectedPlanDetails, setSelectedPlanDetails] = useState(null); // Store selected plan details

//   const { isAuthenticated } = useContext(AuthContext); 
//   const navigate = useNavigate();

//   const [hoverTextIndex, setHoverTextIndex] = useState(null);

//   const handleMouseEnter = (index) => {
//     setHoverTextIndex(index);  // Set the index of the hovered button
//   };

//   const handleMouseLeave = () => {
//     setHoverTextIndex(null);   // Reset the index when mouse leaves
//   };

//   const handleButtonClick = (qrCodes, isSingleQrCode, planDetails) => {
//     if (!isAuthenticated) {
//       navigate('/login'); // Redirect to login if user is not authenticated
//       return;
//     }
//     // First open the PlanDetailsPopup
//     setSelectedQrCodes(qrCodes);
//     setIsSingleQrCode(isSingleQrCode);
//     setSelectedPlanDetails(planDetails); // Set plan details for the PlanDetailsPopup
//     setDetailsPopupOpen(true); // Open the PlanDetailsPopup first
//   };

//   const handleNextClick = () => {
//     setDetailsPopupOpen(false); // Close PlanDetailsPopup
//     setPopupOpen(true); // Open SubscriptionPopup
//   };

//   const buttonData = [
//     { 
//       defaultText: ' On-Job-Training', 
//       hoverText: 'Check Titan Plan', 
//       qrCodes: [qrCode3, qrCode5], 
//       isSingleQrCode: false, 
//       icon: faBriefcase,
//       planDetails: {
//         title: "Titan", 
//         description: "3 months Internship + OJT", 
//         features: ["Guidance by Industry Professionals", "Soft Skill Development", "Enterprise-level Applications"], 
//         price: "24990"
//       }
//     },
//     { 
//       defaultText: ' Internship/Guidance', 
//       hoverText: 'Check Apprentice Plan', 
//       qrCodes: [qrCode2], 
//       isSingleQrCode: true, 
//       icon: faUserGraduate,
//       planDetails: {
//         title: "Apprentice", 
//         description: "Internship", 
//         features: ["Guidance by Industry Professionals", "Problem-Solving Skills"], 
//         price: "8990"
//       }
//     },
//     { 
//       defaultText: ' Live Projects', 
//       hoverText: 'Check Executive Plan', 
//       qrCodes: [qrCode4, qrCode6], 
//       isSingleQrCode: false, 
//       icon: faLaptopCode,
//       planDetails: {
//         title: "Executive", 
//         description: "On-Job-Training", 
//         features: ["Guidance by Industry Professionals", "Live Projects"], 
//         price: "27990"
//       }
//     },
//     { 
//       defaultText: ' Interview Preparation', 
//       hoverText: 'Check SOS Plan', 
//       qrCodes: [qrCode1], 
//       isSingleQrCode: true, 
//       icon: faChalkboardTeacher,
//       planDetails: {
//         title: "SOS", 
//         description: "Interview Preparation", 
//         features: ["Guidance by Industry Professionals", "Assessment & Feedback"], 
//         price: "1490"
//       }
//     }
//   ];

//   return (
//     <div className="test-series-container">
//       <div className="test-series-content">
//         <h2>Enroll in On-Job-Training for upgrading your skills with <span>TREx </span></h2>
//         <p>Get unlimited access to the most relevant Mock Tests</p>
//         <h3>What you get with Us:</h3>
//         <ul className="benefits-list">
//           {buttonData.map((button, index) => (
//             <li key={index} 
//                 onClick={() => handleButtonClick(button.qrCodes, button.isSingleQrCode, button.planDetails)}
//                 onMouseEnter={() => handleMouseEnter(index)}
//                 onMouseLeave={handleMouseLeave}>
//               <span className="icon">
//                 <FontAwesomeIcon icon={button.icon} />
//               </span>
//               <p>
//                 <strong>
//                   {hoverTextIndex === index ? button.hoverText : button.defaultText}
//                 </strong>
//               </p>
//             </li>
//           ))}
//         </ul>
//         <a href="/brochure.html" className="explore-btn" target="_blank" rel="noopener noreferrer">
//           Know More!
//         </a>
//       </div>
//       <div className="test-series-image">
//         <img src={testSeriesImage} alt="Test Series" />
//       </div>

//       {/* Plan Details Popup */}
//       <PlanDetailsPopup
//         open={detailsPopupOpen}
//         onClose={() => setDetailsPopupOpen(false)}
//         onNext={handleNextClick} // Handle "Next" button click to open SubscriptionPopup
//         planDetails={selectedPlanDetails}
//       />

//       {/* Subscription Popup */}
//       <SubscriptionPopup
//         open={popupOpen}
//         onClose={() => setPopupOpen(false)}
//         qrCodes={selectedQrCodes}
//         isSingleQrCode={isSingleQrCode}
//       />
//     </div>
//   );
// };

// export default TestSeriesSection;


import React, { useState, useContext } from 'react';
import './TestSeriesSection.css';
import PlanDetailsPopup from './PlanDetailsPopup'; // Import the PlanDetailsPopup component
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
import { faUserGraduate, faChalkboardTeacher, faLaptopCode, faBriefcase } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TestSeriesSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [detailsPopupOpen, setDetailsPopupOpen] = useState(false); // Track PlanDetailsPopup visibility
  const [selectedQrCodes, setSelectedQrCodes] = useState([]);
  const [isSingleQrCode, setIsSingleQrCode] = useState(true);
  const [selectedPlanDetails, setSelectedPlanDetails] = useState(null); // Store selected plan details

  const { isAuthenticated } = useContext(AuthContext); 
  const navigate = useNavigate();

  const [hoverTextIndex, setHoverTextIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverTextIndex(index);  // Set the index of the hovered button
  };

  const handleMouseLeave = () => {
    setHoverTextIndex(null);   // Reset the index when mouse leaves
  };

  const handleButtonClick = (qrCodes, isSingleQrCode, planDetails) => {
    // Open PlanDetailsPopup regardless of authentication
    setSelectedQrCodes(qrCodes);
    setIsSingleQrCode(isSingleQrCode);
    setSelectedPlanDetails(planDetails); // Set plan details for the PlanDetailsPopup
    setDetailsPopupOpen(true); // Open the PlanDetailsPopup first
  };

  const handleNextClick = () => {
    // If user is not authenticated, redirect to login
    if (!isAuthenticated) {
      navigate('/login'); // Redirect to login if user is not authenticated
      return;
    }
    // Otherwise, close PlanDetailsPopup and open SubscriptionPopup
    setDetailsPopupOpen(false); // Close PlanDetailsPopup
    setPopupOpen(true); // Open SubscriptionPopup
  };

  const buttonData = [
    { 
      defaultText: ' On-Job-Training', 
      hoverText: 'Check Titan Plan', 
      qrCodes: [qrCode3, qrCode5], 
      isSingleQrCode: false, 
      icon: faBriefcase,
      planDetails: {
        title: "Titan", 
        description: "3 months Internship + OJT", 
        features: ["Guidance by Industry Professionals", "Soft Skill Development", "Enterprise-level Applications"], 
        price: "24990"
      }
    },
    { 
      defaultText: ' Internship/Guidance', 
      hoverText: 'Check Apprentice Plan', 
      qrCodes: [qrCode2], 
      isSingleQrCode: true, 
      icon: faUserGraduate,
      planDetails: {
        title: "Apprentice", 
        description: "Internship", 
        features: ["Guidance by Industry Professionals", "Problem-Solving Skills"], 
        price: "8990"
      }
    },
    { 
      defaultText: ' Live Projects', 
      hoverText: 'Check Executive Plan', 
      qrCodes: [qrCode4, qrCode6], 
      isSingleQrCode: false, 
      icon: faLaptopCode,
      planDetails: {
        title: "Executive", 
        description: "On-Job-Training", 
        features: ["Guidance by Industry Professionals", "Live Projects"], 
        price: "27990"
      }
    },
    { 
      defaultText: ' Interview Preparation', 
      hoverText: 'Check SOS Plan', 
      qrCodes: [qrCode1], 
      isSingleQrCode: true, 
      icon: faChalkboardTeacher,
      planDetails: {
        title: "SOS", 
        description: "Interview Preparation", 
        features: ["Guidance by Industry Professionals", "Assessment & Feedback"], 
        price: "1490"
      }
    }
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
                onClick={() => handleButtonClick(button.qrCodes, button.isSingleQrCode, button.planDetails)}
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
        <a href="/brochure.html" className="explore-btn" target="_blank" rel="noopener noreferrer">
          Know More!
        </a>
      </div>
      <div className="test-series-image">
        <img src={testSeriesImage} alt="Test Series" />
      </div>

      {/* Plan Details Popup */}
      <PlanDetailsPopup
        open={detailsPopupOpen}
        onClose={() => setDetailsPopupOpen(false)}
        onNext={handleNextClick} // Handle "Next" button click to open SubscriptionPopup
        planDetails={selectedPlanDetails}
      />

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
