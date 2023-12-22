import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import adinLogo from "../../assets/adin-logo.svg";
import { CiHome, CiCalendar } from "react-icons/ci";
import {
  IoLogOutOutline,
  IoHelpCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { IoIosCreate } from "react-icons/io";
import { GrScorecard, GrCopy } from "react-icons/gr";
import { GoCommentDiscussion } from "react-icons/go";
import Logo from "../Logo";
import "./SideBar.css";

export default function SideBar() {
  const location = useLocation();

  useEffect(() => {
    const tabName = location.pathname.split("/").pop() || "Home";
    const capitalizedTabName = tabName.slice(0, 1).toUpperCase();
    document.title = `${capitalizedTabName}${tabName.slice(
      1
    )} | Adin University`;
  }, [location.pathname]);

  return (
    <div className="sidebar">
      <Logo
        width={200}
        margin={60}
        imageUrl={adinLogo}
        imageAlt="Adin University Logo"
      />

      <div className="links">
        <NavLink to="/dashboard" className="menu ">
          <div className="menu-link">
            <CiHome className="menu-icon" size={18} />
            <span>Dashboard</span>
          </div>
        </NavLink>
        <NavLink to="/schedule" className="menu">
          <div className="menu-link">
            <CiCalendar size={18} className="menu-icon" />
            <span>Schedule</span>
          </div>
        </NavLink>
        <NavLink to="/courses">
          <div className="menu-link">
            <GrCopy size={15} className="menu-icon" />
            <span>Courses</span>
          </div>
        </NavLink>

        <NavLink to="/assessments">
          <div className="menu-link">
            <IoIosCreate size={15} className="menu-icon" />
            <span>Assessments</span>
          </div>
        </NavLink>
        <NavLink to="/grades">
          <div className="menu-link">
            <GrScorecard size={15} className="menu-icon" />
            <span>Grades</span>
          </div>
        </NavLink>

        <NavLink to="/discussions">
          <div className="menu-link">
            <GoCommentDiscussion size={15} className="menu-icon" />
            <span>Discussions</span>
          </div>
        </NavLink>
      </div>

      <div className="links second-part-links">
        <NavLink to="/help">
          <div className="menu-link">
            <IoHelpCircleOutline size={15} className="menu-icon" />
            <span>Help</span>
          </div>
        </NavLink>

        <NavLink to="/settings">
          <div className="menu-link">
            <IoSettingsOutline className="menu-icon" size={15} />
            <span>Settings</span>
          </div>
        </NavLink>

        <NavLink to="/">
          <div className="menu-link logout">
            <IoLogOutOutline color="red" size={15} className="menu-icon" />
            <span className="">Logout</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

{
  /* 
  import { TbBrandGoogleAnalytics } from "react-icons/tb";
  
  <NavLink to="/virtual-class">
<div className="menu-link">
  <GrVirtualMachine size={15} className="menu-icon" />
  <span>Virtual Class</span>
</div>
</NavLink>

<NavLink to="/report">
<div className="menu-link">
  <TbBrandGoogleAnalytics size={15} className="menu-icon" />
  <span>Report</span>
</div>
</NavLink> */
}
