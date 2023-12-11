import Logo from "../Logo";
import { Link } from "react-router-dom";
import edurexLogo from "../../assets/edurex-logo.svg";
import { CiHome, CiCalendar } from "react-icons/ci";
import { GrVirtualMachine } from "react-icons/gr";
import {
  IoLogOutOutline,
  IoHelpCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { IoIosCreate } from "react-icons/io";
import { GrScorecard, GrCopy } from "react-icons/gr";
import { GoCommentDiscussion } from "react-icons/go";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <Logo
        width={120}
        margin={80}
        imageUrl={edurexLogo}
        imageAlt="edurex-logo"
      />

      <div className="links">
        <Link to="/dashboard" className="active">
          <CiHome /> Dashboard
        </Link>
        <Link to="/calendar">
          <CiCalendar />
          Schedule
        </Link>
        <Link to="/courses">
          <GrCopy />
          Courses
        </Link>
        <Link to="/quiz-and-exams">
          <GrVirtualMachine />
          Virtual Class
        </Link>
        <Link to="/performace-analysis">
          <IoIosCreate />
          Assessments
        </Link>
        <Link to="/help">
          <GrScorecard />
          Grades
        </Link>
        <Link to="/discussions">
          <GoCommentDiscussion />
          Discussions
        </Link>
        <Link to="/messages">
          <TbBrandGoogleAnalytics />
          Report{" "}
        </Link>
      </div>

      <div className="logout">
        <Link to="#">
          <IoHelpCircleOutline color=" #008688" size={15} /> <span>Help</span>
        </Link>

        <Link to="#">
          <IoSettingsOutline color=" #008688" size={15} /> <span>Settings</span>
        </Link>

        <Link to="#">
          <IoLogOutOutline color=" #008688" size={15} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}
