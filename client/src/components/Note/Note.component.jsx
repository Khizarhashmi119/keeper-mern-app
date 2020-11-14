import React from "react";

const Note = ({ id, title, content, deleteNote }) => {
  const clickHandler = () => {
    deleteNote(id);
  };

  return (
    <div className="note-container">
      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={clickHandler}><i className="fas fa-trash"></i></button>
    </div>
  );
};

export default Note;
