import React, { useState, useEffect } from 'react'; // Import useEffect
import { Typography, Button, Card, CardContent, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './SosPlan.css';

const StepContent = ({ stepNumber, stepTitle, stepDescription, lessons }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3); // Initialize the state with 3 cards per view for desktop
  const [expandedDescription, setExpandedDescription] = useState(false); 
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Line 14

  // Adjust cards per view based on screen width
  const updateCardsPerView = () => { // Line 18
    const isMobileView = window.innerWidth <= 768;
    setIsMobile(isMobileView);
    if (isMobileView) {
      setCardsPerView(1); // Show 1 card at a time on mobile
    } else {
      setCardsPerView(3); // Show 3 cards on desktop
    }
  };
  

  useEffect(() => {
    updateCardsPerView(); // Set the initial value
    window.addEventListener('resize', updateCardsPerView); // Listen to window resize
    
    return () => {
      window.removeEventListener('resize', updateCardsPerView); // Clean up listener
    };
  }, []);

  const handleNext = () => {
    if (currentIndex < lessons.length - cardsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const toggleReadMoreDescription = () => {
    setExpandedDescription(!expandedDescription); // Toggle expanded state
  };
  const showArrows = isMobile ? lessons.length > 1 : lessons.length > 2; // Line 47

  return (
    <div className="step">
      <div className="step-number">{stepNumber}</div>
      <div className="step-content">
        {/* Box for Step Title and Description */}
        <Card className="description-card">
        <CardContent>
            <Typography variant="h5" className="step-title3">{stepTitle}</Typography>

            {/* Step Description with Read More functionality */}
            <Typography
              variant="body1"
              className={`step-description3 ${expandedDescription ? 'expanded' : ''}`}
            >
              {stepDescription}
            </Typography>

            {/* Show Read More/Read Less button based on expanded state */}
            {stepDescription.length > 100 && (
               <button
               className="read-more-link"
               onClick={toggleReadMoreDescription}
             >
               {expandedDescription ? 'Read Less' : 'Read More'}
             </button>
            )}
          </CardContent>
        </Card>

        {/* Lesson Tiles with Navigation */}
        <div className="lesson-carousel">
        {showArrows && ( // Line 54
              <IconButton onClick={handlePrevious} disabled={currentIndex === 0}>
              <ArrowBackIcon />
             </IconButton>
             )}

          <div className="lesson-wrapper">
            {lessons.slice(currentIndex, currentIndex + cardsPerView).map((lesson) => (
              <Card key={lesson.id} className="lesson-card3">
                <CardContent>

                  {/* Add Font Awesome Book Open Icon and "Lesson no" aligned to the left */}
                  <div className="lesson-header">
                    <FontAwesomeIcon icon={faBookOpen} size="lg" style={{ color: '#ff6b6b' }} />
                    <Typography variant="body2" className="lesson-number">Lesson {lesson.id}</Typography>
                  </div>

                  {/* Lesson Title */}
                  <Typography variant="h6" className="lesson-title3">{lesson.title}</Typography>

                  {/* Lesson Description */}
                  <Typography variant="body2" className="lesson-description3">
                    {lesson.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
          {showArrows && ( // Line 73
  <IconButton onClick={handleNext} disabled={currentIndex >= lessons.length - cardsPerView}>
    <ArrowForwardIcon />
  </IconButton>
)}

        </div>
      </div>
    </div>
  );
};

const SosPlan = () => {
  const lessonsStep1 = [
   ];
  const lessonsStep2 = [
    ];

  const lessonsStep3 = [
    ];

  const lessonsStep4 = [
  ];

 

  return (
    <div className="wrapper">
      <div className="left-section">
        <div className="header-section">
          <Typography variant="h3" className="main-title">
            Get Ready for Your IT Career in 6 Steps
          </Typography>
          <div className="button-group">
            <Button variant="contained" color="primary" className="main-btn5">
              Enroll Now
            </Button>
            <Button variant="outlined" color="primary" className="main-btn5">
              Book a Free Demo Class
            </Button>
          </div>
          <div style={{ marginTop: '20px' }}>
            <iframe
              src="https://lottie.host/embed/a54f37db-99cd-4c6e-8323-f9b8fddb7a75/Jeba7Teos8.json"
              style={{ border: 'none', width: '100%', height: '400px' }}
              title="Lottie Animation"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="right-section">
        <div className="step-wrapper">
          <StepContent
            stepNumber="1"
            stepTitle="Interview Preparation"
            stepDescription="This step helps candidates prepare for technical interviews by offering mock sessions and reviewing key concepts. It focuses on building confidence and improving communication skills to ensure candidates are ready for real-world technical interviews."
            lessons={lessonsStep1}
          />
           <StepContent
            stepNumber="2"
            stepTitle="Interview Assessment"
            stepDescription="Candidates undergo mock interviews with industry experts, where they receive detailed and personalized feedback on their problem-solving abilities, technical knowledge, communication skills, and overall interview performance to identify areas for improvement and boost their confidence."
            lessons={lessonsStep2}
          />
                    <StepContent
            stepNumber="3"
            stepTitle="Resume Building"
            stepDescription="In this step, candidates receive expert guidance on building a strong, technically-focused resume that highlights their skills and achievements. Resumes are tailored to meet employer expectations, helping candidates showcase relevant expertise and stand out in the competitive job market."
            lessons={lessonsStep3}
          />
          <StepContent
            stepNumber="4"
            stepTitle="Guidance by Industry Professionals:"
            stepDescription="Experienced professionals provide tailored advice, career guidance, and in-depth insights into the tech industry, including trends and best practices, to enhance job readiness, boost confidence, and ensure long-term career success in a competitive market."
            lessons={lessonsStep4}
          />
        </div>
      </div>
    </div>
  );
};

export default SosPlan;
