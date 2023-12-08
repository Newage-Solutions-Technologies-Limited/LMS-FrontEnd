import {
  IoChatbubbleEllipsesOutline,
  IoNotificationsOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <div></div>

      <div className="search">
        <IoSearchOutline color="#94A3B8" size={18} />
        <input type="search" placeholder="Search" />
      </div>

      <div className="icons">
        <span>
          <IoChatbubbleEllipsesOutline />
        </span>

        <span>
          <IoNotificationsOutline />
        </span>

        <span className="user">
          <FaUser color="#685B5B" />
        </span>

        <FaAngleDown />
      </div>
    </nav>
  );
}

export default NavBar;
