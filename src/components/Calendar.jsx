import "../styles/Calendar.css";
import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

const Calendar = () => {
  return (
    <div className="content-container">
      <h1 className="section-header">
        Calendar
      </h1>
      {/* <iframe
        title="Calendar"
        src="https://calendar.google.com/calendar/embed?src=c_9b554a6b5d7c4c2133a10a168bf5699d7141e16ce4ec2e363e0835523067936f%40group.calendar.google.com&ctz=America%2FNew_York"
        style={{ border: "solid 1px #777" }}
        width="85%"
        height="550"
        frameborder="0"
      /> */}
      <div id="calendar">
       <FullCalendar
      plugins={[dayGridPlugin, googleCalendarPlugin]}
      initialView="dayGridMonth"
      googleCalendarApiKey={process.env.REACT_APP_GOOGLE_CALENDAR_API_KEY} // Replace with your Google Calendar API Key
      events={{
        googleCalendarId: 'brownwicscalendar@gmail.com', // Replace with your Google Calendar ID
      }}
      eventClick={(info) => {
        info.jsEvent.preventDefault(); // Prevent the browser from navigating away

        if (info.event.url) {
          window.open(info.event.url); // Open the event in a new tab
        }
      }}

      
    />
    </div>
    </div>
  );
};

export default Calendar;