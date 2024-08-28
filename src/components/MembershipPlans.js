// import React, { useState } from 'react';
// import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import SubscriptionPopup from './SubscriptionPopup'; // Import the SubscriptionPopup component
// import qrCode1 from './images/sts.png';
// import qrCode2 from './images/trex_logo.png';
// import qrCode3 from './images/sts.png';
// import qrCode4 from './images/trex_logo.png';
// import './MembershipPlans.module.css';
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

// const MembershipPlans = () => {
//   const [popupOpen, setPopupOpen] = useState(false);
//   const [selectedQrCodes, setSelectedQrCodes] = useState([]);

//   const membershipPlans = [
//     {
//       title: 'SOS PLAN',
//       originalPrice: 1990, // Add original price here
//       price: 1490,
//       features: ['Guidance by Industry Professionals', 'Interview Prep in line with Industry Standards', 'Assessment & Feedback'],
//       buttonText: 'Subscribe',
//       color: 'linear-gradient(135deg, #1e3c72, #2a5298)',
//       buttonColor: '#2a5298',
//       qrCodes: [qrCode1, qrCode2],
//     },
//     {
//       title: 'APPRENTICE PLAN',
//       originalPrice: 9990, // Add original price here
//       price: 8990,
//       features: ['Internship', 'Guidance by Industry Professionals','Problem-Solving Skills','Soft Skill Development'],
//       buttonText: 'Subscribe',
//       color: 'linear-gradient(135deg, #757575, #212121)',
//       buttonColor: '#212121',
//       isFeatured: true,
//       qrCodes: [qrCode2, qrCode3],
//     },
//     {
//       title: 'EXECUTIVE PLAN',
//       originalPrice: 31990, // Add original price here
//       price: 27990,
//       features: ['On-Job-Training', 'Guidance by Industry Professionals', 'Chance to work on Enterprise-level Applications','Interview Prep in line with industry Standards'],
//       buttonText: 'Subscribe',
//       color: 'linear-gradient(135deg, #9d50bb, #6e48aa)',
//       buttonColor: '#6e48aa',
//       qrCodes: [qrCode3, qrCode4],
//     },
//     {
//       title: 'TITAN PLAN',
//       originalPrice: 29990, // Add original price here
//       price: 24990,
//       features: ['3 Months Intership + OJT', 'Guidance by Industry Professionals', 'Problem-Solving Skills','Soft Skill Development','Hands on Experience on Enterprise Application'],
//       buttonText: 'Subscribe',
//       color: 'linear-gradient(135deg, #FF5722, #D84315)',
//       buttonColor: '#D84315',
//       qrCodes: [qrCode4, qrCode1],
//     },
//   ];

//   const handleSubscribeClick = (qrCodes) => {
//     setSelectedQrCodes(qrCodes);
//     setPopupOpen(true);
//   };

//   return (
//     <Container maxWidth="lg" style={{ marginTop: '100px' }}>
//       <Typography
//         variant="h4"
//         align="center"
//         gutterBottom
//         style={{ fontWeight: 700, marginBottom: '30px' }}
//       >
//         Choose Your Plan <br /> Gain Privilege
//       </Typography>
//       <Grid container spacing={4} justifyContent="center" alignItems="stretch">
//         {membershipPlans.map((plan, index) => (
//           <Grid
//             item
//             xs={12}
//             sm={6}
//             md={3}
//             key={index}
//             style={{ display: 'flex' }}
//           >
//             <Card
//               style={{
//                 background: plan.color,
//                 borderRadius: '15px',
//                 boxShadow: plan.isFeatured
//                   ? '0 10px 30px rgba(0, 0, 0, 0.3)'
//                   : '0 5px 15px rgba(0, 0, 0, 0.1)',
//                 position: 'relative',
//                 padding: '20px 0',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//                 height: '600px',
//                 transition: 'transform 0.5s ease-in-out, box-shadow 0.3s ease-in-out',
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = 'scale(1.05)';
//                 e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = 'scale(1)';
//                 e.currentTarget.style.boxShadow = plan.isFeatured
//                   ? '0 10px 30px rgba(0, 0, 0, 0.3)'
//                   : '0 5px 15px rgba(0, 0, 0, 0.1)';
//               }}
//             >
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
//                   component="div"
//                   variant="h4"
//                   align="center"
//                   color="textPrimary"
//                   style={{ fontWeight: 700, color: '#fff' }}
//                 >
//                   <span style={{ 
//                       textDecoration: 'line-through', 
//                       marginRight: '10px', 
//                       fontSize: '0.5em'  // Reduced font size for original price
//                   }}>
//                     ₹{plan.originalPrice}
//                   </span>
//                   ₹{plan.price}
//                 </Typography>
//                 <Typography variant="h6" align="center" style={{ color: '#fff', marginBottom: '20px' }}>
//                   +GST
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
//                 onClick={() => handleSubscribeClick(plan.qrCodes)}
//               >
//                 {plan.buttonText}
//               </Button>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Subscription Popup */}
//       <SubscriptionPopup
//         open={popupOpen}
//         onClose={() => setPopupOpen(false)}
//         qrCodes={selectedQrCodes}
//       />
//     </Container>
//   );
// };

