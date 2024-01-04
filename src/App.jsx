import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./features/dashboard/Dashboard";
import LoginPage from "./features/loginpage/LoginPage";
import Schedule from "./features/schedule/Schedule";
import Courses from "./features/courses/Courses";
import CourseModules from "./features/courses/CourseModules";
import Assessments from "./features/assessments/Assessments";
import AssessmentModules from "./features/assessments/AssessmentModules";
import AssignmentPending from "./features/assessments/assessment-steps/assignment/AssignmentPending";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="courses" element={<Courses />} />
        <Route path="/courses/:courseTitle" element={<CourseModules />} />
        <Route path="assessments" element={<Assessments />} />
        <Route
          path="/assessments/:courseTitle"
          element={<AssessmentModules />}
        />
        <Route
          path="/assessments/pending-assignments"
          element={<AssignmentPending />}
        />
      </Routes>
    </Router>
  );
}

export default App;
