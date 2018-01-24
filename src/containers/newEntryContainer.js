import React from "react";
import NewEntryForm from "../components/NewEntryForm";

class NewEntryContainer extends React.Component {
  render() {
    return (
      <div>
        <NewEntryForm
          currentUser={this.props.currentUser}
          history={this.props.history}
          handleCreateEntry={this.props.handleCreateEntry}
        />
      </div>
    );
  }
}

export default NewEntryContainer;
