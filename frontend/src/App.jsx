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
import LoginForm from "./pages/patients/LoginForm";
import RegisterForm from "./pages/patients/RegisterForm";
import HomePage from "./pages/patients/HomePage";
import SetFreeTime from "./pages/doctors/SetFreeTime";
import ToDoList from "./pages/doctors/ToDoList";

function App() {

  return (
    <Routes>

      {/* route setup for doctor user */}
      <Route path="/doctor" element={<Signup />} />
      <Route path="/doctor/login" element={<Login />} />
      <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
      <Route path="/doctor/schedule" element={<SetFreeTime/>} />
      <Route path="/doctor/tasks" element={<ToDoList/>} />

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
      < Route path="/admin/user/doctor" element={<DoctorUser />} />
      < Route path="/admin/user/patient" element={<PatientUser />} />

      {/* route setup for patient user */}
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path='/home' element={<HomePage />} />
      
      {/* 404 page when path not found */}
      <Route path="*" element={<NotFound />} />
    </Routes>

  );
}

export default App;
