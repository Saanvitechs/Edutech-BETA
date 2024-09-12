// import React, { useState, useEffect } from 'react';
// import { Container, Grid, Card, CardContent, Typography, Box, Avatar, Button } from '@mui/material';
// import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import EmailIcon from '@mui/icons-material/Email';
// import PhoneIcon from '@mui/icons-material/Phone';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import PaymentIcon from '@mui/icons-material/Payment';
// import authService from '../services/authService';

// import './ProfilePage.css';

// const ProfilePage = () => {
//   const [user, setUser] = useState({
//     username: 'N/A',
//     firstName: 'N/A',
//     lastName: 'N/A',
//     email: 'N/A',
//     phoneNumber: 'N/A',
//     membershipPlan: 'N/A',
//     registrationDate: 'N/A',
//     validity: 'N/A',
//     pendingAmount: 0,
//   });  // State to hold user data with default values

//   const [loading, setLoading] = useState(true);  // State to manage loading
//   const [error, setError] = useState(null);  // State to manage error

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const data = await authService.getProfile();  // Fetch the profile data
//         console.log('Fetched User Data:', data);  // Log fetched data
//         setUser((prevUser) => ({
//           ...prevUser,
//           ...data, // Update state with the fetched data, keeping defaults for missing values
//         }));
//       } catch (error) {
//         setError('Error fetching user data.');
//         console.error('Error fetching user data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     fetchUserData();  // Call the function to fetch data when the component mounts
//   }, []);
//   if (loading) {
//     return <div>Loading...</div>;  // Render a loading state while data is being fetched
//   }

//   if (error) {
//     return <div>{error}</div>;  // Display error message if there's an error
//   }

//   return (
//     <Container maxWidth="md" className="profile-container">
//       {/* Profile Header */}
//       <Box className="profile-header">
//         <Avatar alt={user.username} src="/profile-picture.jpg" className="profile-avatar" />
//         <Typography variant="h4" className="profile-name">
//           {user.username !== 'N/A' ? user.username : 'Username Not Available'}
//         </Typography>
//         <Button
//           variant="contained"
//           color="primary"
//           startIcon={<AssignmentIndIcon/>}
//           className="profile-btn"
//         >
//           Profile
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
//                   {user.firstName !== 'N/A' || user.lastName !== 'N/A' 
//                     ? `${user.firstName} ${user.lastName}` 
//                     : 'Name Not Available'}
//                 </Typography>
//               </Box>
//               <Box className="profile-detail">
//                 <EmailIcon className="profile-icon" />
//                 <Typography variant="subtitle1">
//                   {user.email !== 'N/A' ? user.email : 'Email Not Available'}
//                 </Typography>
//               </Box>
//               <Box className="profile-detail">
//                 <PhoneIcon className="profile-icon" />
//                 <Typography variant="subtitle1">
//                   {user.phoneNumber !== 'N/A' ? user.phoneNumber : 'Phone Number Not Available'}
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
//                   Plan: {user.membershipPlan !== 'N/A' ? user.membershipPlan : 'Not Available'}
//                 </Typography>
//               </Box>
//               <Box className="profile-detail">
//                 <CalendarTodayIcon className="profile-icon" />
//                 <Typography variant="subtitle1">
//                   Registration Date: {user.registrationDate !== 'N/A' ? user.registrationDate : 'Not Available'}
//                 </Typography>
//               </Box>
//               <Box className="profile-detail">
//                 <CalendarTodayIcon className="profile-icon" />
//                 <Typography variant="subtitle1">
//                   Validity: {user.validity !== 'N/A' ? user.validity : 'Not Available'}
//                 </Typography>
//               </Box>
//               <Box className="profile-detail">
//                 <Typography variant="subtitle1" className="pending-amount">
//                   Pending Amount: Rs.{user.pendingAmount !== 0 ? user.pendingAmount : '0'}
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


// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   Button,
//   Avatar,
//   CircularProgress,
//   Box,
//   Typography,
// } from '@mui/material';
// import authService from '../services/authService';

// export default function ProfilePage() {
//   const [profile, setProfile] = useState({
//     personalInfo: {
//       name: "N/A",
//       email: "N/A",
//       phoneNumber: "N/A",
//       bio: "N/A",
//     },
//     membershipInfo: {
//       plan: "N/A",
//       registrationDate: "N/A",
//       validity: "N/A",
//       pendingAmount: "$0.00",
//       usagePercentage: 0,
//     },
//   });

//   const [loading, setLoading] = useState(true);
//   const [activeCard, setActiveCard] = useState('personal');
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const data = await authService.getProfile();
//         setProfile({
//           personalInfo: {
//             name: `${data.firstName} ${data.lastName}`,
//             email: data.email,
//             phoneNumber: data.phoneNumber,
//             designation: data.bio || "Learner",
//           },
//           membershipInfo: {
//             plan: data.membershipPlan,
//             registrationDate: data.registrationDate,
//             validity: data.validity,
//             pendingAmount: `Rs.${data.pendingAmount || 0.00}`,
//           },
//         });
//       } catch (error) {
//         setError('Error fetching profile information.');
//         console.error('Error fetching profile data', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   // Function to extract initials from the name
//   const getInitials = (name) => {
//     return name
//       .split(' ')
//       .map((word) => word[0])
//       .join('')
//       .toUpperCase();
//   };

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return <Typography align="center" color="error">{error}</Typography>;
//   }

