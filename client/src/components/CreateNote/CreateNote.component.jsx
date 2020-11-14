import React, { useState } from "react";

const CreateNote = ({ addNote }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isExpand, setIsExpand] = useState(false);

  const clickHandler = () => {
    setIsExpand(true);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  };

  const submitHandler = (e) => {
    addNote(note);
    setNote({ title: "", content: "" });
    e.preventDefault();
  };

  return (
    <form className="form-container" onSubmit={submitHandler}>
      <input
        type="text"
        name="title"
        value={note.title}
        placeholder="Title"
        onChange={changeHandler}
        onFocus={clickHandler}
      />
      {isExpand && (
        <textarea
          name="content"
          value={note.content}
          cols="30"
          rows="3"
          placeholder="Content"
          onChange={changeHandler}
        ></textarea>
      )}
      <button type="submit" disabled={!note.title && !note.content}>
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
};

export default CreateNote;
