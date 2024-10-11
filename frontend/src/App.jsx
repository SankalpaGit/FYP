import { Route, Routes } from "react-router-dom";
import Signup from "./pages/doctors/Signup";
import Login from "./pages/doctors/Login";

function App() {
  
  return (
    <Routes>
      <Route path="/doctor" element={<Signup />} />
      <Route path="/doctor/login" element={<Login />} />
    </Routes>
   
  );
}

export default App;
