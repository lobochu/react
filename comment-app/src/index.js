import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import CommentApp from "./CommentApp";

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<CommentApp />, document.getElementById("root"));
registerServiceWorker();
