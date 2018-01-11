import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
