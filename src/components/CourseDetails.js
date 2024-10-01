// import React, { useState } from 'react';
// import { Button, ButtonGroup, Typography } from '@mui/material';
// import ITCareerSteps from './Knowmore'; // Adjust the path if needed
// import './CourseDetails.css'; // Import the CSS file for custom styles

// const CourseDetails = () => {
//   const [selectedPlan, setSelectedPlan] = useState('Nothing'); // Manage the selected plan

//   const handlePlanChange = (plan) => {
//     setSelectedPlan(plan);
//   };

//   return (
//     <div style={{ padding: '20px',marginTop: '60px' }}>
//       {/* Heading */}
//       <Typography variant="h4" style={{ marginBottom: '20px' }}>
//         Course Details
//       </Typography>

//       {/* Button Group Styled */}
//       <ButtonGroup variant="outlined" className="plan-buttons">
//         <Button
//         //   onClick={() => handlePlanChange('Nothing')}
//           className={selectedPlan === 'Nothing' ? 'selected' : ''}
//         >
//           PLANS
//         </Button>
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

//       {/* Imported ITCareerSteps Component */}
//       <div style={{ marginTop: '10px' }}>
//         <ITCareerSteps />
//       </div>
//     </div>
//   );
// };

// export default CourseDetails;
import React, { useState } from 'react';
import { Button, ButtonGroup, Typography } from '@mui/material';
import ITCareerSteps from './Knowmore'; // Importing your ITCareerSteps component
import ExecutivePlan from './ExecutivePlan';
import Apprenticeship from './Apprenticeship';
import SosPlan from './SosPlan';
import './CourseDetails.css'; // Import custom CSS for layout and styling

const CourseDetails = () => {
  const [selectedPlan, setSelectedPlan] = useState('Nothing'); // Manage the selected plan

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="course-details-container">
      {/* Heading */}
      <Typography variant="h4" style={{ marginBottom: '20px' }}>
        Course Details
      </Typography>

      {/* Button Group for Plan Selection */}
      <ButtonGroup variant="outlined" className="plan-buttons">
        <Button
          onClick={() => handlePlanChange('Titan Plan')}
          className={selectedPlan === 'Titan Plan' ? 'selected' : ''}
        >
          Titan Plan
        </Button>
        <Button
          onClick={() => handlePlanChange('Executive Plan')}
          className={selectedPlan === 'Executive Plan' ? 'selected' : ''}
        >
          Executive Plan
        </Button>
        <Button
          onClick={() => handlePlanChange('Apprentice Plan')}
          className={selectedPlan === 'Apprentice Plan' ? 'selected' : ''}
        >
          Apprentice Plan
        </Button>
        <Button
          onClick={() => handlePlanChange('SOS Plan')}
          className={selectedPlan === 'SOS Plan' ? 'selected' : ''}
        >
          SOS Plan
        </Button>
      </ButtonGroup>

      {/* Conditionally Render ITCareerSteps when Titan Plan is selected */}
      <div className="plan-content">
        {selectedPlan === 'Titan Plan' && <ITCareerSteps />}
      </div>
      <div className="plan-content">
        {selectedPlan === 'Executive Plan' && <ExecutivePlan />}
      </div>
      <div className="plan-content">
        {selectedPlan === 'Apprentice Plan' && <Apprenticeship />}
      </div>
      <div className="plan-content">
        {selectedPlan === 'SOS Plan' && <SosPlan />}
      </div>
    </div>
  );
};

export default CourseDetails;
