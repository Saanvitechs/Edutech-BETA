
// import React, { useState } from 'react';
// import { Button, ButtonGroup, Typography } from '@mui/material';
// import ITCareerSteps from './Knowmore'; // Importing your ITCareerSteps component
// import ExecutivePlan from './ExecutivePlan';
// import Apprenticeship from './Apprenticeship';
// import SosPlan from './SosPlan';
// import './CourseDetails.css'; // Import custom CSS for layout and styling

// const CourseDetails = () => {
//   const [selectedPlan, setSelectedPlan] = useState('Nothing'); // Manage the selected plan

//   const handlePlanChange = (plan) => {
//     setSelectedPlan(plan);
//   };

//   return (
//     <div className="course-details-container">
//       {/* Heading */}
//       <Typography variant="h4" style={{ marginBottom: '20px' }}>
//         Course Details
//       </Typography>

//       {/* Button Group for Plan Selection */}
//       <ButtonGroup variant="outlined" className="plan-buttons">
//         <Button
//           onClick={() => handlePlanChange('Titan Plan')}
//           className={selectedPlan === 'Titan Plan' ? 'selected' : ''}
//         >
//           Titan Plan
//         </Button>
//         <Button
//           onClick={() => handlePlanChange('Executive Plan')}
//           className={selectedPlan === 'Executive Plan' ? 'selected' : ''}
//         >
//           Executive Plan
//         </Button>
//         <Button
//           onClick={() => handlePlanChange('Apprentice Plan')}
//           className={selectedPlan === 'Apprentice Plan' ? 'selected' : ''}
//         >
//           Apprentice Plan
//         </Button>
//         <Button
//           onClick={() => handlePlanChange('SOS Plan')}
//           className={selectedPlan === 'SOS Plan' ? 'selected' : ''}
//         >
//           SOS Plan
//         </Button>
//       </ButtonGroup>

//       {/* Conditionally Render ITCareerSteps when Titan Plan is selected */}
//       <div className="plan-content">
//         {selectedPlan === 'Titan Plan' && <ITCareerSteps />}
//       </div>
//       <div className="plan-content">
//         {selectedPlan === 'Executive Plan' && <ExecutivePlan />}
//       </div>
//       <div className="plan-content">
//         {selectedPlan === 'Apprentice Plan' && <Apprenticeship />}
//       </div>
//       <div className="plan-content">
//         {selectedPlan === 'SOS Plan' && <SosPlan />}
//       </div>
//     </div>
//   );
// };

// export default CourseDetails;



import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import ITCareerSteps from './Knowmore'; // Importing your ITCareerSteps component
import ExecutivePlan from './ExecutivePlan';
import Apprenticeship from './Apprenticeship';
import SosPlan from './SosPlan';
import './CourseDetails.css'; // Import custom CSS for layout and styling

const CourseDetails = () => {
  const { plan } = useParams(); // Get the plan from the URL
  const [selectedPlan, setSelectedPlan] = useState('Nothing'); // Manage the selected plan

  useEffect(() => {
    if (plan) {
      setSelectedPlan(plan); // Set the selected plan based on the URL
    }
  }, [plan]);

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="course-details-container">
      {/* Heading */}
      <Typography variant="h3" style={{ marginBottom: '20px' }}>
        Course Description
      </Typography>

      {/* Button Group for Plan Selection */}
      <ButtonGroup variant="outlined" className="plan-buttons">
        <Button
          onClick={() => handlePlanChange('titan-plan')}
          className={selectedPlan === 'titan-plan' ? 'selected' : ''}
        >
          Titan Plan
        </Button>
        <Button
          onClick={() => handlePlanChange('executive-plan')}
          className={selectedPlan === 'executive-plan' ? 'selected' : ''}
        >
          Executive Plan
        </Button>
        <Button
          onClick={() => handlePlanChange('apprentice-plan')}
          className={selectedPlan === 'apprentice-plan' ? 'selected' : ''}
        >
          Apprentice Plan
        </Button>
        <Button
          onClick={() => handlePlanChange('sos-plan')}
          className={selectedPlan === 'sos-plan' ? 'selected' : ''}
        >
          SOS Plan
        </Button>
      </ButtonGroup>

      {/* Conditionally Render Components based on the selected plan */}
      <div className="plan-content">
        {selectedPlan === 'titan-plan' && <ITCareerSteps />}
      </div>
      <div className="plan-content">
        {selectedPlan === 'executive-plan' && <ExecutivePlan />}
      </div>
      <div className="plan-content">
        {selectedPlan === 'apprentice-plan' && <Apprenticeship />}
      </div>
      <div className="plan-content">
        {selectedPlan === 'sos-plan' && <SosPlan />}
      </div>
    </div>
  );
};

export default CourseDetails;
