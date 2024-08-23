
// import React, { useState } from 'react';
// import './ProgramSection.css';

// const ProgramDetails = () => {
//   const [activeTab, setActiveTab] = useState('pre-graduation');

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="program-details-container">
//       <div className="tabs">
//         <button
//           className={`tab-button ${activeTab === 'pre-graduation' ? 'active' : ''}`}
//           onClick={() => handleTabClick('pre-graduation')}
//         >
//           PRE-GRADUATION
//         </button>
//         <button
//           className={`tab-button ${activeTab === 'mentorship' ? 'active' : ''}`}
//           onClick={() => handleTabClick('mentorship')}
//         >
//           MENTORSHIP
//         </button>
//         <button
//           className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
//           onClick={() => handleTabClick('projects')}
//         >
//           PROJECTS
//         </button>
//       </div>
//       <div className="tab-content">
//         {activeTab === 'pre-graduation' && (
//           <div className="content-card">
//             <h2>#PreGraduation</h2>
//             <p className="powered-by">Powered by IBM, Microsoft, Meta</p>
//             <p className="description">
//               Advanced Certification Program, backed by industry giants to become a Globally Certified Professional.
//             </p>
//             <div className="content-details">
//               <ul>
//                 <li><span>4 Months</span> - Industry Backed Curriculum</li>
//                 <li><span>Advanced Certification</span></li>
//                 <li><span>Goal Oriented Learning</span></li>
//                 <li><span>Industry Guest Sessions</span></li>
//                 <li><span>Early Career Opportunities</span></li>
//               </ul>
//               <div className="image-container">
//                 <img src="/path-to-your-image.jpg" alt="PreGraduation" />
//               </div>
//             </div>
//           </div>
//         )}
//         {activeTab === 'mentorship' && (
//           <div className="content-card">
//             {/* Similar content for Mentorship */}
//           </div>
//         )}
//         {activeTab === 'projects' && (
//           <div className="content-card">
//             {/* Similar content for Projects */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProgramDetails;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ProgramSection.css';
import pre from './images/pre.svg';
import pro from './images/project.svg';
import mentor from './images/mentor.svg';

const ProgramDetails = () => {
  const [activeTab, setActiveTab] = useState('pre-graduation');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="program-details-container">
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'pre-graduation' ? 'active' : ''}`}
          onClick={() => handleTabClick('pre-graduation')}
        >
          PRE-GRADUATION
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
        {activeTab === 'pre-graduation' && (
          <div className="content-card">
            <h2>#PreGraduation</h2>
            <p className="powered-by">Powered by STS</p>
            <p className="description">
              Advanced Certification Program, backed by industry giants to become a Globally Certified Professional.
            </p>
            <div className="content-details">
              <ul>
                <li><span>4 Months</span> - Industry Backed Curriculum</li>
                <li><span>Advanced Certification</span></li>
                <li><span>Goal Oriented Learning</span></li>
                <li><span>Industry Guest Sessions</span></li>
                <li><span>Early Career Opportunities</span></li>
              </ul>
              <div className="image-container">
                <img src={pre} alt="PreGraduation" />
              </div>
            </div>
          </div>
        )}
        {activeTab === 'mentorship' && (
          <div className="content-card">
            <h2>#Mentorship</h2>
            <p className="powered-by">Powered by Experts in the Industry</p>
            <p className="description">
              Unlock Your Potential with Our Certification Program. Learn from the best in the industry and gain practical skills through our expert-led certification program.
            </p>
            <div className="content-details">
              <ul>
                <li><span>3 Months</span> - Industry Backed Curriculum</li>
                <li><span>Completion Certification</span></li>
                <li><span>Goal Oriented Learning</span></li>
                <li><span>Guided Projects</span></li>
                <li><span>Expert Mentorship</span></li>
              </ul>
              <div className="image-container">
                <img src={pro} alt="Mentorship" />
              </div>
            </div>
          </div>
        )}
        {activeTab === 'projects' && (
          <div className="content-card">
            <h2>#Projects</h2>
            <p className="powered-by">Backed by Leading Industry Projects</p>
            <p className="description">
              Real-world projects designed to give you hands-on experience. Collaborate with industry professionals on projects that matter.
            </p>
            <div className="content-details">
              <ul>
                <li><span>Multiple Projects</span> - Real Industry Experience</li>
                <li><span>Team Collaboration</span></li>
                <li><span>Mentor Support</span></li>
                <li><span>Project Showcase</span></li>
                <li><span>Job-Ready Portfolio</span></li>
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

