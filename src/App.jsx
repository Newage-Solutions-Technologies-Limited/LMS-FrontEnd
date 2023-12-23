import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./features/dashboard/Dashboard";
import LoginPage from "./features/loginpage/LoginPage";
import Schedule from "./features/schedule/Schedule";
import Courses from "./features/courses/Courses";
import CourseModules from "./features/courses/CourseModules";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="courses" element={<Courses />} />
        <Route path="/course/:courseId" element={<CourseModules />} />
      </Routes>
    </Router>
  );
}

export default App;
