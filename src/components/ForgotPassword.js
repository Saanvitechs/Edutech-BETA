
// import React, { useState } from 'react';
// import { TextField, Button, Card, Typography, Grid, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const ForgotPassword = () => {
//   const [emailOrPhone, setEmailOrPhone] = useState('');
//   const [otp, setOtp] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [step, setStep] = useState(1); // 1 for OTP request, 2 for OTP verification, 3 for password change
//   const [otpValid, setOtpValid] = useState(false); // Track if OTP is validated
//   const navigate = useNavigate();

//   const handleRequestOtp = (e) => {
//     e.preventDefault();
//     // Add logic to send OTP to the provided email or phone number
//     console.log('Sending OTP to:', emailOrPhone);
//     // Simulate OTP being sent and move to OTP verification step
//     setStep(2);
//   };

//   const handleVerifyOtp = (e) => {
//     e.preventDefault();
//     // Validate that the OTP is exactly 6 digits
//     if (otp.length === 6) {
//       // Add logic to verify OTP
//       console.log('Verifying OTP:', otp);
//       // Simulate OTP verification
//       if (otp === '123456') { // Replace with actual OTP validation logic
//         setOtpValid(true);
//         setStep(3); // Move to password change step
//       } else {
//         alert('Invalid OTP. Please try again.');
//       }
//     } else {
//       alert('OTP must be exactly 6 digits.');
//     }
//   };

//   const handleChangePassword = (e) => {
//     e.preventDefault();
//     // Add logic to update the password
//     console.log('New password:', newPassword);
//     alert('Password changed successfully');
//     navigate('/login'); // Redirect back to login page after successful password change
//   };

//   return (
//     <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh', backgroundImage: `url(${require('./images/login.svg').default})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
//       <Grid item xs={12} sm={6} md={4}>
//         <Card raised style={{ padding: '50px', borderRadius: '20px', backgroundColor: 'rgba(255, 255, 255, 0.1)', textAlign: 'center' }}>
//           <Box mb={3}>
//             <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', color: '#1565C0' }}>
//               Forgot Password
//             </Typography>
//           </Box>
//           {step === 1 && (
//             <form onSubmit={handleRequestOtp}>
//               <Box mb={3}>
//                 <TextField
//                   fullWidth
//                   variant="outlined"
//                   label="Email or Phone"
//                   value={emailOrPhone}
//                   onChange={(e) => setEmailOrPhone(e.target.value)}
//                   style={{ marginBottom: '10px', backgroundColor: '#F5F5F5', borderRadius: '10px' }}
//                 />
//               </Box>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 style={{ backgroundColor: '#1565C0', color: '#fff', borderRadius: '30px', padding: '10px' }}
//               >
//                 Send OTP
//               </Button>
//             </form>
//           )}
//           {step === 2 && !otpValid && (
//             <form onSubmit={handleVerifyOtp}>
//               <Box mb={3}>
//                 <TextField
//                   fullWidth
//                   variant="outlined"
//                   label="Enter OTP"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   style={{ marginBottom: '10px', backgroundColor: '#F5F5F5', borderRadius: '10px' }}
//                   inputProps={{ maxLength: 6 }} // Limit input to 6 characters
//                 />
//               </Box>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 style={{ backgroundColor: '#1565C0', color: '#fff', borderRadius: '30px', padding: '10px' }}
//               >
//                 Verify OTP
//               </Button>
//             </form>
//           )}
//           {step === 3 && otpValid && (
//             <form onSubmit={handleChangePassword}>
//               <Box mb={3}>
//                 <TextField
//                   fullWidth
//                   variant="outlined"
//                   label="New Password"
//                   type="password"
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                   style={{ marginBottom: '10px', backgroundColor: '#F5F5F5', borderRadius: '10px' }}
//                 />
//               </Box>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 style={{ backgroundColor: '#1565C0', color: '#fff', borderRadius: '30px', padding: '10px' }}
//               >
//                 Reset Password
//               </Button>
//             </form>
//           )}
//         </Card>
//       </Grid>
//     </Grid>
//   );
// };

// export default ForgotPassword;


// import React, { useState } from 'react';
// import { TextField, Button, Card, Typography, Grid, Box, IconButton, InputAdornment } from '@mui/material';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';
// import authService from '../services/authService'; // Import the authService

