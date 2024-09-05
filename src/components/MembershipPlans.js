// import React, { useState, useContext } from 'react';
// import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { useNavigate } from 'react-router-dom';
// import SubscriptionPopup from './SubscriptionPopup'; // Import the SubscriptionPopup component
// import qrCode1 from './images/SOS.jpg';
// import qrCode2 from './images/AP.jpg';
// import qrCode3 from './images/EP.jpg';
// import qrCode4 from './images/titan.jpg';
// import qrCode5 from './images/EP1.jpg';
// import qrCode6 from './images/TITAN1.jpg';
// import { AuthContext } from '../hooks/AuthContext';
// import './MembershipPlans.module.css'; // Ensure correct CSS file import

// const MembershipPlans = () => {
//   const { isAuthenticated } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [popupOpen, setPopupOpen] = useState(false);
//   const [selectedQrCodes, setSelectedQrCodes] = useState([]);
//   const [isSingleQrCode, setIsSingleQrCode] = useState(true); // To determine the number of QR codes to show

//   const membershipPlans = [
//     {
//       title: 'EXECUTIVE PLAN',
//       originalPrice: 55990,
//       price: 27990,
//       features: [
//         'On-Job-Training',
//         'Guidance by Industry Professionals',
//         'Problem-Solving Skills',
//         'Chance to work on Enterprise-level Application',
//         'Interview Prep in line with Industry Standards',
//       ],
//       buttonText: 'Subscribe',
//       // color: 'linear-gradient(135deg, #3A3A8D, #8A2BE2)',
//       color: 'linear-gradient(135deg, #FF4500, #FF6347)',

//       buttonColor: '#6e48aa',
//       qrCodes: [qrCode3, qrCode5],
//       isSingleQrCode: false,
//     },
//     {
//       title: 'TITAN PLAN',
//       originalPrice: 49990,
//       price: 24990,
//       features: [
//         '3 months Internship + OJT',
//         'Guidance by Industry Professionals',
//         'Problem-Solving Skills',
//         'Soft Skill Development',
//         'Chance to work on Enterprise-level Application',
//       ],
//       buttonText: 'Subscribe',
//       color: 'linear-gradient(135deg, #3A3A8D, #8A2BE2)',

//       // color: 'linear-gradient(135deg, #FF4500, #FF6347)',
//       buttonColor: '#D84315',
//       qrCodes: [qrCode4, qrCode6],
//       isSingleQrCode: false,
//     },
//     {
//       title: 'APPRENTICE PLAN',
//       originalPrice: 12990,
//       price: 8990,
//       features: [
//         'Internship',
//         'Guidance by Industry Professionals',
//         'Problem-Solving Skills',
//         'Soft Skill Development',
//         'Chance to work on Enterprise-level Application',
//       ],
//       buttonText: 'Subscribe',
//       color: 'linear-gradient(135deg, #FF8C42, #FF6E00)',
//       // buttonColor: '#FF6E00',
//       buttonColor: '#2a5298',

//       qrCodes: [qrCode2],
//       isSingleQrCode: true,
//     },
//     {
//       title: 'SOS PLAN',
//       originalPrice: 3990,
//       price: 1490,
//       features: [
//         'Guidance by Industry Professionals',
//         'Interview Prep in line with Industry standards',
//         'Assessment & Feedback',
//         'Get skilled with our plan of SOS and get a brief.',
//       ],
//       buttonText: 'Subscribe',
//       color: 'linear-gradient(135deg, #6D83F2, #4C60CE)',
//       buttonColor: '#FF6E00',

//       // buttonColor: '#2a5298',
//       qrCodes: [qrCode1],
//       isSingleQrCode: true,
//     },
//   ];

//   const handleSubscribeClick = (qrCodes, isSingleQrCode) => {
//     if (!isAuthenticated) {
//       navigate('/login');
//       return;
//     }
//     setSelectedQrCodes(qrCodes);
//     setIsSingleQrCode(isSingleQrCode);
//     setPopupOpen(true);
//   };

//   return (
//     <div className="membership-page-background"> {/* Apply the background class here */}
//       <Container maxWidth="lg" className="membership-plans-container" style={{ marginTop: '100px' }}>
//         <Typography
//           variant="h4"
//           align="center"
//           gutterBottom
//           style={{
//             fontWeight: 700,
//             marginBottom: '30px',
//             color: '#F8F8F8',
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
//                   background: plan.color,
//                   borderRadius: '15px',
//                   boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
//                   position: 'relative',
//                   padding: '20px 0',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'space-between',
//                   height: '600px', // Set a fixed height
//                   transition: 'transform 0.5s ease-in-out, box-shadow 0.3s ease-in-out',
//                   overflow: 'hidden', // Ensure text does not overflow outside the card
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = 'scale(1.05)';
//                   e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = 'scale(1)';
//                   e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
//                 }}
//               >
//                 <CardContent>
//                   <Typography
//                     component="h2"
//                     variant="h5"
//                     align="center"
//                     style={{ fontWeight: 700, color: '#fff', marginBottom: '20px' }}
//                   >
//                     {plan.title}
//                   </Typography>
//                   <Typography
//                     component="div"
//                     variant="h4"
//                     align="center"
//                     color="textPrimary"
//                     style={{ fontWeight: 700, color: '#fff' }}
//                   >
//                     <span
//                       style={{
//                         textDecoration: 'line-through',
//                         marginRight: '10px',
//                         fontSize: '0.5em',
//                       }}
//                     >
//                       ₹{plan.originalPrice}
//                     </span>
//                     ₹{plan.price}
//                   </Typography>
//                   <Typography variant="h6" align="center" style={{ color: '#fff', marginBottom: '20px' }}>
//                     +GST
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
//                     backgroundColor: plan.buttonColor,
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

