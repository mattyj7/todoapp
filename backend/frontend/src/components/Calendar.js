import React from "react";
import {
  format,
  addHours,
  startOfDay,
  endOfDay,
  eachHourOfInterval,
} from "date-fns";

const Calendar = () => {
  const today = new Date();
  const dayStart = addHours(startOfDay(today), 6);
  const dayEnd = addHours(endOfDay(today), -2);
  const hoursInDay = eachHourOfInterval({ start: dayStart, end: dayEnd });

  console.log(dayStart);
  return (
    <div className="calendar">
      <h2>{format(today, "MMMM yyyy")}</h2>
      <div className="calendar-container">
        {hoursInDay.map((hour, index) => (
          <div key={index} className="hourly-container">
            <h1 className="hourly-number">{format(hour, "h:mm a")}</h1>
            <div className="landing-box"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
