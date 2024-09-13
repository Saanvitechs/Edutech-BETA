// import React, { useState, useEffect } from 'react';
// import authService from '../services/authService';
// import './AssignmentPage.css';

// function AssignmentPage() {
//   const [projectData, setProjectData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProjectAndAssignmentData = async () => {
//       try {
//         const data = await authService.getProjectAndAssignmentDetails();
//         setProjectData(data); // Set the fetched data
//       } catch (err) {
//         console.error('Error fetching project and assignment data:', err);
//         if (err.response && err.response.status === 404) {
//           setError('Project not found for this user.');
//         } else {
//           setError(err.message || 'An error occurred while fetching data.');
//         }
//       }
//     };

//     fetchProjectAndAssignmentData();
//   }, []);

//   if (error) {
//     return (
//       <div className="assignment-page">
//         <h1 className="page-heading">ASSIGNMENT</h1>
//         <table className="assignment-table">
//           <thead>
//             <tr>
//               <th>Assignment Name</th>
//               <th>Assigned Date</th>
//               <th>Deadline Date</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           {error ? (
//           <tbody>
//             <tr>
//               <td colSpan="5" style={{ textAlign: 'center' }}>{error}</td>
//             </tr>
//           </tbody>            
//           ) : projectData ? (
//           <tbody>
//             <tr>
//               <td>{projectData.projectName}</td>
//               <td>{new Date(projectData.assignedDate).toLocaleDateString()}</td>
//               <td>{new Date(projectData.deadlineDate).toLocaleDateString()}</td>
//               <td>{projectData.status}</td>
//               <td>{projectData.action}</td>
//             </tr>
//           </tbody>
//           ) : (
//           <tbody>
//             <tr>
//               <td colSpan="5" style={{ textAlign: 'center' }}>{error}</td>
//             </tr>
//           </tbody>     
//           )}
//         </table>
//       </div>
//     );
//   }

//   if (!projectData) {
//     return <div>Loading project and assignment details...</div>;
//   }

//   return (
//     <div className="assignment-page">
//       <h1 className="page-heading">ASSIGNMENT</h1>
//       <table className="assignment-table">
//         <thead>
//           <tr>
//             <th>Assignment Name</th>
//             <th>Assigned Date</th>
//             <th>Deadline Date</th>
//             <th>Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>{projectData.projectName}</td>
//             <td>{new Date(projectData.assignedDate).toLocaleDateString()}</td>
//             <td>{new Date(projectData.deadlineDate).toLocaleDateString()}</td>
//             <td>{projectData.status}</td>
//             <td>{projectData.action}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default AssignmentPage;
import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import authService from '../services/authService';
import './AssignmentPage.css';

function AssignmentPage() {
  const [projectData, setProjectData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectAndAssignmentData = async () => {
      try {
        const data = await authService.getProjectAndAssignmentDetails();
        setProjectData(data); // Set the fetched data
      } catch (err) {
        console.error('Error fetching project and assignment data:', err);
        if (err.response && err.response.status === 404) {
          setError('Project not found for this user.');
        } else {
          setError(err.message || 'An error occurred while fetching data.');
        }
      }
    };

    fetchProjectAndAssignmentData();
  }, []);

  if (error) {
    return (
      <Box className="assignment-page">
        <Typography variant="h4" className="page-heading">ASSIGNMENT</Typography>
        <Box className="assignment-card">
          <Typography variant="body1" textAlign="center">{error}</Typography>
        </Box>
      </Box>
    );
  }

  if (!projectData) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box className="assignment-page">
      <Typography variant="h4" className="page-heading">ASSIGNMENT</Typography>
      
      <Box className="assignment-card-container">
        <Box className="assignment-card">
          <Box className="assignment-detail">
            <Typography className="card-title">Assignment Name:</Typography>
            <Typography className="card-value">{projectData.projectName}</Typography>
          </Box>

          <Box className="assignment-detail">
            <Typography className="card-title">Assigned Date:</Typography>
            <Typography className="card-value">{new Date(projectData.assignedDate).toLocaleDateString()}</Typography>
          </Box>

          <Box className="assignment-detail">
            <Typography className="card-title">Deadline Date:</Typography>
            <Typography className="card-value">{new Date(projectData.deadlineDate).toLocaleDateString()}</Typography>
          </Box>

          <Box className="assignment-detail">
            <Typography className="card-title">Status:</Typography>
            <Typography className="card-value">{projectData.status}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AssignmentPage;
