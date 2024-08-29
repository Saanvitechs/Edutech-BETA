import React, { useState, useEffect } from 'react';
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
        setError(err.message || 'An error occurred while fetching data.');
      }
    };

    fetchProjectAndAssignmentData();
  }, []);

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!projectData) {
    return <div>Loading project and assignment details...</div>;
  }

  return (
    <div className="assignment-page">
      <h1 className="page-heading">ASSIGNMENT</h1>
      <h2 className="project-name">Project: {projectData.projectName}</h2>
      <table className="assignment-table">
        <thead>
          <tr>
            <th>Assignment Name</th>
            <th>Assigned Date</th>
            <th>Deadline Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{projectData.projectName}</td>
            <td>{new Date(projectData.assignedDate).toLocaleDateString()}</td>
            <td>{new Date(projectData.deadlineDate).toLocaleDateString()}</td>
            <td>{projectData.status}</td>
            <td>{projectData.action}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AssignmentPage;
