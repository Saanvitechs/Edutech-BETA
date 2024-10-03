import React, { useState, useEffect } from 'react'; // Import useEffect
import { Typography, Button, Card, CardContent, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faCircleLeft,faCircleRight } from '@fortawesome/free-solid-svg-icons';
import './Apprenticeship.css';

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
            <Typography variant="h5" className="step-title2">{stepTitle}</Typography>

            {/* Step Description with Read More functionality */}
            <Typography
              variant="body1"
              className={`step-description2 ${expandedDescription ? 'expanded' : ''}`}
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
          <FontAwesomeIcon icon={faCircleLeft} style={{ color: 'white' }} />
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
                  <Typography variant="h6" className="lesson-title2">{lesson.title}</Typography>

                  {/* Lesson Description */}
                  <Typography variant="body2" className="lesson-description2">
                    {lesson.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
          <IconButton onClick={handleNext} disabled={currentIndex >= lessons.length - cardsPerView}>
          <FontAwesomeIcon icon={faCircleRight} style={{ color: 'white' }}/>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

const Apprenticeship = () => {
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
    { id: 1, title: 'Frontend Development', description: 'Implement user interfaces using HTML, CSS, and JavaScript, ensuring responsive design and user experience.' },
    { id: 2, title: 'Backend Development', description: 'Manage databases, focusing on foreign keys, joins, and database queries, while developing server-side logic.' },
    { id: 3, title: 'Integrate Frontend with Backend', description: 'Learn how to test APIs using Postman and integrate them with your applications for seamless data exchange.' },
  ];

  return (
    <div className="wrapper">
      <div className="left-section">
        <div className="header-section">
          <Typography variant="h3" className="main-title">
            Accelerate Your Career Growth Through Internships
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
            stepTitle="Project Description"
            stepDescription="Engage in real-world projects that allow you to apply your technical knowledge in practical settings. Under expert supervision, you will gain hands-on experience, enhance your problem-solving skills, and create a portfolio that showcases your ability to tackle industry-relevant challenges, boosting your employability."
            lessons={lessonsStep4}
          />
        </div>
      </div>
    </div>
  );
};

export default Apprenticeship;
