import { Route, Routes } from "react-router-dom";
import Signup from "./pages/doctors/Signup";

function App() {
  
  return (
    <Routes>
      <Route path="/doctor" element={<Signup />} />
    </Routes>
   
  );
}

export default App;
