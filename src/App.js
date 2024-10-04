import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './hooks/AuthContext';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import AssignmentPage from './components/AssignmentPage';
import ProtectedRoute from './components/ProtectedRoute';
import MembershipPlans from './components/MembershipPlans';
import ProfilePage from './components/ProfilePage';
import TermsOfUse from './components/TermsOfUse';
import ComingSoon from './components/ComingSoon';
import Resource from './components/Resource';
import StudyContent from './components/StudyContent';
import Arithmetic from './components/Arithmetic';
import NewPageComponent from './components/NewPageComponent';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Referral from './components/Referrals';
import Knowmore from './components/Knowmore';
import CourseDetails from './components/CourseDetails';
import TopicContent from './components/TopicContent';
function App() {
  const location = useLocation(); // Get the current location

  useEffect(() => {
    // Only scroll to top if the user is not on the pricing-plans route with a specific plan
    const params = new URLSearchParams(location.search);
    const planIndex = params.get('plan');

    if (!location.pathname.includes('/pricing-plans') || planIndex === null) {
      // Scroll to the top of the page whenever the route changes (except when there's a plan in query)
      window.scrollTo(0, 0);
    }
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
          <Route path="/course" element={<NewPageComponent />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/referral" element={<Referral />} />
          <Route path="/pricing-plans" element={<NewPageComponent />} />
          <Route path="/know" element={<Knowmore />} />
          <Route path="/course-details" element={<CourseDetails />} />
          <Route path="/topic/:topicName" element={<TopicContent />} />

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
       <Footer /> 
      </div>
    </AuthProvider>
  );
}

export default App;
