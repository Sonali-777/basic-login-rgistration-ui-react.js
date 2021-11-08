import React, { Component } from "react";

export default class Welcome extends React.Component {
  state = {
    age: 34,
    name: "raj",
  };

  componentDidMount() {
    this.setState((state) => ({
      age: 50,
    }));
    // this.state.age = 50
    // console.log("This only runs when the component mounts");
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("This method runs whenever the component re-renders");
  // }

  decrementCount = () => {
    this.setState((state, props) => ({
      age: state.age - 1,
    }));
  };

  incrementCount = () => {
    this.setState((state, props) => ({
      age: state.age + 1,
    }));
  };

  render() {
    return (
      <div>
        <div>
          {/* Age ---- {this.state.age}<br></br> */}
          Age from props -- WELCOME COMP -- {this.props.age}
          <br></br>
          {/* name from parent --- {this.props.name}<br></br>
          address from parent --- {this.props.address}<br></br>
          Name ---- {this.state.name}<br></br> */}
        </div>
        {/* <button onClick={this.decrementCount}>-</button>
        <button onClick={this.incrementCount}>+</button> */}
        {/* <div>anything</div>
        <br></br>
        <button>Click</button>
        <br></br>
        <a href="">Link</a>
        <br></br>
        <input type="text"></input> */}
        {/* <h1>Hello, {this.props.name}</h1>
        <h2>Current Age: {this.state.age}</h2>
        <div>Change Age:</div>
        <button onClick={this.decrementCount}>-</button>
        <button onClick={this.incrementCount}>+</button> */}
        {/* <h1>Hello, {this.props.name}</h1>
        <h2>Current Age: {this.state.age} Years</h2>

        <div>Change Age:</div>
        <button onClick={this.decrementCount}>-</button>
        <button onClick={this.incrementCount}>+</button> */}
      </div>
    );
  }
}
