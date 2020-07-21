import React from "react";

class Note extends React.Component {
  clickHandler = () => {
    this.props.deleteNote(this.props.id);
  };

  render() {
    return (
      <div className="note-container">
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <button onClick={this.clickHandler}>Delete</button>
      </div>
    );
  }
}

export default Note;
