import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const NotePage = () => {
  let [note, setNote] = useState(null);
  let { noteId } = useParams();

  useEffect(() => {
    console.log("noteId:", noteId);
    let getNote = async () => {
      let response = await fetch(`/api/note/${noteId}/`);
      let data = await response.json();
      setNote(data);
    };
    getNote();
  }, [noteId]);

  const formatDate = (rawDate) => {
    const date = new Date(rawDate);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };

    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return (
    <div className="note">
      <div class="note-title">
        <h1>{note?.title}</h1>
      </div>
      <div className="note-body">
        <p>{note?.body}</p>
      </div>
      <div className="note-created">
        <p>Date Created: {note ? formatDate(note.created) : ""}</p>
      </div>
    </div>
  );
};

export default NotePage;
