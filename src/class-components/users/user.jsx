import React, { Component } from "react";
import { DataTable } from "primereact/datatable";
import "./user.css";
import { Column } from "primereact/column";

export default class Users extends React.Component {
  state = {
    products: [],
  };

  constructor() {
    super();
    // console.log("This is from contructor.");
  }

  componentDidMount() {
    const users = [
      {
        id: 1000,
        firstName: "James",
        lastName: "Butt",
        username: "JAMBUTT",
        lastLoggedIn: "5th July 2021 20:00pm IST",
      },
      {
        id: 1000,
        firstName: "Rose",
        lastName: "Marry",
        username: "ROSEMAR",
        lastLoggedIn: "10th July 2021 20:00pm IST",
      },
      {
        id: 1000,
        firstName: "James",
        lastName: "Butt",
        username: "JAMBUTT",
        lastLoggedIn: "5th July 2021 20:00pm IST",
      },
      {
        id: 1000,
        firstName: "James",
        lastName: "Butt",
        username: "JAMBUTT",
        lastLoggedIn: "5th July 2021 20:00pm IST",
      },
      {
        id: 1000,
        firstName: "James",
        lastName: "Butt",
        username: "JAMBUTT",
        lastLoggedIn: "5th July 2021 20:00pm IST",
      },
    ];
    this.setState({
      products: users,
    });
  }

  filterList = () => {
    const users = this.state.products;
    const filteredList = [];
    users.forEach((user) => {
      if (user.firstName !== "James") {
        filteredList.push(user);
      }
    });
    this.setState({
      products: filteredList,
    });
  };

  render() {
    return (
      <div className="user-box">
        <button onClick={() => this.filterList()}>Filter Records</button>
        <DataTable value={this.state.products} stripedRows showGridlines>
          <Column field="firstName" header="First Name"></Column>
          <Column field="lastName" header="Last Name"></Column>
          <Column field="username" header="User Name"></Column>
          <Column field="lastLoggedIn" header="Last Logged In"></Column>
        </DataTable>
      </div>
    );
  }
}
