// import React from 'react';
// import './ArithmeticAptitude.css'; // Include CSS for styling
// import Dashboard from './Dashboard.js'; // Reuse the existing dashboard component

// const ArithmeticAptitude = () => {
//   return (
//     <div className="arithmetic-aptitude-container">
//       <Dashboard /> {/* Display the dashboard on the left side */}
      
//       <div className="content">
//         <h1>Arithmetic Aptitude</h1>
        
//         <p>Arithmetic aptitude is a key skill that involves basic mathematical operations such as addition, subtraction, multiplication, and division. It is commonly tested in various competitive exams and is an essential skill in everyday life.</p>
        
//         <h2>Topics Covered:</h2>
//         <ul>
//           <li>Percentage</li>
//           <li>Profit and Loss</li>
//           <li>Simple and Compound Interest</li>
//           <li>Time and Work</li>
//           <li>Ratio and Proportion</li>
//         </ul>
        
//         <h2>Sample Problem:</h2>
//         <p><strong>Problem:</strong> If a person sells an item for $600 with a 20% profit, what was the cost price of the item?</p>
        
//         <h3>Solution:</h3>
//         <p>
//           Let the cost price be $x. <br />
//           According to the problem:<br />
//           Selling Price = Cost Price + Profit<br />
//           600 = x + 0.2x<br />
//           600 = 1.2x<br />
//           x = 600 / 1.2 = $500<br />
//           <strong>Cost Price = $500</strong>
//         </p>
        
//         <h2>Further Reading:</h2>
//         <p>To explore more on Arithmetic Aptitude, visit the <a href="https://www.geeksforgeeks.org/arithmetic-aptitude/">GeeksforGeeks Arithmetic Aptitude page</a>.</p>
//       </div>
//     </div>
//   );
// };

// export default ArithmeticAptitude;



import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import Dashboard from './Dashboard'; // Reuse the existing dashboard component

const ArithmeticAptitude = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', marginTop: '50px' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '30%' }}>
          <Dashboard /> {/* Display the dashboard on the left side */}
        </div>
        <div>
          <div style={{ flexGrow: 1, padding: '40px', backgroundColor: '#f5f5f5', overflowY: 'auto' }}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography variant="h3" gutterBottom>
                  Arithmetic Aptitude
                </Typography>
              </Grid>

              <Grid item xs={12} md={8}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Arithmetic aptitude is a key skill that involves basic mathematical operations.
                    </Typography>
                    <Typography variant="body1" paragraph>
                      It is commonly tested in various competitive exams and is an essential skill in everyday life.
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                      Topics Covered:
                    </Typography>
                    <ul>
                      <li>Percentage</li>
                      <li>Profit and Loss</li>
                      <li>Simple and Compound Interest</li>
                      <li>Time and Work</li>
                      <li>Ratio and Proportion</li>
                    </ul>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={4}>
                <Card style={{ backgroundColor: '#e3f2fd' }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Sample Problem:
                    </Typography>
                    <Typography variant="body2">
                      If a person sells an item for $600 with a 20% profit, what was the cost price of the item?
                    </Typography>
                    <Box mt={2}>
                      <Typography variant="subtitle1">
                        Solution:
                      </Typography>
                      <Typography variant="body2">
                        Let the cost price be $x. <br />
                        Selling Price = Cost Price + Profit<br />
                        600 = x + 0.2x<br />
                        x = $500<br />
                        <strong>Cost Price = $500</strong>
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Further Reading:
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      href="https://www.geeksforgeeks.org/arithmetic-aptitude/"
                    >
                      Go to GeeksforGeeks Arithmetic Aptitude Page
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArithmeticAptitude;
