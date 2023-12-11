import "./Dashboard.css";
import SideBar from "../../ui/sidebar/SideBar";
import NavBar from "../../ui/navbar/NavBar";
import { FiRadio } from "react-icons/fi";
import Button from "../../ui/Button";
import { LuTimer } from "react-icons/lu";
import PropTypes from "prop-types";

export default function Dashboard() {
  return (
    <>
      <SideBar />

      <main>
        <NavBar />
        <div className="side-content-body">
          <div className="grid-container header">
            <div className="main-content-one">
              <p>Wed 22, 2023</p>
              <h2>Overview</h2>
            </div>

            <div className="inputs aside">
              <select className="select">
                <option value="">2023/2024</option>
                <option value="">2024/2025</option>
              </select>

              <select className="select">
                <option value="">Second Semester</option>
                <option value="">First Semester</option>
              </select>
            </div>
          </div>

          <div className="grid-container">
            <div className="main-content-two">
              <div className="classes box-style">
                <h4>Total Registered Courses</h4>
                <div className="boxDesc">
                  <h3>16</h3>
                  <p className="progressStyle">+11%</p>
                </div>
              </div>

              <div className="time box-style">
                <h4>Avg. Learning Time</h4>
                <div className="boxDesc">
                  <h3>2 hrs</h3>
                  <p className="progressStyle">+11%</p>
                </div>
              </div>

              <div className="current box-style">
                <h4>Current CGPA</h4>
                <div className="boxDesc">
                  <h3>3.56 / 4.00</h3>
                  <p className="progressStyle">+2%</p>
                </div>
              </div>

              <div className="report">
                <div className="performance">
                  <h4>Performance Report </h4>
                  <select className="select">
                    <option value="">Today</option>
                    <option value="">Tomorrow</option>
                  </select>
                </div>
              </div>
            </div>

            <aside className="aside upcoming">
              <div className="live-class">
                <FiRadio size={40} bg="#fff" />
                <h4>
                  Live class is ongoing. <br /> Join now!
                </h4>
                <Button
                  width={70}
                  fontWeight={600}
                  color="#fff"
                  backgroundColor="#008688"
                  hoverIn="#a1dfe4"
                >
                  Join Now!
                </Button>
              </div>

              <div className="upcoming-classes">
                <Card
                  title="Assignment Submission: EDX 504"
                  date="21/09"
                  time="05:00"
                  color=" #4A044E"
                />

                <Card
                  title="Assignment Submission: EDX 504"
                  date="21/09"
                  time="05:00"
                  color=" #C2410C"
                />

                <Card
                  title="Assignment Submission: EDX 504"
                  date="21/09"
                  time="05:00"
                  color="#047857"
                />
              </div>
            </aside>
          </div>

          <div className="grid-container featured-grid">
            <div className="main-content-three">
              <div className="featured">
                <h4>Featured Courses</h4>
              </div>
            </div>

            <aside className="aside total-resources">
              <h4>Total Resources</h4>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

function Card({ title, date, time, color }) {
  const courseCard = {
    border: "1px solid #dde1e6",
    borderRadius: "8px",
    padding: "0 5px",
    marginTop: "12px",
    // width: "100%",
    color,
  };

  const courseCardBorder = {
    borderLeft: `7px solid ${color}`,
    padding: "0 8px",
  };

  return (
    <div style={courseCard}>
      <div style={courseCardBorder}>
        <h6>{title}</h6>
        <h6>
          <span>
            <LuTimer />
          </span>{" "}
          {date} {time} pm
        </h6>
      </div>
    </div>
  );
}
