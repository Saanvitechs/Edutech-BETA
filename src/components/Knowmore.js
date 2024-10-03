import React, { useState, useEffect } from 'react'; // Import useEffect
import { Typography, Button, Card, CardContent, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './k.css';

const StepContent = ({ stepNumber, stepTitle, stepDescription, lessons }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3); // Initialize the state with 3 cards per view for desktop
  const [expandedDescription, setExpandedDescription] = useState(false); 

  // Adjust cards per view based on screen width
  const updateCardsPerView = () => {
    if (window.innerWidth <= 768) {
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

  return (
    <div className="step">
      <div className="step-number">{stepNumber}</div>
      <div className="step-content">
        {/* Box for Step Title and Description */}
        <Card className="description-card">
        <CardContent>
            <Typography variant="h5" className="step-title">{stepTitle}</Typography>

            {/* Step Description with Read More functionality */}
            <Typography
              variant="body1"
              className={`step-description ${expandedDescription ? 'expanded' : ''}`}
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
          <IconButton onClick={handlePrevious} disabled={currentIndex === 0}>
            <ArrowBackIcon />
          </IconButton>
          <div className="lesson-wrapper">
            {lessons.slice(currentIndex, currentIndex + cardsPerView).map((lesson) => (
              <Card key={lesson.id} className="lesson-card">
                <CardContent>

                  {/* Add Font Awesome Book Open Icon and "Lesson no" aligned to the left */}
                  <div className="lesson-header">
                    <FontAwesomeIcon icon={faBookOpen} size="lg" style={{ color: '#ff6b6b' }} />
                    <Typography variant="body2" className="lesson-number">Lesson {lesson.id}</Typography>
                  </div>

                  {/* Lesson Title */}
                  <Typography variant="h6" className="lesson-title">{lesson.title}</Typography>

                  {/* Lesson Description */}
                  <Typography variant="body2" className="lesson-description">
                    {lesson.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
          <IconButton onClick={handleNext} disabled={currentIndex >= lessons.length - cardsPerView}>
            <ArrowForwardIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

const ITCareerSteps = () => {
  const lessonsStep1 = [
    { id: 1, title: 'Core Java', description: 'Learn the fundamentals of the Java programming language.' },
    { id: 2, title: 'OOPs Concepts', description: 'Understand Object-Oriented Programming principles to design better code' },
    { id: 3, title: 'IDE Introduction ', description: 'Get comfortable using industry-standard Integrated Development Environments  for efficient coding' },
    { id: 4, title: 'HTML', description: 'Build the front-end of web applications using the basics' },
    { id: 5, title: 'CSS', description: 'Elevate your website’s aesthetic by leveraging the power of CSS to create visually appealing layouts and engaging user interfaces. ' },
  ];
  const lessonsStep2 = [
    { id: 1, title: 'Bootstrap', description: 'Leverage this powerful front-end framework to build responsive web designs faster and more efficiently.' },
    { id: 2, title: 'Grid & Flexbox', description: 'Master advanced CSS layout techniques like Grid and Flexbox to design flexible, responsive layouts.' },
    { id: 3, title: 'JavaScript', description: 'Get proficient with the core programming language for web development.' },
    { id: 4, title: 'ReactJS', description: 'Learn to build dynamic, single-page applications using one of the most popular front-end libraries.' },
    { id: 5, title: 'Projects', description: 'Apply what you have learn till now and Build a fully functional front-end applications.' },
  ];

  const lessonsStep3 = [
    { id: 1, title: 'Collections & String Classes', description: 'Master data structures and string manipulation in Java.' },
    { id: 2, title: 'Exception Handling & Multi-threading', description: 'Build robust, error-free, and concurrent applications.' },
    { id: 3, title: 'Spring Boot ', description: ' Learn to develop enterprise-level applications with Spring Boot and Java Persistence API (JPA).' },
    { id: 4, title: 'Spring Data JPA  ', description: 'Implement Create, Read, Update, and Delete (CRUD) functionality with built-in security measures.' },
    { id: 5, title: 'Project ', description: 'Leverage the knowledge you have acquired thus far to develop a standalone full-stack application.' },
  ];

  const lessonsStep4 = [
    { id: 1, title: 'GIT & JIRA', description: 'Implement Agile project management with JIRA and version control with Git.' },
    { id: 2, title: 'MySQL', description: 'Manage databases, focusing on foreign keys, joins, and database queries.' },
    { id: 3, title: 'Postman & Jenkins', description: 'Learn API testing using Postman and CI/CD automation with Jenkins' },
    { id: 4, title: 'Agile', description: 'Review the progress of your projects and optimize your workflow for future iterations.' },
  ];

  const lessonsStep5 = [
    { id: 1, title: 'Sprint Planning', description: 'Develop the ability to meticulously plan and scope out tasks. Learn to break down complex requirements into manageable user stories and estimate work accurately.' },
    { id: 2, title: 'Assigning User Stories', description: 'Work collaboratively to assign tasks and take ownership of different components of the project.' },
    { id: 3, title: 'Sprint Start', description: 'Kick off each sprint by focusing on a clear set of deliverables and tasks.' },
    { id: 4, title: 'Sprint Retrospective', description: 'At the end of each sprint, present your progress in a demo session and reflect on improvements for the next sprint in a retrospective meeting.' },
  ];

  const lessonsStep6 = [
    { id: 1, title: 'Soft Skills Training', description: 'Enhance key professional attributes such as effective communication, teamwork, leadership, and problem-solving .' },
    { id: 2, title: 'Mock Interviews', description: 'Participate in simulated technical interviews designed to assess both your coding skills and problem-solving abilities.' },
    { id: 3, title: 'Resume Building', description: 'Craft a professional, results-oriented resume that highlights your skills, experiences, and projects.' },
    { id: 4, title: 'Doubt Resolution for Interviews given', description: '' } ,
  ];

  return (
    <div className="wrapper">
      <div className="left-section">
        <div className="header-section">
          <Typography variant="h3" className="main-title">
            Get Ready for Your IT Career in 6 Steps
          </Typography>
          <div className="button-group3">
            <Button variant="contained" color="primary" className="main-btn3"  onClick={() => window.open('https://forms.gle/F5AUkk5J4Tjy2AabA', '_blank')}>
              Enroll Now
            </Button>
            <Button variant="outlined" color="primary" className="main-btn3"  onClick={() => window.open('https://forms.gle/PGrDh2pKSKEXjTud6', '_blank')}>
              Book a Free Demo Class
            </Button>
          </div>
          <div style={{ marginTop: '20px' }}>
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
            stepTitle="Basic Introduction"
            stepDescription="Embark on your transformative journey to becoming a proficient Full-Stack Java Developer by mastering the essential foundational concepts that serve as the bedrock for success in this dynamic field. This week’s focus is on laying a strong and comprehensive groundwork, delving into the key programming languages and tools that are critical for full-stack development."
            lessons={lessonsStep1}
          />
           <StepContent
            stepNumber="2"
            stepTitle="Front-End Development"
            stepDescription="Dive into the captivating world of front-end development by mastering the dynamic duo of JavaScript and ReactJS. Here, you'll engage in building interactive and responsive user interfaces, equipping yourself with the essential skills needed for success in modern web development. As you navigate through these powerful technologies. "
            lessons={lessonsStep2}
          />
                    <StepContent
            stepNumber="3"
            stepTitle="Back-End Development"
            stepDescription="Throughout this period, you will immerse yourself in back-end development, exploring advanced Java concepts. By the end of this phase, you will gain valuable experience in building secure, full-stack applications, equipping you with the skills needed to tackle complex development challenges. This focused approach will empower you to create robust back-end systems that seamlessly integrate with front-end technologies, ensuring a comprehensive understanding of full-stack development."
            lessons={lessonsStep3}
          />
          <StepContent
            stepNumber="4"
            stepTitle="DevOps Tools, Databases & Agile Integration"
            stepDescription="Explore essential DevOps tools and databases to streamline workflows and enhance efficiency in software development. Through the application of Agile frameworks, you will effectively manage version control, automate tasks, and ensure continuous delivery, all of which are vital for optimizing the development process and improving collaboration among teams."
            lessons={lessonsStep4}
          />
          <StepContent
            stepNumber="5"
            stepTitle="Project Development"
            stepDescription="Over the course of the next several sessions, you will engage in a comprehensive study of Agile project management, participating in sprints that simulate a real-world development cycle. Each sprint will adhere to Agile best practices, focusing on the development and deployment of a complete full-stack web application. This methodology emphasizes collaboration, iterative progress, and continuous improvement, mirroring the dynamics of a professional development team and equipping you with the essential skills needed for success in the software industry."
            lessons={lessonsStep5}
          />
                    <StepContent
            stepNumber="6"
            stepTitle="Soft Skills and Career Development"
            stepDescription="The final stage of the course is dedicated to polishing your professional skills and preparing you for the job market. Through dedicated training and mock interviews, you’ll refine both your technical expertise and soft skills."
            lessons={lessonsStep6}
          />
        </div>
      </div>
    </div>
  );
};

export default ITCareerSteps;
