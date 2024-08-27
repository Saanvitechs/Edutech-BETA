// import React, { useState, useEffect } from 'react';
// import { Container, Grid, Card, CardContent, Typography, Box, Avatar, Button } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import EmailIcon from '@mui/icons-material/Email';
// import PhoneIcon from '@mui/icons-material/Phone';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import PaymentIcon from '@mui/icons-material/Payment';
// import authService from '../services/authService';  // Ensure the correct path

// import './ProfilePage.css';

// const ProfilePage = () => {
//     const [user, setUser] = useState(null);  // State to hold user data
//     const [loading, setLoading] = useState(true);  // State to manage loading
//     const [error, setError] = useState(null);  // State to manage error
  
//     useEffect(() => {
//       const fetchUserData = async () => {
//         try {
//           const data = await authService.getProfile();  // Fetch the profile data
//           setUser(data);  // Update state with the fetched data
//         } catch (error) {
//           setError('Error fetching user data.');
//           console.error('Error fetching user data:', error);
//         } finally {
//           setLoading(false);
//         }
//       };
  
//       fetchUserData();  // Call the function to fetch data when the component mounts
//     }, []);
  
//     if (loading) {
//       return <div>Loading...</div>;  // Render a loading state while data is being fetched
//     }
  
//     if (error) {
//       return <div>{error}</div>;  // Display error message if there's an error
//     }
  
//     return (
//       <Container maxWidth="md" className="profile-container">
//         {/* Profile Header */}
//         <Box className="profile-header">
//           <Avatar alt={user.username} src="/profile-picture.jpg" className="profile-avatar" />
//           <Typography variant="h4" className="profile-name">
//             {user.username}
//           </Typography>
//           <Button
//             variant="contained"
//             color="primary"
//             startIcon={<EditIcon />}
//             className="edit-profile-btn"
//           >
//             Edit Profile
//           </Button>
//         </Box>
  
//         {/* Profile Details */}
//         <Grid container spacing={4} className="profile-details-grid">
//           {/* Personal Information */}
//           <Grid item xs={12} md={6}>
//             <Card className="profile-card">
//               <CardContent>
//                 <Typography variant="h6" className="card-title">
//                   Personal Information
//                 </Typography>
//                 <Box className="profile-detail">
//                   <AccountCircleIcon className="profile-icon" />
//                   <Typography variant="subtitle1">
//                     {user.firstName} {user.lastName}
//                   </Typography>
//                 </Box>
//                 <Box className="profile-detail">
//                   <EmailIcon className="profile-icon" />
//                   <Typography variant="subtitle1">
//                     {user.email}
//                   </Typography>
//                 </Box>
//                 <Box className="profile-detail">
//                   <PhoneIcon className="profile-icon" />
//                   <Typography variant="subtitle1">
//                     {user.phoneNumber}
//                   </Typography>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
  
//           {/* Membership Information */}
//           <Grid item xs={12} md={6}>
//             <Card className="profile-card">
//               <CardContent>
//                 <Typography variant="h6" className="card-title">
//                   Membership Details
//                 </Typography>
//                 <Box className="profile-detail">
//                   <PaymentIcon className="profile-icon" />
//                   <Typography variant="subtitle1">
//                     Plan: {user.membershipPlan}
//                   </Typography>
//                 </Box>
//                 <Box className="profile-detail">
//                   <CalendarTodayIcon className="profile-icon" />
//                   <Typography variant="subtitle1">
//                     Registration Date: {user.registrationDate}
//                   </Typography>
//                 </Box>
//                 <Box className="profile-detail">
//                   <Typography variant="subtitle1" className="pending-amount">
//                     Pending Amount: Rs.{user.pendingAmount}
//                   </Typography>
//                 </Box>
//                 <Box className="profile-detail">
//                   <CalendarTodayIcon className="profile-icon" />
//                   <Typography variant="subtitle1">
//                     Validity: {user.validity}
//                   </Typography>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>
//     );
//   };
  
//   export default ProfilePage;
  

import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, Avatar, Button, IconButton } from '@mui/material';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PaymentIcon from '@mui/icons-material/Payment';
import authService from '../services/authService';

import './ProfilePage.css';

const ProfilePage = () => {
  const [user, setUser] = useState(null);  // State to hold user data
  const [loading, setLoading] = useState(true);  // State to manage loading
  const [error, setError] = useState(null);  // State to manage error

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await authService.getProfile();  // Fetch the profile data
        setUser(data);  // Update state with the fetched data
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
        <div> 
        <Avatar alt={user.username} src="/profile-picture.jpg" className="profile-avatar" />
        </div>
        <Typography variant="h4" className="profile-name">
          {user.username}
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
                  {user.firstName} {user.lastName}
                </Typography>
              </Box>
              <Box className="profile-detail">
                <EmailIcon className="profile-icon" />
                <Typography variant="subtitle1">
                  {user.email}
                </Typography>
              </Box>
              <Box className="profile-detail">
                <PhoneIcon className="profile-icon" />
                <Typography variant="subtitle1">
                  {user.phoneNumber}
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
                  Plan: {user.membershipPlan}
                </Typography>
              </Box>
              <Box className="profile-detail">
                <CalendarTodayIcon className="profile-icon" />
                <Typography variant="subtitle1">
                  Registration Date: {user.registrationDate}
                </Typography>
              </Box>
              <Box className="profile-detail">
                <Typography variant="subtitle1" className="pending-amount">
                  Pending Amount: Rs.{user.pendingAmount}
                </Typography>
              </Box>
              <Box className="profile-detail">
                <CalendarTodayIcon className="profile-icon" />
                <Typography variant="subtitle1">
                  Validity: {user.validity}
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
