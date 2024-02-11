import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-back.svg";

const CreateNotePage = () => {
  let [note, setNote] = useState(null);
  let { noteId } = useParams();
  let navigate = useNavigate();

  useEffect(() => {}, [noteId]);

  let createNote = async () => {
    fetch(`/api/note/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      title: JSON.stringify(note),
      body: JSON.stringify(note),
    });
  };

  const handleSubmit = () => {
    if (note !== null) {
      createNote();
    }
    navigate("/notes");
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>
        <button onClick={handleSubmit}>Done</button>
      </div>
      <div className="note-title">
        <textarea
          className="create-textarea"
          onChange={(e) => {
            setNote({ ...note, title: e.target.value });
          }}
        ></textarea>
      </div>
      <div className="note-body">
        <textarea
          className="create-textarea"
          onChange={(e) => {
            setNote({ ...note, body: e.target.value });
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default CreateNotePage;
