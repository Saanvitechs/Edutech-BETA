// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './Resource.css'; // Include the CSS file for styling
// import { Box, Paper, Grid } from '@mui/material';
// import Dashboard from './Dashboard'; // Import your Dashboard component

// const topics = [
//   { title: 'General Aptitude', content: [{ name: 'Arithmetic Aptitude', path: '/arithmetic-aptitude' }, { name: 'Data Interpretation', path: '/data-interpretation' }, { name: 'Online Aptitude Test', path: '/test/online-aptitude' }] },
//   { title: 'Verbal & Reasoning', content: [{ name: 'Verbal Ability', path: '/verbal-ability' }, { name: 'Logical Reasoning', path: '/logical-reasoning' }, { name: 'Verbal Reasoning', path: '/verbal-reasoning' }] },
//   { title: 'Interview', content: [{ name: 'Placement Papers', path: '/placement-papers' }, { name: 'Group Discussion', path: '/group-discussion' }, { name: 'HR Interview', path: '/hr-interview' }] },
//   { title: 'Engineering', content: [{ name: 'Mechanical Engineering', path: '/mechanical-engineering' }, { name: 'Civil Engineering', path: '/test/civil-engineering' }, { name: 'Chemical Engineering', path: '/test/chemical-engineering' }] },
//   { title: 'Programming', content: [{ name: 'C Programming', path: '/c-programming' }, { name: 'C++ Programming', path: '/cpp-programming' }, { name: 'Java Programming', path: '/java-programming' }] },
//   { title: 'Online Tests', content: [{ name: 'Aptitude Test', path: '/test-page' }, { name: 'Logical Reasoning Test', path: '/logical-test' }, { name: 'C Programming Test', path: '/c-programming-test' }] },
//   { title: 'Technical MCQs', content: [{ name: 'Networking Questions', path: '/networking' }, { name: 'Database Questions', path: '/database' }, { name: 'Operating System', path: '/operating-system' }] },
//   { title: 'Technical Short Answers', content: [{ name: 'Software Testing', path: '/software-testing' }, { name: 'MySQL', path: '/my-sql' }] }
// ];

// const Resource = () => {
//   const token = localStorage.getItem('token'); // Replace with your actual token
//   console.log(token);

//   const [data, setData] = useState(null);
  
//   useEffect(() => {
//     fetch('http://localhost:8080/api/main-topic?mid=1', {
//       method: 'GET',
//       headers: {
//         'Authorization': `${token}`, // Adding the authorization token
//         'Content-Type': 'application/json',
//       },
//     })
//     .then(response => response.json()) // Assuming the response is in JSON format
//     .then(data => setData(data))
//     .catch(error => console.log(error));
//   }, [token]); // Empty dependency array ensures this effect runs once on mount

//   return (
//     <Box style={{ display: 'flex' }}>
//       {/* Sidebar (Dashboard) on the left */}
//       <Box sx={{ width: '250px', backgroundColor: '#f8f9fa', height: '100vh' }}>
//         <Dashboard />
//       </Box>

//       {/* Main Content on the right */}
//       <Box style={{ marginLeft: '1rem', marginTop: '5rem', width: '100%' }}>
//         <h1>Analyze Your Depth</h1>
//         <h2> {data}</h2>
//         <Box sx={{ padding: '50px' }}>
//           <Grid container spacing={2} sx={{ height: '40vh' }}>
//             {topics.map((topic, index) => (
//               <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//                 <Paper
//                   elevation={3}
//                   sx={{
//                     padding: 2,
//                     height: '200px',
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     transition: 'transform 0.3s, box-shadow 0.3s',
//                     '&:hover': {
//                       transform: 'translateY(-5px)',
//                       boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
//                     },
//                   }}
//                 >
//                   <div>
//                     <h3 style={{ color: '#28a745' }}>{topic.title}</h3>
//                     <ul>
//                       {topic.content.map((item, idx) => (
//                         <li key={idx}>
//                           <Link to={item.path} style={{ textDecoration: 'none', color: '#333' }}>
//                             {item.name}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </Paper>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Resource;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Resource.css'; // Include the updated CSS file for dark theme styling
import { Box, Paper, Grid } from '@mui/material';
import Dashboard from './Dashboard'; // Import your Dashboard component

