// import React from 'react';
// import { Container, Grid, Card, CardContent, Typography, Box, Avatar, Button } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import EmailIcon from '@mui/icons-material/Email';
// import PhoneIcon from '@mui/icons-material/Phone';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import PaymentIcon from '@mui/icons-material/Payment';
// import './ProfilePage.css';

// const ProfilePage = () => {
//   // Static user data for now
//   const user = {
//     username: 'john_doe',
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'john.doe@example.com',
//     phoneNumber: '123-456-7890',
//     membershipPlan: 'Premium',
//     registrationDate: '2023-01-15',
//     pendingAmount: 50,
//     planStatus: 'Active',
//     validity: '2024-01-15',
//   };

//   return (
//     <Container maxWidth="md" className="profile-container">
//       {/* Profile Header */}
//       <Box className="profile-header">
//         <Avatar alt={user.username} src="/profile-picture.jpg" className="profile-avatar" />
//         <Typography variant="h4" className="profile-name">
//           {user.username}
//         </Typography>
//         <Button
//           variant="contained"
//           color="primary"
//           startIcon={<EditIcon />}
//           className="edit-profile-btn"
//         >
//           Edit Profile
//         </Button>
//       </Box>

//       {/* Profile Details */}
//       <Grid container spacing={4} className="profile-details-grid">
//         {/* Personal Information */}
//         <Grid item xs={12} md={6}>
//           <Card className="profile-card">
//             <CardContent>
//               <Typography variant="h6" className="card-title">
//                 Personal Information
//               </Typography>
//               <Box className="profile-detail">
//                 <AccountCircleIcon className="profile-icon" />
//                 <Typography variant="subtitle1">
//                   {user.firstName} {user.lastName}
//                 </Typography>
//               </Box>
//               <Box className="profile-detail">
//                 <EmailIcon className="profile-icon" />
//                 <Typography variant="subtitle1">
//                   {user.email}
//                 </Typography>
//               </Box>
//               <Box className="profile-detail">
//                 <PhoneIcon className="profile-icon" />
//                 <Typography variant="subtitle1">
//                   {user.phoneNumber}
//                 </Typography>
//               </Box>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Membership Information */}
//         <Grid item xs={12} md={6}>
//           <Card className="profile-card">
//             <CardContent>
//               <Typography variant="h6" className="card-title">
//                 Membership Details
//               </Typography>
//               <Box className="profile-detail">
//                 <PaymentIcon className="profile-icon" />
//                 <Typography variant="subtitle1">
//                   Plan: {user.membershipPlan}
//                 </Typography>
//               </Box>
//               <Box className="profile-detail">
//                 <CalendarTodayIcon className="profile-icon" />
//                 <Typography variant="subtitle1">
//                   Registration Date: {user.registrationDate}
//                 </Typography>
//               </Box>
//               <Box className="profile-detail">
//                 <Typography variant="subtitle1" className="pending-amount">
//                   Pending Amount: ${user.pendingAmount}
//                 </Typography>
//               </Box>
//               <Box className="profile-detail">
//                 <Typography variant="subtitle1" className={user.planStatus === 'Active' ? 'active-status' : 'inactive-status'}>
//                   Status: {user.planStatus}
//                 </Typography>
//               </Box>
//               <Box className="profile-detail">
//                 <CalendarTodayIcon className="profile-icon" />
//                 <Typography variant="subtitle1">
//                   Validity: {user.validity}
//                 </Typography>
//               </Box>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default ProfilePage;

import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, Avatar, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PaymentIcon from '@mui/icons-material/Payment';
import './ProfilePage.css';

const ProfilePage = () => {
  const [user, setUser] = useState(null); // State to hold the user data

  useEffect(() => {
    // Function to fetch user data from the backend
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/profile'); // Replace with your API endpoint
        const data = await response.json();
        setUser(data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData(); // Call the function on component mount
  }, []); // Empty dependency array means this useEffect runs once on mount

  if (!user) {
    return <div>Loading...</div>; // Show loading indicator until data is fetched
  }

  return (
    <Container maxWidth="md" className="profile-container">
      {/* Profile Header */}
      <Box className="profile-header">
        <Avatar alt={user.username} src="/profile-picture.jpg" className="profile-avatar" />
        <Typography variant="h4" className="profile-name">
          {user.username}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<EditIcon />}
          className="edit-profile-btn"
        >
          Edit Profile
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
                  Pending Amount: ${user.pendingAmount}
                </Typography>
              </Box>
              {/* <Box className="profile-detail">
                <Typography variant="subtitle1" className={user.planStatus === 'Active' ? 'active-status' : 'inactive-status'}>
                  Status: {user.planStatus}
                </Typography>
              </Box> */}
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
