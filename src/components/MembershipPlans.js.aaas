// import React from 'react';
// import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import './MembershipPlans.module.css';

// const MembershipPlans = () => {
//   const membershipPlans = [
//     {
//       title: 'BASIC MEMBERSHIP',
//       price: 29,
//       features: ['Access to gym and standard fitness classes', 'Basic fitness assessment', 'Discounted personal training sessions'],
//       buttonText: 'Subscribe',
//       color: 'linear-gradient(135deg, #FFE082, #FFA000)', // Orange gradient
//       buttonColor: '#ff6f00',
//     },
//     {
//       title: 'PREMIUM MEMBERSHIP',
//       price: 49,
//       features: ['Unlimited access to gym and premium fitness classes', 'Personalized fitness assessment and training plan'],
//       buttonText: 'Subscribe',
//       color: 'linear-gradient(135deg, #757575, #212121)', // Dark grey to black gradient
//       buttonColor: '#212121',
//       isFeatured: true,
//     },
//     {
//       title: 'ELITE MEMBERSHIP',
//       price: 79,
//       features: ['24/7 gym access', 'Unlimited access to all classes and facilities', 'Weekly personalized training sessions'],
//       buttonText: 'Subscribe',
//       color: 'linear-gradient(135deg, #9d50bb, #6e48aa)', // Light green gradient
//       buttonColor: '#64dd17',
//     },
//   ];

//   return (
//     <Container maxWidth="md" style={{ marginTop: '150px' }}>
//       <Typography
//         variant="h4"
//         align="center"
//         gutterBottom
//         style={{ fontWeight: 700, marginBottom: '30px' }}
//       >
//         Choose Your Fitness <br /> Membership Plan
//       </Typography>
//       <Grid container spacing={4} justifyContent="center">
//         {membershipPlans.map((plan, index) => (
//           <Grid
//             item
//             xs={12}          // Full width on extra-small screens (mobile)
//             sm={6}           // Half width on small screens (tablets)
//             md={4}           // One-third width on medium screens and up (desktops)
//             key={index}
//           >
//             <Card
//               style={{
//                 background: plan.color,
//                 borderRadius: '15px',
//                 boxShadow: plan.isFeatured
//                   ? '0 10px 30px rgba(0, 0, 0, 0.3)'
//                   : '0 5px 15px rgba(0, 0, 0, 0.1)',
//                 position: 'relative',
//                 padding: '20px 0',  // Added padding to better position the content
//               }}
//             >
//               {plan.isFeatured && (
//                 <Box
//                   position="absolute"
//                   top={-15}
//                   right={-15}
//                   zIndex={1}
//                   style={{ backgroundColor: '#ffb300', borderRadius: '50%', padding: '8px' }}
//                 >
//                 </Box>
//               )}
//               <CardContent>
//                 <Typography
//                   component="h2"
//                   variant="h5"
//                   align="center"
//                   style={{ fontWeight: 700, color: '#fff', marginBottom: '20px' }}
//                 >
//                   {plan.title}
//                 </Typography>
//                 <Typography
//                   component="h2"
//                   variant="h4"
//                   align="center"
//                   color="textPrimary"
//                   style={{ fontWeight: 700, color: '#fff' }}
//                 >
//                   ${plan.price}
//                 </Typography>
//                 <Typography variant="h6" align="center" style={{ color: '#fff', marginBottom: '20px' }}>
//                   /month
//                 </Typography>
//                 <Typography variant="subtitle1" align="center" style={{ color: '#fff', marginBottom: '20px' }}>
//                   FEATURES
//                 </Typography>
//                 <ul style={{ paddingLeft: '0', listStyle: 'none', margin: 0, color: '#fff' }}>
//                   {plan.features.map((feature, idx) => (
//                     <Typography
//                       component="li"
//                       variant="subtitle1"
//                       align="center"
//                       key={idx}
//                       style={{ marginBottom: '10px', fontWeight: 500 }}
//                     >
//                       {feature}
//                     </Typography>
//                   ))}
//                 </ul>
//               </CardContent>
//               <Button
//                 fullWidth
//                 variant="contained"
//                 endIcon={<ArrowForwardIcon />}
//                 style={{
//                   backgroundColor: plan.buttonColor,
//                   color: '#fff',
//                   marginTop: '20px',
//                   borderRadius: '30px',
//                   padding: '12px',
//                   fontWeight: 600,
//                   transition: 'background-color 0.3s ease',
//                 }}
//               >
//                 {plan.buttonText}
//               </Button>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default MembershipPlans;


