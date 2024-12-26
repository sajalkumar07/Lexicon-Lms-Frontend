import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./assets/CommonComponent/LandingPage";
import Login from "./assets/Candidate/Components/Auth/Login";
import Signup from "./assets/Candidate/Components/Auth/Signup";
import Courses from "./assets/Candidate/Components/Courses/getCourses";
import InstructorDashboard from "./assets/Instructor/Components/InstructorDashboard/DashboardMain";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/get-courses" element={<Courses />} />
        <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
