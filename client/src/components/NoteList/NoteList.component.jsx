import React from "react";

import Note from "../Note/Note.component";

const NoteList = ({ notes, deleteNote }) => {
  return (
    <div>
      {notes.map(({ _id, title, content }) => (
        <Note
          key={_id}
          id={_id}
          title={title}
          content={content}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
};

export default NoteList;
