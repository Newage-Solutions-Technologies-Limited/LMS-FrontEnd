import "./Dashboard.css";
import Header from "../../ui/Header";
import SideBar from "../../ui/sidebar/SideBar";
import NavBar from "../../ui/navbar/NavBar";
import Button from "../../ui/Button";
import OverviewBox from "../../ui/OverviewBox";
import DoughnutChart from "../../ui/doughnut-chart/DoughnutChart";
import { FiRadio } from "react-icons/fi";
import { LuTimer } from "react-icons/lu";
import { GrCopy, GrMicrophone } from "react-icons/gr";
import { CgFileDocument } from "react-icons/cg";
import { IoPlayOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa6";
import PropTypes from "prop-types";
// import BarChart from "../../ui/bar-chart/BarChart";

export default function Dashboard() {
  return (
    <>
      <SideBar />

      <main>
        <NavBar />
        <div className="side-content-body">
          <Header title="Overview" showDate={true} />

          <div className="grid-container">
            <div className="main-content-two">
              <div className="classes box-style">
                <OverviewBox
                  leftTop="Total Registered Courses"
                  leftBottom1="16"
                  rightMiddle={
                    <GrCopy
                      size={25}
                      color="#125C41"
                      className="icon-classes"
                    />
                  }
                />
              </div>

              <div className="time box-style">
                <OverviewBox
                  leftTop="Average Learning Time"
                  leftBottom1="2 hrs"
                  rightMiddle={
                    <LuTimer size={25} color="#886C09" className="icon-time" />
                  }
                />
              </div>

              <div className="current box-style">
                <OverviewBox
                  leftTop="Current CGPA"
                  leftBottom1="4.45"
                  leftBottom2="/ 5.00"
                  rightMiddle={
                    <CgFileDocument
                      size={25}
                      color="#540A7D"
                      className="icon-current"
                    />
                  }
                />
              </div>

              <div className="report">
                <div className="performance">
                  <h4>Learning Activities </h4>
                  <select className="select">
                    <option value="">Today</option>
                    <option value="">Weekly</option>
                    <option value="">Monthly</option>
                    <option value="">Yearly</option>
                  </select>
                </div>

                {/* <BarChart /> */}
              </div>
            </div>

            <aside className="aside upcoming">
              <div className="live-class">
                <FiRadio size={40} className="icon-radio" />
                <h4>
                  Live class is ongoing. <br /> Join now!
                </h4>
                <Button
                  width={50}
                  fontsize={14}
                  fontweight={600}
                  color="#dde1e6"
                  backgroundcolor="#008688"
                  hoverin="#1c9c9e"
                >
                  Join Now
                </Button>
              </div>

              <div className="line"></div>

              <div className="upcoming-classes">
                <Card
                  title="Assignment Submission: EDX 504"
                  date="21/09"
                  time="05:00"
                  color=" #4A044E"
                />

                <Card
                  title="Examination Reminder: EDX 508"
                  date="22/09"
                  time="12:00"
                  color=" #C2410C"
                />

                <Card
                  title="Examination Reminder"
                  date="21/09"
                  time="05:00"
                  color="#047857"
                />

                <Card
                  title="Examination Reminder: EDX 508"
                  date="22/09"
                  time="12:00"
                  color="#6D28D9"
                />
              </div>
            </aside>
          </div>

          <div className="grid-container featured-grid">
            <div className="main-content-three">
              <div className="featured">
                <div className="featured-heading">
                  <h4>Recent Resources</h4>
                  <h5>See all</h5>
                </div>

                <div className="recent-classes">
                  <div className="box-style">
                    <CourseBox
                      leftTop1="EDX 204: Essential Human Virology"
                      leftTop2="Audio"
                      leftBottom1={<LuTimer size={15} />}
                      leftBottom2="01:30 mins"
                      rightMiddle={<GrMicrophone color="#11a75c" />}
                    />
                  </div>

                  <div className="box-style">
                    <CourseBox
                      leftTop1="EDX 204: Essential Human Virology"
                      leftTop2="Video"
                      leftBottom1={<LuTimer size={15} />}
                      leftBottom2="01:30 mins"
                      rightMiddle={<IoPlayOutline color="#11a75c" />}
                    />
                  </div>

                  <div className="box-style">
                    <CourseBox
                      leftTop1="EDX 204: Essential Human Virology"
                      leftTop2="File"
                      leftBottom1={<LuTimer size={15} />}
                      leftBottom2="01:30 mins"
                      rightMiddle={<CgFileDocument color="#11a75c" />}
                    />
                  </div>

                  <div className="box-style">
                    <CourseBox
                      leftTop1="EDX 204: Essential Human Virology"
                      leftTop2="Audio"
                      leftBottom1={<LuTimer size={15} />}
                      leftBottom2="01:30 mins"
                      rightMiddle={<GrMicrophone color="#11a75c" />}
                    />
                  </div>

                  <div className="box-style">
                    <CourseBox
                      leftTop1="EDX 204: Essential Human Virology"
                      leftTop2="Audio"
                      leftBottom1={<LuTimer size={15} />}
                      leftBottom2="01:30 mins"
                      rightMiddle={<GrMicrophone color="#11a75c" />}
                    />
                  </div>

                  <div className="box-style">
                    <CourseBox
                      leftTop1="EDX 204: Essential Human Virology"
                      leftTop2="Video"
                      leftBottom1={<LuTimer size={15} />}
                      leftBottom2="01:30 mins"
                      rightMiddle={<IoPlayOutline color="#11a75c" />}
                    />
                  </div>

                  <div className="box-style">
                    <CourseBox
                      leftTop1="EDX 204: Essential Human Virology"
                      leftTop2="File"
                      leftBottom1={<LuTimer size={15} />}
                      leftBottom2="01:30 mins"
                      rightMiddle={<CgFileDocument color="#11a75c" />}
                    />
                  </div>

                  <div className="box-style">
                    <CourseBox
                      leftTop1="EDX 204: Essential Human Virology"
                      leftTop2="Video"
                      leftBottom1={<LuTimer size={15} />}
                      leftBottom2="01:30 mins"
                      rightMiddle={<IoPlayOutline color="#11a75c" />}
                    />
                  </div>
                </div>
              </div>
            </div>

            <aside className="aside total-resources">
              <h4>Total Resources</h4>
              <div className="doughnut">
                <DoughnutChart />
              </div>

              <div className="chart-details">
                <div className="files">
                  <p>
                    <FaCircle color="rgba(14, 116, 144, 1)" /> Files
                  </p>
                  <p>35.5%</p>
                </div>

                <div className="files">
                  <p>
                    <FaCircle color="rgba(162, 28, 175, 1)" /> Audio
                  </p>
                  <p>15.5%</p>
                </div>

                <div className="files">
                  <p>
                    <FaCircle color="rgba(237, 233, 254, 1)" /> Video
                  </p>
                  <p>13.5%</p>
                </div>

                <div className="files">
                  <p>
                    <FaCircle color="rgba(249, 115, 22, 1)" /> Live Classes
                  </p>
                  <p>35.5%</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}

CourseBox.propTypes = {
  leftTop1: PropTypes.string,
  leftTop2: PropTypes.string,
  leftBottom1: PropTypes.object,
  leftBottom2: PropTypes.string,
  rightMiddle: PropTypes.object,
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

function Card({ title, date, time, color }) {
  const courseCardBorder = {
    borderLeft: `7px solid ${color}`,
  };

  const courseCardTitle = {
    color,
  };

  return (
    <div style={courseCardBorder} className="course-card">
      <span style={courseCardTitle} className="card course-card-title">
        {title}
      </span>
      <p className="card course-card-time">
        <span>
          <LuTimer />
        </span>{" "}
        {date} {time} pm
      </p>
    </div>
  );
}

function CourseBox({
  leftTop1,
  leftTop2 = "",
  leftBottom1,
  leftBottom2 = "",
  rightMiddle,
}) {
  return (
    <div className="boxDesc">
      <div className="course-details">
        <div className="course-title">
          <span className="title">{leftTop1}</span>
          <span className={leftTop2 ? "left-top-2" : "hidden"}>{leftTop2}</span>
        </div>

        <h3>
          {leftBottom1} <span>{leftBottom2}</span>
        </h3>
      </div>
      <p className="progressStyle">{rightMiddle}</p>
    </div>
  );
}
