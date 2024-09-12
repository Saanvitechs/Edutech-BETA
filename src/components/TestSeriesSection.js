// import React, { useState } from 'react';
// import './TestSeriesSection.css';
// import { useNavigate } from 'react-router-dom'; 
// import briefcase from './images/briefcase.png';  // Import image
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import bachelor from './images/bachelor.png'; // Import image'
// import codings from './images/codings.png'; // Import imagees/coding1.png'; // Import image
// import interview from './images/interview.png';

// const TestSeriesSection = () => {

//   const navigate = useNavigate(); 

//   const [hoverTextIndex, setHoverTextIndex] = useState(null);

//   const handleMouseEnter = (index) => {
//     setHoverTextIndex(index);  
//   };

//   const handleMouseLeave = () => {
//     setHoverTextIndex(null);   
//   };

//   const handleButtonClick = () => {
//     navigate('/planDetails'); 
//   };

//   const buttonData = [
//     { 
//       defaultText: ' On-Job-Training', 
//       hoverText: 'Check Titan Plan', 
//       icon: briefcase, // Use image path here
//       isImageIcon: true,  // Mark it as an image icon
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
//       icon: bachelor, // Use image path here
//       isImageIcon: true,   // Mark it as FontAwesome icon
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
//       icon: codings, // Use image path here
//       isImageIcon: true,
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
//       icon: interview, // Use image path here
//       isImageIcon: true,
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
//                 onClick={handleButtonClick} 
//                 onMouseEnter={() => handleMouseEnter(index)}
//                 onMouseLeave={handleMouseLeave}>
//               <span className="icon">
//                 {button.isImageIcon ? (
//                   <img src={button.icon} alt="icon" style={{ width: '24px', height: '24px' }} />  // Display image if it's an image icon
//                 ) : (
//                   <FontAwesomeIcon icon={button.icon} />  // Display FontAwesome icon if it's not an image
//                 )}
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
//       <div className="test-series-lottie">
//         <iframe
//           src="https://lottie.host/embed/74e639e5-6b5c-428b-9a61-a94e13ecc3f8/4WjPekyD72.json"
//           style={{ border: 'none', width: '300px', height: '300px' }}
//           title="Lottie Animation"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default TestSeriesSection;



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
  const handleButtonClick = (index) => {
    navigate(`/pricing-plans?plan=${index}`); // Navigate to PricingPlans page with the selected plan index
  };

  const buttonData = [

    {
      defaultText: 'Live Projects',
      hoverText: 'Check Executive Plan',
      icon: codings,
      isImageIcon: true,
    },
    {
      defaultText: 'On-Job-Training',
      hoverText: 'Check Titan Plan',
      icon: briefcase,
      isImageIcon: true,
    },
    {
      defaultText: 'Internship/Guidance',
      hoverText: 'Check Apprentice Plan',
      icon: bachelor,
      isImageIcon: true,
    },
    {
      defaultText: 'Interview Preparation',
      hoverText: 'Check SOS Plan',
      icon: interview,
      isImageIcon: true,
    },
  ];

  return (
    <div className="test-series-container">
      <div className="test-series-content">
        <h2>Enroll in On-Job-Training for upgrading your skills with <span>TREx</span></h2>
        <p>Get unlimited access to the most relevant Mock Tests</p>
        <h3>What you get with Us:</h3>
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
