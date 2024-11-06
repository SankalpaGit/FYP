import { Route, Routes } from "react-router-dom";
import Signup from "./pages/doctors/Signup";
import Login from "./pages/doctors/Login";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/admin/Dashboard";
import Credential from "./pages/admin/Credential";
import DoctorDashboard from "./pages/doctors/DoctorDashboard";
import ProtectedRoute from "./secure/ProtectedRoute";
import DoctorApproval from "./pages/admin/DoctorApproval";
import DoctorUser from "./pages/admin/DoctorUser";
import PatientUser from "./pages/admin/PatientUser";

function App() {

  return (
    <Routes>

      {/* route setup for doctor user */}
      <Route path="/doctor" element={<Signup />} />
      <Route path="/doctor/login" element={<Login />} />
      <Route path="/doctor/dashboard" element={<DoctorDashboard />} />

      {/* route setup for admin user */}
      <Route path="/admin/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>} />
      <Route path="/admin/request" element={
        <ProtectedRoute>
          <DoctorApproval />
        </ProtectedRoute>} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/admin" element={<Credential />} />
      < Route path="/admin/user/doctor" element= { <DoctorUser/> } />
      < Route path="/admin/user/patient" element= { <PatientUser/> } />
      
      {/* route setup for patient user */}

        
      {/* 404 page */}
      <Route path="*" element={<NotFound />} />
    </Routes>

  );
}

export default App;
