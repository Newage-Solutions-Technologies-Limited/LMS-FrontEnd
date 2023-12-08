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
            <p>Wed 22, 2023</p>
            <h2>Overview</h2>

            <div className="boxes">
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
          </div>

          <aside>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              nemo dolores vel maiores architecto fugit laboriosam, officiis,
              voluptas fugiat, illum nam recusandae inventore nisi. Adipisci,
              cumque nihil fuga iure iusto exercitationem eveniet repudiandae
              cupiditate accusamus tempore? Molestiae aliquid magni reiciendis.
            </p>
          </aside>
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
    padding: "7px",
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
      <p>{description}</p>

      <div style={boxDesc}>
        <h3>{total}</h3>
        <p style={progressStyle}>{progress}%</p>
      </div>
    </div>
  );
}
