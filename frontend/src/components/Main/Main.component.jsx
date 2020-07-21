import React from "react";

import CreateNote from "../CreateNote/CreateNote.component";
import NoteList from "../NoteList/NoteList.component";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }

  addNote = async (note) => {
    const res = await fetch("http://localhost:5000/api/note", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ title: note.title, content: note.content }),
    });

    const notes = await res.json();
    this.setState({ notes: notes });
  };

  deleteNote = async (id) => {
    const res = await fetch(`http://localhost:5000/api/note/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });

    const notes = await res.json();
    this.setState({ notes: notes });
  };

  async componentDidMount() {
    const res = await fetch("http://localhost:5000/api/notes", {
      method: "GET",
    });
    const notes = await res.json();
    this.setState({ notes: notes });
  }

  render() {
    return (
      <main>
        <CreateNote addNote={this.addNote} />
        <NoteList notes={this.state.notes} deleteNote={this.deleteNote} />
      </main>
    );
  }
}

export default Main;
