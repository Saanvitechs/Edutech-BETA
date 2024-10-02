import React, { useState, useEffect } from 'react'; // Import useEffect
import { Typography, Button, Card, CardContent, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './ExecutivePlan.css';

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
  const showArrows = isMobile ? lessons.length > 1 : lessons.length > 3;
  return (
    <div className="step">
      <div className="step-number">{stepNumber}</div>
      <div className="step-content">
        {/* Box for Step Title and Description */}
        <Card className="description-card">
        <CardContent>
            <Typography variant="h5" className="step-title1">{stepTitle}</Typography>

            {/* Step Description with Read More functionality */}
            <Typography
              variant="body1"
              className={`step-description1 ${expandedDescription ? 'expanded' : ''}`}
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
        {showArrows && (
            <IconButton onClick={handlePrevious} disabled={currentIndex === 0}>
              <ArrowBackIcon />
            </IconButton>
          )}
          <div className="lesson-wrapper">
            {lessons.slice(currentIndex, currentIndex + cardsPerView).map((lesson) => (
              <Card key={lesson.id} className="lesson-card1">
                <CardContent>

                  {/* Add Font Awesome Book Open Icon and "Lesson no" aligned to the left */}
                  <div className="lesson-header">
                    <FontAwesomeIcon icon={faBookOpen} size="lg" style={{ color: '#ff6b6b' }} />
                    <Typography variant="body2" className="lesson-number">Lesson {lesson.id}</Typography>
                  </div>

                  {/* Lesson Title */}
                  <Typography variant="h6" className="lesson-title1">{lesson.title}</Typography>

                  {/* Lesson Description */}
                  <Typography variant="body2" className="lesson-description1">
                    {lesson.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
          {showArrows && (
            <IconButton onClick={handleNext} disabled={currentIndex >= lessons.length - cardsPerView}>
              <ArrowForwardIcon />
            </IconButton>
          )}
        </div>
      </div>
    </div>
  );
};

const ExecutivePlan = () => {
  const lessonsStep1 = [
    { id: 1, title: 'Linux', description: 'Navigating and managing a Linux environment, with a focus on command-line operations essential for development and server-side scripting.' },
    { id: 2, title: 'GitHub', description: ' Learning how to manage source code, collaborate on projects, track changes, and manage pull requests.' },
    { id: 3, title: 'Jenkins', description: 'Automating build and deployment processes to ensure continuous integration and delivery pipelines.' },
    { id: 4, title: 'Postman ', description: ' Mastering API testing, including creating requests, setting up test environments, and validating responses.' },
    { id: 5, title: 'Jira', description: 'Tracking project tasks, managing sprints, and learning agile development workflows.' },
    { id: 6, title: 'MySQL Workbench', description: 'Querying databases, designing schemas, and managing data efficiently. ' },
  ];
  const lessonsStep2 = [
    { id: 1, title: 'Architectural Breakdown', description: 'Leverage this powerful front-end framework to build responsive web designs.' },
    { id: 2, title: 'Functional Flow Analysis', description: 'Breaking down user stories and understanding how features function across the system.' },
    { id: 3, title: 'Debugging', description: ' Learn systematic debugging techniques, such as logging, breakpoints, and error tracking, so you are ready to tackle issues as they arise. ' },
  ];

  const lessonsStep3 = [
    { id: 1, title: 'Fixing Security Vulnerabilities', description: 'Learn to identify and resolve common security flaws.' },
    { id: 2, title: 'Standardized Code', description: 'Ensuring your code adheres to consistent formatting rules and naming conventions.' },
    { id: 3, title: 'CI/CD Integration ', description: ' Discover how SonarLint can be integrated into Jenkins  to automate code quality checks. ' },
   ];

  const lessonsStep4 = [
    { id: 1, title: 'Building Web API', description: 'Develop backend  that handle HTTP requests, manage data using REST APIs, and integrate with databases.' },
    { id: 2, title: 'FE Component Development', description: ' Create reusable UI components using modern JS frameworks . This will include both dynamic and interactive elements.' },
    { id: 3, title: 'Testing', description: 'Implement both unit tests and functional tests to ensure that the components and APIs are working as expected.' },
  ];

  const lessonsStep5 = [
    { id: 1, title: 'Project Overview', description: ' Gain insight into the project roadmap, deliverables, and timelines. This includes a review of key milestones and upcoming sprint goals.' },
    { id: 2, title: 'Task Allocation', description: ' Get assigned to tasks based on the project backlog, aligning your skills with project needs.' },
    { id: 3, title: 'Daily Standups', description: 'Participate in daily scrum meetings to track progress, discuss blockers, and align with the team on priorities.' },
    { id: 4, title: 'Collaborative Coding', description: 'Work with senior developers and peers to pair-program or conduct code reviews, ensuring that  codebase remains clean.' },
  ];

 

  return (
    <div className="wrapper">
      <div className="left-section">
        <div className="header-section">
          <Typography variant="h3" className="main-title">
            Jumpstart Your IT Career Journey!
          </Typography>
          <div className="button-group3">
            <Button variant="contained" color="primary" className="main-btn3"  onClick={() => window.open('https://forms.gle/F5AUkk5J4Tjy2AabA', '_blank')}>
              Enroll Now
            </Button>
            <Button variant="outlined" color="primary" className="main-btn3"  onClick={() => window.open('https://forms.gle/PGrDh2pKSKEXjTud6', '_blank')}>
              Book a Free Demo Class
            </Button>
          </div>
          <div style={{ marginTop: '10px' }}>
            <iframe 
              src="https://lottie.host/embed/a54f37db-99cd-4c6e-8323-f9b8fddb7a75/Jeba7Teos8.json"
              style={{ border: 'none', width: '80%', height: '400px' }} 
              title="Lottie Animation"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="right-section">
        <div className="step-wrapper">
          <StepContent
            stepNumber="1"
            stepTitle="Industry Tools Ramp-up & Knowledge Transfer (KT)"
            stepDescription="In the first stage, you'll get hands-on experience with essential industry tools. This will include a deep dive into GitHub for version control, Jenkins for automating builds, Postman for API testing, Jira for tracking tasks, MySQL Workbench for database management, and Linux for mastering the command-line interface. By the end of this week, you'll be equipped to effectively use these tools in a professional setting."
            lessons={lessonsStep1}
          />
           <StepContent
            stepNumber="2"
            stepTitle="Code Analysis & Dry Run Flow"
            stepDescription="This phase focuses on deepening your understanding of the project's technical landscape, enabling you to see how all components integrate seamlessly. You will analyze the codebase to grasp the overall architecture and examine how data flows through the application, providing a comprehensive view of the system's functionality and interactions. "
            lessons={lessonsStep2}
          />
                    <StepContent
            stepNumber="3"
            stepTitle="Code Formatting using SonarLint"
            stepDescription="This phase marks the transition from theoretical learning to practical application. You will engage in a minor assignment designed to simulate real-world tasks in project development, providing hands-on experience and reinforcing the skills acquired thus far."
            lessons={lessonsStep3}
          />
          <StepContent
            stepNumber="4"
            stepTitle="Minor Project Assignment"
            stepDescription="At this point, the focus shifts from theoretical understanding to practical application. You will engage in a minor assignment that mirrors real-world tasks in project development, allowing you to apply your acquired knowledge in a hands-on setting. This exercise will involve working on key development activities such as building APIs, developing frontend components, and conducting thorough testing. "
            lessons={lessonsStep4}
          />
          <StepContent
            stepNumber="5"
            stepTitle="Onboarding and Sprint Commencement"
            stepDescription="During this phase, you will officially join the project team and begin integrating into the development environment. The primary goal is to immerse yourself in the team's workflows, tools, and methodologies. You will familiarize yourself with the project's structure, meet key stakeholders, and understand the upcoming sprint goals. This process ensures you are fully prepared to contribute effectively in the subsequent phases of the project."
            lessons={lessonsStep5}
          />
           
        </div>
      </div>
    </div>
  );
};

export default ExecutivePlan;
