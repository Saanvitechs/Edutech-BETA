import React, { useEffect } from 'react';
import './Notification.css'; // Add necessary styles here

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    // Auto close the notification after 3 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [onClose]);

  return (
    <div className="notification">
      <p>{message}</p>
    </div>
  );
};

export default Notification;
