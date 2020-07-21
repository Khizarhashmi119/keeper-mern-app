import React from "react";

import Note from "../Note/Note.component";

class NoteList extends React.Component {
  render() {
    return (
      <div>
        {this.props.notes.map((note) => (
          <Note
            key={note._id}
            id={note._id}
            title={note.title}
            content={note.content}
            deleteNote={this.props.deleteNote}
          />
        ))}
      </div>
    );
  }
}

export default NoteList;
