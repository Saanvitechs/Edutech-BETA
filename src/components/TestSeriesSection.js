import React from 'react';
import './TestSeriesSection.css';
import testSeriesImage from './images/learning.svg'; // Ensure the correct path to your image

const TestSeriesSection = () => {
  return (
    <div className="test-series-container">
      <div className="test-series-content">
        <h2>Enroll in On-Job-Training for upgrading your skills with <span>STS <span className="mock">MOCK</span></span></h2>
        <p>Get unlimited access to the most relevant Mock Tests</p>
        <h3>What you get with Us</h3>
        <ul className="benefits-list">
          <li>
            <span className="icon">&#x1F3C6;</span> {/* Trophy Icon */}
            <p><strong>On-Job-Training</strong></p>
          </li>
          <li>
            <span className="icon">&#x1F4C8;</span> {/* Bar Chart Icon */}
            <p><strong>Interview Preperation</strong></p>
          </li>
          <li>
            <span className="icon">&#x1F4DD;</span> {/* Clipboard Icon */}
            <p><strong>Live Projects</strong></p>
          </li>
          <li>
            <span className="icon">&#x1F310;</span> {/* Globe Icon */}
            <p><strong>Mock Tests</strong></p>
          </li>
        </ul>
        <a href="/mocks" className="explore-btn">
          Explore More
        </a>
      </div>
      <div className="test-series-image">
        <img src={testSeriesImage} alt="Test Series" />
      </div>
    </div>
  );
};

export default TestSeriesSection;
