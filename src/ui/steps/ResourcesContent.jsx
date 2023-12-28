import CourseBox from "../course-box/CourseBox";
import { GoLink } from "react-icons/go";
import { FiDownloadCloud } from "react-icons/fi";
import "../../features/courses/Courses.css";

export default function ResourcesContent() {
  return (
    <>
      <h4>Available Resources</h4>
      <div className="course-steps-boxes">
        <CourseBox
          leftTop1="Epidemiology Publication 1"
          leftTop2="Link"
          leftBottom2="2MB"
          rightMiddle={<GoLink color="#06A5A6" />}
        />
        <CourseBox
          leftTop1="Epidemiology Publication 2"
          leftTop2="Document"
          leftBottom2="2MB"
          rightMiddle={<FiDownloadCloud color="#06A5A6" />}
        />
        <CourseBox
          leftTop1="Epidemiology Publication 3"
          leftTop2="Document"
          leftBottom2="2MB"
          rightMiddle={<FiDownloadCloud color="#06A5A6" />}
        />
        <CourseBox
          leftTop1="Epidemiology Publication 4"
          leftTop2="Link"
          leftBottom2="2MB"
          rightMiddle={<GoLink color="#06A5A6" />}
        />

        <CourseBox
          leftTop1="Epidemiology Publication 5"
          leftTop2="Link"
          leftBottom2="2MB"
          rightMiddle={<GoLink color="#06A5A6" />}
        />

        <CourseBox
          leftTop1="Epidemiology Publication 6"
          leftTop2="Document"
          leftBottom2="2MB"
          rightMiddle={<FiDownloadCloud color="#06A5A6" />}
        />
      </div>
    </>
  );
}
