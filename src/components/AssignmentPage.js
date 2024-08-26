import React, { useState } from 'react';
import './AssignmentPage.css';

function AssignmentPage() {
  // Hardcoded assignment data
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      name: 'Math Homework',
      assignedDate: '2024-08-15',
      deadlineDate: '2024-08-30',
      isCompleted: false,
    },
    {
      id: 2,
      name: 'Science Project',
      assignedDate: '2024-08-10',
      deadlineDate: '2024-08-25',
      isCompleted: false,
    },
    {
      id: 3,
      name: 'History Essay',
      assignedDate: '2024-08-10',
      deadlineDate: '2024-08-28',
      isCompleted: true,
    },
  ]);

  // Handler for toggling completion status
  const toggleCompletion = (assignmentId) => {
    setAssignments(
      assignments.map((assignment) =>
        assignment.id === assignmentId
          ? { ...assignment, isCompleted: !assignment.isCompleted }
          : assignment
      )
    );
  };

  return (
    <div className="assignment-page">
      <h1 className="page-heading">ASSIGNMENT</h1>
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
          {assignments.map((assignment) => (
            <tr key={assignment.id}>
              <td>{assignment.name}</td>
              <td>{new Date(assignment.assignedDate).toLocaleDateString()}</td>
              <td>{new Date(assignment.deadlineDate).toLocaleDateString()}</td>
              <td>{assignment.isCompleted ? 'Completed' : 'Pending'}</td>
              <td>
                <button
                  onClick={() => toggleCompletion(assignment.id)}
                  className={
                    assignment.isCompleted ? 'undo-button' : 'done-button'
                  }
                >
                  {assignment.isCompleted ? ' Done' : 'Mark as Done'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AssignmentPage;
