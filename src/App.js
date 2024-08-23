import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from './hooks/AuthContext';
import Home from './components/Home';
// import Mocks from './components/Mocks';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
// import ThankYouPage from './components/ThankYouPage';
// import MembershipPlans from './components/MembershipPlans';
import ForgotPassword from './components/ForgotPassword';
import ProtectedRoute from './components/ProtectedRoute';
// import ArithmeticAptitude from './components/prepare/ArithmeticAptitude';
// import DataInterpretation from './components/prepare/DataInterpretation';
// import VerbalAbility from './components/prepare/VerbalAbility';
// import LogicalReasoning from './components/prepare/LogicalReasoning';
// import VerbalReasoning from './components/prepare/VerbalReasoning';
// import PlacementPapers from './components/prepare/PlacementPapers';
// import GroupDiscussion from './components/prepare/GroupDiscussion';
// import HrInterview from './components/prepare/HrInterview';
// import Cprogramming from './components/prepare/Cprogramming';
// import CppProgramming from './components/prepare/CppProgramming';
// import JavaProgramming from './components/prepare/JavaProgramming';
// import TestPage from './components/prepare/TestPage';
// import AptitudeTest from './components/AptitudeTest';
// import LogicalTest from './components/prepare/LogicalTest';
// import Networking from './components/prepare/Networking';
// import Database from './components/prepare/Database';
// import OperatingSystem from './components/prepare/OperatingSystem';
// import SoftwareTesting from './components/prepare/SoftwareTesting';
// import Sql from './components/prepare/Sql';
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
          {/* <Route 
            path="/mocks" 
            element={
              <ProtectedRoute>
                <Mocks />
              </ProtectedRoute>
            } 
          /> */}
          <Route 
            path="/test/:testId" 
            element={
              <ProtectedRoute>
                
              </ProtectedRoute>
            } 
          />



          {/* <Route path="/mocks" element={<Mocks />} /> */}
          {/* <Route path="/thank-you" element={<ThankYouPage />} /> */}
          {/* <Route path="/membership-plans" element={<MembershipPlans />} /> */}
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* <Route path="/arithmetic-aptitude" element={<ArithmeticAptitude />} />
          <Route path="/data-interpretation" element={<DataInterpretation />} />
          <Route path="/verbal-ability" element={<VerbalAbility />} />
          <Route path="/logical-reasoning" element={<LogicalReasoning />} />
          <Route path="/verbal-reasoning" element={<VerbalReasoning />} />
          <Route path="/placement-papers" element={<PlacementPapers />} />
          <Route path="/group-discussion" element={<GroupDiscussion />} />
          <Route path="/hr-interview" element={<HrInterview />} />
          <Route path="/c-programming" element={<Cprogramming />} />
          <Route path="/cpp-programming" element={<CppProgramming />} />
          <Route path="/java-programming" element={<JavaProgramming />} />
          <Route path="/test-page" element={<TestPage />} />
          <Route path="/aptitude-test-page/:id" element={<AptitudeTest />} />
          <Route path="/logical-test" element={<LogicalTest />} />
          <Route path="/networking" element={<Networking />} />
          <Route path="/database" element={<Database />} />
          <Route path="/operating-system" element={<OperatingSystem />} />
          <Route path="/software-testing" element={<SoftwareTesting />} />
          <Route path="/my-sql" element={<Sql />} /> */}
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;