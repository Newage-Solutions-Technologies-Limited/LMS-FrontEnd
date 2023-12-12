import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./features/dashboard/Dashboard";
import LoginPage from "./features/loginpage/LoginPage";
import Calendar from "./features/calendar/Calendar";
import Courses from "./features/courses/Courses";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="schedule" element={<Calendar />} />
        <Route path="courses" element={<Courses />} />
      </Routes>
    </Router>
  );
}

export default App;
