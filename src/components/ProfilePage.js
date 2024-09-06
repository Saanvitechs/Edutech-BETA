import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, Avatar, Button } from '@mui/material';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PaymentIcon from '@mui/icons-material/Payment';
import authService from '../services/authService';

import './ProfilePage.css';

const ProfilePage = () => {
  const [user, setUser] = useState({
    username: 'N/A',
    firstName: 'N/A',
    lastName: 'N/A',
    email: 'N/A',
    phoneNumber: 'N/A',
    membershipPlan: 'N/A',
    registrationDate: 'N/A',
    validity: 'N/A',
    pendingAmount: 0,
  });  // State to hold user data with default values

  const [loading, setLoading] = useState(true);  // State to manage loading
  const [error, setError] = useState(null);  // State to manage error

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await authService.getProfile();  // Fetch the profile data
        console.log('Fetched User Data:', data);  // Log fetched data
        setUser((prevUser) => ({
          ...prevUser,
          ...data, // Update state with the fetched data, keeping defaults for missing values
        }));
      } catch (error) {
        setError('Error fetching user data.');
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchUserData();  // Call the function to fetch data when the component mounts
  }, []);
  if (loading) {
    return <div>Loading...</div>;  // Render a loading state while data is being fetched
  }

  if (error) {
    return <div>{error}</div>;  // Display error message if there's an error
  }

  return (
    <Container maxWidth="md" className="profile-container">
      {/* Profile Header */}
      <Box className="profile-header">
        <Avatar alt={user.username} src="/profile-picture.jpg" className="profile-avatar" />
        <Typography variant="h4" className="profile-name">
          {user.username !== 'N/A' ? user.username : 'Username Not Available'}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AssignmentIndIcon/>}
          className="profile-btn"
        >
          Profile
        </Button>
      </Box>

      {/* Profile Details */}
      <Grid container spacing={4} className="profile-details-grid">
        {/* Personal Information */}
        <Grid item xs={12} md={6}>
          <Card className="profile-card">
            <CardContent>
              <Typography variant="h6" className="card-title">
                Personal Information
              </Typography>
              <Box className="profile-detail">
                <AccountCircleIcon className="profile-icon" />
                <Typography variant="subtitle1">
                  {user.firstName !== 'N/A' || user.lastName !== 'N/A' 
                    ? `${user.firstName} ${user.lastName}` 
                    : 'Name Not Available'}
                </Typography>
              </Box>
              <Box className="profile-detail">
                <EmailIcon className="profile-icon" />
                <Typography variant="subtitle1">
                  {user.email !== 'N/A' ? user.email : 'Email Not Available'}
                </Typography>
              </Box>
              <Box className="profile-detail">
                <PhoneIcon className="profile-icon" />
                <Typography variant="subtitle1">
                  {user.phoneNumber !== 'N/A' ? user.phoneNumber : 'Phone Number Not Available'}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Membership Information */}
        <Grid item xs={12} md={6}>
          <Card className="profile-card">
            <CardContent>
              <Typography variant="h6" className="card-title">
                Membership Details
              </Typography>
              <Box className="profile-detail">
                <PaymentIcon className="profile-icon" />
                <Typography variant="subtitle1">
                  Plan: {user.membershipPlan !== 'N/A' ? user.membershipPlan : 'Not Available'}
                </Typography>
              </Box>
              <Box className="profile-detail">
                <CalendarTodayIcon className="profile-icon" />
                <Typography variant="subtitle1">
                  Registration Date: {user.registrationDate !== 'N/A' ? user.registrationDate : 'Not Available'}
                </Typography>
              </Box>
              <Box className="profile-detail">
                <CalendarTodayIcon className="profile-icon" />
                <Typography variant="subtitle1">
                  Validity: {user.validity !== 'N/A' ? user.validity : 'Not Available'}
                </Typography>
              </Box>
              <Box className="profile-detail">
                <Typography variant="subtitle1" className="pending-amount">
                  Pending Amount: Rs.{user.pendingAmount !== 0 ? user.pendingAmount : '0'}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfilePage;

