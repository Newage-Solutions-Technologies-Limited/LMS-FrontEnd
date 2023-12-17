import "./Courses.css";
import NavBar from "../../ui/navbar/NavBar";
import SideBar from "../../ui/sidebar/SideBar";
import OverviewBox from "../../ui/OverviewBox";
import Header from "../../ui/Header";
import Pagination from "../../ui/Pagination";
import { courses } from "./CoursesData";
import { PiSortAscendingBold } from "react-icons/pi";
import { GrCopy } from "react-icons/gr";
import { LuTimer } from "react-icons/lu";
import { FiCheckSquare } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

function Courses() {
  const [currentPage, setCurrentPage] = useState(1);
  const [newCourses, setNewCourses] = useState(courses);
  const [sortOrder, setSortOrder] = useState("desc");
  const itemsPerPage = 8;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const calculatePaginatedCourses = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return newCourses.slice(startIndex, endIndex);
  };

  const filtered = courses.filter((course) => {
    return course.progress < 100;
  });

  function handleSorting() {
    const onGoingCourses = calculatePaginatedCourses().filter(
      (course) => course.progress < 100
    );
    const completedCourses = calculatePaginatedCourses().filter(
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

    setSortOrder((prevOrder) => (prevOrder === "desc" ? "asc" : "desc"));
  }

  const [selectedOption, setSelectedOption] = useState("default");
  let filteredCourses;

  if (selectedOption === "default")
    filteredCourses = calculatePaginatedCourses();
  if (selectedOption === "ongoing")
    filteredCourses = newCourses.filter((courses) => courses.progress < 100);
  if (selectedOption === "completed")
    filteredCourses = newCourses.filter((courses) => courses.progress === 100);

  return (
    <section>
      <SideBar />

      <div className="courses-section">
        <NavBar />

        <div className="side-content-body">
          <Header title="Courses" showDate={false} />

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
                  <select
                    name="Filter by"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="select"
                  >
                    <option value="default">All Courses</option>
                    <option value="ongoing">My On-going Courses</option>
                    <option value="completed">My Completed Courses</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="all-courses">
              {filteredCourses.map((course, index) => {
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
                        <span className="value">
                          {lecturers[0]} & {lecturers.length - 1} other
                          {lecturers.length - 1 > 1 ? "s" : ""}
                        </span>
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

            {selectedOption === "default" && (
              <Pagination
                courses={newCourses}
                onPageChange={handlePageChange}
                currentPage={currentPage}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
