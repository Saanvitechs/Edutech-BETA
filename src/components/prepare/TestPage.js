import React from 'react';
import './TestPage.css';
import Dashboard from './Dashboard.js';
import './ArithmeticAptitude.css'; // Include CSS for styling

const topics = [
  {
    title: 'Aptitude Tests',
    subtopics: [
      '1. Numbers',
      '2. Percentage',
      '3. Profit and Loss',
      '4. Average',
      '5. Ratio and Proportion',
      '6. Mixture and Alligation',
      '7. Time and Work',
      '8. Time Speed Distance',
      '9. Pipes and Cisterns',
      '10. Algebra'
    ]
  },
  // Add more topics and subtopics as needed
];

const TestPage = () => {
  return (
    <div className="test-page-container">
      <Dashboard/>
      <div className='content'>
      <div className="content-section">
        <div className="topics-container">
          
            {topics.map((topic, index) => (
                <div key={index} className="topic">
                <h3>{topic.title}</h3>
                <div style={{ display: 'flex', justifyContent: 'left', textAlign: 'left' }}>
                <ul>
                    {topic.subtopics.map((subtopic, idx) => (
                    <li key={idx}>
                        <a href={`/aptitude-test-page/${idx + 1}`}>{subtopic}</a>
                    </li>
                    ))}
                </ul>
                </div>
                </div>
            ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default TestPage;
