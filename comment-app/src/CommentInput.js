import React, { Component } from "react";

class CommentInput extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      content: ""
    };
  }
  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleContentChange(event) {
    this.setState({
      content: event.target.value
    });
  }

  handleSubmit() {
    // console.log("invoke handleSubmit");
    if (this.props.onSubmit) {
      const { username, content } = this.state;
      this.props.onSubmit({ username, content });
    }
    this.setState({ content: "", username: "" });
  }
  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">User Name: </span>
          <div className="comment-field-input">
            <input
              value={this.state.username}
              onChange={this.handleUsernameChange.bind(this)}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">Comment Content:</span>
          <div className="comment-field-input">
            <textarea
              value={this.state.content}
              onChange={this.handleContentChange.bind(this)}
            />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit.bind(this)}>
            Publish
          </button>
        </div>

      </div>
    );
  }
}

export default CommentInput;
