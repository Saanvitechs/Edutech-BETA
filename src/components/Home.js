import React, { useState } from 'react';
import TestSeriesSection from './TestSeriesSection';
import ProgramSection from './ProgramSection';
import './Home.css';
import './WhyPregradSection.css';
import Footer from './Footer';
import './Footer.js';
import hero from './images/hero.png'; // Ensure this path is correct
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faClipboardCheck, faClipboardList, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ReviewCarousel from './ReviewCarousel'; // Ensure the correct path



const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What kind of career support will I be given?",
      answer: "This course will provide OJT or On Job Training which will works as experience or helps in gaining experience."
    },
    {
      question: "Can I access course materials after completing the course?",
      answer: "Yes, you will have lifetime access to all course materials, including any updates we make in the future."
    },
    {
      question: "Who is eligible for these courses?",
      answer: "Our courses are designed for students, professionals, and anyone interested in upgrading their skills."
    },
    {
      question: "What if I miss a lecture?",
      answer: "All our live sessions are recorded, and you will have access to the recordings within 24 hours after the session."
    },
    {
      question: "When are the live classes held?",
      answer: "Live classes are typically held in the evenings or weekends to accommodate working professionals."
    },
    {
      question: "Does TREx give certificates?",
      answer: "Yes, we provide certificates upon successful completion of our courses."
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

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section" style={{ backgroundImage: `url(${hero})` }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="hero-text">
          <div align='center'>
            <h1>Bridging Knowledge and Practice for Future Leaders</h1>
          </div>
          <p></p>
          <p></p>
          <p>At our core, we connect classroom learning with real-world applications, shaping the next generation of industry leaders.</p>
          <p>Our hands-on training programs empower people to develop essential skills, drive innovation, and excel in their fields.</p>
          <p>Join us to transform your potential into impactful leadership</p>
          <div align='center'>
            {/* <button className="signup-btn" onClick={handleSignUpClick}>Sign up - it's free</button> */}
          </div>
        </motion.div>
      </div>

      <TestSeriesSection />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }} className="statistics-section">
        <div className="stat-card">
          <FontAwesomeIcon icon={faUserShield} className="stat-icon" />
          <div className="stat-info">
            <h3><CountUp end={5.9} decimals={1} suffix=" K" duration={25} /></h3>
            <p>Registered Students</p>
          </div>
        </div>
        <div className="stat-card">
          <FontAwesomeIcon icon={faClipboardCheck} className="stat-icon" />
          <div className="stat-info">
            <h3><CountUp end={3.2} suffix=" K" duration={25} /></h3>
            <p>Student Selections</p>
          </div>
        </div>
        <div className="stat-card">
          <FontAwesomeIcon icon={faClipboardList} className="stat-icon" />
          <div className="stat-info">
            <h3><CountUp end={5.3} suffix=" K" duration={25} /></h3>
            <p>Tests Attempted</p>
          </div>
        </div>
        <div className="stat-card">
          <FontAwesomeIcon icon={faChalkboardTeacher} className="stat-icon" />
          <div className="stat-info">
            <h3><CountUp end={5.5} decimals={1} suffix=" K" duration={25} /></h3>
            <p>Classes Attended</p>
          </div>
        </div>
      </motion.div>

      <div className="whatsapp-community-section">
        <h4>Join Our whatsapp Community for Placement Updates & Important Resources</h4>
        <p>
          Get Updates for: Latest Job opportunities in Big 4s & Top Firms, Important Resources for Interview Preparation, Updates from the Finance World.
        </p>
        <a href="https://chat.whatsapp.com/LQb2ZO8vlrt73TIbGnqzpQ" target="_blank" rel="noopener noreferrer" className="join-whatsapp-btn">
          JOIN WHATSAPP COMMUNITY
        </a>
      </div>

      <ProgramSection />
      
      <div className="about-section">
        <div className="about-header">ABOUT US</div>
        <div className="about-content">
          <p>
            At Saanvi Technology (sts), we bridge the gap between education and employment by offering hands-on, on-the-job experience.
            Whether you're a student, a recent graduate, or someone looking to pivot careers, our platform connects
            you with industry leaders ready to mentor and guide you.
          </p>
          <p>
            Take the first step toward your dream career by gaining the skills and experience that employers value most.
            Start your journey today!
          </p>
        </div>
        <a href="https://saanvitechs.com/about.php" target="_blank" rel="noopener noreferrer" className="read-more-btn">Read More</a>
      </div>
      <ReviewCarousel />
      <FAQSection />
      

      <Footer />
    </div>
  );
};

export default Home;
