import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Slider from 'react-slick';
import TestSeriesSection from './TestSeriesSection';
import ProgramSection from './ProgramSection';
import './Home.css';
import './WhyPregradSection.css';
import Footer from './Footer';
import './Footer.js';
// import leftArrowIcon from './images/Down.png'; 
// import rightArrowIcon from './images/Up.png'; 
import hero from './images/hero.svg'; // Ensure this path is correct
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserShield, faClipboardCheck, faClipboardList, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';

const Home = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/register');
  };

  // const mockTests = [
  //   { id: 1, name: "Mock Test 1", description: "Description for Mock Test 1", locked: true },
  //   { id: 2, name: "Mock Test 2", description: "Description for Mock Test 2", locked: false },
  //   { id: 3, name: "Mock Test 3", description: "Description for Mock Test 3", locked: true },
  //   { id: 4, name: "Mock Test 4", description: "Description for Mock Test 4", locked: false },
  // ];

  // const sliderSettings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   nextArrow: <img src={rightArrowIcon} alt="Next" className="arrow next" />,
  //   prevArrow: <img src={leftArrowIcon} alt="Previous" className="arrow prev" />
  // };

  return (
    <div className="home-container">
      <div className="hero-section" style={{ backgroundImage: `url(${hero})` }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="hero-text">
        <div align = 'center'>
          <h1>Turn your exams into success stories</h1>
          </div>
          <p>AI-powered skills and knowledge assessment software, serving 2.5M+ business and educational users worldwide.</p>
          <div align = 'center'>
          <button className="signup-btn" onClick={handleSignUpClick}>Sign up - it's free</button>
          </div>
        </motion.div>
      </div>
      <TestSeriesSection />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }} className="statistics-section">
        <div className="stat-card">
          <FontAwesomeIcon icon={faUserShield} className="stat-icon" />
          <div className="stat-info">
            <h3><CountUp end={5.9} decimals={1} suffix=" K" duration={15} /></h3>
            <p>Registered Students</p>
          </div>
        </div>
        <div className="stat-card">
          <FontAwesomeIcon icon={faClipboardCheck} className="stat-icon" />
          <div className="stat-info">
            <h3><CountUp end={3.2} suffix=" K" duration={15} /></h3>
            <p>Student Selections</p>
          </div>
        </div>
        <div className="stat-card">
          <FontAwesomeIcon icon={faClipboardList} className="stat-icon" />
          <div className="stat-info">
            <h3><CountUp end={5.3} suffix=" K" duration={15} /></h3>
            <p>Tests Attempted</p>
          </div>
        </div>
        <div className="stat-card">
          <FontAwesomeIcon icon={faChalkboardTeacher} className="stat-icon" />
          <div className="stat-info">
            <h3><CountUp end={5.5} decimals={1} suffix=" K" duration={15} /></h3>
            <p>Classes Attended</p>
          </div>
        </div>
      </motion.div>
      <ProgramSection />
      <div className="about-section">
        <div className="about-header">ABOUT STS</div>
        <div className="about-content">
          <p>
            At STS, we bridge the gap between education and employment by offering hands-on, on-the-job experience.
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

      
      

      
      <Footer />
      </div>
      
      
      );

      };

export default Home;
