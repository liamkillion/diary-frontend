import React from "react";
import newEntryForm from "../components/newEntryForm";
import { services } from "../services";

class newEntryContainer extends React.Component {
  compoentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      return {};
    } else {
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <div>
        <h1>newEntryContainer</h1>
        <newEntryForm />
      </div>
    );
  }
}

export default newEntryContainer;
