// // import React, { useState, useContext } from 'react';
// import React, {  useContext } from 'react';
// import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../hooks/AuthContext';
// import styles from './MembershipPlans.module.css';

// const MembershipPlans = () => {
//   const { isAuthenticated } = useContext(AuthContext);
//   const navigate = useNavigate();
// const googleFormUrl = 'https://forms.gle/mndtzpUsG6zahTMQ8'
//   const membershipPlans = [
//     {
//       title: 'EXECUTIVE PLAN',
//       features: [
//         'On-Job-Training',
//         'Guidance by Industry Professionals',
//         'Problem-Solving Skills',
//         'Chance to work on Enterprise-level Application',
//         'Interview Prep in line with Industry Standards',
//       ],
//       buttonText: 'Inquire',
//     },
//     {
//       title: 'TITAN PLAN',
//       features: [
//         '3 months Internship + OJT',
//         'Guidance by Industry Professionals',
//         'Problem-Solving Skills',
//         'Soft Skill Development',
//         'Chance to work on Enterprise-level Application',
//       ],
//       buttonText: 'Inquire',
//     },
//     {
//       title: 'APPRENTICE PLAN',
//       features: [
//         'Internship',
//         'Guidance by Industry Professionals',
//         'Problem-Solving Skills',
//         'Soft Skill Development',
//         'Chance to work on Enterprise-level Application',
//       ],
//       buttonText: 'Inquire',
//     },
//     {
//       title: 'SOS PLAN',
//       features: [
//         'Guidance by Industry Professionals',
//         'Interview Prep in line with Industry standards',
//         'Assessment & Feedback',
//         'Get skilled with our plan of SOS and get a brief.',
//       ],
//       buttonText: 'Inquire',
//     },
//   ];

//   const handleSubscribeClick = (qrCodes, isSingleQrCode) => {
//     if (!isAuthenticated) {
//       navigate('/login');
//       return;
//     }
//     window.open(googleFormUrl, '_blank');
//   };

//   return (
//     <div className={styles['membership-page-background']}>
//       <Container maxWidth="lg" className={styles['membership-plans-container']} style={{ marginTop: '90px' }}>
//         <Typography
//           variant="h4"
//           align="center"
//           gutterBottom
//           style={{
//             fontWeight: 700,
//             marginBottom: '30px',
//             color: 'White',
//           }}
//         >
//           Choose Your Plan <br />
//         </Typography>

//         <Grid container spacing={4} justifyContent="center" alignItems="stretch">
//           {membershipPlans.map((plan, index) => (
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               md={3}
//               key={index}
//               style={{ display: 'flex' }}
//             >
//               <Card
//                 style={{
//                   background: 'linear-gradient(135deg, #21004c, #340075, #5500b2',
//                   borderRadius: '15px',
//                   boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
//                   position: 'relative',
//                   padding: '20px 0',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'space-between',
//                   height: '600px',
//                   transition: 'transform 0.5s ease-in-out, box-shadow 0.3s ease-in-out, border 0.3s ease-in-out',
//                   overflow: 'hidden',
//                   border: '2px solid transparent',  // Default border
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = 'scale(1.05)';
//                   e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
//                   e.currentTarget.style.border = '2px solid #ffffff'; // Solid color border on hover
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = 'scale(1)';
//                   e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
//                   e.currentTarget.style.border = '2px solid transparent';  // Reset border on hover-out
//                 }}
//               >
//                 <CardContent>
//                   <Typography
//                     component="h2"
//                     variant="h5"
//                     align="center"
//                     style={{ fontWeight: 750, color: '#f15f62', paddingBottom: '60px' }}
//                   >
//                     {plan.title}
//                   </Typography>
//                   <ul style={{ paddingLeft: '0', listStyle: 'none', margin: 0, color: '#fff', flexGrow: 1 }}>
//                     {plan.features.map((feature, idx) => (
//                       <Typography
//                         component="li"
//                         variant="subtitle1"
//                         align="center"
//                         key={idx}
//                         style={{ marginBottom: '10px', fontWeight: 500 }}
//                       >
//                         {feature}
//                       </Typography>
//                     ))}
//                   </ul>
//                 </CardContent>
//                 <Button
//                   fullWidth
//                   variant="contained"
//                   endIcon={<ArrowForwardIcon />}
//                   style={{
//                     background: 'linear-gradient(to right, #50358a 0%, #50358a 100%)',
//                     color: '#fff',
//                     marginTop: '20px',
//                     borderRadius: '30px',
//                     padding: '12px',
//                     fontWeight: 600,
//                     transition: 'background-color 0.3s ease',
//                     width: '80%',
//                     alignSelf: 'center',
//                   }}
//                   onClick={() => handleSubscribeClick(plan.qrCodes, plan.isSingleQrCode)}
//                 >
//                   {plan.buttonText}
//                 </Button>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>

