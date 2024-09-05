import React, { useState, useContext } from 'react';
import { TextField, Button, Card, Typography, Grid, Box, IconButton, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { AuthContext } from '../hooks/AuthContext';
import authService from '../services/authService';

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.login(usernameOrEmail, password);
      if (response) {
        setError('');
        localStorage.setItem('name', usernameOrEmail);
        login(response.accessToken);
        setTimeout(() => {
          navigate('/');
        }, 500);
      } else {
        setError('Login failed: Invalid credentials');
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          setError('Invalid username or password.');
        } else if (error.response.status === 403) {
          setError('Your account is disabled.');
        } else if (error.response.status === 400) {
          setError('Bad Request: Please check your input.');
        } else {
          setError('Something went wrong. Please try again.');
        }
      } else {
        setError('Unable to connect to the server. Please try again later.');
      }
    }
  };

  return (
    <Grid 
      container 
      justifyContent="center" 
      alignItems="center" 
      style={{ height: '100vh', backgroundImage: `url(${require('./images/login.svg').default})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Grid item xs={12} sm={6} md={4}>
        <Card raised style={{ padding: '49px', borderRadius: '20px', backgroundColor: 'rgba(255, 255, 255, 0.1)', textAlign: 'center' }}>
          <Box mb={3}>
            <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', color: '#1565C0' }}>
              LOGIN
            </Typography>
          </Box>
          <form onSubmit={handleLogin}>
            <Box mb={3}>
              <TextField
                fullWidth
                variant="outlined"
                label="Username Or Email"
                value={usernameOrEmail}
                onChange={(e) => setUsernameOrEmail(e.target.value)}
                style={{ marginBottom: '10px', backgroundColor: '#F5F5F5', borderRadius: '10px' }}
                error={!!error}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ backgroundColor: '#F5F5F5', borderRadius: '10px' }}
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
    </Grid>
  );
};

export default Login;