const topics = [
  { title: 'General Aptitude', content: [{ name: 'Arithmetic Aptitude', path: '/arithmetic-aptitude' }, { name: 'Data Interpretation', path: '/data-interpretation' }, { name: 'Online Aptitude Test', path: '/test/online-aptitude' }] },
  { title: 'Verbal & Reasoning', content: [{ name: 'Verbal Ability', path: '/verbal-ability' }, { name: 'Logical Reasoning', path: '/logical-reasoning' }, { name: 'Verbal Reasoning', path: '/verbal-reasoning' }] },
  { title: 'Interview', content: [{ name: 'Placement Papers', path: '/placement-papers' }, { name: 'Group Discussion', path: '/group-discussion' }, { name: 'HR Interview', path: '/hr-interview' }] },
  { title: 'Engineering', content: [{ name: 'Mechanical Engineering', path: '/mechanical-engineering' }, { name: 'Civil Engineering', path: '/test/civil-engineering' }, { name: 'Chemical Engineering', path: '/test/chemical-engineering' }] },
  { title: 'Programming', content: [{ name: 'C Programming', path: '/c-programming' }, { name: 'C++ Programming', path: '/cpp-programming' }, { name: 'Java Programming', path: '/java-programming' }] },
  { title: 'Online Tests', content: [{ name: 'Aptitude Test', path: '/test-page' }, { name: 'Logical Reasoning Test', path: '/logical-test' }, { name: 'C Programming Test', path: '/c-programming-test' }] },
  { title: 'Technical MCQs', content: [{ name: 'Networking Questions', path: '/networking' }, { name: 'Database Questions', path: '/database' }, { name: 'Operating System', path: '/operating-system' }] },
  { title: 'Technical Short Answers', content: [{ name: 'Software Testing', path: '/software-testing' }, { name: 'MySQL', path: '/my-sql' }] }
];

const Resource = () => {
  const token = localStorage.getItem('token'); // Replace with your actual token
  console.log(token);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/main-topic?mid=1', {
      method: 'GET',
      headers: {
        'Authorization': `${token}`, // Adding the authorization token
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json()) // Assuming the response is in JSON format
    .then(data => setData(data))
    .catch(error => console.log(error));
  }, [token]); // Empty dependency array ensures this effect runs once on mount

  return (
    <Box style={{ display: 'flex' }}>
      {/* Sidebar (Dashboard) on the left */}
      <Box sx={{ width: '250px', backgroundColor: '#000000', height: '100vh' }}>
        <Dashboard />
      </Box>

      {/* Main Content on the right */}
      <Box style={{ marginLeft: '1rem', marginTop: '5rem', width: '100%' }}>
        <h1 style={{ color: '#ffcc00' }}>Analyze Your Depth</h1> {/* Updated for dark theme */}
        <h2 style={{ color: '#f0f0f0' }}>Data: {data}</h2> {/* Updated for dark theme */}
        <Box sx={{ padding: '50px' }}>
          <Grid container spacing={2} sx={{ height: '40vh' }}>
            {topics.map((topic, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    padding: 2,
                    height: '200px',
                    backgroundColor: '#1e1e1e', /* Dark background for the card */
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                    },
                  }}
                >
                  <div>
                    <h3 style={{ color: '#ffcc00' }}>{topic.title}</h3> {/* Updated for dark theme */}
                    <ul>
                      {topic.content.map((item, idx) => (
                        <li key={idx}>
                          <Link to={item.path} style={{ textDecoration: 'none', color: '#00bfff' }}>
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
