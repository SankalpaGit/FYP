import { Route, Routes } from "react-router-dom";
import Signup from "./pages/doctors/Signup";
import Login from "./pages/doctors/Login";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound"; 
import Dashboard from "./pages/admin/Dashboard";
import Credential from "./pages/admin/Credential";
import DoctorDashboard from "./pages/doctors/DoctorDashboard";

function App() {
  
  return (
    <Routes>
      <Route path="/doctor" element={<Signup />} />
      <Route path="/doctor/login" element={<Login />} />
      <Route path="/admin/dashboard" element={<Dashboard/>} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/admin" element={ <Credential/>} />
      <Route path="/doctor/dashboard" element={<DoctorDashboard/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
   
  );
}

export default App;