//   return (
//     <Box maxWidth="900px" mx="auto" mt={8} p={4}>
//       {/* Header Section */}
//       <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           style={{ display: 'flex', alignItems: 'center' }}
//         >
//           <Avatar sx={{ width: 64, height: 64, mr: 2 }}>
//             {getInitials(profile.personalInfo.name)} {/* Displaying the initials */}
//           </Avatar>
//           <Box>
//             <Typography variant="h5" style={{ color: "#1a1a1a", fontWeight: 'bold' }}>
//               {profile.personalInfo.name}
//             </Typography>
//             <Typography variant="subtitle1" color="textSecondary">
//               {profile.membershipInfo.plan} Member
//             </Typography>
//           </Box>
//         </motion.div>
//       </Box>

//       {/* Tab Buttons */}
//       <Box display="flex" justifyContent="center" mb={4}>
//         <Button
//           variant={activeCard === 'personal' ? 'contained' : 'outlined'}
//           onClick={() => setActiveCard('personal')}
//           style={{
//             backgroundColor: activeCard === 'personal' ? '#000' : 'transparent',
//             color: activeCard === 'personal' ? '#fff' : '#000',
//             fontWeight: 'bold',
//           }}
//         >
//           Personal Information
//         </Button>
//         <Button
//           variant={activeCard === 'membership' ? 'contained' : 'outlined'}
//           onClick={() => setActiveCard('membership')}
//           style={{
//             marginLeft: '10px',
//             backgroundColor: activeCard === 'membership' ? '#000' : 'transparent',
//             color: activeCard === 'membership' ? '#fff' : '#000',
//             fontWeight: 'bold',
//           }}
//         >
//           Membership Information
//         </Button>
//       </Box>

//       <AnimatePresence>
//         {activeCard === 'personal' && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//           >
//             <Box p={2} boxShadow={2} borderRadius={2} bgcolor="background.paper">
//               {/* Background stripe for the header */}
//               <Box
//                 sx={{
//                   backgroundColor: '#000',
//                   padding: '10px 20px',
//                   borderRadius: '8px 8px 0 0',
//                   color: '#fff',
//                   fontWeight: 'bold',
//                 }}
//               >
//                 Personal Information
//               </Box>
//               <Box p={2}>
//                 {Object.entries(profile.personalInfo).map(([key, value]) => (
//                   <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} key={key}>
//                     <Typography variant="subtitle1" style={{ textTransform: 'capitalize', color: "#333", fontWeight: 'bold' }}>
//                       {key.replace(/([A-Z])/g, ' $1').trim()}
//                     </Typography>
//                     <Typography style={{ color: "#333", fontWeight: 'bold' }}>{value}</Typography>
//                   </Box>
//                 ))}
//               </Box>
//             </Box>
//           </motion.div>
//         )}

//         {activeCard === 'membership' && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//           >
//             <Box p={2} boxShadow={2} borderRadius={2} bgcolor="background.paper">
//               {/* Background stripe for the header */}
//               <Box
//                 sx={{
//                   backgroundColor: '#000',
//                   padding: '10px 20px',
//                   borderRadius: '8px 8px 0 0',
//                   color: '#fff',
//                   fontWeight: 'bold',
//                 }}
//               >
//                 Membership Information
//               </Box>
//               <Box p={2}>
//                 {Object.entries(profile.membershipInfo).map(([key, value]) => (
//                   <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} key={key}>
//                     <Typography variant="subtitle1" style={{ textTransform: 'capitalize', color: "#333", fontWeight: 'bold' }}>
//                       {key.replace(/([A-Z])/g, ' $1').trim()}
//                     </Typography>
//                     {key === 'usagePercentage' ? (
//                       <Box display="flex" alignItems="center" width="100%">
//                         <Box width="100%" mr={1}>
//                           <CircularProgress variant="determinate" value={value} size={20} />
//                         </Box>
//                         <Typography variant="body2" color="textSecondary">{value}% used</Typography>
//                       </Box>
//                     ) : (
//                       <Typography style={{ color: "#333", fontWeight: 'bold' }}>{value}</Typography>
//                     )}
//                   </Box>
//                 ))}
//               </Box>
//             </Box>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </Box>
//   );
// }

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import backgroundImage from './images/profileback.svg'; // Import the image

