// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import TestSeriesSection from './TestSeriesSection';
// import ProgramSection from './ProgramSection';
// import './Home.css';
// import './WhyPregradSection.css';
// import Footer from './Footer';
// import './Footer.js';
// import { motion } from 'framer-motion';

// import reading from './images/reading.png';
// import check from './images/check.png';
// import list from './images/list.png';
// import clas from './images/clas.png'; 
// import monitor from './images/monitor.png';
// import enquireLogo from './images/enquireLogo.png';



// import CountUp from 'react-countup';
// // import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import ReviewCarousel from './ReviewCarousel'; // Ensure the correct path
// // import DesktopPopup from './DesktopPopup.js';
// import { Typography } from '@mui/material';
// import CollaboratorsSection from './CollaboratorsSection';




// const FAQSection = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const faqs = [
//     {
//       question: "What kind of career support will I be given?",
//       answer: "This course provides comprehensive On-the-Job Training (OJT), which serves as a practical platform for participants to gain real-world experience in their field of study. By applying theoretical knowledge in a professional environment, participants will not only enhance their technical skills but also develop critical problem-solving and decision-making abilities. This hands-on experience is designed to bridge the gap between academic learning and workplace expectations, offering a significant advantage in career development and preparing individuals for future professional challenges."
//     },
//     {
//       question: "Can I access course materials after completing the course?",
//       answer: "You will receive full access to all course materials for one year, including any updates or enhancements that are made during this period. This ensures that you stay up-to-date with the latest content and developments, allowing you to continue refining your knowledge and skills throughout the duration of the course. Our commitment to providing updated resources is designed to support your ongoing learning and professional growth, ensuring that the material remains relevant and aligned with industry trends and advancements."
//     },
//     {
//       question: "Who is eligible for these courses?",
//       answer: "Our courses are thoughtfully designed to cater to a diverse audience, including students, professionals, and individuals who are eager to enhance their skills in software development. Whether you are just starting your journey or looking to advance your existing expertise, our programs provide the necessary tools and knowledge to help you succeed. With a focus on practical, industry-relevant skills, these courses offer opportunities for continuous growth and development, making them suitable for learners at any stage of their career or educational path."
//     },
//     {
//       question: "When are the live classes held?",
//       answer: "Live sessions are typically held as per the requirement of the batch."
//     },
//     {
//       question: "Does TREx give certificates?",
//       answer: "Yes, TREx provides certificates upon successfully completing the curriculum. These certificates serve as a formal recognition of your achievement and can be used to demonstrate your expertise in the subject matter covered during the course. The certification process ensures that you have gained the necessary knowledge and skills, reflecting your commitment to professional development."
//     },   
//   ];

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="faq-section">
//       <h2>FREQUENTLY ASKED QUESTIONS</h2>
//       <p>We're happy to answer your questions</p>
//       {faqs.map((faq, index) => (
//         <div
//           key={index}
//           className={`faq-item ${activeIndex === index ? 'active' : ''}`}
//           onClick={() => toggleFAQ(index)}
//         >
//           <div className="faq-question">
//             {faq.question}
//             <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
//           </div>
//           <div className="faq-answer" style={{ display: activeIndex === index ? 'block' : 'none' }}>
//             {faq.answer}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// const Home = () => {
//   const navigate = useNavigate();
//   const [showText, setShowText] = useState(true);
//   const [isButtonExpanded, setIsButtonExpanded] = useState(true);
  
//   // State to toggle button text


//   const handleApplyClick = () => {
//     navigate('/membership-plan');
//   };

//   useEffect(() => {
//     let collapseTimer;

//     if (isButtonExpanded) {
//       collapseTimer = setTimeout(() => {
//         setShowText(false);
//         setIsButtonExpanded(false);
//       }, 5000); // Collapse after 5 seconds
//     }

//     return () => clearTimeout(collapseTimer); // Clear timer on component unmount
//   }, [isButtonExpanded]);

//   // Handle click to expand button and open the Google Form
//   const handleEnquireClick = () => {
//     setIsButtonExpanded(true); // Expand the button on click
//     setShowText(true); // Show text when clicked

