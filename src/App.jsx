import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./features/dashboard/Dashboard";
import LoginPage from "./loginpage/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<LoginPage />} />

        <Route path="overview" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
