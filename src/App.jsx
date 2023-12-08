import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./features/login/Login";
import Dashboard from "./features/dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="overview" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
