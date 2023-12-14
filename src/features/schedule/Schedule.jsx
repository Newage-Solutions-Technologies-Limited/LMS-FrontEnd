import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import SideBar from "../../ui/sidebar/SideBar";
import "./Schedule.css";
import NavBar from "../../ui/navbar/NavBar";

export default function Schedule() {
  const localizer = momentLocalizer(moment);

  const events = [
    {
      title: "MCB 504",
      start: new Date(2023, 11, 12, 12, 0),
      end: new Date(2023, 11, 12, 13, 0),
    },
    {
      title: "EDX 501",
      start: new Date(2023, 11, 12, 12, 0),
      end: new Date(2023, 11, 12, 13, 0),
    },

    {
      title: "MTH 511",
      start: new Date(2023, 11, 12, 12, 0),
      end: new Date(2023, 11, 12, 13, 0),
    },

    {
      title: "MCB 504",
      start: new Date(2023, 11, 14, 12, 0),
      end: new Date(2023, 11, 14, 13, 0),
    },

    {
      title: "EDX 501",
      start: new Date(2023, 11, 14, 12, 0),
      end: new Date(2023, 11, 14, 13, 0),
    },

    {
      title: "MTH 511",
      start: new Date(2023, 11, 14, 12, 0),
      end: new Date(2023, 11, 14, 13, 0),
    },

    {
      title: "MCB 504",
      start: new Date(2023, 11, 27, 12, 0),
      end: new Date(2023, 11, 27, 13, 0),
    },

    {
      title: "EDX 501",
      start: new Date(2023, 11, 27, 12, 0),
      end: new Date(2023, 11, 27, 13, 0),
    },

    {
      title: "MTH 511",
      start: new Date(2023, 11, 27, 12, 0),
      end: new Date(2023, 11, 27, 13, 0),
    },
    // Add more events as needed
  ];

  return (
    <section>
      <SideBar />

      <div className="calendar-box">
        <NavBar />

        <div className="side-content-body">
          <div className="grid-container header">
            <div className="main-content-one">
              <h2>Schedule</h2>
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

          <div className="calendar">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              defaultView="month"
              views={["day", "week", "month"]}
              style={{ height: 1000 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
