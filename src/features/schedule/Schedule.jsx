import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import SideBar from "../../ui/sidebar/SideBar";
import "./Schedule.css";
import NavBar from "../../ui/navbar/NavBar";
import Header from "../../ui/Header";

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
          <Header title="Schedule" showDate={false} />

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
