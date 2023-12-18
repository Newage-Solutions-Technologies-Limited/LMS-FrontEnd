import Accordion from "../../ui/accordion/Accordion";
import { courses } from "../courses/CoursesData";

function CourseModules() {
  return (
    <div>
      <Accordion courses={courses} />
    </div>
  );
}

export default CourseModules;
