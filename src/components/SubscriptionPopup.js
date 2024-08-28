// import React, { useState } from 'react';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, Grid } from '@mui/material';

// const SubscriptionPopup = ({ open, onClose }) => {
//   const [step, setStep] = useState(1);

//   const handleNext = () => {
//     if (step < 2) {
//       setStep(step + 1);
//     } else {
//       onClose();
//     }
//   };

//   const handlePrevious = () => {
//     if (step > 1) {
//       setStep(step - 1);
//     }
//   };

//   return (
//     <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
//       <DialogTitle>Subscription Instructions</DialogTitle>
//       <DialogContent>
//         {step === 1 && (
//           <Box>
//             <Typography variant="h6" gutterBottom>
//               Step 1: Transfer Fees
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               Pay the upfront fees of ₹5450 or ₹7450 according to your preferred plan using the QR codes below.
//             </Typography>
//             <Grid container spacing={2} justifyContent="center" style={{ marginTop: '20px' }}>
//               <Grid item>
//                 <Button variant="contained" color="primary">
//                   QR CODE 1
//                 </Button>
//               </Grid>
//               <Grid item>
//                 <Button variant="contained" color="primary">
//                   QR CODE 2
//                 </Button>
//               </Grid>
//             </Grid>
//           </Box>
//         )}
//         {step === 2 && (
//           <Box>
//             <Typography variant="h6" gutterBottom>
//               Step 2: Fill Registration Form
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               Once payment is done, fill out this form to complete your registration.
//             </Typography>
//             <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
//               APPLICATION FORM
//             </Button>
//           </Box>
//         )}
//       </DialogContent>
//       <DialogActions>
//         {step === 2 && (
//           <Button onClick={handlePrevious} color="secondary" variant="outlined">
//             Previous
//           </Button>
//         )}
//         <Button onClick={handleNext} color="primary" variant="contained">
//           {step < 2 ? 'Next' : 'Finish'}
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default SubscriptionPopup;

// import React, { useState } from 'react';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, IconButton } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import qrCode1 from './images/sts.png';  // Make sure to replace with actual image paths
// import qrCode2 from './images/trex_logo.png';

// const SubscriptionPopup = ({ open, onClose }) => {
//   const [step, setStep] = useState(1);
//   const [selectedQrCode, setSelectedQrCode] = useState(null);

//   const handleNext = () => {
//     if (step < 2) {
//       setStep(step + 1);
//     } else {
//       onClose();
//     }
//   };

//   const handlePrevious = () => {
//     if (step > 1) {
//       setStep(step - 1);
//     }
//   };

//   const handleShowQrCode = (qrCode) => {
//     setSelectedQrCode(qrCode);
//   };

//   return (
//     <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
//       <DialogTitle>
//         Subscription Instructions
//         <IconButton
//           aria-label="close"
//           onClick={onClose}
//           style={{ position: 'absolute', right: 8, top: 8, color: '#f44336' }}  // Red color for close button
//         >
//           <CloseIcon />
//         </IconButton>
//       </DialogTitle>
//       <DialogContent>
//         {step === 1 && (
//           <Box>
//             <Typography variant="h6" gutterBottom>
//               Step 1: Transfer Fees
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               Pay the upfront fees of ₹5450 or ₹7450 according to your preferred plan using the QR codes below.
//             </Typography>
//             <Box style={{ marginTop: '20px', textAlign: 'center' }}>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 style={{ marginRight: '10px' }}
//                 onClick={() => handleShowQrCode(qrCode1)}
//               >
//                 Show QR Code 1
//               </Button>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={() => handleShowQrCode(qrCode2)}
//               >
//                 Show QR Code 2
//               </Button>
//             </Box>
//             {selectedQrCode && (
//               <Box style={{ marginTop: '20px', textAlign: 'center' }}>
//                 <img src={selectedQrCode} alt="QR Code" style={{ width: '150px', height: '150px' }} />
//               </Box>
//             )}
//             {/* General Instructions */}
//             <Box style={{ marginTop: '30px' }}>
//               <Typography variant="h6" gutterBottom>
//                 General Instructions
//               </Typography>
//               <Typography variant="body1">
//                 1. Ensure that the payment is completed before proceeding to the next step.
//               </Typography>
//               <Typography variant="body1">
//                 2. Double-check the amount before making the payment to avoid any discrepancies.
//               </Typography>
//               <Typography variant="body1">
//                 3. Save the payment receipt or take a screenshot for future reference.
//               </Typography>
//               <Typography variant="body1">
//                 4. If you face any issues during payment, contact our support team immediately.
//               </Typography>
//               <Typography variant="body1">
//                 5. Proceed to the registration form only after the payment is confirmed.
//               </Typography>
//             </Box>
//           </Box>
//         )}
//         {step === 2 && (
//           <Box>
//             <Typography variant="h6" gutterBottom>
//               Step 2: Fill Registration Form
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               Once payment is done, fill out this form to complete your registration.
//             </Typography>
//             <Button
//               variant="contained"
//               color="primary"
//               style={{ marginTop: '20px' }}
//               onClick={() => window.open('https://forms.gle/yourGoogleFormLink', '_blank')}
//             >
//               APPLICATION FORM
//             </Button>
//           </Box>
//         )}
//       </DialogContent>
//       <DialogActions>
//         {step === 2 && (
//           <Button onClick={handlePrevious} color="secondary" variant="outlined">
//             Previous
//           </Button>
//         )}
//         <Button onClick={handleNext} color="primary" variant="contained">
//           {step < 2 ? 'Next' : 'Finish'}
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default SubscriptionPopup;

