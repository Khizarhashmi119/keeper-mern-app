import React, { useState, useEffect } from "react";

import CreateNote from "../CreateNote/CreateNote.component";
import NoteList from "../NoteList/NoteList.component";

const Main = () => {
  const [notes, setNotes] = useState([]);

  const addNote = async (note) => {
    const res = await fetch("/api/note", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(note),
    });

    const newNote = await res.json();

    setNotes((prevState) => {
      return [...prevState, newNote];
    });
  };

  const deleteNote = async (id) => {
    await fetch(`/api/note/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });

    setNotes((prevState) => {
      return prevState.filter((note) => note._id !== id);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/notes", {
        method: "GET",
      });

      const notes = await res.json();
      setNotes(notes);
    };

    fetchData();
  }, []);

  return (
    <main>
      <CreateNote addNote={addNote} />
      {notes.length !== 0 ? (
        <NoteList notes={notes} deleteNote={deleteNote} />
      ) : (
        <h2>You don't have any note yet.</h2>
      )}
    </main>
  );
};

export default Main;
