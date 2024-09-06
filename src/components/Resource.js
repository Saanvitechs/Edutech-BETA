import React from 'react';
import { Link } from 'react-router-dom';
import './Resource.css'; // Include the updated CSS file for dark theme styling
import { Box, Paper, Grid } from '@mui/material';
import Dashboard from './Dashboard'; // Import your Dashboard component

const topics = [
  { title: 'General Aptitude', content: [{ name: 'Arithmetic Aptitude', path: '/arithmetic' }, { name: 'Data Interpretation', path: '/data-interpretation' }, { name: 'Online Aptitude Test', path: '/test/online-aptitude' }] },
  { title: 'Verbal & Reasoning', content: [{ name: 'Verbal Ability', path: '/verbal-ability' }, { name: 'Logical Reasoning', path: '/logical-reasoning' }, { name: 'Verbal Reasoning', path: '/verbal-reasoning' }] },
  { title: 'Interview', content: [{ name: 'Placement Papers', path: '/placement-papers' }, { name: 'Group Discussion', path: '/group-discussion' }, { name: 'HR Interview', path: '/hr-interview' }] },
  { title: 'Engineering', content: [{ name: 'Mechanical Engineering', path: '/mechanical-engineering' }, { name: 'Civil Engineering', path: '/test/civil-engineering' }, { name: 'Chemical Engineering', path: '/test/chemical-engineering' }] },
  { title: 'Programming', content: [{ name: 'C Programming', path: '/c-programming' }, { name: 'C++ Programming', path: '/cpp-programming' }, { name: 'Java Programming', path: '/java-programming' }] },
  { title: 'Online Tests', content: [{ name: 'Aptitude Test', path: '/test-page' }, { name: 'Logical Reasoning Test', path: '/logical-test' }, { name: 'C Programming Test', path: '/c-programming-test' }] },
  { title: 'Technical MCQs', content: [{ name: 'Networking Questions', path: '/networking' }, { name: 'Database Questions', path: '/database' }, { name: 'Operating System', path: '/operating-system' }] },
  { title: 'Technical Short Answers', content: [{ name: 'Software Testing', path: '/software-testing' }, { name: 'MySQL', path: '/my-sql' }] }
];

const Resource = () => {
  return (
    <Box className="resource-container">
      <Box sx={{ width: '350px', backgroundColor: '#000000', height: '100vh' }}>
        <Dashboard />
      </Box>

      <Box className="resource-content">
        <h1 style={{ color: '#ffcc00' }}>Analyze Your Depth</h1>
        
        <Box sx={{ padding: '50px' }}>
          <Grid container spacing={4} sx={{ height: '100%' }}>
            {topics.map((topic, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Paper
                  className="resource-topic-card"
                  sx={{
                    backgroundColor: '#1e1e1e',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%', /* Ensure all cards take up equal height */
                  }}
                >
                  <div>
                    <h3 style={{ color: '#ffcc00', textAlign: 'center' }}>{topic.title}</h3>
                    <ul style={{ listStyle: 'none' }}>
                      {topic.content.map((item, idx) => (
                        <li key={idx}>
                          <Link to={item.path} style={{ textDecoration: 'none', color: '#ffff' }}>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Resource;
