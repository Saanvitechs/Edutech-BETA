// import React from 'react';
// import { Link } from 'react-router-dom';
// import { List, ListItem, ListItemText } from '@mui/material';
// import { Box } from '@mui/system';

// const dashboardItems = [
//   { name: 'Home', path: '/' },
//   { name: 'General Aptitude', path: '/general-aptitude' },
//   { name: 'Verbal Ability', path: '/verbal-ability' },
//   { name: 'Logical Reasoning', path: '/logical-reasoning' },
//   { name: 'Programming', path: '/programming' },
//   { name: 'Engineering', path: '/engineering' },
//   { name: 'Online Tests', path: '/online-tests' },
//   { name: 'Interview', path: '/interview' },
//   { name: 'Technical MCQs', path: '/technical-mcqs' },
//   { name: 'Technical Short Answers', path: '/technical-short-answers' },
// ];

// const Dashboard = () => {
//   return (
//     <Box sx={{ padding: 2, height: '100vh', backgroundColor: '#f8f9fa' }}>
//       <h3>Dashboard</h3>
//       <List>
//         {dashboardItems.map((item, index) => (
//           <ListItem button key={index} component={Link} to={item.path}>
//             <ListItemText primary={item.name} />
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );
// };

// export default Dashboard;


import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Box, Typography, Collapse } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AssessmentIcon from '@mui/icons-material/Assessment';
import WorkIcon from '@mui/icons-material/Work';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const dashboardItems = [
  { name: 'Home', path: '/', icon: <HomeIcon /> },
  { name: 'General Aptitude', subtopics: [{ name: 'Arithmetic Aptitude', path: '/arithmetic-aptitude' }, { name: 'Data Interpretation', path: '/data-interpretation' }, { name: 'Online Aptitude Test', path: '/test/online-aptitude' }], icon: <AssessmentIcon /> },
  { name: 'Verbal & Reasoning', subtopics: [{ name: 'Verbal Ability', path: '/verbal-ability' }, { name: 'Logical Reasoning', path: '/logical-reasoning' }, { name: 'Verbal Reasoning', path: '/verbal-reasoning' }], icon: <SchoolIcon /> },
  { name: 'Interview', subtopics: [{ name: 'Placement Papers', path: '/placement-papers' }, { name: 'Group Discussion', path: '/group-discussion' }, { name: 'HR Interview', path: '/hr-interview' }], icon: <WorkIcon /> },
  { name: 'Engineering', subtopics: [{ name: 'Mechanical Engineering', path: '/mechanical-engineering' }, { name: 'Civil Engineering', path: '/test/civil-engineering' }, { name: 'Chemical Engineering', path: '/test/chemical-engineering' }], icon: <EngineeringIcon /> },
  { name: 'Programming', subtopics: [{ name: 'C Programming', path: '/c-programming' }, { name: 'C++ Programming', path: '/cpp-programming' }, { name: 'Java Programming', path: '/java-programming' }], icon: <CodeIcon /> },
  { name: 'Technical MCQs', subtopics: [{ name: 'Networking Questions', path: '/networking' }, { name: 'Database Questions', path: '/database' }, { name: 'Operating System', path: '/operating-system' }], icon: <QuestionAnswerIcon /> },
];

const Dashboard = () => {
  const [openIndex, setOpenIndex] = useState(-1); // To track which menu is open

  // Toggle the subtopic menu
  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? -1 : index); // Toggle the selected index
  };

  return (
    <Box sx={{ padding: 2, height: '100vh', backgroundColor: '#f8f9fa', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <Typography variant="h5" gutterBottom>
        Dashboard
      </Typography>
      <List>
        {dashboardItems.map((item, index) => (
          <div key={index}>
            {/* Render main topic */}
            <ListItem button onClick={() => item.subtopics ? handleClick(index) : null} component={item.subtopics ? 'div' : Link} to={item.subtopics ? undefined : item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
              {item.subtopics ? (openIndex === index ? <ExpandLess /> : <ExpandMore />) : null}
            </ListItem>

            {/* Subtopics inside collapse component */}
            {item.subtopics && (
              <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subtopics.map((subtopic, idx) => (
                    <ListItem button key={idx} component={Link} to={subtopic.path} sx={{ pl: 4 }}>
                      <ListItemText primary={subtopic.name} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </div>
        ))}
      </List>
    </Box>
  );
};

export default Dashboard;

