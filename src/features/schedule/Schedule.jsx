import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
// import listPlugin from "@fullcalendar/list";
import SideBar from "../../ui/sidebar/SideBar";
import NavBar from "../../ui/navbar/NavBar";
import Header from "../../ui/Header";

// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";
import "./Schedule.css";

export default function Schedule() {
  const [events, setEvents] = useState([]);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    setEvents([
      {
        title: "MCB 504",
        start: new Date(2023, 11, 12, 12, 0),
        end: new Date(2023, 11, 12, 13, 0),
        extendedProps: {
          description: "This is event 1",
        },
      },
      {
        title: "EDX 501",
        start: new Date(2023, 11, 12, 12, 0),
        end: new Date(2023, 11, 12, 13, 0),
        extendedProps: {
          description: "This is event 2",
        },
      },

      {
        title: "MTH 511",
        start: new Date(2023, 11, 12, 12, 0),
        end: new Date(2023, 11, 12, 13, 0),
        extendedProps: {
          description: "This is event 3",
        },
      },

      {
        title: "MCB 504",
        start: new Date(2023, 11, 14, 12, 0),
        end: new Date(2023, 11, 14, 13, 0),
        extendedProps: {
          description: "This is event 4",
        },
      },

      {
        title: "EDX 501",
        start: new Date(2023, 11, 14, 12, 0),
        end: new Date(2023, 11, 14, 13, 0),
        extendedProps: {
          description: "This is event 5",
        },
      },

      {
        title: "MTH 511",
        start: new Date(2023, 11, 14, 12, 0),
        end: new Date(2023, 11, 14, 13, 0),
        extendedProps: {
          description: "This is event 6",
        },
      },

      {
        title: "MCB 504",
        start: new Date(2023, 11, 27, 12, 0),
        end: new Date(2023, 11, 27, 13, 0),
        extendedProps: {
          description: "This is event 7",
        },
      },

      {
        title: "EDX 501",
        start: new Date(2023, 11, 27, 12, 0),
        end: new Date(2023, 11, 27, 13, 0),
        extendedProps: {
          description: "This is event 8",
        },
      },

      {
        title: "MTH 511",
        start: new Date(2023, 11, 27, 12, 0),
        end: new Date(2023, 11, 27, 13, 0),
        extendedProps: {
          description: "This is event 9",
        },
      },
    ]);
  }, []);

  const handleEventClick = (info) => {
    setModalData(info.event.extendedProps.description);
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  return (
    <section>
      <SideBar />

      <div className="calendar-box">
        <NavBar />

        <div className="side-content-body">
          <Header title="Schedule" showDate={false} />

          <div className="calendar">
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
              initialView="dayGridMonth"
              // initialView="timeGridWeek"
              headerToolbar={{
                left: "timeGridDay,timeGridWeek,dayGridMonth",
                center: "title",
                right: "prev today next",
              }}
              buttonText={{
                today: "Today",
                month: "Month",
                week: "Week",
                day: "Day",
                prev: "<",
                next: ">",
              }}
              events={events}
              eventClick={handleEventClick}
            />

            {modalData && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={handleCloseModal}>
                    &times;
                  </span>
                  <h2>{modalData.title}</h2>
                  <p>
                    <strong>Start:</strong> {modalData.toLocaleString()}
                  </p>
                  <p>
                    <strong>End:</strong> {modalData.toLocaleString()}
                  </p>
                  {/* Add more information as needed */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// import { Calendar, momentLocalizer } from "react-big-calendar";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import moment from "moment";
// const localizer = momentLocalizer(moment);

// {
//   title: "MCB 504",
//   start: new Date(2023, 11, 12, 12, 0),
//   end: new Date(2023, 11, 12, 13, 0),
// },
// {
//   title: "EDX 501",
//   start: new Date(2023, 11, 12, 12, 0),
//   end: new Date(2023, 11, 12, 13, 0),
// },

// {
//   title: "MTH 511",
//   start: new Date(2023, 11, 12, 12, 0),
//   end: new Date(2023, 11, 12, 13, 0),
// },

// {
//   title: "MCB 504",
//   start: new Date(2023, 11, 14, 12, 0),
//   end: new Date(2023, 11, 14, 13, 0),
// },

// {
//   title: "EDX 501",
//   start: new Date(2023, 11, 14, 12, 0),
//   end: new Date(2023, 11, 14, 13, 0),
// },

// {
//   title: "MTH 511",
//   start: new Date(2023, 11, 14, 12, 0),
//   end: new Date(2023, 11, 14, 13, 0),
// },

// {
//   title: "MCB 504",
//   start: new Date(2023, 11, 27, 12, 0),
//   end: new Date(2023, 11, 27, 13, 0),
// },

// {
//   title: "EDX 501",
//   start: new Date(2023, 11, 27, 12, 0),
//   end: new Date(2023, 11, 27, 13, 0),
// },

// {
//   title: "MTH 511",
//   start: new Date(2023, 11, 27, 12, 0),
//   end: new Date(2023, 11, 27, 13, 0),
// },
