import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

class LikeButton extends Component {
  static defaultProps = {
    likedText: "取消",
    unlikedText: "按贊"
  };
  constructor() {
    super();
    this.state = { isLiked: false };
  }
  handleClickedOnLikeButton() {
    this.setState({
      isLiked: !this.state.isLiked
    });

    if (this.props.onClick) {
      this.props.onClick();
    }
    /*
    this.setState(prevState => {
      console.log(prevState);
      return { count: 0 };
    });
    this.setState(prevState => {
      console.log(prevState);
      return { count: prevState.count + 1 };
    });
    */
  }
  render() {
    //can change to defaultPros
    /*
    const likedText = this.props.likedText || "取消";
    const unlikedText = this.props.unlikedText || "按贊";
    const wordings = this.props.wordings || {
      likedText: "取消",
      unlikedText: "按贊"
    };
   */
    return (
      //bind event handling function to standard event onClick
      (
        <button onClick={this.handleClickedOnLikeButton.bind(this)}>
          {this.state.isLiked ? this.props.likedText : this.props.unlikedText}👍
          {/*
        {this.state.isLiked ? wordings.likedText : wordings.unlikedText}👍
        */}
        </button>
      )
    );
  }
}

const users = [
  { username: "Jerry", age: 21, gender: "male" },
  { username: "Tomy", age: 22, gender: "male" },
  { username: "Lily", age: 19, gender: "female" },
  { username: "Lucy", age: 20, gender: "female" }
];

class UserList extends Component {
  render() {
    const usersElms = [];
    for (let user of users) {
      usersElms.push(
        <div>
          <div> Name:{user.username} </div>
          <div> Age:{user.age} </div>
          <div> Gender:{user.gender} </div>
          <hr />
        </div>
      );
    }

    return <div>{usersElms}</div>;
  }
}

class UserListMap extends Component {
  render() {
    return (
      <div>
        {users.map(user => {
          return (
            <div>
              <div> Name:{user.username} </div>
              <div> Age:{user.age} </div>
              <div> Gender:{user.gender} </div>
              <hr />

            </div>
          );
        })}
      </div>
    );
  }
}

class UserListEnhanced extends Component {
  render() {
    return (
      <div>
        {/*map will rout each user and perform the convert function*/}
        {users.map((user, i) => <User key={i} user={user} />)}
      </div>
    );
  }
}

class User extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <div> Name:{user.username} </div>
        <div> Age:{user.age} </div>
        <div> Gender:{user.gender} </div>
        <hr />
      </div>
    );
  }
}

class Index extends Component {
  constructor() {
    super();
    this.state = {
      likedText: "已贊",
      unlikedText: "贊"
    };
  }

  handleClickOnChange() {
    this.setState({
      likedText: "愛",
      unlikedText: "不愛"
    });
  }

  render() {
    return (
      <div>

        {/*
        <LikeButton likedText="已贊" unlikedText="贊" />
        */}
        {/*<LikeButton
          wordings={{ likedText: "已贊", unlikedText: "贊" }}
          onClick={() => console.log("Click on like button")}
        />*/}
        <LikeButton
          likedText={this.state.likedText}
          unlikedText={this.state.unlikedText}
        />
        <div>
          <button onClick={this.handleClickOnChange.bind(this)}>
            Change with custom event
          </button>
        </div>
        <div><HelloWorld /></div>

        {/*<UserListMap />*/}
        <UserListEnhanced />

      </div>
    );
  }
}

const HelloWorld = props => {
  const sayHi = event => alert("Hello Lobo");
  return <div onClick={sayHi}>Hello World </div>;
};

ReactDOM.render(<Index />, document.getElementById("root"));
registerServiceWorker();
