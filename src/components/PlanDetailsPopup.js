// // import React from 'react';
// // import './PlanDetailsPopup.css';

// // const PlanDetailsPopup = ({ open, onClose, onNext, planDetails }) => {
// //   if (!open) return null;

// //   return (
// //     <div className="plan-details-popup-overlay">
// //       <div className="plan-details-popup-content">
// //         <h2>{planDetails?.title} Plan</h2>
// //         <p>{planDetails?.description}</p>
// //         <ul>
// //           {planDetails?.features.map((feature, index) => (
// //             <li key={index}>{feature}</li>
// //           ))}
// //         </ul>
// //         <p>Price: ₹{planDetails?.price}</p>
// //         <p className="additional-text">
// //           This plan includes advanced features, professional guidance, and support for your career growth. 
// //           Upgrade to the {planDetails?.title} Plan to enjoy these benefits.
// //         </p>

// //         {/* Buttons container */}
// //         <div className="popup-buttons">
// //           <button onClick={onClose} className="popup-close-button">Close</button>
// //           <button onClick={onNext} className="popup-next-button">Next</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PlanDetailsPopup;


// import React from 'react';
// import './PlanDetailsPopup.css';

// const PlanDetailsPopup = ({ open, onClose, onViewMore, planDetails }) => {
//   if (!open) return null;

//   return (
//     <div className="plan-details-popup-overlay">
//       <div className="plan-details-popup-content">
//         <h2>{planDetails?.title} Plan</h2>
//         <p>{planDetails?.description}</p>
//         <ul>
//           {planDetails?.features.map((feature, index) => (
//             <li key={index}>{feature}</li>
//           ))}
//         </ul>
//         <p>Price: ₹{planDetails?.price}</p>
//         <p className="additional-text">
//           This plan includes advanced features, professional guidance, and support for your career growth.
//         </p>

//         {/* Buttons container */}
//         <div className="popup-buttons">
//           <button onClick={onClose} className="popup-close-button">Close</button>
//           <button onClick={onViewMore} className="popup-next-button">View More</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlanDetailsPopup;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PlanDetailsPopup.css';

const PlanDetailsPopup = ({ open, onClose, planDetails }) => {
  const navigate = useNavigate(); // Initialize navigate hook

  if (!open) return null;

  const handleViewMore = () => {
    // Navigate to the new page when "View More" is clicked
    navigate('/new-page-route'); // Ensure this route is defined in your routing setup
  };

  return (
    <div className="plan-details-popup-overlay">
      <div className="plan-details-popup-content">
        <h2>{planDetails?.title} Plan</h2>
        <p>{planDetails?.description}</p>
        <ul>
          {planDetails?.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        {/* <p>Price: ₹{planDetails?.price}</p> */}
        <p className="additional-text">
          This plan includes advanced features, professional guidance, and support for your career growth.
        </p>

        {/* Buttons container */}
        <div className="popup-buttons">
          <button onClick={onClose} className="popup-close-button">Close</button>
          <button onClick={handleViewMore} className="popup-next-button">View More</button> {/* Updated to use handleViewMore */}
        </div>
      </div>
    </div>
  );
};

export default PlanDetailsPopup;