import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const SubscriptionPopup = ({ open, onClose, qrCodes }) => {
  const [step, setStep] = useState(1);
  const [selectedQrCode, setSelectedQrCode] = useState(null);

  useEffect(() => {
    if (!open) {
      setSelectedQrCode(null);  // Reset QR code when the dialog is closed
      setStep(1);  // Optionally reset step to 1 when the dialog is closed
    }
  }, [open]);

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      onClose();
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleShowQrCode = (qrCode) => {
    setSelectedQrCode(qrCode);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        Subscription Instructions
        <IconButton
          aria-label="close"
          onClick={onClose}
          style={{ position: 'absolute', right: 8, top: 8, color: '#f44336' }}  // Red color for close button
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {step === 1 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Step 1: Transfer Fees
            </Typography>
            <Typography variant="body1" gutterBottom>
              Pay the upfront fees of ₹5450 or ₹7450 according to your preferred plan using the QR codes below.
            </Typography>
            <Box style={{ marginTop: '20px', textAlign: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: '10px' }}
                onClick={() => handleShowQrCode(qrCodes[0])}
              >
                Show QR Code 1
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleShowQrCode(qrCodes[1])}
              >
                Show QR Code 2
              </Button>
            </Box>
            {selectedQrCode && (
              <Box style={{ marginTop: '20px', textAlign: 'center' }}>
                <img src={selectedQrCode} alt="QR Code" style={{ width: '150px', height: '150px' }} />
              </Box>
            )}
            {/* General Instructions */}
            <Box style={{ marginTop: '30px' }}>
              <Typography variant="h6" gutterBottom>
                General Instructions
              </Typography>
              <Typography variant="body1">
                1. Ensure that the payment is completed before proceeding to the next step.
              </Typography>
              <Typography variant="body1">
                2. Double-check the amount before making the payment to avoid any discrepancies.
              </Typography>
              <Typography variant="body1">
                3. Save the payment receipt or take a screenshot for future reference.
              </Typography>
              <Typography variant="body1">
                4. If you face any issues during payment, contact our support team immediately.
              </Typography>
              <Typography variant="body1">
                5. Proceed to the registration form only after the payment is confirmed.
              </Typography>
            </Box>
          </Box>
        )}
        {step === 2 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Step 2: Fill Registration Form
            </Typography>
            <Typography variant="body1" gutterBottom>
              Once payment is done, fill out this form to complete your registration.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: '20px' }}
              onClick={() => window.open('https://forms.gle/yourGoogleFormLink', '_blank')}
            >
              APPLICATION FORM
            </Button>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        {step === 2 && (
          <Button onClick={handlePrevious} color="secondary" variant="outlined">
            Previous
          </Button>
        )}
        <Button onClick={handleNext} color="primary" variant="contained">
          {step < 2 ? 'Next' : 'Finish'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SubscriptionPopup;
