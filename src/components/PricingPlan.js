

// import React from 'react';
// import './PricingPlans.css';
// import bestsellerBadge from './images/bestseller.png'; // Bestseller badge image
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const PricingPlans = () => {
//   const navigate = useNavigate(); // Initialize navigate function

//   const plans = [
//     {
//       title: 'EXECUTIVE PLAN',
//       originalPrice: 55990,
//       price: 27990 ,
//       features: [
//         'On-Job-Training',
//         'Guidance by Industry Professionals',
//         'Problem-Solving Skills',
//         'Chance to work on Enterprise-level Application',
//         'Interview Prep in line with Industry Standards',
//       ],
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
//       isBestseller: true, // Titan plan has bestseller badge
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
//     },
//   ];

//   // Handle redirect to membership plan page
  // const handleGetNowClick = () => {
  //   navigate('/membership-plan'); // Redirect to the membership plan page
  // };

//   return (
//     <section className="pricing-section">
//       <h2 className="pricing-title">Pricing Plans</h2>
//       <div className="pricing-container">
//         {plans.map((plan, index) => (
//           <div key={index} className="pricing-card">
//             {plan.isBestseller && (
//               <img src={bestsellerBadge} alt="Bestseller" className="bestseller-badge" />
//             )}
//             <h3 className="plan-title">{plan.title}</h3>
//             <p className="plan-price">
//               <span className="original-price">₹{plan.originalPrice}</span>
//               ₹{plan.price} <span className="gst">+GST</span>
//             </p>
//             <ul className="plan-features">
//               {plan.features.map((feature, i) => (
//                 <li key={i}>{feature}</li>
//               ))}
//             </ul>
//             <button
//               className="get-now-button"
//               onClick={handleGetNowClick} // Redirect to membership page on button click
//             >
//               Get Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PricingPlans;


import React, { useRef, useEffect, useState } from 'react';
import './PricingPlans.css';
import bestsellerBadge from './images/bestseller.png';
import { useNavigate } from 'react-router-dom';

const PricingPlans = ({ planIndex }) => {
  const planRefs = useRef([]);
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate


  const plans = [
    {
      title: 'EXECUTIVE PLAN',
      originalPrice: 55990,
      price: 27990,
      features: ['On-Job-Training', 'Guidance by Industry Professionals', 'Problem-Solving Skills'],
    },
    {
      title: 'TITAN PLAN',
      originalPrice: 49990,
      price: 24990,
      features: ['3 months Internship + OJT', 'Guidance by Industry Professionals', 'Soft Skill Development'],
      isBestseller: true,
    },
    {
      title: 'APPRENTICE PLAN',
      originalPrice: 12990,
      price: 8990,
      features: ['Internship', 'Guidance by Industry Professionals', 'Problem-Solving Skills'],
    },
    {
      title: 'SOS PLAN',
      originalPrice: 3990,
      price: 1490,
      features: ['Guidance by Industry Professionals', 'Interview Prep', 'Assessment & Feedback'],
    },
  ];

  const handleGetNowClick = () => {
    navigate('/membership-plan'); // Redirect to the membership plan page
  };

  // Scroll to and highlight the plan based on the planIndex
  useEffect(() => {
    if (planIndex !== null && planRefs.current[planIndex]) {
      setHighlightedIndex(Number(planIndex)); // Highlight the selected plan
      planRefs.current[planIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Remove highlight after 5 seconds (5000ms)
      const timer = setTimeout(() => {
        setHighlightedIndex(null); // Remove the highlight
      }, 5000);

      // Cleanup function to clear the timeout if the component unmounts
      return () => clearTimeout(timer);
    
    }
  }, [planIndex]);

  return (
    <section className="pricing-section">
      <h2 className="pricing-title">Pricing Plans</h2>
      <div className="pricing-container">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${highlightedIndex === index ? 'highlighted' : ''}`} // Highlight the card if selected
            ref={(el) => (planRefs.current[index] = el)} // Store ref for each plan
          >
            {plan.isBestseller && <img src={bestsellerBadge} alt="Bestseller" className="bestseller-badge" />}
            <h3 className="plan-title">{plan.title}</h3>
            <p className="plan-price">
              <span className="original-price">₹{plan.originalPrice}</span>
              ₹{plan.price} <span className="gst">+GST</span>
            </p>
            <ul className="plan-features">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button
              className="get-now-button"
              onClick={handleGetNowClick} // Redirect to membership page on button click
            >
              Get Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