// const ForgotPassword = () => {
//   const [emailOrPhone, setEmailOrPhone] = useState('');
//   const [otp, setOtp] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [step, setStep] = useState(1); // 1 for OTP request, 2 for OTP verification, 3 for password change
//   const [otpValid, setOtpValid] = useState(false); // Track if OTP is validated
//   const [showPassword, setShowPassword] = useState(false); // Track password visibility
//   const navigate = useNavigate();

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleRequestOtp = async (e) => {
//     e.preventDefault();
//     try {
//       await authService.requestOtp(emailOrPhone);
//       console.log('OTP sent to:', emailOrPhone);
//       setStep(2);
//     } catch (error) {
//       console.error('Error sending OTP:', error.response?.data || error.message);
//       alert('Error sending OTP. Please try again.');
//     }
//   };

//   const handleVerifyOtp = async (e) => {
//     e.preventDefault();
//     if (otp.length === 6) {
//       try {
//         await authService.verifyOtp(emailOrPhone, otp, newPassword);
//         console.log('OTP verified and password reset');
//         setOtpValid(true);
//         setStep(3); // Move to password change step
//       } catch (error) {
//         console.error('Error verifying OTP:', error.response?.data || error.message);
//         alert('Invalid OTP. Please try again.');
//       }
//     } else {
//       alert('OTP must be exactly 6 digits.');
//     }
//   };

//   const handleChangePassword = async (e) => {
//     e.preventDefault();
//     try {
//       await authService.updatePassword(emailOrPhone, newPassword);
//       console.log('Password updated successfully');
//       alert('Password changed successfully');
//       navigate('/login'); // Redirect back to login page after successful password change
//     } catch (error) {
//       console.error('Error updating password:', error.response?.data || error.message);
//       alert('Error updating password. Please try again.');
//     }
//   };

//   return (
//     <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh', backgroundImage: `url(${require('./images/login.svg').default})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
//       <Grid item xs={12} sm={6} md={4}>
//         <Card raised style={{ padding: '50px', borderRadius: '20px', backgroundColor: 'rgba(255, 255, 255, 0.1)', textAlign: 'center' }}>
//           <Box mb={3}>
//             <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', color: '#1565C0' }}>
//               Forgot Password
//             </Typography>
//           </Box>
//           {step === 1 && (
//             <form onSubmit={handleRequestOtp}>
//               <Box mb={3}>
//                 <TextField
//                   fullWidth
//                   variant="outlined"
//                   label="Email or Phone"
//                   value={emailOrPhone}
//                   onChange={(e) => setEmailOrPhone(e.target.value)}
//                   style={{ marginBottom: '10px', backgroundColor: '#F5F5F5', borderRadius: '10px' }}
//                 />
//               </Box>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 style={{ backgroundColor: '#1565C0', color: '#fff', borderRadius: '30px', padding: '10px' }}
//               >
//                 Send OTP
//               </Button>
//             </form>
//           )}
//           {step === 2 && !otpValid && (
//             <form onSubmit={handleVerifyOtp}>
//               <Box mb={3}>
//                 <TextField
//                   fullWidth
//                   variant="outlined"
//                   label="Enter OTP"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   style={{ marginBottom: '10px', backgroundColor: '#F5F5F5', borderRadius: '10px' }}
//                   inputProps={{ maxLength: 6 }} // Limit input to 6 characters
//                 />
//                 <TextField
//                   fullWidth
//                   variant="outlined"
//                   label="New Password"
//                   type={showPassword ? 'text' : 'password'}
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                   style={{ marginBottom: '10px', backgroundColor: '#F5F5F5', borderRadius: '10px' }}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton onClick={togglePasswordVisibility}>
//                           {showPassword ? <VisibilityOff /> : <Visibility />}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Box>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 style={{ backgroundColor: '#1565C0', color: '#fff', borderRadius: '30px', padding: '10px' }}
//               >
//                 Verify OTP & Reset Password
//               </Button>
//             </form>
//           )}
//           {step === 3 && otpValid && (
//             <form onSubmit={handleChangePassword}>
//               <Box mb={3}>
//                 <TextField
//                   fullWidth
//                   variant="outlined"
//                   label="New Password"
//                   type={showPassword ? 'text' : 'password'}
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                   style={{ marginBottom: '10px', backgroundColor: '#F5F5F5', borderRadius: '10px' }}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton onClick={togglePasswordVisibility}>
//                           {showPassword ? <VisibilityOff /> : <Visibility />}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Box>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 style={{ backgroundColor: '#1565C0', color: '#fff', borderRadius: '30px', padding: '10px' }}
//               >
//                 Reset Password
//               </Button>
//             </form>
//           )}
//         </Card>
//       </Grid>
//     </Grid>
//   );
// };

// export default ForgotPassword;

import React, { useState } from 'react';
import { TextField, Button, Card, Typography, Grid, Box, IconButton, InputAdornment, Alert } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService'; // Import the authService

const ForgotPassword = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1); // 1 for OTP request, 2 for OTP verification, 3 for password change
  const [otpValid, setOtpValid] = useState(false); // Track if OTP is validated
  const [showPassword, setShowPassword] = useState(false); // Track password visibility
  const [message, setMessage] = useState(''); // Track the feedback message
  const [messageType, setMessageType] = useState(''); // Track the type of the message (success, error)
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRequestOtp = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages
    try {
      await authService.requestOtp(emailOrPhone);
      setMessage('OTP sent to your email/phone.');
      setMessageType('success');
      setStep(2);
    } catch (error) {
      const errorMsg = error.response?.data || 'Error sending OTP. Please try again.';
      setMessage(errorMsg);
      setMessageType('error');
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages
    if (otp.length === 6) {
      try {
        await authService.verifyOtp(emailOrPhone, otp, newPassword);
        setMessage('OTP verified. You can now reset your password.');
        setMessageType('success');
        setOtpValid(true);
        setStep(3); // Move to password change step
      } catch (error) {
        const errorMsg = error.response?.data || 'Invalid OTP. Please try again.';
        setMessage(errorMsg);
        setMessageType('error');
      }
    } else {
      setMessage('OTP must be exactly 6 digits.');
      setMessageType('error');
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setMessage(''); // Clear previous messages
    try {
      await authService.updatePassword(emailOrPhone, newPassword);
      setMessage('Password changed successfully.');
      setMessageType('success');
      setTimeout(() => navigate('/login'), 2000); // Redirect to login after 2 seconds
    } catch (error) {
      const errorMsg = error.response?.data || 'Error updating password. Please try again.';
      setMessage(errorMsg);
      setMessageType('error');
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh', backgroundImage: `url(${require('./images/login.svg').default})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Grid item xs={12} sm={6} md={4}>
        <Card raised style={{ padding: '50px', borderRadius: '20px', backgroundColor: 'rgba(255, 255, 255, 0.1)', textAlign: 'center' }}>
          <Box mb={3}>
            <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', color: '#1565C0' }}>
              Forgot Password
            </Typography>
            {message && (
              <Alert severity={messageType} style={{ marginBottom: '15px' }}>
                {message}
              </Alert>
            )}
          </Box>
          {step === 1 && (
            <form onSubmit={handleRequestOtp}>
              <Box mb={3}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Email or Phone"
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  style={{ marginBottom: '10px', backgroundColor: '#F5F5F5', borderRadius: '10px' }}
                />
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ backgroundColor: '#1565C0', color: '#fff', borderRadius: '30px', padding: '10px' }}
              >
                Send OTP
              </Button>
            </form>
          )}
          {step === 2 && !otpValid && (
            <form onSubmit={handleVerifyOtp}>
              <Box mb={3}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  style={{ marginBottom: '10px', backgroundColor: '#F5F5F5', borderRadius: '10px' }}
                  inputProps={{ maxLength: 6 }} // Limit input to 6 characters
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  label="New Password"
                  type={showPassword ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  style={{ marginBottom: '10px', backgroundColor: '#F5F5F5', borderRadius: '10px' }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={togglePasswordVisibility}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ backgroundColor: '#1565C0', color: '#fff', borderRadius: '30px', padding: '10px' }}
              >
                Verify OTP & Reset Password
              </Button>
            </form>
          )}
          {step === 3 && otpValid && (
            <form onSubmit={handleChangePassword}>
              <Box mb={3}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="New Password"
                  type={showPassword ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  style={{ marginBottom: '10px', backgroundColor: '#F5F5F5', borderRadius: '10px' }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={togglePasswordVisibility}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ backgroundColor: '#1565C0', color: '#fff', borderRadius: '30px', padding: '10px' }}
              >
                Reset Password
              </Button>
            </form>
          )}
        </Card>
      </Grid>
    </Grid>
  );
};

export default ForgotPassword;