//         {/* <SubscriptionPopup
//           open={popupOpen}
//           onClose={() => setPopupOpen(false)}
//           qrCodes={selectedQrCodes}
//           isSingleQrCode={isSingleQrCode}
//         /> */}
//       </Container>
//     </div>
//   );
// };

// export default MembershipPlans;



import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import styles from './MembershipPlans.module.css';

const MembershipPlans = () => {
  const navigate = useNavigate();

  const membershipPlans = [
    {
      title: 'EXECUTIVE PLAN',
      features: [
        'On-Job-Training',
        'Guidance by Industry Professionals',
        'Problem-Solving Skills',
        'Chance to work on Enterprise-level Application',
        'Interview Prep in line with Industry Standards',
      ],
      buttonText: 'Know More',
      planPath: 'executive-plan',  // Add plan path for navigation
    },
    {
      title: 'TITAN PLAN',
      features: [
        '3 months Internship + OJT',
        'Guidance by Industry Professionals',
        'Problem-Solving Skills',
        'Soft Skill Development',
        'Chance to work on Enterprise-level Application',
      ],
      buttonText: 'Know More',
      planPath: 'titan-plan',
    },
    {
      title: 'APPRENTICE PLAN',
      features: [
        'Internship',
        'Guidance by Industry Professionals',
        'Problem-Solving Skills',
        'Soft Skill Development',
        'Chance to work on Enterprise-level Application',
      ],
      buttonText: 'Know More',
      planPath: 'apprentice-plan',
    },
    {
      title: 'SOS PLAN',
      features: [
        'Guidance by Industry Professionals',
        'Interview Prep in line with Industry standards',
        'Assessment & Feedback',
        'Get skilled with our plan of SOS and get a brief.',
      ],
      buttonText: 'Know More',
      planPath: 'sos-plan',
    },
  ];

  const handleSubscribeClick = (planPath) => {
    // Navigate to the CourseDetails page with the plan path
    navigate(`/course-details/${planPath}`);
  };

  return (
    <div className={styles['membership-page-background']}>
      <Container maxWidth="lg" className={styles['membership-plans-container']} style={{ marginTop: '90px' }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{
            fontWeight: 700,
            marginBottom: '30px',
            color: 'White',
          }}
        >
          Choose Your Plan <br />
        </Typography>

        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {membershipPlans.map((plan, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              style={{ display: 'flex' }}
            >
              <Card
                style={{
                  background: 'linear-gradient(135deg, #21004c, #340075, #5500b2',
                  borderRadius: '15px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                  position: 'relative',
                  padding: '20px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '600px',
                  transition: 'transform 0.5s ease-in-out, box-shadow 0.3s ease-in-out, border 0.3s ease-in-out',
                  overflow: 'hidden',
                  border: '2px solid transparent',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
                  e.currentTarget.style.border = '2px solid #ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.border = '2px solid transparent';
                }}
              >
                <CardContent>
                  <Typography
                    component="h2"
                    variant="h5"
                    align="center"
                    style={{ fontWeight: 750, color: '#f15f62', paddingBottom: '60px' }}
                  >
                    {plan.title}
                  </Typography>
                  <ul style={{ paddingLeft: '0', listStyle: 'none', margin: 0, color: '#fff', flexGrow: 1 }}>
                    {plan.features.map((feature, idx) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={idx}
                        style={{ marginBottom: '10px', fontWeight: 500 }}
                      >
                        {feature}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <Button
                  fullWidth
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  style={{
                    background: 'linear-gradient(to right, #50358a 0%, #50358a 100%)',
                    color: '#fff',
                    marginTop: '20px',
                    borderRadius: '30px',
                    padding: '12px',
                    fontWeight: 600,
                    transition: 'background-color 0.3s ease',
                    width: '80%',
                    alignSelf: 'center',
                  }}
                  onClick={() => handleSubscribeClick(plan.planPath)}  
                >
                  {plan.buttonText}
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default MembershipPlans;
