
import React, { useState } from 'react';
import { TextField, Button, Card, Typography, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1); // 1 for OTP request, 2 for OTP verification, 3 for password change
  const [otpValid, setOtpValid] = useState(false); // Track if OTP is validated
  const navigate = useNavigate();

  const handleRequestOtp = (e) => {
    e.preventDefault();
    // Add logic to send OTP to the provided email or phone number
    console.log('Sending OTP to:', emailOrPhone);
    // Simulate OTP being sent and move to OTP verification step
    setStep(2);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    // Validate that the OTP is exactly 6 digits
    if (otp.length === 6) {
      // Add logic to verify OTP
      console.log('Verifying OTP:', otp);
      // Simulate OTP verification
      if (otp === '123456') { // Replace with actual OTP validation logic
        setOtpValid(true);
        setStep(3); // Move to password change step
      } else {
        alert('Invalid OTP. Please try again.');
      }
    } else {
      alert('OTP must be exactly 6 digits.');
    }
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    // Add logic to update the password
    console.log('New password:', newPassword);
    alert('Password changed successfully');
    navigate('/login'); // Redirect back to login page after successful password change
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh', backgroundImage: `url(${require('./images/login.svg').default})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Grid item xs={12} sm={6} md={4}>
        <Card raised style={{ padding: '50px', borderRadius: '20px', backgroundColor: 'rgba(255, 255, 255, 0.1)', textAlign: 'center' }}>
          <Box mb={3}>
            <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', color: '#1565C0' }}>
              Forgot Password
            </Typography>
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
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ backgroundColor: '#1565C0', color: '#fff', borderRadius: '30px', padding: '10px' }}
              >
                Verify OTP
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
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  style={{ marginBottom: '10px', backgroundColor: '#F5F5F5', borderRadius: '10px' }}
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