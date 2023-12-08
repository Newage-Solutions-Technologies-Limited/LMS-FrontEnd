import Logo from "../Logo";
import adinLogo from "../../assets/adin-logo.svg";
import { IoLogOutOutline } from "react-icons/io5";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <Logo width={200} margin={30} imageUrl={adinLogo} imageAlt="adin-logo" />

      <div className="links">
        <a href="#section1" className="active">
          Dashboard
        </a>
        <a href="#section2">Calendar</a>
        <a href="#section3">Courses</a>
        <a href="#section4">Quiz & Exams</a>
        <a href="#section5">Performance</a>
        <a href="#section6">Help</a>
        <a href="#section7">Discussions</a>
        <a href="#section8">Messages</a>
      </div>

      <div className="logout">
        <a href="#">
          <IoLogOutOutline color=" #008688" size={15} /> <span>Logout</span>
        </a>
      </div>
    </div>
  );
}
