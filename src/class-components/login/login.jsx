import React, { Component } from "react";
import Welcome from "../welcome";
import Age from "../age";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import "./login.css";

export default class Login extends React.Component {
  state = {
    age: 34,
    title: " From child",
    username: "",
    isLoggedIn: false,
    displayBasic: false,
    displayBasic2: false,
    displayModal: false,
    displayMaximizable: false,
    displayPosition: false,
    displayResponsive: false,
    position: "center",
  };

  constructor() {
    super();
    // console.log("This is from contructor.");
  }

  componentDidMount() {
    this.setState((state, props) => ({
      title: " From child - updated again when the component is mounted",
    }));
    // alert("Hey!! I am mounted.");
    console.log("This is from componentDidMount.");
  }

  // componentWillUpdate() {
  //   // alert("Hey!! I am updated!!.");
  //   console.log("This is from componentWillUpdate.");
  // }

  // componentDidUpdate() {
  //   console.log("This is from componentDidUpdate.");
  // }

  // shouldComponentUpdate() {
  //   console.log("This is from shouldComponentUpdate.");
  //   return true;
  // }

  componentWillUnmount() {
    console.log("This is from componentWillUnmount.");
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("This method runs whenever the component re-renders");
  // }

  // decrementCount = () => {
  //   this.setState((state, props) => ({
  //     age: state.age - 1,
  //   }));
  // };

  // incrementCount = () => {
  //   this.setState((state, props) => ({
  //     age: state.age + 1,
  //   }));
  // };

  // decrementCount = () => {
  //   this.setState((state, props) => ({
  //     age: state.age - 1,
  //   }));
  // };

  // incrementCount = () => {
  //   this.setState((state, props) => ({
  //     age: state.age + 1,
  //   }));
  // };

  login = () => {
    if (this.state.username === "jhon") {
      this.setState((state, props) => ({
        isLoggedIn: true,
      }));
      // alert("Logged in succesfully: " + this.state.username);
    } else {
      this.setState((state, props) => ({
        isLoggedIn: false,
      }));
      // alert("username is wrong");
    }
    this.setState((state, props) => ({
      displayPosition: true,
    }));
    this.setState((state, props) => ({
      title: "changed child title",
    }));
  };

  handleUserNameChange = (evt) => {
    console.log(evt);
    this.setState((state, props) => ({
      username: evt.target.value,
    }));
  };

  onHide = (name) => {
    this.setState({
      displayPosition: false,
    });
  };

  render() {
    console.log("This is from render");
    return (
      <div className="login-form">
        <h2 className="login-header">Login</h2>
        {this.state.isLoggedIn ? (
          <img className="login-img" src="https://m.media-amazon.com/images/M/MV5BMGQ5ZWJlOGYtZjhkNi00OTg3LWIyYTUtYTU1MDA4ZTY3NDI5XkEyXkFqcGdeQXVyNzA1MzM0NjM@._V1_.jpg"></img>
        ) : (
          <img className="login-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTacibPOPOrTFp7GftM7OFF7Yr8ZYLu6hmWYg&usqp=CAU"></img>
        )}
        <div className="login-body">
          <div>
            <div>User Name</div>{" "}
            <div>
              <input className="login-input" type="text" value={this.state.username} onChange={this.handleUserNameChange}></input>
            </div>
          </div>
          <div>
            <div>Password</div>{" "}
            <div>
              <input className="login-input" type="password"></input>
            </div>
          </div>
          <div>
            <button className="login-button" onClick={this.login}>
              Login
            </button>
          </div>
        </div>

        <Dialog header="Header" visible={this.state.displayPosition} position={this.state.position} modal style={{ width: "50vw" }} onHide={() => this.onHide("displayPosition")} draggable={false} resizable={false}>
          <p className="p-m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Dialog>
      </div>
    );
  }
}
