import React from 'react';
import './TestPage.css';
import Dashboard from './Dashboard.js';
import './ArithmeticAptitude.css'; // Include CSS for styling

const topics = [
  {
    title: 'Logical & Reasoning Tests',
    subtopics: [
      '1. Alphanumeric series',
      '2. Reasoning Analogies',
      '3. Blood Relations',
      '4. Cause and Effect',
      '5. Calendar',
      '6. Logical Problem',
      '7. Letter and Symbol Series',
      '8. Statement and Assumption',
      '9. Statement and Argument',
      '10. Theme Detection'
    ]
  },
  // Add more topics and subtopics as needed
];

const LogicalTest = () => {
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

export default LogicalTest;
