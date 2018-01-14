import React from "react";
import NewEntryForm from "../components/NewEntryForm";
import { services } from "../services";
import EntryInfo from "../components/EntryInfo";

class NewEntryContainer extends React.Component {
  state = {
    content: ""
  };
  compoentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      services.auth.getCurrentUser().then(user => {
        console.log("response fron current_user endpoint", user);
        const currentUser = { currentUser: user };
        this.setState({ auth: currentUser });
      });
    } else {
      this.props.history.push("/login");
    }
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s4">
            <EntryInfo />
          </div>
          <div className="col s8">
            <NewEntryForm />
          </div>
        </div>
      </div>
    );
  }
}

export default NewEntryContainer;