//     // Open Google Form after expanding
//     setTimeout(() => {
//       window.open("https://forms.gle/9XhrgtSo2qa8JhaH8", "_blank"); // Open Google Form in a new tab
//     }, 300);
//   };

 
//   return (
//     <div className="home-container">
//       {/* First Section with Lottie Animation and Text */}
//       <section className="top-section">
//         <div className="top-section-left">
//           {/* Professional Learning Camp with logo */}
//           <div className="camp-heading">
//             <img src={monitor} alt="Logo" />
//             <span className="camp-heading-text">Professional Learning Camp</span>
//           </div>
//           <h1 className="main-heading">
//             THE RIGHT WAY TO LEARN <span className="highlight">PROGRAMMING</span>
//           </h1>
//           <p className="subtext">
//             We Train People to be Professionals.<br/>
//             Become job-ready with projects tailored to industry standards and expectations.
//           </p>
//           <div>
//             {/* Move the button below the subtext */}
//             <button className="applys-btn" onClick={handleApplyClick}>
//               Apply Now
//             </button>
//           </div>
//         </div>
        
//         <div className="top-section-right">
//           <iframe
//             src="https://lottie.host/embed/b74f2a70-dd1f-4d17-aa09-4b736ea1e786/1UQUvDjQK2.json"
//             style={{ border: 'none', width: '400px', height: '400px' }}
//             title="Lottie Animation"
//           ></iframe>
//         </div>
//       </section>

//       {/* Hero Text Box Section */}
//       <section className="hero-section">
//         <div className="hero-text-box">
//           <h1>Bridging Knowledge and Practice for Future Leaders</h1>
//           <p>At our core, we connect classroom learning with real-world applications, shaping the next generation of industry leaders.</p>
//           <p>Our hands-on training programs empower people to develop essential skills, drive innovation, and excel in their fields.</p>
//           <p>Join us to transform your potential into impactful leadership</p>
          
//         </div>
//       </section>

//       <TestSeriesSection />
//       <CollaboratorsSection />

//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }} className="statistics-section">
//       <div className="stat-card">
//         <img src={reading} alt="Registered Students Icon" className="stat-icon" />
//         <div className="stat-info">
//           <h3><CountUp end={1.5} decimals={1} suffix=" K" duration={30} /></h3>
//           <p>Registered Students</p>
//         </div>
//       </div>
//       <div className="stat-card">
//         <img src={check} alt="Onboarded Students Icon" className="stat-icon" />
//         <div className="stat-info">
//           <h3><CountUp end={554} duration={35} /></h3>
//           <p>Student Onboarded</p>
//         </div>
//       </div>
//       <div className="stat-card">
//         <img src={list} alt="Tests Attempted Icon" className="stat-icon" />
//         <div className="stat-info">
//           <h3><CountUp end={414} duration={35} /></h3>
//           <p>Tests Attempted</p>
//         </div>
//       </div>
//       <div className="stat-card">
//         <img src={clas} alt="Classes Attended Icon" className="stat-icon" />
//         <div className="stat-info">
//           <h3><CountUp end={1.31} decimals={2} suffix=" K" duration={15} /></h3>
//           <p>Classes Attended</p>
//         </div>
//       </div>
//     </motion.div>

//       <div className="whatsapp-community-section">
//         <h4>Join Our whatsapp Community for Placement Updates & Important Resources</h4>
//         <p>
//           Get Updates for: Latest Job opportunities in Big 4s & Top Firms, Important Resources for Interview Preparation, Updates from the Finance World.
//         </p>
//         <a href="https://chat.whatsapp.com/LQb2ZO8vlrt73TIbGnqzpQ" target="_blank" rel="noopener noreferrer" className="join-whatsapp-btn">
//           JOIN WHATSAPP COMMUNITY
//         </a>
//       </div>

//       <ProgramSection />
      
