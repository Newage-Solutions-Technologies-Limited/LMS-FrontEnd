import { useState } from "react";
import PropTypes from "prop-types";

Header.propTypes = {
  title: PropTypes.string,
  showDate: PropTypes.bool,
};

function Header({ title, showDate }) {
  const [current, setCurrent] = useState("second");
  const today = new Date();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthsOfYear = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dayOfWeek = daysOfWeek[today.getDay()];
  const monthOfYear = monthsOfYear[today.getMonth()];
  const dayOfMonth = today.getDate();
  const year = today.getFullYear();

  const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${monthOfYear} ${year}`;
  return (
    <div className="grid-container header">
      <div className="main-content-one">
        {showDate && <p>{formattedDate}</p>}
        <h2>{title}</h2>
      </div>

      <div className="inputs aside">
        <select className="select">
          <option value="">2023/2024</option>
          <option value="">2024/2025</option>
        </select>

        <select
          className="select"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
        >
          <option value="first">First Semester</option>
          <option value="second">Second Semester</option>
        </select>
      </div>
    </div>
  );
}

export default Header;
