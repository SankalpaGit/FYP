import { Route, Routes } from "react-router-dom";
import Signup from "./pages/doctors/Signup";
import Login from "./pages/doctors/Login";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound"; 

function App() {
  
  return (
    <Routes>
      <Route path="/doctor" element={<Signup />} />
      <Route path="/doctor/login" element={<Login />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
   
  );
}

export default App;
