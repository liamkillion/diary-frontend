import React from "react";
import NewEntryForm from "../components/NewEntryForm";
import { services } from "../services";

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

  handleSubmit = event => {
    event.preventDefault();
    services.entries.createNewEntry(this.state);
  };
  render() {
    return (
      <div>
        <div class="row">
          <div class="col s4">
            <p>Location:</p>
            <p>40.705261,-74.0150895</p>
            <p>Weather:</p>
            <p>-459.67°F</p>
          </div>
          <div class="col s4">
            <form>
              <div class="row">
                <div class="input-field">
                  <textarea
                    id="textarea1"
                    class="materialize-textarea"
                    name="content"
                    onChange={this.handleChange}
                  />
                  <label for="textarea1">
                    Welcome to your daily diary! Complete your entry today and
                    click Submit to save it. On the left you can see information
                    that will be included in your post :).
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewEntryContainer;
