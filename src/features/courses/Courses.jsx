import Box from "../../ui/Box";
import Button from "../../ui/Button";
import NavBar from "../../ui/navbar/NavBar";
import SideBar from "../../ui/sidebar/SideBar";
import { PiSortAscendingBold } from "react-icons/pi";
import "./Courses.css";

function Courses() {
  return (
    <section>
      <SideBar />

      <div className="courses-section">
        <NavBar />

        <div className="side-content-body">
          <div className="overview">
            <div className="date">
              <h2>Courses</h2>
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

          <div className="courses-analysis">
            <Box description="Registered Courses" total="24" />
            <Box description="Avg. Learning Time" total="12 hrs" />
            <Box description="On-going Courses" total="5" />
            <Box description="Completed Courses" total="12" />
          </div>

          <div className="side-content-body">
            <div className="overview">
              <div className="date">
                <h3>My Courses</h3>
              </div>

              <div className="session">
                <div className="inputs">
                  <Button
                    width={270}
                    backgroundColor="#fff"
                    fontSize={13}
                    fontWeight={100}
                    hoverIn="#fff"
                    // onClick={onClick}
                  >
                    Sort{" "}
                    <span>
                      <PiSortAscendingBold />
                    </span>
                  </Button>
                  <select name="Filter by" id="">
                    <option value="">Filter by:</option>
                    <option value="">Course title</option>
                    <option value="">Course code</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
