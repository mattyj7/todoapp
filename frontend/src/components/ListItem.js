import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ note }) => {
  const lastUpdated = (rawDate) => {
    const createdDate = new Date(rawDate);
    const currentDate = new Date();
    const createdDay = createdDate.getDate();
    const currentDay = currentDate.getDate();
    let lastUpdatedLength = null;

    const timeDifference = currentDate - createdDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference === 0 && createdDay === currentDay) {
      lastUpdatedLength = "Today";
    } else if (currentDay - createdDay === 1) {
      lastUpdatedLength = "Yesterday";
    } else if (daysDifference > 0 && daysDifference < 10) {
      lastUpdatedLength = daysDifference + " Days";
    } else if (daysDifference > 10 && daysDifference < 30) {
      lastUpdatedLength = daysDifference / 7 + " Weeks";
    } else {
      lastUpdatedLength = daysDifference / 30 + " Months";
    }

    return lastUpdatedLength;
  };
  return (
    <Link to={`/note/${note.id}`}>
      <div className="notes-list-item">
        <h3>
          {note.title} - {note.body}
        </h3>
        <div className="last-updated">
          <h2>{note ? lastUpdated(note.updated) : ""}</h2>
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
