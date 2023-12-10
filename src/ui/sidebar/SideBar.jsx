import Logo from "../Logo";
import { Link } from "react-router-dom";
import edurexLogo from "../../assets/edurex-logo.svg";
import { IoLogOutOutline } from "react-icons/io5";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <Logo
        width={120}
        margin={50}
        imageUrl={edurexLogo}
        imageAlt="edurex-logo"
      />

      <div className="links">
        <Link to="/dashboard" className="active">
          Dashboard
        </Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/quiz-and-exams">Quiz & Exams</Link>
        <Link to="/performace-analysis">Performance</Link>
        <Link to="/help">Help</Link>
        <Link to="/discussions">Discussions</Link>
        <Link to="/messages">Messages</Link>
      </div>

      <div className="logout">
        <a href="#">
          <IoLogOutOutline color=" #008688" size={15} /> <span>Logout</span>
        </a>
      </div>
    </div>
  );
}