//       <div className="about-section">
//         <div className="about-header">ABOUT US</div>
//         <div className="about-content">
//           <Typography variant="h3">About Us</Typography>
//           <p>
//             At Saanvi Technology Solutions (sts), we bridge the gap between education and employment by offering hands-on, on-the-job experience.
//             Whether you're a student, a recent graduate, or someone looking to pivot careers, our platform connects
//             you with industry leaders ready to mentor and guide you.
//           </p>
//           <p>
//             Take the first step toward your dream career by gaining the skills and experience that employers value most.
//             Start your journey today!
//           </p>
//         </div>
//         <a href="https://saanvitechs.com/about.php" target="_blank" rel="noopener noreferrer" className="read-more-btn">Read More</a>
//       </div>
//       <ReviewCarousel />
//       <FAQSection />
      

//       <Footer />
//        {/* Add the floating Enquire button */}
//        <div className={`floating-btn ${isButtonExpanded ? "expanded" : ""}`} onClick={handleEnquireClick}>
//         <img src={enquireLogo} alt="Enquire Logo" className="enquire-logo" />
//         {showText && <span> Enquire</span>} {/* Show text only when `showText` is true */}
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TestSeriesSection from './TestSeriesSection';
import ProgramSection from './ProgramSection';
import './Home.css';
import './WhyPregradSection.css';
import Footer from './Footer';
import { motion } from 'framer-motion';
import Popup from './Popup'; // Import your Popup component
import reading from './images/reading.png';
import check from './images/check.png';
import list from './images/list.png';
import clas from './images/clas.png'; 
import monitor from './images/monitor.png';
import enquireLogo from './images/enquireLogo.png';
import CountUp from 'react-countup';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ReviewCarousel from './ReviewCarousel';
import { Typography } from '@mui/material';
import CollaboratorsSection from './CollaboratorsSection';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What kind of career support will I be given?",
      answer: "This course provides comprehensive On-the-Job Training (OJT), which serves as a practical platform for participants to gain real-world experience in their field of study."
    },
    {
      question: "Can I access course materials after completing the course?",
      answer: "You will receive full access to all course materials for one year, including any updates or enhancements made during this period."
    },
    {
      question: "Who is eligible for these courses?",
      answer: "Our courses are thoughtfully designed to cater to students, professionals, and individuals eager to enhance their skills in software development."
    },
    {
      question: "When are the live classes held?",
      answer: "Live sessions are typically held as per the requirement of the batch."
    },
    {
      question: "Does TREx give certificates?",
      answer: "Yes, TREx provides certificates upon successfully completing the curriculum."
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>FREQUENTLY ASKED QUESTIONS</h2>
      <p>We're happy to answer your questions</p>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => toggleFAQ(index)}
        >
          <div className="faq-question">
            {faq.question}
            <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
          </div>
          <div className="faq-answer" style={{ display: activeIndex === index ? 'block' : 'none' }}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

const Home = ({ onScrollToPricing }) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false); // Popup state
  const [showText, setShowText] = useState(true);
  const [isButtonExpanded, setIsButtonExpanded] = useState(true); // Enquire button state

  // Show popup after login (or page load) every time
  useEffect(() => {
    const popupShown = localStorage.getItem('popupShown');
    if (!popupShown) {
      // Show popup after 2 seconds
      setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem('popupShown', 'true'); // Mark popup as shown for the current session
      }, 2000);
    }
  }, []);

  // Close the popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // Handle click to apply for membership
  const handleApplyClick = () => {
    navigate('/membership-plan');
  };

  // Timer to collapse the Enquire button
  useEffect(() => {
    let collapseTimer;
    if (isButtonExpanded) {
      collapseTimer = setTimeout(() => {
        setShowText(false);
        setIsButtonExpanded(false);
      }, 5000); // Collapse after 5 seconds
    }
    return () => clearTimeout(collapseTimer);
  }, [isButtonExpanded]);

  // Handle click to expand Enquire button and open Google Form
  const handleEnquireClick = () => {
    setIsButtonExpanded(true); // Expand the button on click
    setShowText(true); // Show text when clicked
    setTimeout(() => {
      window.open("https://forms.gle/9XhrgtSo2qa8JhaH8", "_blank"); // Open Google Form in a new tab
    }, 300);
  };

  return (
    <div className="home-container">
      {/* Popup component */}
      {showPopup && <Popup onClose={handleClosePopup} />}

      {/* Main content */}
      <section className="top-section">
        <div className="top-section-left">
          <div className="camp-heading">
            <img src={monitor} alt="Logo" />
            <span className="camp-heading-text">Professional Learning Camp</span>
          </div>
          <h1 className="main-heading">
            THE RIGHT WAY TO LEARN <span className="highlight">PROGRAMMING</span>
          </h1>
          <p className="subtext">
            We Train People to be Professionals.<br />
            Become job-ready with projects tailored to industry standards and expectations.
          </p>
          <button className="applys-btn" onClick={handleApplyClick}>Apply Now</button>
        </div>
        <div className="top-section-right">
          <iframe
            src="https://lottie.host/embed/b74f2a70-dd1f-4d17-aa09-4b736ea1e786/1UQUvDjQK2.json"
            style={{ border: 'none', width: '400px', height: '400px' }}
            title="Lottie Animation"
          ></iframe>
        </div>
      </section>

      <section className="hero-section">
        <div className="hero-text-box">
          <h1>Bridging Knowledge and Practice for Future Leaders</h1>
          <p>At our core, we connect classroom learning with real-world applications, shaping the next generation of industry leaders.</p>
          <p>Our hands-on training programs empower people to develop essential skills, drive innovation, and excel in their fields.</p>
          <p>Join us to transform your potential into impactful leadership</p>
        </div>
      </section>

      <TestSeriesSection onScrollToPricing={onScrollToPricing} /> {/* Pass scroll handler */}
      <CollaboratorsSection />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }} className="statistics-section">
        <div className="stat-card">
          <img src={reading} alt="Registered Students Icon" className="stat-icon" />
          <div className="stat-info">
            <h3><CountUp end={1.5} decimals={1} suffix=" K" duration={30} /></h3>
            <p>Registered Students</p>
          </div>
        </div>
        <div className="stat-card">
          <img src={check} alt="Onboarded Students Icon" className="stat-icon" />
          <div className="stat-info">
            <h3><CountUp end={554} duration={35} /></h3>
            <p>Student Onboarded</p>
          </div>
        </div>
        <div className="stat-card">
          <img src={list} alt="Tests Attempted Icon" className="stat-icon" />
          <div className="stat-info">
            <h3><CountUp end={414} duration={35} /></h3>
            <p>Tests Attempted</p>
          </div>
        </div>
        <div className="stat-card">
          <img src={clas} alt="Classes Attended Icon" className="stat-icon" />
          <div className="stat-info">
            <h3><CountUp end={1.31} decimals={2} suffix=" K" duration={15} /></h3>
            <p>Classes Attended</p>
          </div>
        </div>
      </motion.div>

      <div className="whatsapp-community-section">
        <h4>Join Our whatsapp Community for Placement Updates & Important Resources</h4>
        <p>Get Updates for: Latest Job opportunities in Big 4s & Top Firms, Important Resources for Interview Preparation, Updates from the Finance World.</p>
        <a href="https://chat.whatsapp.com/LQb2ZO8vlrt73TIbGnqzpQ" target="_blank" rel="noopener noreferrer" className="join-whatsapp-btn">
          JOIN WHATSAPP COMMUNITY
        </a>
      </div>

      <ProgramSection />

      <div className="about-section">
        <div className="about-header">ABOUT US</div>
        <div className="about-content">
          <Typography variant="h3">About Us</Typography>
          <p>At Saanvi Technology Solutions (sts), we bridge the gap between education and employment by offering hands-on, on-the-job experience. Whether you're a student, a recent graduate, or someone looking to pivot careers, our platform connects you with industry leaders ready to mentor and guide you.</p>
          <p>Take the first step toward your dream career by gaining the skills and experience that employers value most. Start your journey today!</p>
        </div>
        <a href="https://saanvitechs.com/about.php" target="_blank" rel="noopener noreferrer" className="read-more-btn">Read More</a>
      </div>

      <ReviewCarousel />
      <FAQSection />

      <Footer />

      {/* Enquire Button */}
      <div className={`floating-btn ${isButtonExpanded ? "expanded" : ""}`} onClick={handleEnquireClick}>
        <img src={enquireLogo} alt="Enquire Logo" className="enquire-logo" />
        {showText && <span> Inquire</span>}
      </div>
    </div>
  );
};

export default Home;
