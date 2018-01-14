import React from "react";
import { services } from "../services";

class newEntryForm extends React.Component {
  state = {
    content: ""
  };
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
        <h1>newEntryForm</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field">
              <label>
                Welcome to your daily diary! Complete your entry today and click
                Submit to save it. On the left you can see information that will
                be included in your post :).
              </label>
              <textarea
                id="textarea1"
                className="materialize-textarea"
                name="content"
                onChange={this.handleChange}
              />
              <input type="submit" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default newEntryForm;
