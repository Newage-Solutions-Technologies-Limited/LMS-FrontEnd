import "./Dashboard.css";
import SideBar from "../../ui/sidebar/SideBar";
import NavBar from "../../ui/navbar/NavBar";
import PropTypes from "prop-types";

export default function Dashboard() {
  return (
    <>
      <SideBar />

      <main>
        <NavBar />
        <div className="side-content-body">
          <div className="overview">
            <div className="date">
              <p>Wed 22, 2023</p>
              <h2>Overview</h2>
            </div>

            <div className="session">
              <div className="inputs">
                <select name="" id="">
                  <option value="">2023/2024</option>
                  <option value="">2024/2025</option>
                </select>

                <select name="" id="">
                  <option value="">Second Semester</option>
                  <option value="">First Semester</option>
                </select>
              </div>
            </div>
          </div>

          <div className="boxes">
            <div className="average-total">
              <Box
                description="Total Registered Courses"
                total="16"
                progress="+11"
              />

              <Box
                description="Avg. Learning Time"
                total="2 hrs"
                progress="+11"
              />

              <Box
                description="Current CGPA"
                total="3.56 / 4.00"
                progress="+2"
              />
            </div>

            <div className="upcoming">
              <Box
                description="Current CGPA"
                total="3.56 / 4.00"
                progress="+2"
              />
            </div>
          </div>

          <div className="grid-container">
            <div className="top-div">Top Div</div>
            <div className="bottom-div">Bottom Div 1</div>
            <div className="bottom-div">Bottom Div 2</div>
            <div className="bottom-div">Bottom Div 3</div>
          </div>
        </div>
      </main>
    </>
  );
}

Box.propTypes = {
  description: PropTypes.string,
  total: PropTypes.string,
  progress: PropTypes.string,
};

function Box({ description, total, progress }) {
  const boxStyle = {
    border: "1px solid #DDE1E6",
    width: "100%",
    padding: "6px 20px",
    borderRadius: "8px",
  };

  const boxDesc = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const progressStyle = {
    padding: "5px",
    borderRadius: "14px",
    background: "#F2F4F8",
  };

  return (
    <div style={boxStyle}>
      <h4>{description}</h4>

      <div style={boxDesc}>
        <h3>{total}</h3>
        <p style={progressStyle}>{progress}%</p>
      </div>
    </div>
  );
}