// export default MembershipPlans;

import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SubscriptionPopup from './SubscriptionPopup'; // Import the SubscriptionPopup component
import qrCode1 from './images/sts.png';
import qrCode2 from './images/trex_logo.png';
import qrCode3 from './images/sts.png';
import qrCode4 from './images/trex_logo.png';
import './MembershipPlans.module.css';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import BestSellerIcon from './images/best_seller.png'; // Add your "Best Seller" logo here

const MembershipPlans = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedQrCodes, setSelectedQrCodes] = useState([]);

  const membershipPlans = [
    {
      title: 'SOS PLAN',
      originalPrice: 1990, // Add original price here
      price: 1490,
      features: ['Guidance by Industry Professionals', 'Interview Prep in line with Industry Standards', 'Assessment & Feedback'],
      buttonText: 'Subscribe',
      color: 'linear-gradient(135deg, #1e3c72, #2a5298)',
      buttonColor: '#2a5298',
      qrCodes: [qrCode1, qrCode2],
    },
    {
      title: 'APPRENTICE PLAN',
      originalPrice: 9990, // Add original price here
      price: 8990,
      features: ['Internship', 'Guidance by Industry Professionals','Problem-Solving Skills','Soft Skill Development'],
      buttonText: 'Subscribe',
      color: 'linear-gradient(135deg, #757575, #212121)',
      buttonColor: '#212121',
      isFeatured: true,
      qrCodes: [qrCode2, qrCode3],
    },
    {
      title: 'EXECUTIVE PLAN',
      originalPrice: 31990, // Add original price here
      price: 27990,
      features: ['On-Job-Training', 'Guidance by Industry Professionals', 'Work on Enterprise-level Applications','Interview Prep in line with industry Standards'],
      buttonText: 'Subscribe',
      color: 'linear-gradient(135deg, #FF5722, #D84315)',
      buttonColor: '#D84315',
      qrCodes: [qrCode3, qrCode4],
    },
    {
      title: 'TITAN PLAN',
      originalPrice: 29990, // Add original price here
      price: 24990,
      features: ['3 Months Intership + OJT', 'Guidance by Industry Professionals', 'Problem-Solving Skills','Soft Skill Development','Hands on Experience on Enterprise Application'],
      buttonText: 'Subscribe',
      color: ' linear-gradient(135deg, #00c853, #00e676)',
      buttonColor: '#6e48aa',
      qrCodes: [qrCode4, qrCode1],
      isBestSeller: true, // Add this flag for Titan Plan
    },
  ];

  const handleSubscribeClick = (qrCodes) => {
    setSelectedQrCodes(qrCodes);
    setPopupOpen(true);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '100px' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        style={{ fontWeight: 700, marginBottom: '30px' }}
      >
        Choose Your Plan <br /> Gain Privilege
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
                background: plan.color,
                borderRadius: '15px',
                boxShadow: plan.isFeatured
                  ? '0 10px 30px rgba(0, 0, 0, 0.3)'
                  : '0 5px 15px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                padding: '20px 0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '600px',
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
              {plan.isBestSeller && (
                <img 
                  src={BestSellerIcon} 
                  alt="Best Seller" 
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    width: '80px',
                    height: '80px',
                  }}
                />
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
                  component="div"
                  variant="h4"
                  align="center"
                  color="textPrimary"
                  style={{ fontWeight: 700, color: '#fff' }}
                >
                  <span style={{ 
                      textDecoration: 'line-through', 
                      marginRight: '10px', 
                      fontSize: '0.5em'  // Reduced font size for original price
                  }}>
                    ₹{plan.originalPrice}
                  </span>
                  ₹{plan.price}
                </Typography>
                <Typography variant="h6" align="center" style={{ color: '#fff', marginBottom: '20px' }}>
                  +GST
                </Typography>
                <ul style={{ paddingLeft: '0', listStyle: 'none', margin: 0, color: '#fff' }}>
                  {plan.features.map((feature, idx) => (
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key={idx}
                      style={{ marginBottom: '10px', fontWeight: 500, position: 'relative' }}
                    >
                      <span style={{
                        content: '"•"',
                        position: 'absolute',
                        left: '-10px',
                        top: '0',
                        color: '#fff',
                        fontSize: '1.2em',
                        lineHeight: '1em',
                      }}>◆</span> 
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
                onClick={() => handleSubscribeClick(plan.qrCodes)}
              >
                {plan.buttonText}
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Subscription Popup */}
      <SubscriptionPopup
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        qrCodes={selectedQrCodes}
      />
    </Container>
  );
};

export default MembershipPlans;
