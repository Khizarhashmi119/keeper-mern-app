import React from "react";

class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
    };
  }

  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  };

  submitHandler = (e) => {
    this.props.addNote(this.state);
    this.setState({ title: "", content: "" });
    e.preventDefault();
  };

  render() {
    return (
      <form className="form-container" onSubmit={this.submitHandler}>
        <input
          type="text"
          name="title"
          value={this.state.title}
          placeholder="Title"
          onChange={this.changeHandler}
        />
        <textarea
          name="content"
          value={this.state.content}
          cols="30"
          rows="3"
          placeholder="Content"
          onChange={this.changeHandler}
        ></textarea>
        <button type="submit">+</button>
      </form>
    );
  }
}

export default CreateNote;
