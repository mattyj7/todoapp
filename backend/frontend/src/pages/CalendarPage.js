import React from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";

const CalendarPage = () => {
  const today = new Date();
  const monthStart = startOfMonth(today);
  const monthEnd = endOfMonth(today);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  return (
    <div>
      <h2>{format(today, "MMMM yyyy")}</h2>
      <div className="calendar-container">
        {daysInMonth.map((day) => (
          <div key={day.getTime()}>{format(day, "d")}</div>
        ))}
      </div>
    </div>
  );
};

export default CalendarPage;
