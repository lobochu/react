import React, { Component } from "react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import "./index.css";

class CommentApp extends Component {
  constructor() {
    super();
    this.state = {
      comments: []
    };
  }
  handleSubmitComment(comment) {
    if (!comment) return;
    if (!comment.username) return alert("Please enter user name");
    if (!comment.content) return alert("Please enter content");
    this.state.comments.push(comment);
    this.setState({ comments: this.state.comments });
    console.log(comment);
  }
  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments={this.state.comments} />
        <Index />
      </div>
    );
  }
}

class Index extends Component {
  constructor() {
    super();
    this.state = { isShowClock: true };
  }
  handleShowOrHide() {
    this.setState({
      isShowClock: !this.state.isShowClock
    });
  }
  render() {
    return (
      <div>
        {this.state.isShowClock ? <Clock /> : null}
        <button onClick={this.handleShowOrHide.bind(this)}>
          Show or hide clock
        </button>

      </div>
    );
  }
}

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    };
  }
  componentWillMount() {
    this.timer = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div>
        <h1>
          <p>现在的时间是</p>
          {this.state.date.toLocaleTimeString()}
        </h1>
      </div>
    );
  }
}

export default CommentApp;
