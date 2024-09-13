// import React, { useState, useEffect } from 'react';
// import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, IconButton } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';


// const SubscriptionPopup = ({ open, onClose, qrCodes, isSingleQrCode }) => {
//   const [step, setStep] = useState(1);
//   const [selectedQrCode, setSelectedQrCode] = useState(null);

//   useEffect(() => {
//     if (!open) {
//       setSelectedQrCode(null);  // Reset QR code when the dialog is closed
//       setStep(1);  // Optionally reset step to 1 when the dialog is closed
//     }
//   }, [open]);

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
//               1. Pay the upfront fee according to your preferred plan using the QR codes below. <br /> 
//               2. For our Executive and Titan Plans, you can do payment in two installments, which is only available in these plans. <br /> 
//               3. Installment payment can only be done by the second mode of payment, which is Account Transfer.
//             </Typography>
//             <Box 
//               style={{ 
//                 marginTop: '20px', 
//                 display: 'flex', 
//                 justifyContent: isSingleQrCode ? 'center' : 'space-between', 
//                 flexWrap: 'wrap',
//                 gap: '10px' // For better spacing between buttons
//               }}
//             >
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={() => handleShowQrCode(qrCodes[0])}
//                 style={{ flex: '1 1 calc(50% - 10px)' }}  // Flex property to align buttons
//               >
//                One Time payment
//               </Button>
//               {!isSingleQrCode && (
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={() => handleShowQrCode(qrCodes[1])}
//                   style={{ flex: '1 1 calc(50% - 10px)' }}  // Flex property to align buttons
//                 >
//                   Installment Pay QR
//                 </Button>
//               )}
//             </Box>
//             {selectedQrCode && (
//               <Box style={{ marginTop: '30px', textAlign: 'center' }}>
//                 <img src={selectedQrCode} alt="QR Code" style={{ width: '250px', height: '250px' }} />
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
//                 5. Proceed to the registration form in STEP-2 only after the payment is confirmed.
//               </Typography>
//               <Typography variant="body1">
//                 6. For payment in installments you must pay whole fee in two installments.
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
//               Once payment is done, fill out this form to complete your registration. <br />
//               After the submittion of form the details will be reflected in profile within 24hrs.
//             </Typography>
//             <Button
//               variant="contained"
//               color="primary"
//               style={{ marginTop: '20px' }}
//               onClick={() => window.open('https://forms.gle/8H9YNKrm28yHuvAPA', '_blank')}
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
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, IconButton, Checkbox, FormControlLabel } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const SubscriptionPopup = ({ open, onClose, qrCodes, isSingleQrCode }) => {
  const [step, setStep] = useState(1);
  const [selectedQrCode, setSelectedQrCode] = useState(null);
  const [isChecked, setIsChecked] = useState(false); // Checkbox state

  useEffect(() => {
    if (!open) {
      setSelectedQrCode(null);  // Reset QR code when the dialog is closed
      setStep(1);  // Optionally reset step to 1 when the dialog is closed
      setIsChecked(false);  // Reset checkbox when the dialog is closed
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

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
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
              1. Pay the upfront fee according to your preferred plan using the QR codes below. <br /> 
              2. For our Executive and Titan Plans, you can do payment in two installments, which is only available in these plans. <br /> 
              3. Installment payment can only be done by the second mode of payment, which is Account Transfer.
            </Typography>
            <Box 
              style={{ 
                marginTop: '20px', 
                display: 'flex', 
                justifyContent: isSingleQrCode ? 'center' : 'space-between', 
                flexWrap: 'wrap',
                gap: '10px' // For better spacing between buttons
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleShowQrCode(qrCodes[0])}
                style={{ flex: '1 1 calc(50% - 10px)' }}  // Flex property to align buttons
              >
               One Time payment
              </Button>
              {!isSingleQrCode && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleShowQrCode(qrCodes[1])}
                  style={{ flex: '1 1 calc(50% - 10px)' }}  // Flex property to align buttons
                >
                  Installment Pay QR
                </Button>
              )}
            </Box>
            {selectedQrCode && (
              <Box style={{ marginTop: '30px', textAlign: 'center' }}>
                <img src={selectedQrCode} alt="QR Code" style={{ width: '250px', height: '250px' }} />
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
                5. Proceed to the registration form in STEP-2 only after the payment is confirmed.
              </Typography>
              <Typography variant="body1">
                6. For payment in installments you must pay the whole fee in two installments.
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
              Once payment is done, fill out this form to complete your registration. <br />
              After the submission of the form, the details will be reflected in your profile within 24hrs.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: '20px' }}
              onClick={() => window.open('https://forms.gle/8H9YNKrm28yHuvAPA', '_blank')}
            >
              APPLICATION FORM
            </Button>

            {/* Checkbox */}
            <Box mt={3}>
              <FormControlLabel
                control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} />}
                label="I have filled the form"
              />
            </Box>
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        {step === 2 && (
          <Button onClick={handlePrevious} color="secondary" variant="outlined">
            Previous
          </Button>
        )}
        <Button
          onClick={handleNext}
          color="primary"
          variant="contained"
          disabled={step === 2 && !isChecked}  // Disable "Finish" if the checkbox is not checked
        >
          {step < 2 ? 'Next' : 'Finish'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SubscriptionPopup;
