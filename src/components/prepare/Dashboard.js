// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './Dashboard.css';

// const topics = [
//   { name: 'Arithmetic Aptitude', path: '/arithmetic-aptitude' },
//   { name: 'Logical Reasoning', path: '/logical-reasoning' },
//   // Add more topics here
// ];

// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <h3>Topics</h3>
//       <ul>
//         {topics.map((topic, index) => (
//           <li key={index}>
//             <NavLink to={topic.path} activeClassName="active-link">
//               {topic.name}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Dashboard;


import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dashboard.css';

const topics = [
  { name: 'General Aptitude', path: '/arithmetic-aptitude' },
  { name: 'Verbal & Reasoning', path: '/verbal-reasoning' },
  { name: 'Interview', path: '/interview' },
  { name: 'Engineering', path: '/engineering' },
  { name: 'Programming', path: '/programming' },
  { name: 'Online Tests', path: '/online-tests' },
  { name: 'Technical MCQs', path: '/technical-mcqs' },
  { name: 'Technical Short Answers', path: '/technical-short-answers' }
];

const Dashboard = () => {
  return (
    <div className="sidebar">
      <h2>Topics</h2>
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>
            <NavLink to={topic.path} activeClassName="active-link">
              {topic.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
