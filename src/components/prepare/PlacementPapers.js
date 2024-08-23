import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import Dashboard from './Dashboard'; // Reuse the existing dashboard component

const PlacementPapers = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', marginTop: '50px' }}>
      <Dashboard /> {/* Display the dashboard on the left side */}

      <div style={{ display: 'flex', height: '100vh', marginTop: '50px' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '30%' }}></div>

      <div style={{ flexGrow: 1, padding: '40px', backgroundColor: '#f5f5f5', overflowY: 'auto' }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom>
            Placement Papers
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

export default PlacementPapers;