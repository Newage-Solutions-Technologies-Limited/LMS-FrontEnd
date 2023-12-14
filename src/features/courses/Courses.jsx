import "./Courses.css";
import NavBar from "../../ui/navbar/NavBar";
import SideBar from "../../ui/sidebar/SideBar";
import OverviewBox from "../../ui/OverviewBox";
import { courses } from "./CoursesData";
import { PiSortAscendingBold } from "react-icons/pi";
import { GrCopy } from "react-icons/gr";
import { LuTimer } from "react-icons/lu";
import { FiCheckSquare } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useState } from "react";

function Courses() {
  const [newCourses, setNewCourses] = useState(courses);
  const [sortOrder, setSortOrder] = useState("desc");

  const filtered = courses.filter((course) => {
    return course.progress < 100;
  });

  function handleSorting() {
    const onGoingCourses = newCourses.filter((course) => course.progress < 100);
    const completedCourses = newCourses.filter(
      (course) => course.progress === 100
    );

    let sortedOnGoingCourses;
    let sortedCompletedCourses;

    if (sortOrder === "desc") {
      sortedOnGoingCourses = onGoingCourses.sort(
        (a, b) => b.progress - a.progress
      );
      sortedCompletedCourses = completedCourses.sort(
        (a, b) => b.progress - a.progress
      );
    } else {
      sortedOnGoingCourses = onGoingCourses.sort(
        (a, b) => a.progress - b.progress
      );
      sortedCompletedCourses = completedCourses.sort(
        (a, b) => a.progress - b.progress
      );
    }

    const sortedCourses = [...sortedOnGoingCourses, ...sortedCompletedCourses];
    setNewCourses(sortedCourses);

    // Toggle sorting order for the next click
    setSortOrder((prevOrder) => (prevOrder === "desc" ? "asc" : "desc"));
  }

  return (
    <section>
      <SideBar />

      <div className="courses-section">
        <NavBar />

        <div className="side-content-body">
          <div className="grid-container header">
            <div className="main-content-one">
              <h2>Courses</h2>
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

          <div className="courses-analysis">
            <div className=" box-style">
              <OverviewBox
                leftTop="Registered Courses"
                leftBottom1={`${courses.length}`}
                rightMiddle={
                  <GrCopy size={20} color="#125C41" className="icon-current" />
                }
              />
            </div>

            <div className=" box-style">
              <OverviewBox
                leftTop="On-going Courses"
                leftBottom1={`${filtered.length}`}
                rightMiddle={
                  <LuTimer size={20} color="#886C09" className="icon-current" />
                }
              />
            </div>

            <div className=" box-style">
              <OverviewBox
                leftTop="Completed Courses"
                leftBottom1={`${courses.length - filtered.length}`}
                rightMiddle={
                  <FiCheckSquare
                    size={20}
                    color="#540A7D"
                    className="icon-current"
                  />
                }
              />
            </div>

            <div className=" box-style">
              <OverviewBox
                leftTop="Current CGPA"
                leftBottom1="4.45"
                leftBottom2="/ 5.00"
                rightMiddle={
                  <CgFileDocument
                    size={20}
                    color="#540A7D"
                    className="icon-current"
                  />
                }
              />
            </div>
          </div>

          <div className="course-gallery">
            <div className="my-classes">
              <h4>My Courses</h4>

              <div className="session">
                <div className="sort select" onClick={handleSorting}>
                  <span>Sort</span>
                  <span>
                    <PiSortAscendingBold color="#1D2026" />
                  </span>
                </div>

                <div>
                  <select name="Filter by" id="" className="select">
                    <option value="">Filter by:</option>
                    <option value="">Course title</option>
                    <option value="">Course code</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="all-courses">
              {newCourses.map((course, index) => {
                const {
                  img,
                  title,
                  progress,
                  ratings,
                  lecturers,
                  units,
                  resources,
                } = course;

                return (
                  <div className="courses-card" key={index}>
                    <div className="course-image">
                      <img src={img} alt="course-name" />

                      <span
                        className={`rating ${
                          progress < 100
                            ? "course-tag-uncompleted"
                            : "course-tag-completed"
                        }`}
                      >
                        {progress < 100 ? "On-going" : "Completed"}
                      </span>
                      <div className="progress">
                        <span className="rating">{progress}%</span>
                        <progress
                          id="progress"
                          value={progress / 10}
                          max={10}
                        ></progress>
                      </div>
                    </div>

                    <div className="course-details">
                      <h1 className="course-title">{title}</h1>

                      <span className="course-rating">
                        <span className="course-label">Ratings:</span>
                        <span className="value rating">{ratings}</span>
                        <span>
                          <FaStar color="#FDB022" size={10} />
                          <FaStar color="#FDB022" size={10} />
                          <FaStar color="#FDB022" size={10} />
                          <FaStar color="#FDB022" size={10} />
                          <FaStar color="#FDB022" size={10} />
                        </span>
                      </span>

                      <span className="lecturers">
                        <span className="course-label">Lecturers:</span>
                        <span className="value">{lecturers}</span>
                      </span>

                      <span className="course-units">
                        <span className="course-label">Course Units:</span>
                        <span className="value">
                          {units} unit{units > 1 ? "s" : ""}
                        </span>
                      </span>

                      <span className="course-resources">
                        <span className="course-label">Resources:</span>
                        <span className="value">{resources}</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="pagination">
              <span className="pagination-icon">
                <IoIosArrowRoundBack size={20} color="#64748B" />
              </span>
              <span className="pagination-number">1</span>
              <span className="pagination-number">2</span>
              <span className="pagination-number-3 active-pagination">3</span>
              <span className="pagination-icon right">
                <IoIosArrowRoundForward size={20} color="#64748B" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
