import { useParams } from "react-router-dom";
import Accordion from "../../ui/accordion/Accordion";
import NavBar from "../../ui/navbar/NavBar";
import SideBar from "../../ui/sidebar/SideBar";
import { courses } from "./CoursesData";
import { useEffect } from "react";
import Button from "../../ui/Button";
import { FaUsers } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import Steps from "../../ui/steps/Steps";
// import "./Courses.css";

function CourseModules() {
  const { courseTitle } = useParams();
  const selectedCourse = courses.find((course) => course.title === courseTitle);

  // Scroll To top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  if (!selectedCourse) {
    return <div>Course not found</div>;
  }

  return (
    <section>
      <SideBar />

      <div className="courses-section">
        <NavBar />

        <div className="side-content-body">
          <div className="course-card-heading">
            <div className="course-card-heading-left">
              <h2>{selectedCourse.title}</h2>
              <p className="lecturers">
                Lecturers In Charge:{" "}
                <span>{selectedCourse.lecturers[0]}, Prof. Gbademo Alice</span>
              </p>
              <p className="description">
                The study of disease in populations and of factors that
                determine its occurrence over time. The purpose is to describe
                and identify opportunities for intervention
              </p>
            </div>

            <div className="course-card-heading-right">
              <p>
                <span>20% Completed</span>
              </p>
            </div>
          </div>

          <div className="course-modules">
            <h4>Course Contents</h4>
            <div className="course-modules-grid">
              <Accordion selectedCourse={selectedCourse} />

              <div className="course-contents-right">
                <div className="course-video">
                  <div className="course-video-inner">
                    <div>
                      <div className="course-video-header">
                        <span>
                          <FaUsers size={15} className="course-video-icon" />
                          Present : 23 students
                        </span>

                        <span>
                          <FaCircle
                            color="red"
                            size={12}
                            className="course-video-icon"
                          />{" "}
                          00: 02:05
                        </span>
                      </div>

                      <p>
                        Lecture has started. Click <br />
                        &apos;Join Now&apos; to join
                      </p>

                      <Button
                        width={70}
                        fontsize={18}
                        fontweight={900}
                        color="#dde1e6"
                        backgroundcolor="#008688"
                        hoverin="#1c9c9e"
                      >
                        Join Now
                      </Button>
                    </div>
                  </div>
                </div>

                <Steps />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseModules;
