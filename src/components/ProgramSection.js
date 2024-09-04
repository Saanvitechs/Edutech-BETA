import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './ProgramSection.css';
import pre from './images/pre.svg';
import pro from './images/project.svg';
import mentor from './images/mentor.svg';

const ProgramDetails = () => {
  const [activeTab, setActiveTab] = useState('LEARNING');
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (isHovered) return; // Do not change tabs if hovered

    const tabs = ['LEARNING', 'mentorship', 'projects'];
    let tabIndex = tabs.indexOf(activeTab);

    const intervalId = setInterval(() => {
      tabIndex = (tabIndex + 1) % tabs.length; // Move to the next tab, loop back to the start
      setActiveTab(tabs[tabIndex]);
    }, 4000); // Change tab every 5 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [activeTab, isHovered]);

  return (
    <div
      className="program-details-container"
      onMouseEnter={() => setIsHovered(true)} // Stop rotation on hover
      onMouseLeave={() => setIsHovered(false)} // Resume rotation when not hovered
    >
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'LEARNING' ? 'active' : ''}`}
          onClick={() => handleTabClick('LEARNING')}
        >
          LEARNING
        </button>
        <button
          className={`tab-button ${activeTab === 'mentorship' ? 'active' : ''}`}
          onClick={() => handleTabClick('mentorship')}
        >
          MENTORSHIP
        </button>
        <button
          className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => handleTabClick('projects')}
        >
          PROJECTS
        </button>
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="tab-content"
      >
        {activeTab === 'LEARNING' && (
          <div className="content-card">
           
            <p className="description">
            <h2>#Get Skilled</h2>
              Advanced Skill Upgrading Program, backed by industry giants to become a Globally Certified Professional.
            </p>
            <div className="content-details">
              <ul>
                <li><span>On-Job-Training</span></li>
                <li><span>Valuable Certification</span></li>
                <li><span>Goal Oriented Learning</span></li>
                <li><span>Industry focused</span></li>
                <li><span>Early Career Opportunities</span></li>
                <li><span>Get Valuable Experience</span></li>
                <li><span>Live Project</span></li>
                <li><span>Upscaling Skills</span></li>
              </ul>
              <div className="image-container">
                <img src={pre} alt="LEARNING" />
              </div>
            </div>
          </div>
        )}
        {activeTab === 'mentorship' && (
          <div className="content-card">
            
            <p className="description">
            <h2>#Mentorship</h2>
              Unlock Your Potential with Our Career Enhancing Program. Learn from the best in the industry and gain practical skills through program.
            </p>
            <div className="content-details">
              <ul>
                <li><span>Learning Skills</span></li>
                <li><span>Completion Certification</span></li>
                <li><span>Goal Oriented Learning</span></li>
                <li><span>Guided Projects</span></li>
                <li><span>Expert Mentorship</span></li>
                <li><span>Latest Projects</span></li>
                <li><span>Problem Solving</span></li>
              </ul>
              <div className="image-container">
                <img src={pro} alt="Mentorship" />
              </div>
            </div>
          </div>
        )}
        {activeTab === 'projects' && (
          <div className="content-card">
            
            <p className="description">
            <h2>#Projects</h2>
              Real-world projects designed to give you hands-on experience. Collaborate with industry professionals on projects that matter.
            </p>
            <div className="content-details">
              <ul>
                <li><span>Projects</span></li>
                <li><span>Team Collaboration</span></li>
                <li><span>Guided Support</span></li>
                <li><span>Project Showcase</span></li>
                <li><span>Job-Ready Portfolio</span></li>
                <li><span>Resume Help</span></li>
                <li><span>Gained Experience</span></li>
              </ul>
              <div className="image-container">
                <img src={mentor} alt="Projects" />
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProgramDetails;
