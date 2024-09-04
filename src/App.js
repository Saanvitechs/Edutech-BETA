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
import TermsOfUse from './components/TermsOfUse';
import ComingSoon from './components/ComingSoon';
import Resource from './components/Resource'
function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/resource" element={<Resource />} />


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
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } 
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        
          <Route path="/membership-plan" element={<MembershipPlans />} />
        

        
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;