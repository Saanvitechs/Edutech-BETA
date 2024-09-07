// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import { AuthProvider } from './hooks/AuthContext';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import Login from './components/Login';
// import Register from './components/Register';
// import ForgotPassword from './components/ForgotPassword';
// import AssignmentPage  from './components/AssignmentPage';
// import ProtectedRoute from './components/ProtectedRoute';
// import MembershipPlans from './components/MembershipPlans';
// import ProfilePage from './components/ProfilePage';
// import SubscriptionPopup from './components/SubscriptionPopup';
// import TermsOfUse from './components/TermsOfUse';
// import ComingSoon from './components/ComingSoon';
// import Resource from './components/Resource';
// import StudyContent from './components/StudyContent';
// import Arithmetic from './components/Arithmetic';
// import NewPageComponent from './components/NewPageComponent';


// function App() {
//   return (
//     <AuthProvider>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/terms-of-use" element={<TermsOfUse />} />
//           <Route path="/comingsoon" element={<ComingSoon />} />
//           <Route path="/resource" element={<Resource />} />
//           <Route path="/arithmetic" element={<Arithmetic />} />
//           <Route path="/studycontent/:id" element={<StudyContent />} />
//           <Route path="/new-page-route" element={<NewPageComponent />} /> {/* New page route */}



//           {/* Protect these routes */}
//           <Route 
//             path="/assignments" 
//             element={
//               <ProtectedRoute>
//                 <AssignmentPage />
//               </ProtectedRoute>
//             } 
            
//           />
//           <Route 
//             path="/subscriptionPopup" 
//             element={
//               <ProtectedRoute>
//                 <SubscriptionPopup />
//               </ProtectedRoute>
//             } 
//           />
//           <Route 
//             path="/profile" 
//             element={
//               <ProtectedRoute>
//                 <ProfilePage />
//               </ProtectedRoute>
//             } 
//           />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
        
//           <Route path="/membership-plan" element={<MembershipPlans />} />
        

        
//         </Routes>
//       </div>
//     </AuthProvider>
//   );
// }

// export default App;


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
import Resource from './components/Resource';
import StudyContent from './components/StudyContent';
import Arithmetic from './components/Arithmetic';
import NewPageComponent from './components/NewPageComponent';
// import HomePage from './components/HomePage';  // Ensure this path is correct
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Referral from './components/Referrals'; // Update this if the actual path is different

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
          <Route path="/arithmetic" element={<Arithmetic />} />
          <Route path="/studycontent/:id" element={<StudyContent />} />
          
          {/* New page with testimonials, stats, and referral */}
          <Route path="/new-page-route" element={<NewPageComponent />} />
          {/* <Route path="/home" element={<HomePage />} /> Ensure this component is present */}
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/referral" element={<Referral />} />
          
          {/* Protected Routes */}
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
