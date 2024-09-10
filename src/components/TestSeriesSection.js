// import React, { useState } from 'react';
// import './TestSeriesSection.css';
// import testSeriesImage from './images/learning.svg'; 
// import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
// import { faUserGraduate, faChalkboardTeacher, faLaptopCode, faBriefcase } from '@fortawesome/free-solid-svg-icons'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const TestSeriesSection = () => {

//   const navigate = useNavigate(); // Initialize navigate function

//   const [hoverTextIndex, setHoverTextIndex] = useState(null);

//   const handleMouseEnter = (index) => {
//     setHoverTextIndex(index);  // Set the index of the hovered button
//   };

//   const handleMouseLeave = () => {
//     setHoverTextIndex(null);   // Reset the index when mouse leaves
//   };

//   // Open Plan Details popup or navigate directly to new page
//   const handleButtonClick = () => {
//     navigate('/planDetails'); // Navigate to the NewPageComponent when button is clicked
//   };

//   const buttonData = [
//     { 
//       defaultText: ' On-Job-Training', 
//       hoverText: 'Check Titan Plan', 
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
//                 onClick={handleButtonClick} // Trigger navigation on click
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
//     </div>
//   );
// };

// export default TestSeriesSection;
import React, { useState } from 'react';
import './TestSeriesSection.css';
import { useNavigate } from 'react-router-dom'; 
import { faUserGraduate, faChalkboardTeacher, faLaptopCode, faBriefcase } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TestSeriesSection = () => {

  const navigate = useNavigate(); 

  const [hoverTextIndex, setHoverTextIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverTextIndex(index);  
  };

  const handleMouseLeave = () => {
    setHoverTextIndex(null);   
  };

  const handleButtonClick = () => {
    navigate('/planDetails'); 
  };

  const buttonData = [
    { 
      defaultText: ' On-Job-Training', 
      hoverText: 'Check Titan Plan', 
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
                onClick={handleButtonClick} 
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
