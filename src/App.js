import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from './hooks/AuthContext';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import AssignmentPage  from './components/AssignmentPage';
import ProtectedRoute from './components/ProtectedRoute';
import MembershipPlans from './components/MembershipPlans';
import ProfilePage from './components/ProfilePage';
import SubscriptionPopup from './components/SubscriptionPopup';
function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protect these routes */}
          <Route 
            path="/assignments" 
            element={
              <ProtectedRoute>
                <AssignmentPage />
              </ProtectedRoute>
            } 
            
          />
          <Route 
            path="/subscriptionPopup" 
            element={
              <ProtectedRoute>
                <SubscriptionPopup />
              </ProtectedRoute>
            } 
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/assignments" element={<AssignmentPage />} />
          <Route path="/membership-plan" element={<MembershipPlans />} />
          <Route path="/profile" element={<ProfilePage />} />

        
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;