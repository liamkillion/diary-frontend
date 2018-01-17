import React from "react";
import NewEntryForm from "../components/NewEntryForm";
import EntryInfo from "../components/EntryInfo";

class NewEntryContainer extends React.Component {
  render() {
    console.log("NewEntryContainer props", this.props);
    return (
      <div>
        <div className="row">
          <div className="col s4">
            <EntryInfo />
          </div>
          <div className="col s8">
            <NewEntryForm
              currentUser={this.props.currentUser}
              history={this.props.history}
              refreshEntries={this.props.refreshEntries}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NewEntryContainer;
