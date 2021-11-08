import React, { Component } from "react";
import Welcome from "../welcome";
import Age from "../age";

import "./register.css";

export default class Register extends React.Component {
  state = {};

  constructor() {
    super();
  }

  render() {
    console.log("This is from render");
    return (
      <div className="register-form">
        <h2 className="register-header">Register</h2>
        <div className="register-body">
          <div>
            <div>User Name</div>{" "}
            <div>
              <input className="register-input" type="text" value={this.state.username} onChange={this.handleUserNameChange}></input>
            </div>
          </div>
          <div>
            <div>Password</div>{" "}
            <div>
              <input className="register-input" type="password"></input>
            </div>
          </div>
          <div>
            <div>Confirm Password</div>{" "}
            <div>
              <input className="register-input" type="password"></input>
            </div>
          </div>
          <div>
            <div>Email</div>{" "}
            <div>
              <input className="register-input" type="email"></input>
            </div>
          </div>
          <div>
            <button className="register-button" onClick={this.login}>
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}
