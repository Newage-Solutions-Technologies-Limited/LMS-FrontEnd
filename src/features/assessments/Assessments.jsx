/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../ui/navbar/NavBar";
import SideBar from "../../ui/sidebar/SideBar";
import Header from "../../ui/Header";
import OverviewBox from "../../ui/OverviewBox";
import Pagination from "../../ui/Pagination";
import { courses } from "../courses/CoursesData";
import { GrCopy } from "react-icons/gr";
import { LuTimer } from "react-icons/lu";
import { FiCheckSquare } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";
import "../courses/Courses.css";

export default function Assessments() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [newCourses, setNewCourses] = useState(courses);

  const itemsPerPage = 8;

  // Scroll To top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

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
          <Header title="Assessments" showDate={false} />

          <div className="courses-analysis">
            <div className=" box-style">
              <OverviewBox
                leftTop="Total Assessment"
                leftBottom1="144"
                rightMiddle={
                  <GrCopy size={20} color="#125C41" className="icon-current" />
                }
              />
            </div>

            <div className=" box-style">
              <OverviewBox
                leftTop="Average Score"
                leftBottom1="60%"
                rightMiddle={
                  <LuTimer size={20} color="#886C09" className="icon-current" />
                }
              />
            </div>

            <div className=" box-style">
              <OverviewBox
                leftTop="Average Time Spent"
                leftBottom1="12hrs"
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
                leftTop="Completed Assessment"
                leftBottom1="23"
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
            </div>

            <div className="all-courses">
              {filteredCourses.map((course) => {
                const { id, img, title, lecturers } = course;

                return (
                  <div
                    className="courses-card"
                    key={id}
                    onClick={() => navigate(`/courses/${title}`)}
                  >
                    <div className="course-image">
                      <img src={img} alt="course-name" />
                    </div>

                    <div className="course-details">
                      <h1 className="course-title">{title}</h1>

                      <span className="lecturers">
                        <span className="course-label">Lecturers:</span>
                        <span className="value">
                          {lecturers[0]} & {lecturers.length - 1} other
                          {lecturers.length - 1 > 1 ? "s" : ""}
                        </span>
                      </span>

                      <span className="course-units">
                        <span className="course-label">No. of Questions:</span>
                        <span className="value">50</span>
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
