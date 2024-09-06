import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Box } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import './Arithmetic.css'; // Import your custom styles
import Dashboard from './Dashboard';

const topics = [
    'Problems on Trains', 'Time and Distance', 'Height and Distance',
    'Time and Work', 'Simple Interest', 'Compound Interest',
    'Profit and Loss', 'Partnership', 'Percentage',
    'Problems on Ages', 'Calendar', 'Clock',
    'Average', 'Area', 'Volume and Surface Area',
    'PnC', 'Numbers', 'Problems on Numbers',
    ' H.C.F and L.C.M', 'Decimal Fraction', 'Simplification',
    'Square Root and Cube Root', 'Surds and Indices', 'Ratio and Proportion',
    'Chain Rule', 'Pipes and Cistern', 'Boats and Streams',
    'Alligation or Mixture', 'Logarithm', 'Races and Games',
    'Stocks and Shares', 'Probability'
  ];
  
  const topicsWithUrls = topics.map(topic => ({
    name: topic,
    url: `/${topic.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}` // No need to escape the hyphen
  }));
  

const Arithmetic = () => {
  return (
    <Box className="resource-container" style={{ display: 'flex' }}>
      <Box sx={{ flex: '2', backgroundColor: '#333333', height: '100%', color: '#fff' }}>
        <Dashboard />
      </Box>
      <Box className="arithmetic-container" sx={{ flex: '10' }}>
        <Box className="my-5 pt-5" style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Arithmetic Topics
        </Typography>
        </Box>
        <Box>
        <Grid container spacing={0} className="topics-grid" style={{ display: 'flex', justifyContent: 'space-between' }}>
          {topicsWithUrls.map((topic, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <div className="topic-item">
                <Link to={`/studycontent${topic.url}`} className="topic-link" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <FolderIcon className="folder-icon" />
                    </div>
                    <div>
                    <Typography variant="body1" className="topic-title" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        {topic.name}
                    </Typography>
                    </div>
                </Link>
                </div>

            </Grid>
          ))}
        </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Arithmetic;