import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './MembershipPlans.module.css';

const MembershipPlans = () => {
  const membershipPlans = [
    {
      title: 'BASIC MEMBERSHIP',
      price: 29,
      features: ['Access to gym and standard fitness classes', 'Basic fitness assessment', 'Discounted personal training sessions'],
      buttonText: 'Subscribe',
      color: 'linear-gradient(135deg, #FFE082, #FFA000)', // Orange gradient
      buttonColor: '#ff6f00',
    },
    {
      title: 'PREMIUM MEMBERSHIP',
      price: 49,
      features: ['Unlimited access to gym and premium fitness classes', 'Personalized fitness assessment and training plan'],
      buttonText: 'Subscribe',
      color: 'linear-gradient(135deg, #757575, #212121)', // Dark grey to black gradient
      buttonColor: '#212121',
      isFeatured: true,
    },
    {
      title: 'ELITE MEMBERSHIP',
      price: 79,
      features: ['24/7 gym access', 'Unlimited access to all classes and facilities', 'Weekly personalized training sessions'],
      buttonText: 'Subscribe',
      color: 'linear-gradient(135deg, #9d50bb, #6e48aa)', // Purple gradient
      buttonColor: '#64dd17',
    },
  ];

  return (
    <Container maxWidth="md" style={{ marginTop: '100px' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        style={{ fontWeight: 700, marginBottom: '30px' }}
      >
        Choose Your Fitness <br /> Membership Plan
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {membershipPlans.map((plan, index) => (
          <Grid
            item
            xs={12}          // Full width on extra-small screens (mobile)
            sm={6}           // Half width on small screens (tablets)
            md={4}           // One-third width on medium screens and up (desktops)
            key={index}
            style={{ display: 'flex' }}
          >
            <Card
              style={{
                background: plan.color,
                borderRadius: '15px',
                boxShadow: plan.isFeatured
                  ? '0 10px 30px rgba(0, 0, 0, 0.3)'
                  : '0 5px 15px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                padding: '20px 0',  // Added padding to better position the content
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '600px', // Make all cards the same height
                transition: 'transform 0.5s ease-in-out, box-shadow 0.3s ease-in-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = plan.isFeatured
                  ? '0 10px 30px rgba(0, 0, 0, 0.3)'
                  : '0 5px 15px rgba(0, 0, 0, 0.1)';
              }}
            >
              {plan.isFeatured && (
                <Box
                  position="absolute"
                  top={-15}
                  right={-15}
                  zIndex={1}
                  style={{ backgroundColor: '#ffb300', borderRadius: '50%', padding: '8px' }}
                >
                </Box>
              )}
              <CardContent>
                <Typography
                  component="h2"
                  variant="h5"
                  align="center"
                  style={{ fontWeight: 700, color: '#fff', marginBottom: '20px' }}
                >
                  {plan.title}
                </Typography>
                <Typography
                  component="h2"
                  variant="h4"
                  align="center"
                  color="textPrimary"
                  style={{ fontWeight: 700, color: '#fff' }}
                >
                  ${plan.price}
                </Typography>
                <Typography variant="h6" align="center" style={{ color: '#fff', marginBottom: '20px' }}>
                  /month
                </Typography>
                <Typography variant="subtitle1" align="center" style={{ color: '#fff', marginBottom: '20px' }}>
                  FEATURES
                </Typography>
                <ul style={{ paddingLeft: '0', listStyle: 'none', margin: 0, color: '#fff' }}>
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
                  backgroundColor: plan.buttonColor,
                  color: '#fff',
                  marginTop: '20px',
                  borderRadius: '30px',
                  padding: '12px',
                  fontWeight: 600,
                  transition: 'background-color 0.3s ease',
                }}
              >
                {plan.buttonText}
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MembershipPlans;