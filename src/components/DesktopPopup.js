// import React, { useState, useEffect } from 'react';
// import CloseIcon from '@mui/icons-material/Close';
// import './DesktopPopup.css';

// const DesktopPopup = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     // Show popup only on mobile devices
//     const isMobile = window.innerWidth <= 768;
//     if (isMobile) {
//       setShowPopup(true);
//     }
//   }, []);

//   const closePopup = () => {
//     setShowPopup(false);
//   };

//   return (
//     showPopup && (
//       <div className="desktop-popup">
//         <div className="popup-content">
//           <p>Use desktop for better experience.</p>
//           <CloseIcon onClick={closePopup} className="close-icon" />
//         </div>
//       </div>
//     )
//   );
// };

// export default DesktopPopup;
