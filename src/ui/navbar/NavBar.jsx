import user from "../../assets/lanre.png";
import {
  IoChatbubbleEllipsesOutline,
  IoNotificationsOutline,
  IoSearchOutline,
} from "react-icons/io5";
import "./NavBar.css";
// import { useTheme } from "../../themes/ThemeProvider";
// import { FaUser } from "react-icons/fa";

function NavBar() {
  // const { isDarkMode, toggleTheme } = useTheme();
  // console.log(isDarkMode);

  return (
    <nav>
      {/* <div className={isDarkMode ? "navbar-dark" : "navbar-light"}>
        <span onClick={toggleTheme}>icon</span>
      </div> */}

      <div></div>

      <div className="search">
        <IoSearchOutline color="#A1A1AA" size={18} className="search-icon" />
        <input type="search" placeholder="Search" />
      </div>

      <div className="icons ">
        <span className="icon other-icons">
          <IoChatbubbleEllipsesOutline size={20} color="#6E917E" />
          <span className="chat">2</span>
        </span>

        <span className="icon split-icons other-icons">
          <IoNotificationsOutline size={20} color="#6E917E" />
          <span className="notifications"></span>
        </span>

        <span className="user icon">
          {/* <FaUser color="#685B5B" size={20} /> */}
          <img src={user} alt="user-image" className="user-image" />
        </span>

        <span>
          <span className="user-name">Olanrewaju O.</span>
          <p className="user-info">
            <span>Web development | </span>
            <span>300lvl</span>
          </p>
        </span>
      </div>
    </nav>
  );
}

export default NavBar;
