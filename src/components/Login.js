import React, { useState, useContext } from 'react';
import { TextField, Button, Card, Typography, Grid, Box, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { AuthContext } from '../hooks/AuthContext';
import authService from '../services/authService';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [notificationOpen, setNotificationOpen] = useState(false);
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await authService.login(username, password);
      if (response) {
        setError('');
        localStorage.setItem('name', username);
        login(response.accessToken);
        setNotificationOpen(true); // Show success notification
        setTimeout(() => {
          navigate('/'); // Redirect after the notification is shown
        }, 2000); // Delays navigation to allow notification to be visible
      } else {
        setError('Login failed: Invalid credentials');
      }
    } catch (error) {
      setError('Login failed: ' + error.message);
    }
  };

  const handleCloseNotification = () => {
    setNotificationOpen(false); 
  };

  return (
    <Grid 
      container 
      justifyContent="center" 
      alignItems="center" 
      style={{ height: '100vh', backgroundImage: `url(${require('./images/login.svg').default})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Grid item xs={12} sm={6} md={4}>
        <Card raised style={{ padding: '50px', borderRadius: '20px', backgroundColor: 'rgba(255, 255, 255, 0.1)', textAlign: 'center' }}>
          <Box mb={3}>
            <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', color: '#1565C0' }}>
              TestPortal
            </Typography>
          </Box>
          <form onSubmit={handleLogin}>
            <Box mb={3}>
              <TextField
                fullWidth
                variant="outlined"
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ marginBottom: '10px', backgroundColor: '#F5F5F5', borderRadius: '10px' }}
                error={!!error}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ backgroundColor: '#F5F5F5', borderRadius: '10px' }}
                error={!!error}
              />
            </Box>
            {error && (
              <Typography variant="body2" color="error" style={{ marginBottom: '15px' }}>
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ backgroundColor: '#1565C0', color: '#fff', borderRadius: '30px', padding: '10px' }}
            >
              Get Started
            </Button>
          </form>
          <Box mt={3} display="flex" justifyContent="space-between">
            <Typography variant="body2" style={{ color: '#1565C0' }}>
              <a href="/register" style={{ color: '#1565C0', textDecoration: 'none' }}>Create Account</a>
            </Typography>
            <Typography variant="body2" style={{ color: '#1565C0' }}>
              <a href="/forgot-password" style={{ color: '#1565C0', textDecoration: 'none' }}>Forgot Password?</a>
            </Typography>
          </Box>
        </Card>
      </Grid>
      
      <Snackbar
        open={notificationOpen}
        autoHideDuration={3000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseNotification} severity="success" className="notification-alert">
          Login successful! 
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default Login;