import {
  Button,
  Avatar,
  CircularProgress,
  Box,
  Typography,
} from '@mui/material';
import authService from '../services/authService';

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    personalInfo: {
      name: "N/A",
      email: "N/A",
      phoneNumber: "N/A",
      bio: "N/A",
    },
    membershipInfo: {
      plan: "N/A",
      registrationDate: "N/A",
      validity: "N/A",
      pendingAmount: "$0.00",
      usagePercentage: 0,
    },
  });

  const [loading, setLoading] = useState(true);
  const [activeCard, setActiveCard] = useState('personal');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const data = await authService.getProfile();
        setProfile({
          personalInfo: {
            name: `${data.firstName} ${data.lastName}`,
            email: data.email,
            phoneNumber: data.phoneNumber,
            designation: data.designation || "Apprentice",
          },
          membershipInfo: {
            plan: data.membershipPlan,
            registrationDate: data.registrationDate,
            validity: data.validity,
            pendingAmount: `Rs.${data.pendingAmount || 0.00}`,
          }
        });
      } catch (error) {
        setError('Error fetching profile information.');
        console.error('Error fetching profile data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography align="center" color="error">{error}</Typography>;
  }

  const transitionSettings = {
    duration: 0.3,
    ease: "easeInOut",
  };

  return (
    <Box
      sx={{
        backgroundColor: '#411482',  // Add your image path here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '20px',
        paddingTop: '60px', // Add top padding to create space from the top

      }}
    >
      <Box maxWidth="900px" mx="auto" mt={8} p={4} bgcolor="background.paper" borderRadius={2}>
        {/* Header Section */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transitionSettings}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <Avatar sx={{ width: 64, height: 64, mr: 2 }}>
              {profile.personalInfo.name.split(' ').map((word) => word[0]).join('').toUpperCase()}
            </Avatar>
            <Box>
              <Typography variant="h5" style={{ color: "#1a1a1a", fontWeight: 'bold' }}>
                {profile.personalInfo.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {profile.membershipInfo.plan} Member
              </Typography>
            </Box>
          </motion.div>
        </Box>

        {/* Tab Buttons */}
        <Box display="flex" justifyContent="center" mb={4}>
          <Button
            variant={activeCard === 'personal' ? 'contained' : 'outlined'}
            onClick={() => setActiveCard('personal')}
            style={{
              backgroundColor: activeCard === 'personal' ? '#000' : 'transparent',
              color: activeCard === 'personal' ? '#fff' : '#000',
              fontWeight: 'bold',
            }}
          >
            Personal Information
          </Button>
          <Button
            variant={activeCard === 'membership' ? 'contained' : 'outlined'}
            onClick={() => setActiveCard('membership')}
            style={{
              marginLeft: '10px',
              backgroundColor: activeCard === 'membership' ? '#000' : 'transparent',
              color: activeCard === 'membership' ? '#fff' : '#000',
              fontWeight: 'bold',
            }}
          >
            Membership Information
          </Button>
        </Box>

        <AnimatePresence mode="wait">
          {activeCard === 'personal' && (
            <motion.div
              key="personal"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={transitionSettings}
            >
              <Box p={2} boxShadow={2} borderRadius={2} bgcolor="background.paper">
                {/* Background stripe for the header */}
                <Box
                  sx={{
                    backgroundColor: '#000',
                    padding: '10px 20px',
                    borderRadius: '8px 8px 0 0',
                    color: '#fff',
                    fontWeight: 'bold',
                  }}
                >
                  Personal Information
                </Box>
                <Box p={2}>
                  {Object.entries(profile.personalInfo).map(([key, value]) => (
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} key={key}>
                      <Typography variant="subtitle1" style={{ textTransform: 'capitalize', color: "#333", fontWeight: 'bold' }}>
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </Typography>
                      <Typography style={{ color: "#333", fontWeight: 'bold' }}>{value}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </motion.div>
          )}

          {activeCard === 'membership' && (
            <motion.div
              key="membership"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={transitionSettings}
            >
              <Box p={2} boxShadow={2} borderRadius={2} bgcolor="background.paper">
                {/* Background stripe for the header */}
                <Box
                  sx={{
                    backgroundColor: '#000',
                    padding: '10px 20px',
                    borderRadius: '8px 8px 0 0',
                    color: '#fff',
                    fontWeight: 'bold',
                  }}
                >
                  Membership Information
                </Box>
                <Box p={2}>
                  {Object.entries(profile.membershipInfo).map(([key, value]) => (
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} key={key}>
                      <Typography variant="subtitle1" style={{ textTransform: 'capitalize', color: "#333", fontWeight: 'bold' }}>
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </Typography>
                      {key === 'usagePercentage' ? (
                        <Box display="flex" alignItems="center" width="100%">
                          <Box width="100%" mr={1}>
                            <CircularProgress variant="determinate" value={value} size={20} />
                          </Box>
                          <Typography variant="body2" color="textSecondary">{value}% used</Typography>
                        </Box>
                      ) : (
                        <Typography style={{ color: "#333", fontWeight: 'bold' }}>{value}</Typography>
                      )}
                    </Box>
                  ))}
                </Box>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
}
