import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-back.svg";

const NotePage = () => {
  let [note, setNote] = useState(null);
  let { noteId } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    let getNote = async () => {
      if (noteId === "new") return;
      let response = await fetch(`/api/note/${noteId}/`);
      let data = await response.json();
      setNote(data);
    };
    getNote();
  }, [noteId]);

  let updateNote = async () => {
    fetch(`/api/note/${noteId}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  const deleteNote = async () => {
    fetch(`/api/note/${noteId}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json,",
      },
    });
    navigate("/notes");
  };

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

  const handleSubmit = () => {
    if (noteId !== "new") {
      updateNote();
    }
    navigate("/notes");
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>
        <button className="delete-btn" onClick={deleteNote}>
          Delete
        </button>
      </div>
      <div className="note-title">
        <h1>{note?.title}</h1>
      </div>
      <div className="note-body">
        <textarea
          onChange={(e) => {
            setNote({ ...note, body: e.target.value });
          }}
          defaultValue={note?.body}
        ></textarea>
      </div>
      <div className="note-created">
        <p>Date Created: {note ? formatDate(note.created) : ""}</p>
      </div>
    </div>
  );
};

export default NotePage;
