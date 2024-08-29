// import React, { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import { AuthContext } from '../hooks/AuthContext';

// const ProtectedRoute = ({ children }) => {
//   const { isAuthenticated } = useContext(AuthContext);

//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

// export default ProtectedRoute;


// import React, { useContext, useEffect } from 'react';
// import { Navigate, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../hooks/AuthContext';

// const ProtectedRoute = ({ children }) => {
//   const { isAuthenticated } = useContext(AuthContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate('/login');
//     }
//   }, [isAuthenticated, navigate]);

//   if (!isAuthenticated) {
//     return null; // or a loading spinner while checking auth status
//   }

//   return children;
// };

// export default ProtectedRoute;

import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../hooks/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Show a loading indicator while checking authentication
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;

