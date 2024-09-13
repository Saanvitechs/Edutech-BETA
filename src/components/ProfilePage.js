// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import backgroundImage from './images/backgroundImage.svg'; // Import the image

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
//             designation: data.designation || "Apprentice",
//           },
//           membershipInfo: {
//             plan: data.membershipPlan,
//             registrationDate: data.registrationDate,
//             validity: data.validity,
//             pendingAmount: `Rs.${data.pendingAmount || 0.00}`,
//           }
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

//   const transitionSettings = {
//     duration: 0.3,
//     ease: "easeInOut",
//   };

//   return (
//     <Box
//       sx={{
//         background: `url(${backgroundImage})`,  // Add your image path here
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         minHeight: '100vh',
//         padding: '20px',
//         paddingTop: '60px', // Add top padding to create space from the top

//       }}
//     >
//       <Box maxWidth="900px" mx="auto" mt={8} p={4} bgcolor="background.paper" borderRadius={2}>
//         {/* Header Section */}
//         <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={transitionSettings}
//             style={{ display: 'flex', alignItems: 'center' }}
//           >
//             <Avatar sx={{ width: 64, height: 64, mr: 2 }}>
//               {profile.personalInfo.name.split(' ').map((word) => word[0]).join('').toUpperCase()}
//             </Avatar>
//             <Box>
//               <Typography variant="h5" style={{ color: "#1a1a1a", fontWeight: 'bold' }}>
//                 {profile.personalInfo.name}
//               </Typography>
//               <Typography variant="subtitle1" color="textSecondary">
//                 {profile.membershipInfo.plan} Member
//               </Typography>
//             </Box>
//           </motion.div>
//         </Box>

//         {/* Tab Buttons */}
//         <Box display="flex" justifyContent="center" mb={4}>
//           <Button
//             variant={activeCard === 'personal' ? 'contained' : 'outlined'}
//             onClick={() => setActiveCard('personal')}
//             style={{
//               backgroundColor: activeCard === 'personal' ? '#000' : 'transparent',
//               color: activeCard === 'personal' ? '#fff' : '#000',
//               fontWeight: 'bold',
//             }}
//           >
//             Personal Information
//           </Button>
//           <Button
//             variant={activeCard === 'membership' ? 'contained' : 'outlined'}
//             onClick={() => setActiveCard('membership')}
//             style={{
//               marginLeft: '10px',
//               backgroundColor: activeCard === 'membership' ? '#000' : 'transparent',
//               color: activeCard === 'membership' ? '#fff' : '#000',
//               fontWeight: 'bold',
//             }}
//           >
//             Membership Information
//           </Button>
//         </Box>

//         <AnimatePresence mode="wait">
//           {activeCard === 'personal' && (
//             <motion.div
//               key="personal"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 50 }}
//               transition={transitionSettings}
//             >
//               <Box p={2} boxShadow={2} borderRadius={2} bgcolor="background.paper">
//                 {/* Background stripe for the header */}
//                 <Box
//                   sx={{
//                     backgroundColor: '#000',
//                     padding: '10px 20px',
//                     borderRadius: '8px 8px 0 0',
//                     color: '#fff',
//                     fontWeight: 'bold',
//                   }}
//                 >
//                   Personal Information
//                 </Box>
//                 <Box p={2}>
//                   {Object.entries(profile.personalInfo).map(([key, value]) => (
//                     <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} key={key}>
//                       <Typography variant="subtitle1" style={{ textTransform: 'capitalize', color: "#333", fontWeight: 'bold' }}>
//                         {key.replace(/([A-Z])/g, ' $1').trim()}
//                       </Typography>
//                       <Typography style={{ color: "#333", fontWeight: 'bold' }}>{value}</Typography>
//                     </Box>
//                   ))}
//                 </Box>
//               </Box>
//             </motion.div>
//           )}

//           {activeCard === 'membership' && (
//             <motion.div
//               key="membership"
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -50 }}
//               transition={transitionSettings}
//             >
//               <Box p={2} boxShadow={2} borderRadius={2} bgcolor="background.paper">
//                 {/* Background stripe for the header */}
//                 <Box
//                   sx={{
//                     backgroundColor: '#000',
//                     padding: '10px 20px',
//                     borderRadius: '8px 8px 0 0',
//                     color: '#fff',
//                     fontWeight: 'bold',
//                   }}
//                 >
//                   Membership Information
//                 </Box>
//                 <Box p={2}>
//                   {Object.entries(profile.membershipInfo).map(([key, value]) => (
//                     <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} key={key}>
//                       <Typography variant="subtitle1" style={{ textTransform: 'capitalize', color: "#333", fontWeight: 'bold' }}>
//                         {key.replace(/([A-Z])/g, ' $1').trim()}
//                       </Typography>
//                       {key === 'usagePercentage' ? (
//                         <Box display="flex" alignItems="center" width="100%">
//                           <Box width="100%" mr={1}>
//                             <CircularProgress variant="determinate" value={value} size={20} />
//                           </Box>
//                           <Typography variant="body2" color="textSecondary">{value}% used</Typography>
//                         </Box>
//                       ) : (
//                         <Typography style={{ color: "#333", fontWeight: 'bold' }}>{value}</Typography>
//                       )}
//                     </Box>
//                   ))}
//                 </Box>
//               </Box>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </Box>
//     </Box>
//   );
// }


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import backgroundImage from './images/backgroundImage.svg'; // Import the image

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
        background: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '20px',
        paddingTop: '60px', // Add top padding to create space from the top
      }}
    >
      <Box maxWidth="900px" mx="auto" mt={8} p={4}>
        {/* Header Section with Gradient Background */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
          p={3}
          borderRadius={2}
          sx={{
            background: '#000000', // Gradient background
            color: '#fff', // White text color for contrast
          }}
        >
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
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#fff' }}>
                {profile.personalInfo.name}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: '#e0e0e0' }}>
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
              color: activeCard === 'personal' ? '#f8f9fa' : '#000',
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
              color: activeCard === 'membership' ? '#f8f9fa' : '#000',
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
              <Box p={2} boxShadow={2} borderRadius={2} bgcolor="#f8f9fa">
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
