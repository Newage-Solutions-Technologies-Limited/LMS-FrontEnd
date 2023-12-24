import CourseBox from "../CourseBox";
import { GoLink } from "react-icons/go";
import { FiDownloadCloud } from "react-icons/fi";
import "../../features/courses/Courses.css";

export default function ResourcesContent() {
  return (
    <div className="course-steps-boxes">
      <CourseBox
        leftTop1="Epidemiology Publication 1"
        leftTop2="Link"
        leftBottom1="2MB"
        rightMiddle={<GoLink />}
      />
      <CourseBox
        leftTop1="Epidemiology Publication 2"
        leftTop2="Document"
        leftBottom1="2MB"
        rightMiddle={<FiDownloadCloud />}
      />
      <CourseBox
        leftTop1="Epidemiology Publication 3"
        leftTop2="Document"
        leftBottom1="2MB"
        rightMiddle={<FiDownloadCloud />}
      />
      <CourseBox
        leftTop1="Epidemiology Publication 4"
        leftTop2="Link"
        leftBottom1="2MB"
        rightMiddle={<GoLink />}
      />

      <CourseBox
        leftTop1="Epidemiology Publication 5"
        leftTop2="Link"
        leftBottom1="2MB"
        rightMiddle={<GoLink />}
      />

      <CourseBox
        leftTop1="Epidemiology Publication 6"
        leftTop2="Document"
        leftBottom1="2MB"
        rightMiddle={<FiDownloadCloud />}
      />
    </div>
  );
}
