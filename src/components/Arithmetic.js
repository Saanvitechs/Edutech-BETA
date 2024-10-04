import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Grid } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import './Arithmetic.css'; // Import your custom styles
import Dashboard from './Dashboard'; // Your custom dashboard component

const topics = [
  'Problems on Trains', 'Time and Distance', 'Height and Distance',
  'Time and Work', 'Simple Interest', 'Compound Interest',
  'Profit and Loss', 'Partnership', 'Percentage',
  'Problems on Ages', 'Calendar', 'Clock',
  'Average', 'Area', 'Volume and Surface Area',
  'PnC', 'Numbers', 'Problems on Numbers',
  'H.C.F and L.C.M', 'Decimal Fraction', 'Simplification',
  'Square Root and Cube Root', 'Surds and Indices', 'Ratio and Proportion',
  'Chain Rule', 'Pipes and Cistern', 'Boats and Streams',
  'Alligation or Mixture', 'Logarithm', 'Races and Games',
  'Stocks and Shares', 'Probability'
];

const topicsWithUrls = topics.map(topic => ({
  name: topic,
  url: `/${topic.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`
}));

const Arithmetic = () => {
  return (
    <Box className="arithmetic-page-container">
      {/* Sidebar (Dashboard) */}
      <Box className="dashboard-section">
        <Dashboard />
      </Box>

      {/* Main Content Section */}
      <Box className="content-section">
        <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '5rem', marginBottom: '3rem', color: 'rgba(209, 255, 5)' }}>
          Arithmetic Topics
        </Typography>

        {/* Grid of Topics */}
        <Grid container spacing={2} className="topics-grid">
          {topicsWithUrls.map((topic, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2.75} key={index} className="topic-grid-item" style={{ marginBottom: '1rem' }}>
              <Link to={`/topic${topic.url}`} className="topic-link">
                <FolderIcon className="folder-icon" />
                <Typography variant="body1" className="topic-title">
                  {topic.name}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Arithmetic;
