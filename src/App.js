import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './hooks/AuthContext';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import AssignmentPage from './components/AssignmentPage';
import ProtectedRoute from './components/ProtectedRoute';
import MembershipPlans from './components/MembershipPlans';
import ProfilePage from './components/ProfilePage';
import SubscriptionPopup from './components/SubscriptionPopup';
import TermsOfUse from './components/TermsOfUse';
import ComingSoon from './components/ComingSoon';
import Resource from './components/Resource';
import StudyContent from './components/StudyContent';
import Arithmetic from './components/Arithmetic';
import NewPageComponent from './components/NewPageComponent';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Referral from './components/Referrals';


function App() {
  const location = useLocation(); // Get the current location

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [location]);

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
          <Route path="/arithmetic" element={<Arithmetic />} />
          <Route path="/studycontent/:id" element={<StudyContent />} />
          <Route path="/planDetails" element={<NewPageComponent />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/referral" element={<Referral />} />

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
