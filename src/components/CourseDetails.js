import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, ButtonGroup, Typography } from '@mui/material';
import ITCareerSteps from './Knowmore'; // Importing your ITCareerSteps component
import ExecutivePlan from './ExecutivePlan';
import Apprenticeship from './Apprenticeship';
import SosPlan from './SosPlan';
import './CourseDetails.css'; // Import custom CSS for layout and styling


const CourseDetails = ({ planIndex }) => {
  const location = useLocation();
  const [selectedPlan, setSelectedPlan] = useState('Nothing'); // Manage the selected plan
 

  // New useEffect to map the planIndex to specific plans and auto-select them based on URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);  // Get query parameters
    const planIndex = params.get('plan');  // Get the "plan" query parameter
  
    console.log("Plan Index:", planIndex);
    if (planIndex) {
      switch (planIndex) {
        case '0':
          setSelectedPlan('titan-plan');
          break;
        case '1':
          setSelectedPlan('executive-plan');
          break;
        case '2':
          setSelectedPlan('apprentice-plan');
          break;
        case '3':
          setSelectedPlan('sos-plan');
          break;
        default:
          setSelectedPlan('Nothing');
      }
    }
  }, [planIndex]);

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