//         <SubscriptionPopup
//           open={popupOpen}
//           onClose={() => setPopupOpen(false)}
//           qrCodes={selectedQrCodes}
//           isSingleQrCode={isSingleQrCode}
//         />
//       </Container>
//     </div>
//   );
// };

// export default MembershipPlans;

import React, { useState, useContext } from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import SubscriptionPopup from './SubscriptionPopup'; // Import the SubscriptionPopup component
import qrCode1 from './images/SOS.jpg';
import qrCode2 from './images/AP.jpg';
import qrCode3 from './images/EP.jpg';
import qrCode4 from './images/titan.jpg';
import qrCode5 from './images/EP1.jpg';
import qrCode6 from './images/TITAN1.jpg';
import { AuthContext } from '../hooks/AuthContext';
import './MembershipPlans.module.css'; // Ensure correct CSS file import

const MembershipPlans = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedQrCodes, setSelectedQrCodes] = useState([]);
  const [isSingleQrCode, setIsSingleQrCode] = useState(true); // To determine the number of QR codes to show

  const membershipPlans = [
    {
      title: 'EXECUTIVE PLAN',
      originalPrice: 55990,
      price: 27990,
      features: [
        'On-Job-Training',
        'Guidance by Industry Professionals',
        'Problem-Solving Skills',
        'Chance to work on Enterprise-level Application',
        'Interview Prep in line with Industry Standards',
      ],
      buttonText: 'Subscribe',
      background: 'linear-gradient(135deg, #FF4500, #FF6347)',
      buttonColor: '#6e48aa',
      qrCodes: [qrCode3, qrCode5],
      isSingleQrCode: false,
    },
    {
      title: 'TITAN PLAN',
      originalPrice: 49990,
      price: 24990,
      features: [
        '3 months Internship + OJT',
        'Guidance by Industry Professionals',
        'Problem-Solving Skills',
        'Soft Skill Development',
        'Chance to work on Enterprise-level Application',
      ],
      buttonText: 'Subscribe',
      background: 'linear-gradient(135deg, #3A3A8D, #8A2BE2)',
      buttonColor: '#D84315',
      qrCodes: [qrCode4, qrCode6],
      isSingleQrCode: false,
    },
    {
      title: 'APPRENTICE PLAN',
      originalPrice: 12990,
      price: 8990,
      features: [
        'Internship',
        'Guidance by Industry Professionals',
        'Problem-Solving Skills',
        'Soft Skill Development',
        'Chance to work on Enterprise-level Application',
      ],
      buttonText: 'Subscribe',
      background: 'linear-gradient(135deg, #FF8C42, #FF6E00)',
      buttonColor: '#2a5298',
      qrCodes: [qrCode2],
      isSingleQrCode: true,
    },
    {
      title: 'SOS PLAN',
      originalPrice: 3990,
      price: 1490,
      features: [
        'Guidance by Industry Professionals',
        'Interview Prep in line with Industry standards',
        'Assessment & Feedback',
        'Get skilled with our plan of SOS and get a brief.',
      ],
      buttonText: 'Subscribe',
      background: 'linear-gradient(135deg, #6D83F2, #4C60CE)',
      buttonColor: '#FF6E00',
      qrCodes: [qrCode1],
      isSingleQrCode: true,
    },
  ];

  const handleSubscribeClick = (qrCodes, isSingleQrCode) => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    setSelectedQrCodes(qrCodes);
    setIsSingleQrCode(isSingleQrCode);
    setPopupOpen(true);
  };

  return (
    <div className="membership-page-background"> {/* Apply the background class here */}
      <Container maxWidth="lg" className="membership-plans-container" style={{ marginTop: '100px' }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{
            fontWeight: 700,
            marginBottom: '30px',
            color: '#F8F8F8',
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
                  background: plan.background, // Use inline style for background gradient
                  borderRadius: '15px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                  position: 'relative',
                  padding: '20px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '600px', // Set a fixed height
                  transition: 'transform 0.5s ease-in-out, box-shadow 0.3s ease-in-out',
                  overflow: 'hidden', // Ensure text does not overflow outside the card
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
                }}
              >
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
                    <span
                      style={{
                        textDecoration: 'line-through',
                        marginRight: '10px',
                        fontSize: '0.5em',
                      }}
                    >
                      ₹{plan.originalPrice}
                    </span>
                    ₹{plan.price}
                  </Typography>
                  <Typography variant="h6" align="center" style={{ color: '#fff', marginBottom: '20px' }}>
                    +GST
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
                    backgroundColor: plan.buttonColor,
                    color: '#fff',
                    marginTop: '20px',
                    borderRadius: '30px',
                    padding: '12px',
                    fontWeight: 600,
                    transition: 'background-color 0.3s ease',
                    width: '80%',
                    alignSelf: 'center',
                  }}
                  onClick={() => handleSubscribeClick(plan.qrCodes, plan.isSingleQrCode)}
                >
                  {plan.buttonText}
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>

        <SubscriptionPopup
          open={popupOpen}
          onClose={() => setPopupOpen(false)}
          qrCodes={selectedQrCodes}
          isSingleQrCode={isSingleQrCode}
        />
      </Container>
    </div>
  );
};

export default MembershipPlans;

