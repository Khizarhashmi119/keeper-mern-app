import React, { useState, useEffect } from "react";

import CreateNote from "../CreateNote/CreateNote.component";
import NoteList from "../NoteList/NoteList.component";

const Main = () => {
  const [notes, setNotes] = useState([]);

  const addNote = async (note) => {
    const res = await fetch("http://localhost:5000/api/note", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ title: note.title, content: note.content }),
    });

    const notes = await res.json();
    setNotes(notes);
  };

  const deleteNote = async (id) => {
    const res = await fetch(`http://localhost:5000/api/note/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });

    const notes = await res.json();
    setNotes(notes);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/api/notes", {
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
      {notes ? (
        <NoteList notes={notes} deleteNote={deleteNote} />
      ) : (
        "Sorry! you do not have any notes."
      )}
    </main>
  );
};

export default Main;
