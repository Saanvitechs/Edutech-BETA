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

import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, Grid, Paper } from '@mui/material';

const SubscriptionPopup = ({ open, onClose }) => {
  const [step, setStep] = useState(1);

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

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Subscription Instructions</DialogTitle>
      <DialogContent>
        {step === 1 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Step 1: Transfer Fees
            </Typography>
            <Typography variant="body1" gutterBottom>
              Pay the upfront fees of ₹5450 or ₹7450 according to your preferred plan using the QR codes below.
            </Typography>
            <Grid container spacing={2} justifyContent="center" style={{ marginTop: '20px' }}>
              <Grid item>
                <Button variant="contained" color="primary">
                  QR CODE 1
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary">
                  QR CODE 2
                </Button>
              </Grid>
            </Grid>
            {/* General Instructions */}
            <Paper elevation={3} style={{ padding: '20px', marginTop: '30px' }}>
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
            </Paper>
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
            <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
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
