import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./assets/CommonComponent/LandingPage";
import Login from "./assets/Candidate/Components/Auth/Login";
import Signup from "./assets/Candidate/Components/Auth/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
